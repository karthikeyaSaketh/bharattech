import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import img1 from '../data/contactUs/1.png'
import img2 from '../data/contactUs/2.png'
import img3 from '../data/contactUs/3.png'
import img4 from '../data/contactUs/4.png'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      swal({
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        icon: "success",
        button: "OK"
      }).then(() => {
        // window.location.reload();
        navigate('/bharattech');
      });
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
    <div className='m-4 sm:m-24 lg:mt-12 lg:mb-4 flex justify-center content-center'>
      <div className='flex flex-col align-center items-center lg:flex-row w-full sm:w-[95%]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex flex-col align-center items-center w-[90%] lg:w-[60%] h-[650px] lg:h-[500px] text-[#0077B5] font-medium'>
          <h1 className='flex lg:hidden mt-12 lg:mt-10 lg:mb-4 text-5xl sm:text-7xl lg:text-[64px] text-center'>Get in touch</h1>
          <div className='mt-8 sm:mt-12 flex flex-col items-start pl-5 sm:pl-0 lg:text-sm'>
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
                className="rounded-xl w-[90%] sm:w-full py-4 px-3 my-4 leading-tight text-lg font-normal text-white"
                style={{ background: "linear-gradient(90deg, rgba(0, 119, 181, 1) 0%, rgba(0, 189, 232, 1) 100%)" }}
              >
                Submit your response
              </button>
            </form>
          </div>
        </div>


        <div className='hidden lg:flex flex-col gap-8 w-[40%] h-[700px] sm:h-[760px] lg:h-[500px]' style={{ background: "linear-gradient(147deg, rgba(0, 119, 181, 1) 35%, rgba(0, 173, 221, 1) 80%, rgba(0, 192, 234, 1) 100%)" }}>
          <h1 className='hidden sm:block mt-12 lg:mt-10 lg:mb-4 text-5xl sm:text-7xl lg:text-[48px] xl:text-[60px] text-center text-white'>Get in touch</h1>
          <div className='flex justify-around w-full my-8'>
            <a href='https://instagram.com/teckybot/' target='_blank'><img src={img1} alt="img1" className='w-[50px] h-[50px]' /></a>
            <a href='https://www.linkedin.com/company/teckybot/' target='_blank'><img src={img2} alt="img2" className='w-[50px] h-[50px]' /></a>
          </div>
          <div className='flex justify-around w-full my-8'>
            <a href='https://www.facebook.com/teckybot?mibextid=ZbWKwL' target='_blank'><img src={img3} alt="img3" className='w-[50px] h-[50px]' /></a>
            <a href='https://www.youtube.com/@teckybot23' target='_blank'><img src={img4} alt="img4" className='w-[50px] h-[50px]' /></a>
          </div>
        </div>
        <div className='flex lg:hidden flex-col gap-2 w-full h-[250px]' style={{ background: "linear-gradient(147deg, rgba(0, 119, 181, 1) 35%, rgba(0, 173, 221, 1) 80%, rgba(0, 192, 234, 1) 100%)" }}>
          <div className='flex justify-around w-full my-8'>
            <a href='https://instagram.com/teckybot/' target='_blank'><img src={img1} alt="img1" className='w-[50px] h-[50px]' /></a>
            <a href='https://www.linkedin.com/company/teckybot/' target='_blank'><img src={img2} alt="img2" className='w-[50px] h-[50px]' /></a>
          </div>
          <div className='flex justify-around w-full my-8'>
            <a href='https://www.facebook.com/teckybot?mibextid=ZbWKwL' target='_blank'><img src={img3} alt="img3" className='w-[50px] h-[50px]' /></a>
            <a href='https://www.youtube.com/@teckybot23' target='_blank'><img src={img4} alt="img4" className='w-[50px] h-[50px]' /></a>
          </div>
        </div>




      </div>
    </div>
  );
}

export default ContactUs;
