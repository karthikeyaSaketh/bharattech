// src/components/Events.js
import React from 'react';
import timeline1 from '../data/timeline1.jpg'
import timeline2 from '../data/timeline2.jpg'
import calender from '../data/calender.jpg'

const Events = () => {
  const text = "EVENT TIMELINE"


  return (
    <div className="flex flex-col relative items-center sm:my-4 w-full">
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

      <div className='flex flex-col sm:flex-row w-full xl:mt-10 h-auto justify-evenly items-center'>
        <div className='flex flex-col w-[80%] sm:w-[30%] h-full sm:p-4 lg:p-6'>
          <img src={calender} alt='calender' className='w-full h-full'/>
        </div>
        <div className='hidden sm:block w-[50%] h-auto'>
          <img src={timeline1} alt="timeline" className="w-full h-full"/>
        </div>
        <div className='sm:hidden w-[90%] h-auto'>
          <img src={timeline2} alt="timeline" className="w-full h-full"/>
        </div>
      </div>

    </div>
  );
};

export default Events;
