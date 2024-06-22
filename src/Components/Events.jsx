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

      <div className='flex flex-col sm:flex-row my-4 sm:my-10 w-[70%] h-[280px] sm:h-[220px] justify-center items-center rounded-[20px] px-4' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex flex-col sm:flex-row justify-around sm:justify-between items-center w-[90%] sm:w-[50%] lg:w-[45%] h-[60%] sm:h-full xl:gap-16'>
          <div className='flex justify-around items-center w-full sm:w-[90%] lg:w-[80%] h-[98%] lg:pl-4 sm:h-full'>
            <img src={img1} alt='img1' className='w-full sm:w-[400px] h-[95%]' />
          </div>
          <div className='w-[95%] h-[2px] sm:w-[2px] sm:h-[80%]' style={{ backgroundColor: "#8F8F8F", opacity: "0.3" }}>
          </div>
        </div>
        <div className='flex flex-col w-[95%] sm:w-[50%] lg:w-[55%] h-[40%] sm:pl-4 lg:pl-8 xl:px-0 sm:h-full justify-center items-center sm:items-start'>
          <div className='flex flex-col sm:w-[90%] sm:gap-6 justify-center items-center sm:items-start'>
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-medium text-center sm:text-left xl:px-16'>
              Problem Statements Launch
            </h1>
          </div>
          <div className='h-[3px] w-[90%] sm:w-full lg:w-[80%] my-4 xl:mx-16' style={{ backgroundColor: "#F47923" }}>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Events;
