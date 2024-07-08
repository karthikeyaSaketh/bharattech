import React from 'react'
import { NavLink } from 'react-router-dom'
import arrow1 from '../data/arrow1.png'
import arrow2 from '../data/arrow2.png'
import img1 from '../data/1_1.png'
import img2 from '../data/2_1.png'
import img3 from '../data/1.png'
import img4 from '../data/2.png'
import div1 from '../data/div1.png'
import div2 from '../data/div2.png'

const Links = () => {
    return (
        <div className='flex flex-col mt-8 justify-center items-center w-full gap-16'>
            <div className='flex flex-col sm:flex-row justify-center w-[80%] rounded-[20px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
                <img src={img2} alt='competitions' className='hidden sm:block w-[60%]' />
                <img src={img3} alt='competitions' className='block sm:hidden w-full' />
                <div className='flex flex-col justify-evenly items-center w-full p-8 sm:p-0 gap-4 sm:w-[40%]'>
                    <img src={div1} alt='text1' className='w-[60%]' />
                    <NavLink to='/bharattech/Events' >
                        <img src={arrow1} alt='arrow' className='w-[60px] h-[30px] lg:w-[120px] lg:h-[60px]' />
                    </NavLink>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row-reverse justify-center w-[80%] rounded-[20px] my-8' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
                <img src={img1} alt='competitions' className='hidden sm:block w-[60%]' />
                <img src={img4} alt='competitions' className='block sm:hidden w-full' />
                <div className='flex flex-col justify-evenly items-center w-full p-8 sm:p-0 gap-4 sm:w-[40%]'>
                    <img src={div2} alt='text1' className='w-[60%]' />
                    <NavLink to='/bharattech/Registration' >
                        <img src={arrow2} alt='arrow' className='w-[60px] h-[30px] lg:w-[120px] lg:h-[60px]' />
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Links