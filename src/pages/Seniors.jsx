import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Junior from '../data/senior.jpg';

const RazorpayPayment2 = () => {
  const [participants, setParticipants] = useState(['', '', '', '']);
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [institutionName, setInstitutionName] = useState(''); // New state for institution name
  const participantCost = 472; // Cost per participant (e.g., ₹50)
  const navigate = useNavigate();

  // Handle participant name changes
  const handleChange = (index, value) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);

    // Calculate the amount to be paid based on the number of participants filled
    const filledParticipants = newParticipants.filter((p) => p.trim() !== '').length;
    setAmount(filledParticipants * participantCost);
  };

  // Handle institution name change
  const handleInstitutionChange = (e) => {
    setInstitutionName(e.target.value);
  };

  // Fetch order ID from backend
  const fetchOrderId = async () => {
    setLoading(true);
    console.log('Fetching order ID...');
    try {
      const response = await axios.post(
        'https://bharathtechleague-hqdeauhdarb9fmct.eastus-01.azurewebsites.net/create-order',
        { amount: amount * 100 } // Convert amount to paisa
      );
      console.log('Order ID fetched:', response.data.orderId);
      setOrderId(response.data.orderId);
      return response.data.orderId;
    } catch (error) {
      handleSwalError('Error fetching order ID', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // SweetAlert error handling
  const handleSwalError = (title, error) => {
    console.error(`${title}:`, error);
    Swal.fire({
      icon: 'error',
      title,
      text: error.response?.data?.message || error.message,
    });
  };

  // Handle the payment process
  const handlePayment = async () => {
    if (amount <= 0 || !institutionName.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please enter at least one participant name and the institution name to proceed.',
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
        return;
      }
    }

    console.log('Proceeding with payment...');
    const options = {
      key: 'rzp_live_xlq077eb3ZZPQU', // Replace with your Razorpay API key
      amount: amount * 100, // Convert to the smallest currency unit (paisa)
      currency: 'INR',
      name: 'Bharat Tech League',
      description: 'Registration Fee',
      order_id: currentOrderId,
      handler: async function (response) {
        console.log('Payment successful:', response);

        Swal.fire({
          title: 'Verifying Payment',
          text: 'Please wait while we verify your payment details.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        const paymentData = {
          razarpay_order_id: response.razorpay_order_id,
          razarpay_payment_id: response.razorpay_payment_id,
          razarpay_signature: response.razorpay_signature,
        };

        try {
          const verificationResponse = await axios.post(
            'https://bharathtechleague-hqdeauhdarb9fmct.eastus-01.azurewebsites.net/verify-payment',
            paymentData
          );

          if (verificationResponse.data.signatureIsValid) {
            Swal.fire({
              icon: 'success',
              title: 'Payment Verified',
              text: 'Your payment has been verified successfully!',
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });

            const payload = {
              values: [
                participants[0],
                participants[1],
                participants[2],
                participants[3],
                'SENIOR',
                institutionName, // Include institution name as 3rd column
                response.razorpay_payment_id,
                response.razorpay_order_id,
                response.razorpay_signature,
              ],
            };

            try {
              const postResponse = await axios.post(
                'https://bharathtechleague-hqdeauhdarb9fmct.eastus-01.azurewebsites.net/payment-details',
                payload
              );
              console.log('Payment details posted:', postResponse.data);

              Swal.fire({
                icon: 'success',
                title: 'Payment Successful',
                text: 'Your payment details have been successfully submitted!',
              }).then(() => {
                navigate('/');
              });
            } catch (postError) {
              handleSwalError('Failed to submit payment details', postError);
            }
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Verification Error',
              text: 'Payment verification failed.',
            });
          }
        } catch (error) {
          handleSwalError('Payment verification failed', error);
        }
      },
      prefill: {
        name: participants[0] || 'Participant Name',
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
      console.log('Payment Failed:', response.error);
      Swal.fire({
        icon: 'error',
        title: 'Payment Failed',
        text: 'Payment failed. Please try again.',
      });
    });

    rzp.open();
  };

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center bg-white mt-4">
        <div className="flex flex-col items-center justify-center lg:w-[40%] h-full text-center order-1 lg:order-none lg:mt-16">
          <h1 className="block lg:hidden text-5xl font-bold mt-10">SENIOR LEVEL</h1>
          <div className="m-6 lg:m-10 flex justify-center items-center w-[285px] h-[285px] xl:w-[385px] xl:h-[385px] rounded-xl" style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <img src={Junior} alt="junior" className="w-[90%] h-[90%]" />
          </div>
        </div>

        <div className="flex flex-col lg:w-[60%] items-center justify-center lg:p-8 gap-12 mb-16 lg:mb-0">
          <h1 className="hidden lg:block text-5xl font-bold lg:mt-10">SENIOR LEVEL</h1>
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap justify-between lg:mb-6">
              <input
                id="name1"
                type="text"
                placeholder="Enter name of 1st participant"
                className="appearance-none border-2 border-[#0077B5] rounded-xl w-full lg:w-[48%] py-3 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:border-orange-900 font-normal mb-4"
                name={`participant1.name`}
                value={participants[0]}
                onChange={(e) => handleChange(0, e.target.value)}
                required
              />
              <input
                id="name2"
                type="text"
                placeholder="Enter name of 2nd participant"
                className="appearance-none border-2 border-[#0077B5] rounded-xl w-full lg:w-[48%] py-3 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:border-orange-900 font-normal mb-4"
                name={`participant2.name`}
                value={participants[1]}
                onChange={(e) => handleChange(1, e.target.value)}
                required
              />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between lg:mb-6">
              <input
                id="name3"
                type="text"
                placeholder="Enter name of 3rd participant"
                className="appearance-none border-2 border-[#0077B5] rounded-xl w-full lg:w-[48%] py-3 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:border-orange-900 font-normal mb-4"
                name={`participant3.name`}
                value={participants[2]}
                onChange={(e) => handleChange(2, e.target.value)}
              />
              <input
                id="name4"
                type="text"
                placeholder="Enter name of 4th participant"
                className="appearance-none border-2 border-[#0077B5] rounded-xl w-full lg:w-[48%] py-3 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:border-orange-900 font-normal mb-4"
                name={`participant4.name`}
                value={participants[3]}
                onChange={(e) => handleChange(3, e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4 lg:mb-6">
              <input
                id="institution"
                type="text"
                placeholder="Enter name of Institution/College"
                className="appearance-none border-2 border-[#0077B5] rounded-xl w-full py-3 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:border-orange-900 font-normal mb-4"
                name="institutionName"
                value={institutionName}
                onChange={handleInstitutionChange}
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl lg:text-3xl text-blue-900">Amount: ₹{amount}</div>
              <button
                type="button"
                className="text-white text-2xl lg:text-3xl py-2 px-10 rounded-xl bg-blue-600"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'PAY'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify pl-10 sm:pl-24'>
        <ul className="list-none space-y-4 pl-4 sm:pl-16">
          <li className="flex">
            <span className='lg:ml-6'>
              <span className='font-bold text-[20px]'>NOTE : </span>The amount paid is non-refundable under any circumstances. By proceeding with the payment, you agree to this policy.
            </span>
          </li>
        </ul>
      </div>
      <div className='mt-8 sm:mt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default RazorpayPayment2;

