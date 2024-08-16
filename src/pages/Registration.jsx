import React from 'react';
import Footer from '../Components/Footer';
import junior from '../data/junior.jpg';
import senior from '../data/senior.jpg';
import newImageLeft from '../data/prize1.png'; // New image on the left
import newImageRight from '../data/prize2.png'; // New image on the right
import { NavLink } from 'react-router-dom';

const Registration = () => {
  return (
    <div className='flex flex-col'>
      <div className='mt-4 w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='mt-2 text-3xl pl-4 sm:pl-0 sm:text-5xl font-bold text-center'>
            Gateway to Zonal Level
          </h1>
          <div className='flex flex-col sm:flex-row sm:flex-wrap my-4 gap-4 sm:gap-12 justify-center'>
            {/* New Image on the Left */}
            <div className='hidden sm:flex flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[350px] sm:h-[390px] lg:w-[320px] lg:h-[460px]'
              style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={newImageLeft} alt='new-left' className='h-full w-[98%] p-2' />
            </div>

            {/* Junior Level */}
            <NavLink
              to='/bharatteck/Registration/Juniors'
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

            {/* Senior Level */}
            <NavLink
              to='/bharatteck/Registration/Seniors'
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

            <div className='flex sm:hidden flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[350px] sm:h-[390px] lg:w-[320px] lg:h-[460px]'
              style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={newImageLeft} alt='new-left' className='h-full w-[98%] p-2' />
            </div>

            {/* New Image on the Right */}
            <div className='flex flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[350px] sm:h-[390px] lg:w-[320px] lg:h-[460px]'
              style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={newImageRight} alt='new-right' className='h-full w-[98%] p-2' />
            </div>
          </div>
        </div>
      </div>

      {/* Important Information Section */}
      {/* <div className='flex flex-col justify-start text-left space-y-4 bg-white rounded-xl px-4 sm:px-6 w-[95%] sm:w-[90%] max-w-screen-lg mx-auto my-8 mb-16'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Important Information</h2>
        <p className='text-lg text-gray-600 leading-relaxed'>
          1. Participation is for groups only. Each team must consist of either 2/3/4 members.
        </p>
        <p className='text-lg text-gray-600 leading-relaxed'>
          2. The Bharat Teck League – 2024 consists of <strong>three</strong> levels:
        </p>
        <ul className='list-disc pl-8 space-y-2 text-lg text-gray-600 leading-relaxed'>
          <li><strong>Level 1:</strong> Prelims (online participation)</li>
          <li><strong>Level 2:</strong> Zonal (physical participation)</li>
          <li><strong>Level 3:</strong> Final (physical participation)</li>
        </ul>
        <p className='text-lg text-gray-600 leading-relaxed'>
          3. <strong>Is there a registration fee?</strong>
        </p>
        <ul className='list-disc pl-8 space-y-2 text-lg text-gray-600 leading-relaxed'>
          <li><strong>Level 1:</strong> Prelims – Free Participation</li>
          <li><strong>Level 2:</strong> Zonal - Rs. 349 /- per head (Juniors) & Rs. 449 /- per head (Seniors) [Selected Participants]</li>
          <li><strong>Level 3:</strong> Final – Free for Finalists</li>
        </ul>
      </div> */}

      <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify pl-10 sm:pl-24'>
        <ul className="list-none space-y-4 pl-4 sm:pl-16">
          <li className="flex">
            <span className='lg:ml-6'>
              <span className='font-bold text-[20px]'>NOTE : </span>The amount to be paid is included of all taxes(including  GST).The amount paid is non-refundable under any circumstances. By proceeding with the payment, you agree to this policy.
            </span>
          </li>
        </ul>
      </div>

      <div className='relative w-full h-auto mt-12'>
        <Footer />
      </div>
    </div>
  );
};

export default Registration;
