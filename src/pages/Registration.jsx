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
          <h1 className='mt-8 pl-4 sm:pl-0 text-center'>Welcome to the biggest tech league of BHARAT</h1>
          <div className='flex flex-col sm:flex-row my-4 gap-4 sm:gap-12 lg:gap-32 xl:gap-64'>

            <NavLink to='/bharattech/Registration/Juniors' className='flex flex-col items-center my-4 sm:my-8 rounded-xl w-[250px] sm:h-[300px] lg:w-[380px] lg:h-[380px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={junior} alt='junior' className='h-[60%] sm:h-[75%] w-[98%] p-2' />
              <div className='flex flex-col p-2 lg:p-4 items-center'>
                <p className='font-semibold text-2xl'>JUNIOR LEVEL</p>
                <p className='pt-2 text-sm'>Classes 6 to 10</p>
              </div>
            </NavLink>

            <NavLink to='/bharattech/Registration/Seniors'className='flex flex-col items-center my-4 sm:my-8 rounded-xl w-[250px] sm:h-[300px] lg:w-[380px] lg:h-[380px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
              <img src={senior} alt='senior' className='h-[60%] sm:h-[75%] w-[98%] p-2' />
              <div className='flex flex-col items-center p-2 lg:p-4'>
                <p className='font-semibold text-2xl'>SENIOR LEVEL</p>
                <p className='pt-2 text-sm'>Classes 6 to 10</p>
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
