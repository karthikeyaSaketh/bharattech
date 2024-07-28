import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../Components/Footer';
import junior from '../data/junior.jpg';
import senior from '../data/senior.jpg';
import { NavLink } from 'react-router-dom';

const MySwal = withReactContent(Swal);
const getPopupWidth = () => {
  return window.innerWidth <= 640 ? '95vw' : '80vw'; // 640px is a common breakpoint for mobile devices
};

const Registration = () => {
  const [isPopupShown, setIsPopupShown] = useState(false);

  useEffect(() => {
    // Show the popup when the component mounts
    MySwal.fire({
      title: 'Important Information',
      html: `
       <div class="flex flex-col items-start justify-start text-left space-y-4">
      <p>1. Participation is for groups only. Each team must consist of either 2/3/4 members.</p>
      <p>2. The Bharat Teck League – 2024 consists of <strong>three</strong> levels:</p>
      <ul class="list-disc pl-8 space-y-2">
        <li><strong>Level 1:</strong> Prelims (online participation)</li>
        <li><strong>Level 2:</strong> Zonal (physical participation)</li>
        <li><strong>Level 3:</strong> Final (physical participation)</li>
      </ul>
      <p>3. <strong>Is there a registration fee?</strong></p>
      <ul class="list-disc pl-8 space-y-2">
        <li><strong>Level 1:</strong> Prelims – Free Participation</li>
        <li><strong>Level 2:</strong> Zonal - Rs. 349 /- per head (Juniors) & Rs. 449 /- per head (Seniors) [Selected Participants]</li>
        <li><strong>Level 3:</strong> Final – Free for Finalists</li>
      </ul>
    </div>
  `,
      confirmButtonText: 'OK',
      width: getPopupWidth(), // Set a responsive width for laptops
      customClass: {
        popup: 'bg-white rounded-xl p-6 shadow-lg max-w-screen-lg', // Tailwind classes for the popup
        title: 'text-2xl font-bold text-gray-800 mb-4', // Tailwind classes for the title
        htmlContainer: 'text-lg text-gray-600 leading-relaxed', // Tailwind classes for the HTML content
        confirmButton: 'bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 focus:outline-none', // Tailwind classes for the confirm button
      },
      didClose: () => {
        setIsPopupShown(true);
      },
    });
  },[]);

  return (
    // Render content only after the popup is acknowledged
    isPopupShown && (
      <div className='flex flex-col'>
        <div className='my-6 w-full h-auto'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='mt-4 text-3xl pl-4 sm:pl-0 sm:text-5xl font-bold text-center'>
              Hi there! Register for BTL
            </h1>
            <div className='flex flex-col sm:flex-row my-4 gap-4 sm:gap-12 lg:gap-32 xl:gap-64'>
              <NavLink
                to='/bharattech/Registration/Juniors'
                className='flex flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[350px] sm:h-[390px] lg:w-[320px] lg:h-[460px]'
                style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}
              >
                <img src={junior} alt='junior' className='h-[60%] w-[98%] p-2' />
                <div
                  className='flex flex-col p-2 lg:p-4 sm:gap-2 lg:gap-4 h-full items-center rounded-b-xl text-white'
                  style={{
                    background:
                      'linear-gradient(150deg, rgba(244, 121, 35, 1) 0%, rgba(244, 121, 35, 0.9) 100%)',
                  }}
                >
                  <p className='font-semibold text-2xl pt-2 lg:pt-4'>JUNIOR LEVEL</p>
                  <div className='w-[80%] lg:w-[60%] h-[0.5px] bg-white'></div>
                  <p className='pt-6 sm:pt-2 text-sm text-center'>
                    Students in classes 6th to 10th can register in the Junior Level.
                  </p>
                </div>
              </NavLink>

              <NavLink
                to='/bharattech/Registration/Seniors'
                className='flex flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[360px] sm:h-[390px] lg:w-[320px] lg:h-[460px]'
                style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}
              >
                <img src={senior} alt='senior' className='h-[60%] w-[98%] p-2' />
                <div
                  className='flex flex-col items-center p-2 lg:p-4 sm:gap-2 lg:gap-4 h-full rounded-b-xl text-white'
                  style={{
                    background:
                      'linear-gradient(150deg, rgba(1, 105, 193, 1) 0%, rgba(1, 105, 193, 0.8) 100%)',
                  }}
                >
                  <p className='font-semibold text-2xl pt-2 lg:pt-4'>SENIOR LEVEL</p>
                  <div className='w-[80%] lg:w-[60%] h-[0.5px] bg-white'></div>
                  <p className='sm:pb-0 pt-4 sm:pt-2 text-sm text-center'>
                    Diploma/Degree/Engineering students can register in the Senior Level.
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className='relative w-full h-auto'>
          <Footer />
        </div>
      </div>
    )
  );
};

export default Registration;
