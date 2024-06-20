import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../data/btl_logo.png';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState([false, false, false, false, false, false]);
  const [isActive, setIsActive] = useState([true, false, false, false, false, false]);
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

  const handleItemClick = (index) => {
    const items = [false, false, false, false, false];
    items[index] = true;
    setIsActive(items);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 bg-white z-50'>
      <div
        className='relative flex justify-center sm:justify-between w-full pr-4 pl-4 xl:pr-20 xl:pl-20 items-center h-16 z-20'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}
      >
        <div className='h-full'>
          <img src={logo} alt='logo' className='p-1 w-full h-full' />
        </div>
        <div className='flex justify-end items-center pb-2'>
          <div className='hidden sm:flex justify-end align-middle sm:text-xs xl:text-base gap-4 sm:gap-6 lg:gap-10 xl:gap-20'>
            <div
              className={`relative h-1/2 pt-3 p-1 hover:text-blue-500 ${isActive[0] ? 'text-blue-500' : 'text-gray-500'}`}
              onMouseEnter={() => handleHover(0)}
              onMouseLeave={() => handleHoverLeave(0)}
            >
              <NavLink to='/bharattech' onClick={() => handleItemClick(0)}>
                HOME
              </NavLink>
              {(isHovered[0] || isActive[0]) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
              )}
            </div>
            <div
              className={`relative h-1/2 pt-3 p-1 hover:text-blue-500 ${isActive[1] ? 'text-blue-500' : 'text-gray-500'}`}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHoverLeave(1)}
            >
              <NavLink to='/bharattech/AboutBTL' onClick={() => handleItemClick(1)}>
                ABOUT BTL
              </NavLink>
              {(isHovered[1] || isActive[1]) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
              )}
            </div>
            <div
              className={`relative h-1/2 pt-3 p-1 hover:text-blue-500 ${isActive[2] ? 'text-blue-500' : 'text-gray-500'}`}
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHoverLeave(2)}
            >
              <NavLink to='/bharattech/Events' onClick={() => handleItemClick(2)}>
                EVENTS
              </NavLink>
              {(isHovered[2] || isActive[2]) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
              )}
            </div>
            <div
              className={`relative h-1/2 pt-3 p-1 hover:text-blue-500 ${isActive[3] ? 'text-blue-500' : 'text-gray-500'}`}
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleHoverLeave(3)}
            >
              <NavLink to='/bharattech/Gallery' onClick={() => handleItemClick(3)}>
                GALLERY
              </NavLink>
              {(isHovered[3] || isActive[3]) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
              )}
            </div>
            <div
              className={`relative h-1/2 pt-3 p-1 hover:text-blue-500 ${isActive[4] ? 'text-blue-500' : 'text-gray-500'}`}
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={() => handleHoverLeave(4)}
            >
              <NavLink to='/bharattech/Registration' onClick={() => handleItemClick(4)}>
                REGISTRATION
              </NavLink>
              {(isHovered[4] || isActive[4]) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
              )}
            </div>
            <div
              className={`relative h-1/2 pt-3 p-1 hover:text-blue-500 ${isActive[5] ? 'text-blue-500' : 'text-gray-500'}`}
              onMouseEnter={() => handleHover(5)}
              onMouseLeave={() => handleHoverLeave(5)}
            >
              <NavLink to='/bharattech/ContactUs' onClick={() => handleItemClick(5)}>
                CONTACT US
              </NavLink>
              {(isHovered[5] || isActive[5]) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
              )}
            </div>
          </div>
          <button className="sm:hidden ml-4 absolute left-2" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            className={`absolute top-16 left-0 w-1/2 flex-col items-center bg-white border border-gray-300 rounded-3xl p-2 z-10 text-gray-500 ${
              isMenuOpen ? 'flex' : 'hidden'
            } sm:hidden`}
          >
            <div className={`mb-3 ${isActive[0] ? 'text-blue-500' : 'text-gray-500'}`}>
              <NavLink to='/bharattech' onClick={() => { handleItemClick(0); toggleMenu(); }}>
                HOME
              </NavLink>
            </div>
            <div className={`mb-3 ${isActive[1] ? 'text-blue-500' : 'text-gray-500'}`}>
              <NavLink to='/bharattech/AboutBTL' onClick={() => { handleItemClick(1); toggleMenu(); }}>
                ABOUT BTL
              </NavLink>
            </div>
            <div className={`mb-3 ${isActive[2] ? 'text-blue-500' : 'text-gray-500'}`}>
              <NavLink to='/bharattech/Events' onClick={() => { handleItemClick(2); toggleMenu(); }}>
                EVENTS
              </NavLink>
            </div>
            <div className={`mb-3 ${isActive[3] ? 'text-blue-500' : 'text-gray-500'}`}>
              <NavLink to='/bharattech/Gallery' onClick={() => { handleItemClick(3); toggleMenu(); }}>
                GALLERY
              </NavLink>
            </div>
            <div className={`mb-3 ${isActive[4] ? 'text-blue-500' : 'text-gray-500'}`}>
              <NavLink to='/bharattech/Registration' onClick={() => { handleItemClick(4); toggleMenu(); }}>
                REGISTRATION
              </NavLink>
            </div>
            <div className={`${isActive[5] ? 'text-blue-500' : 'text-gray-500'}`}>
              <NavLink to='/bharattech/ContactUs' onClick={() => { handleItemClick(5); toggleMenu(); }}>
                CONTACT US
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
