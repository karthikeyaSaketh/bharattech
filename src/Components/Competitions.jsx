import React from 'react'
import img from '../data/events/arrow.png'
import img1 from '../data/events/1.png'

const Competitions = () => {
    return (
        <div className='flex flex-col justify-center items-center w-[90%] m-8 mx-auto gap-8'>
            <div className='w-full pl-4 sm:pl-20'>
                <img src={img} alt='back' className='w-[40px] h-[40px]' />
            </div>

            <div className='flex flex-col xl:flex-row justify-around w-full'>
                <div className='w-full xl:w-[40%] flex flex-col justify-start items-center'>
                    <img src={img1} alt='img1' className='w-[350px] sm:w-[400px] h-[250px]' />
                </div>
                <div className='flex flex-col w-full xl:w-[60%] justify-evenly items-center gap-4 text-center'>
                    <h1 className='text-[32px] sm:text-[48px] text-[#FF721F] font-bold'>
                        3D PRINTING TECHNOLOGY
                    </h1>
                    <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
                    JUNIOR LEVEL PROBLEM STATEMENT
                    </p>
                    <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
                        <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                        DOWNLOAD PROBLEM STATEMENT
                        </button>
                        <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                        DOWNLOAD RULES & REGULATIONS
                        </button>

                    </div>

                </div>
            </div>


        </div>

    )
}

export default Competitions