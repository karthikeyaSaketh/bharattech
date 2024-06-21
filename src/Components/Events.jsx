// src/components/Events.js
import React from 'react';
import img1 from '../data/timeline/1.png';

const Events = () => {
  const text = "EVENT TIMELINE"


  return (
    <div className="flex flex-col relative items-center my-4 w-full">
      <div className="my-4 sm:my-6 lg:mt-20 h-20 flex justify-center items-center">
        <h1
          style={{ color: '#F47923' }}
          className="text-[40px] text-center sm:text-[70px] lg:text-[90px] xl:text-[128px] tracking-widest font-bold"
        >
          {text.split('').map((letter, index) => (
            <span key={index} style={{ textShadow: "0px 4px 10px rgba(0,0,0, 0.2)" }}>
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row my-6 sm:my-10 w-[80%] h-[600px] lg:h-[500px] gap-8 lg:gap-0 justify-center items-center' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:w-[60%] h-[350px] lg:h-full'>
          <div className='flex justify-center items-center w-[95%] h-[95%] lg:h-full'><img src={img1} alt='img1' className='w-[500px] h-full'/></div>
          <div className='w-[95%] h-[2px] lg:w-[2px] lg:h-[90%]' style={{backgroundColor : "#8F8F8F"}}>

          </div>
        </div>
        <div className='flex flex-col w-[95%] lg:w-[40%] justify-center items-center gap-8 lg:gap-16'>
          <div className='lg:w-[90%] gap-6 sm:gap-10 lg:gap-16'>
            <h1 className='text-xl sm:text-2xl xl:text-3xl font-medium text-center sm:text-left'>
              Problem Statements Launch
            </h1>
            <div className='h-[3px] w-full my-4' style={{ backgroundColor: "#F47923" }}>
            </div>
          </div>
          <p className='text-center px-10 sm:px-16 pb-10 sm:pb-16 lg:pb-0 xl:px-24'>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Events;
