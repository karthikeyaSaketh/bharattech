import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import img1 from '../data/contactUs/1.png'
import img2 from '../data/contactUs/2.png'
import img3 from '../data/contactUs/3.png'
import img4 from '../data/contactUs/4.png'
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple submissions

    if (validateEmail(email)) {
      const requestData = {
        values: [name, email, message]
      };

      setLoading(true);

      swal({
        title: 'Sending...',
        text: 'Please wait while we send your message.',
        icon: 'info',
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
      });

      try {
        const res = await axios.post('https://bharattechleague-production-8429.up.railway.app/create/contacts', requestData);
        swal({
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          icon: "success",
          button: "OK"
        }).then(() => {
          navigate('/bharattech');
        });
      } catch (error) {
        console.log(error);
        swal({
          title: "Failed to Send",
          text: "There was an error sending your message. Please try again.",
          icon: "error",
          button: "OK"
        });
      } finally {
        setLoading(false);
      }
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (validateEmail(emailValue)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  return (
    <div className='m-4 sm:m-24 lg:mt-8 lg:mb-4 flex justify-center content-center'>
      <div className='flex flex-col align-center items-center lg:flex-row w-full xl:w-[80%]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>


        <div className='flex flex-col w-[80%] lg:w-[50%] justify-center items-center pt-12 lg:pt-0 px-0 sm:px-10 xl:px-20 gap-12'>
          <h1 className='text-[32px] sm:text-[40px] text-[#1B8534] font-bold'>
            Connect With Us
          </h1>
          <p>
            Feel free to reach out to us any time. Fill up
            the form to contact us or connect with us
            on our social media.
          </p>
          <div className='flex flex-wrap gap-8 sm:gap-16'>
            <a href='https://www.facebook.com/teckybot?mibextid=ZbWKwL' target='_blank'><img src={img1} alt='img1' className='w-[30xp] h-[30px]' /></a>
            <a href='https://instagram.com/teckybot/' target='_blank'><img src={img2} alt='img2' className='w-[30xp] h-[30px]' /></a>
            <a href='https://www.linkedin.com/company/teckybot/' target='_blank'><img src={img3} alt='img3' className='w-[30xp] h-[30px]' /></a>
            <a href='https://www.youtube.com/@teckybot23' target='_blank'><img src={img4} alt='img4' className='w-[30xp] h-[30px]' /></a>
          </div>

          <div className='w-[340px] h-[1px] bg-[#B1B1B1]'>
          </div>

        </div>


        <div className='flex flex-col justify-evenly items-center w-[90%] lg:w-[50%] h-[550px] lg:h-[580px] text-[#1B8534] font-medium'>
          <div className='sm:mt-12 flex flex-col items-start pl-5 sm:pl-0 lg:text-sm'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name :</label><br />
              <input
                id="name"
                type="text"
                placeholder='Enter your name'
                className="appearance-none border-2 border-gray-300 rounded-xl w-[90%] sm:w-[350px] py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="32"
                required
              />
              <br />
              <label htmlFor='email'>Email :</label>
              <input
                id="email"
                type="email"
                placeholder='Enter a valid email address'
                className="appearance-none border-2 border-gray-300 rounded-xl w-[90%] sm:w-full py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
              <br />
              <label htmlFor='message'>Message :</label>
              <textarea
                id="message"
                placeholder='Enter your message'
                className="appearance-none border-2 border-gray-300 rounded-xl w-[90%] sm:w-full py-3 px-3 my-4 text-gray-700 leading-tight 
                  focus:outline-none focus:border-gray-400 font-normal resize-none"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />
              <button
                type='submit'
                className="rounded-xl w-[90%] sm:w-full py-3 px-3 my-4 leading-tight text-lg font-normal text-white"
                style={{ background: "linear-gradient(134deg, rgba(27, 133, 52, 1) 0%, rgba(32, 194, 71, 1) 100%)" }}
              >
                Submit your response
              </button>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ContactUs;
