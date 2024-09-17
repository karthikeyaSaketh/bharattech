import React, { useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../data/btl_logo.png';
import { NavbarContext } from './NavbarContext';

const Navbar = () => {
  const {
    isHovered,
    isActive,
    isMenuOpen,
    handleHover,
    handleHoverLeave,
    handleItemClick,
    setIsActive,
    toggleMenu
  } = useContext(NavbarContext);

  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT BTL', path: '/bharatteck/AboutBTL' },
    { label: 'EVENTS', path: '/bharatteck/Events' },
    { label: 'GALLERY', path: '/bharatteck/Gallery' },
    { label: 'RESULTS', path: '/bharatteck/Registration' },
    { label : 'FINAL EVENT', path: '/bharatteck/FinalEvent'},
    { label: 'CONTACT US', path: '/bharatteck/ContactUs' }
    
  ];

  useEffect(() => {
    const path = location.pathname;

    const activeIndex = navItems.findIndex(item =>
      item.path === path ||
      (item.path === '/bharatteck/Registration' && (
        path.startsWith('/bharatteck/Registration/Juniors') ||
        path.startsWith('/bharatteck/Registration/Seniors') ||
        path.startsWith('/bharatteck/Registration/Juniors/Confirmation') ||
        path.startsWith('/bharatteck/Registration/Seniors/Confirmation')
      )) ||
      (item.path === '/bharatteck/Events' && (
        path.startsWith('/bharatteck/Events/3dprinting') ||
        path.startsWith('/bharatteck/Events/roboticsjunior') ||
        path.startsWith('/bharatteck/Events/dronejunior') ||
        path.startsWith('/bharatteck/Events/cleanEnergy') ||
        path.startsWith('/bharatteck/Events/AISenior') ||
        path.startsWith('/bharatteck/Events/roboticsSenior') ||
        path.startsWith('/bharatteck/Events/droneSenior') ||
        path.startsWith('/bharatteck/Events/iot')
      )) );

    if (activeIndex !== -1) {
      const updatedActiveState = new Array(navItems.length).fill(false);
      updatedActiveState[activeIndex] = true;
      setIsActive(updatedActiveState);
    }
  }, [location.pathname, setIsActive]);

  return (
    <div className='sticky top-0 bg-white z-50'>
      <div
        className='relative flex justify-center sm:justify-between w-full pr-4 pl-4 xl:pr-20 xl:pl-20 items-center h-16 z-20'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}
      >
        <div className='h-full'>
          <NavLink to='/' onClick={() => handleItemClick(0)}>
            <img src={logo} alt='logo' className='p-1 w-full h-full' />
          </NavLink>
        </div>
        <div className='flex justify-end items-center pb-2'>
          <div className='hidden sm:flex justify-end align-middle sm:text-xs xl:text-base gap-4 sm:gap-6 lg:gap-10 xl:gap-20'>
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`relative h-1/2 pt-3 p-1 hover:text-[#0169C1] ${isActive[index] ? 'text-[#0169C1]' : 'text-gray-500'}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHoverLeave(index)}
              >
                <NavLink to={item.path} onClick={() => handleItemClick(index)}>
                  {item.label}
                </NavLink>
                {(isHovered[index] || isActive[index]) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-[#0169C1] to-white"></div>
                )}
              </div>
            ))}
          </div>
          <button className="sm:hidden ml-4 absolute left-2" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            className={`absolute top-16 left-0 w-1/2 flex-col items-center bg-white border border-gray-300 rounded-3xl p-2 z-10 text-gray-500 ${isMenuOpen ? 'flex' : 'hidden'
              } sm:hidden`}
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`mb-3 ${isActive[index] ? 'text-[#0169C1]' : 'text-gray-500'}`}
                onClick={() => { handleItemClick(index); toggleMenu(); }}
              >
                <NavLink to={item.path}>
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* <div className='absolute right-2 sm:relative sm:right-auto h-full'>
          <a href='http://teckybot.com/' target='_blank'><img src={logo2} alt='logo' className='w-full h-full' /></a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
