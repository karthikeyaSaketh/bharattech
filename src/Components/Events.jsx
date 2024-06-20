// src/components/Events.js
import React, { useState } from 'react';
import './Flipcard.css';
import img1 from '../data/timeline/1.png';

const Events = () => {
  const text = "EVENT TIMELINE";
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

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

      <div className="flip-card-container w-80 h-96" onClick={handleFlip} style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front w-full h-full">
            <img src={img1} alt="Front" className="w-full h-full" />
          </div>
          <div className="flip-card-back w-full h-full p-6 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl font-medium text-left">
              Problem Statements Launch
            </h1>
            <div className="h-[3px] w-full my-4" style={{ backgroundColor: "#F47923" }}></div>
            <p className="text-center px-4">
              Problem statements for both junior and senior level can be found in the Events section, under competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
