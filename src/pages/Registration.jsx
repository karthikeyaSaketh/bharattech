import React from 'react'
import Footer from '../Components/Footer'
import junior from '../data/junior.png'
import senior from '../data/senior.png'
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
      <div className='relative w-full h-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Registration
