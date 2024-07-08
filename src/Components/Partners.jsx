import React from 'react'
import ahub from '../data/AHUB.png'
import acic from '../data/ACIC.png'
import aic from '../data/AIC.png'
import tie from '../data/TIE.png'

const Partners = () => {
    const text2 = "ESTEEMED PARTNERS"
    return (
        <div className='relative flex flex-col mt-6 w-full text-center'>
            <div className='mt-6 h-24 sm:h-20 flex justify-center items-center'
                style={{ 'backgroundImage': '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 2%, rgba(253, 108, 0, 1) 30%, rgba(241, 102, 0, 1) 70%, rgba(255, 255, 255, 1) 98%)' }}

            >
                <h1 className='text-4xl tracking-widest text-white font-semibold italic'>
                    {text2.split('').map((letter, index) => (
                        <span key={index} style={{ "text-shadow": "4px 4px 10px rgba(0,0,0, 0.5)" }}>{letter}</span>
                    ))}
                </h1>
            </div>

            <div className='relative flex items-center justify-center h-[230px] sm:h-[400px] w-full overflow-x-auto mb-10'>
                <div className='flex items-center h-[200px] sm:h-[250px] mt-4 sm:mt-0 overflow-hidden'>
                    <div className='flex animate-loop-scroll'>
                        <img src={ahub} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={tie} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={aic} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={acic} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={ahub} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={tie} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={aic} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={acic} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                    </div>
                    <div className='flex animate-loop-scroll' aria-hidden="true">
                    <img src={ahub} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={tie} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={aic} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={acic} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={ahub} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={tie} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={aic} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={acic} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;