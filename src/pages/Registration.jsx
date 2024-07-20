import React from 'react'
import Footer from '../Components/Footer'
import junior from '../data/junior.jpg'
import senior from '../data/senior.jpg'
import { NavLink } from 'react-router-dom'

const Registration = () => {
  return (
    <div className='flex flex-col'>
      <div className='my-6 w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>

          <h1 className='mt-4 text-3xl pl-4 sm:pl-0 sm:text-5xl font-bold text-center'>Hi there! Register for BTL</h1>
          <h1 className='mt-6 pl-4 sm:pl-0 text-center'>Welcome to the biggest tech league of BHARAT</h1>
          <div className='flex flex-col sm:flex-row my-4 gap-4 sm:gap-12 lg:gap-32 xl:gap-64'>

            <NavLink to='/bharattech/Registration/Juniors' className='flex flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[350px] sm:h-[390px] lg:w-[320px] lg:h-[460px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={junior} alt='junior' className='h-[60%] w-[98%] p-2' />
              <div className='flex flex-col p-2 lg:p-4 sm:gap-2 lg:gap-4 h-full items-center rounded-b-xl text-white' 
                  style={{background: "linear-gradient(150deg, rgba(244, 121, 35, 1) 0%, rgba(244, 121, 35, 0.9) 100%)"}}>
                <p className='font-semibold text-2xl pt-2 lg:pt-4'>JUNIOR LEVEL</p>
                <div className='w-[80%] lg:w-[60%] h-[0.5px] bg-white'>

                </div>
                <p className='pt-6 sm:pt-2 text-sm text-center'>Students in classes 6th to 10th can register in the Junior Level.
                </p>
              </div>
            </NavLink>

            <NavLink to='/bharattech/Registration/Seniors' className='flex flex-col items-center my-4 sm:gap-4 lg:gap-6 rounded-xl w-[250px] h-[360px] sm:h-[390px] lg:w-[320px] lg:h-[460px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={senior} alt='senior' className='h-[60%] w-[98%] p-2' />
              <div className='flex flex-col items-center p-2 lg:p-4 sm:gap-2 lg:gap-4 h-full rounded-b-xl text-white'
                  style={{background: "linear-gradient(150deg, rgba(1, 105, 193, 1) 0%, rgba(1, 105, 193, 0.8) 100%)"}}>
                <p className='font-semibold text-2xl pt-2 lg:pt-4'>SENIOR LEVEL</p>
                <div className='w-[80%] lg:w-[60%] h-[0.5px] bg-white'>
                </div>
                <p className='sm:pb-0 pt-4 sm:pt-2 text-sm text-center'>Diploma/Degree/Engineering students can register in the Senior Level.</p>
              </div>
            </NavLink>

          </div>
        </div>
      </div>
      

      <div className='flex flex-col sm:gap-6 w-full mt-4 lg:px-20 mb-10'>
        <h1 className='text-[22px] lg:text-[32px] font-bold mt-10 mb-4 sm:mb-0 text-left px-8 lg:px-20'>NOTE &nbsp;:</h1>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] px-8 lg:px-20'>1.	&nbsp;Participation is for groups only. Each team must consist of either 2/3/4 member.</p>
          <p className='text-[22px] px-8 lg:px-20'>2.	&nbsp;The Bharat Teck League – 2024 consists of three levels:</p>
          <ul className="list-none space-y-4 text-[18px] px-10 lg:px-24 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
               Level 1: Prelims (online participation)
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
              	Level 2: Zonal (physical participation)
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
              	Level 3: Final (physical participation)
              </span>
            </li>
          </ul>
          <p className='text-[22px] px-8 lg:px-20'>3.&nbsp;For Prelims, the participation is free. Participants who gets selected for Zonal level should pay a one-time fee i.e; Rs. 349 /- per head (Juniors) & Rs. 449 /- per head (Seniors).</p>
        </div>

      </div>
      <div className='relative w-full h-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Registration
