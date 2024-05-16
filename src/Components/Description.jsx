import React from 'react';
import bgimg from '../data/gradient_img.png';
import logo from '../data/btl_logo.png';

const Description = () => {
  return (
    <div className='flex flex-col m-4 mt-8 md:m-10 lg:m-20 justify-center items-center gap-10 md:gap-16 lg:gap-[80px]'>
      <div
        className='flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-[1230px] h-auto md:h-[280px] bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${bgimg})`, boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}
      >
        <div className='w-full md:w-[60%] h-auto p-4 md:p-6'>
          <p className='text-sm md:text-normal text-white m-4 lg:text-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.
          </p>
        </div>
        <div className='flex w-full md:w-[30%] items-center justify-center p-4 md:p-0'>
          <div className='w-[100px] h-[68px] md:w-[250px] md:h-[172px] md:mr-4'>
            <img src={logo} className='w-full h-full' alt='logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
