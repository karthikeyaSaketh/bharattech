import React from 'react';

const VidSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-16 mb-8 gap-16">
      {/* First Video */}
      <div className="flex flex-col w-[90%] sm:w-[40%] justify-center items-center rounded-[20px] shadow-lg">
        <div className="relative w-full pb-[56.25%] rounded-[20px] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-[20px]"
            src="https://www.youtube.com/embed/xIxNDfhUtVA?si=egYsmhbDH7y8lUup"
            title="How to Become a Web Developer in 2024 - Ultimate Guide for Beginners"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='py-2 text-center'>
          <h1 className='text-[18px] lg:text-[30px]'>EVENT THEME (AGRICULTURE)</h1>
        </div>
      </div>

      {/* Second Video */}
      <div className="flex flex-col w-[90%] sm:w-[40%] justify-center items-center rounded-[20px] shadow-lg">
        <div className="relative w-full pb-[56.25%] rounded-[20px] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-[20px]"
            src="https://www.youtube.com/embed/q_rdUyi4-9o?si=yLOuiWJdHlzLddXk"
            title="Top 10 Web Development Projects to Boost Your Resume in 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='py-2 text-center'>
          <h1 className='text-[18px] lg:text-[30px]'>REGISTRATION GUIDE</h1>
        </div>
      </div>
    </div>
  );
};

export default VidSection;
