import React, { useState, useEffect } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import image1 from '../data/image1.jpg';
import image2 from '../data/image2.jpg';
import img1 from '../data/img1.jpg';
import img2 from '../data/img2.jpg';

const ImgSlider = () => {
  const images = [image1, image2];
  const images2 = [img1,img2];
  const [currentImg, setCurrentImg] = useState(0);

  const handlePrevious = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  const handleNext = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center h-[570px] w-full sm:h-[450px] xl:h-[600px]">
      <BsArrowLeftCircleFill
        className="arrow absolute w-4 h-4 sm:w-8 sm:h-8 text-white filter drop-shadow-lg cursor-pointer left-4 z-10"
        onClick={handlePrevious}
      />
      <div className="hidden sm:block w-full h-full overflow-hidden relative">
        {images && images.length
          ? images.map((imageurl, index) => (
              <img
                key={index}
                src={imageurl}
                alt={`img${index}`}
                className={`rounded-md shadow-md w-full h-full absolute transition-opacity duration-1000 ease-in-out ${
                  currentImg === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ top: 0, left: 0 }}
              />
            ))
          : null}
      </div>
      <div className="sm:hidden w-full h-full overflow-hidden relative">
        {images2 && images2.length
          ? images2.map((imageurl, index) => (
              <img
                key={index}
                src={imageurl}
                alt={`img${index}`}
                className={`rounded-md shadow-md w-full h-full absolute transition-opacity duration-1000 ease-in-out ${
                  currentImg === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ top: 0, left: 0 }}
              />
            ))
          : null}
      </div>
      <BsArrowRightCircleFill
        className="arrow absolute w-4 sm:w-8 h-4 sm:h-8 text-white filter drop-shadow-lg cursor-pointer right-4 z-10"
        onClick={handleNext}
      />

      <span className="absolute flex bottom-4 z-10">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={`h-1 w-10 rounded-full border-none outline-none mx-1 cursor-pointer ${
                  currentImg === index ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentImg(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImgSlider;
