// src/components/Events.js
import React from 'react';
import Card from './Card';
import img1 from '../data/timeline/1.png';
import img2 from '../data/timeline/2.png';
import img3 from '../data/timeline/3.png';
import img4 from '../data/timeline/4.png';
import img5 from '../data/timeline/5.png';
import img6 from '../data/timeline/6.png';
import img7 from '../data/timeline/7.png';
import img8 from '../data/timeline/8.png';
import img9 from '../data/timeline/9.png';

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

      <Card img={img1} text="Problem Statements Launch" color="#F47923" />
      <Card img={img2} text="Registrations Close" color="#0169C1" />
      <Card img={img3} text="Results of Preliminary Participants" color="#1B8534"/>
      <Card img={img4} text="Zonal for Himachal Pradesh Particiapnts" color="#F47923"/>
      <Card img={img5} text="Zonal for Telangana Participants" color="#0169C1" />
      <Card img={img6} text="Finalists Announcement (Himachal Pradesh)" color="#1B8534"/>
      <Card img={img7} text="Finalists Announcement (Telangana)" color="#F47923"/>
      <Card img={img8} text="Zonal for Andhra Pradesh Participants" color="#0169C1"/>
      <Card img={img9} text="Finalists Announcement (Andhra Pradesh)" color="#1B8534"/>

    </div>
  );
};

export default Events;
