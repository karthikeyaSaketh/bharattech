
import React from 'react'
import ahub from '../data/AHUB.png'
import au from '../data/AU.png'
import tie from '../data/TIE.png'
import calender from '../data/JAN_F.jpg'

const Events = () => {
  const text = "EVENTS - 2024"
  const text2 = "PARTNERS"

  return (
    <div className='flex flex-col relative my-4 w-full'>
      <div className='mt-6 md:mt-20 h-20 flex justify-center items-center'
        style={{ 'backgroundImage': '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 2%, rgba(253, 108, 0, 1) 30%, rgba(241, 102, 0, 1) 70%, rgba(255, 255, 255, 1) 98%)' }}
      >
        <h1 className='text-4xl tracking-widest text-white font-semibold italic'>
          {text.split('').map((letter, index) => (
            <span key={index} style={{ "text-shadow": "4px 4px 10px rgba(0,0,0, 0.5)" }}>{letter}</span>
          ))}
        </h1>
      </div>
      <div className='relative pt-4 flex flex-col xl:flex-row items-center justify-center m-4 h-auto xl:mx-[100px] xl:gap-10'>
        <div className='w-full md:w-[500px] xl:w-[900px] h-auto md:h-[500px] xl:h-[400px]'>
          <img src={calender} className='w-full h-full' alt="calender" />
        </div>
        <div className='flex flex-col p-8 justify-center items-center flex-wrap w-full'>
          <p className='text-lg font-normal text-black text-opacity-80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.<br /><br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.
          </p>
        </div>
      </div>



      <div className='relative flex flex-col mt-6 w-full'>
        <div className='mt-6 h-20 flex justify-center items-center'
          style={{ 'backgroundImage': '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 2%, rgba(253, 108, 0, 1) 30%, rgba(241, 102, 0, 1) 70%, rgba(255, 255, 255, 1) 98%)' }}

        >
          <h1 className='text-4xl tracking-widest text-white font-semibold italic'>
            {text2.split('').map((letter, index) => (
              <span key={index} style={{ "text-shadow": "4px 4px 10px rgba(0,0,0, 0.5)" }}>{letter}</span>
            ))}
          </h1>
        </div>

        <div className='relative flex items-center justify-center h-[230px] sm:h-[400px] w-full overflow-x-auto'>
          <div className='flex items-center h-[200px] sm:h-[250px] mt-4 sm:mt-0 overflow-hidden'>
            <div className='flex animate-loop-scroll'>
              <img src={au} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={ahub} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={tie} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={au} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={ahub} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={tie} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
            </div>
            <div className='flex animate-loop-scroll' aria-hidden="true">
            <img src={au} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={ahub} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={tie} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={au} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={ahub} alt='img2' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
              <img src={tie} alt='img1' className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full max-w-none mx-4 sm:mx-16 xl:mx-20' style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Events;