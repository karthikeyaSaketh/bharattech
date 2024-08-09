import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RazorpayPayment = () => {
  const [participants, setParticipants] = useState(['', '', '', '']);
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const participantCost = 1; // Cost per participant (e.g., ₹50)
  const navigate = useNavigate(); // For navigation

  // Handle participant name changes
  const handleChange = (index, value) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);

    // Calculate the amount to be paid based on the number of participants filled
    const filledParticipants = newParticipants.filter((p) => p.trim() !== '').length;
    setAmount(filledParticipants * participantCost);
  };

  // Fetch order ID from backend
  const fetchOrderId = async () => {
    setLoading(true); // Set loading to true while fetching order ID
    console.log('Fetching order ID...');
    try {
      const response = await axios.post('https://bharattechleague-production.up.railway.app/create-order', { amount: amount * 100 }); // Convert amount to paisa
      console.log('Order ID fetched:', response.data.orderId);
      setOrderId(response.data.orderId);
      return response.data.orderId; // Return the fetched order ID
    } catch (error) {
      console.error('Failed to fetch order ID:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error fetching order ID: ' + (error.response?.data?.message || error.message),
      });
      return null; // Return null on error
    } finally {
      setLoading(false); // Set loading to false after fetching order ID
    }
  };

  // Handle the payment process
  const handlePayment = async () => {
    if (amount <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please enter at least one participant name to proceed.',
      });
      return;
    }
    
    let currentOrderId = orderId;

    if (!currentOrderId) {
      console.log('Order ID not available. Fetching order ID...');
      currentOrderId = await fetchOrderId();
      console.log('Post-fetch Order ID:', currentOrderId);
      if (!currentOrderId) {
        console.log('Order ID is still not available. Aborting payment.');
        return; // Abort if fetching order ID failed
      }
    }

    console.log('Proceeding with payment...');
    const options = {
      key: 'rzp_live_xlq077eb3ZZPQU', // Replace with your Razorpay API key
      amount: amount * 100, // Convert to the smallest currency unit (paisa)
      currency: 'INR',
      name: 'Bharat Tech League',
      description: 'Registration Fee',
      order_id: currentOrderId, // Use the order ID fetched from your server
      handler: async function (response) {
        console.log('Payment successful:', response);
        const paymentData = {
          razarpay_order_id: response.razorpay_order_id,
          razarpay_payment_id: response.razorpay_payment_id,
          razarpay_signature: response.razorpay_signature,
        };

        // Verify payment using the backend API
        try {
          console.log('Verifying payment with data:', paymentData);
          const verificationResponse = await axios.post('https://bharattechleague-production.up.railway.app/verify-payment', paymentData);
          console.log('Verification response:', verificationResponse.data);
          if (verificationResponse.data.signatureIsValid) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Payment successful!',
            }).then(() => {
              navigate('/'); // Redirect to home page
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Payment verification failed.',
            });
          }
        } catch (error) {
          console.error('Payment verification failed:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Payment verification failed: ' + (error.response?.data?.message || error.message),
          });
        }
      },
      prefill: {
        name: participants[0] || 'Participant Name', // Prefill with first participant's name or placeholder
      },
      notes: {
        address: 'Some address here',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response) {
      console.log('Payment Failed:', response.error); // Log the failure reason
      Swal.fire({
        icon: 'error',
        title: 'Payment Failed',
        text: 'Payment failed. Please try again.',
      });
    });

    rzp.open();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-200 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Register Participants</h2>
      <div className="space-y-4">
        {participants.map((participant, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Participant ${index + 1} Name`}
            value={participant}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        ))}
      </div>
      <div className="mt-4 text-xl">
        Total Amount: <span className="font-bold">₹{amount}</span>
      </div>
      <button
        onClick={handlePayment}
        disabled={amount <= 0 || loading} // Disable button if amount is 0 or while loading
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        {loading ? 'Processing...' : 'Proceed to Pay'} {/* Show loading text */}
      </button>
    </div>
  );
};

export default RazorpayPayment;
