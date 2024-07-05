import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';

const Open = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-06T05:30:00Z') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const renderTimerUnit = (value, label) => (
    <div className="flex flex-col items-center rounded-xl p-4 sm:p-8 lg:p-10 mx-4 my-8 sm:m-8 bg-white text-[#0F82C4]">
      <span className="text-4xl sm:text-5xl xl:text-7xl font-bold">{value}</span>
      <span className="text-xl xl:text-2xl">{label}</span>
    </div>
  );

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-center items-center w-full lg:[800px] xl:h-[600px]'>
        <div className='flex flex-col relative m-10 gap-6 xl:gap-20 items-center w-[85%] h-[80%] rounded-[20px]' style={{ background: "linear-gradient(147deg, rgba(0, 119, 181, 1) 35%, rgba(0, 173, 221, 1) 80%, rgba(0, 192, 234, 1) 100%)" }}>
          <div className='mt-10 text-white text-[20px] p-4  sm:p-0 sm:text-[24px] lg:text-[36px] tracking-widest text-center'>
            <h1 className='font-semibold'>
              REGISTRATIONS WILL OPEN ON 06-JUL-2024
            </h1>
          </div>
          <div className='text-white flex flex-col xl:flex-row justify-center '>
            <div className='flex justify-center'>
              <div>{renderTimerUnit(timeLeft.days, 'Days')}</div>
              <div>{renderTimerUnit(timeLeft.hours, 'Hours')}</div>
            </div>
            <div className='flex justify-center'>
              <div>{renderTimerUnit(timeLeft.minutes, 'Minutes')}</div>
              <div>{renderTimerUnit(timeLeft.seconds, 'Seconds')}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Open;
