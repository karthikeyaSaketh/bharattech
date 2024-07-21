import React from 'react'
import ahub from '../data/AHUB.jpg'
import acic from '../data/ACIC.jpg'
import aic from '../data/AIC.jpg'
import tie from '../data/TIE.jpg'
import img1 from '../data/2nd_1.jpg'
import img2 from '../data/2nd_2.jpg'
import img3 from '../data/2nd_3.jpg'
import img4 from '../data/2nd_4.jpg'
import img5 from '../data/2nd_5.jpg'
import img6 from '../data/2nd_6.jpg'

const Partners = () => {
    const text2 = "ESTEEMED PARTNERS"
    return (
        <div className='relative flex flex-col mt-16 w-full text-center'>
            <div className='mt-6 h-24 sm:h-20 flex justify-center items-center'
                style={{ 'backgroundImage': '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 2%, rgba(253, 108, 0, 1) 30%, rgba(241, 102, 0, 1) 70%, rgba(255, 255, 255, 1) 98%)' }}

            >
                <h1 className='text-4xl tracking-widest text-white font-semibold italic'>
                    {text2.split('').map((letter, index) => (
                        <span key={index} style={{ "text-shadow": "4px 4px 10px rgba(0,0,0, 0.5)" }}>{letter}</span>
                    ))}
                </h1>
            </div>

            <div className='relative flex items-center justify-center h-[230px] sm:h-[300px] w-full overflow-x-auto'>
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



            <div className='relative flex items-center justify-center h-[230px] sm:h-[250px] w-full overflow-x-auto mb-10'>
                <div className='flex flex-row-reverse items-center h-[200px] sm:h-[250px] sm:mt-0 overflow-hidden'>
                    <div className='flex animate-reverse-loop-scroll'>
                        <img src={img1} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img2} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img3} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img4} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img5} alt='img5' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img6} alt='img6' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img1} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img2} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img3} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img4} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img5} alt='img5' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img6} alt='img6' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                    </div>
                    <div className='flex animate-reverse-loop-scroll' aria-hidden="true">
                        <img src={img1} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img2} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img3} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img4} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img5} alt='img5' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img6} alt='img6' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img1} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img2} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img3} alt='img3' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img4} alt='img4' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img5} alt='img5' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                        <img src={img6} alt='img6' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-8 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Partners;