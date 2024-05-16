import React, { useState } from 'react';
import logo from '../data/btl_logo.png';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState([false, false, false, false, false, false]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHover = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleHoverLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative flex justify-center sm:justify-between w-full pr-4 pl-4 xl:pr-20 xl:pl-20 items-center h-16'>
      <div className='h-full'>
        <img src={logo} alt='logo' className='p-1 w-full h-full'/>
      </div>
      <div className='flex justify-end items-center'>
        <div className='hidden sm:flex justify-end align-middle gap-4 lg:gap-10 xl:gap-20 xl:text-xl'>
          <div
            className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHoverLeave(0)}
          >
            Home
            {isHovered[0] && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
            )}
          </div>
          <div
            className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHoverLeave(1)}
          >
            About BTL
            {isHovered[1] && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
            )}
          </div>
          <div
            className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleHoverLeave(2)}
          >
            Events
            {isHovered[2] && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
            )}
          </div>
          <div
            className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleHoverLeave(3)}
          >
            Gallery
            {isHovered[3] && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
            )}
          </div>
          <div
            className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={() => handleHoverLeave(4)}
          >
            Registration
            {isHovered[4] && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
            )}
          </div>
          <div
            className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
            onMouseEnter={() => handleHover(5)}
            onMouseLeave={() => handleHoverLeave(5)}
          >
            Contact Us
            {isHovered[5] && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
            )}
          </div>
        </div>
        <button className="sm:hidden ml-4 absolute left-2 " onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div
          className={`absolute top-16 left-0 w-1/2 flex-col items-center bg-white border border-gray-200 rounded p-2 z-10 text-gray-500 ${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:hidden`}
        >
          <div className="mb-3">Home</div>
          <div className="mb-3">About BTL</div>
          <div className="mb-3">Events</div>
          <div className="mb-3">Gallery</div>
          <div className="mb-3">Registration</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
