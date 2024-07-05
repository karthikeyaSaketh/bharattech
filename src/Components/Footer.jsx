import { React, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarContext } from './NavbarContext';

import facebook from '../data/footer_img/facebook.png';
import instagram from '../data/footer_img/instagram.png';
import linkedin from '../data/footer_img/linkedin.png';
import links from '../data/footer_img/link.png';
import location from '../data/footer_img/placeholder.png';
import mail from '../data/footer_img/email.png';
import mobile from '../data/footer_img/phone.png';
import youtube from '../data/footer_img/youtube.png';

const Footer = () => {

    const { handleItemClick } = useContext(NavbarContext);
    return (
        <div className='flex flex-col justify-center content-center px-4 sm:px-0' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <div className='flex flex-wrap md:p-8 lg:p-4 lg:justify-around mt-4 gap-4 items-start'>
                <div className='flex items-baseline gap-5 text-blue-900 w-full sm:w-auto mb-6 sm:mb-0'>
                    <img src={links} alt='links' className='h-[20px] w-[20px]' />
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-lg sm:text-2xl'>
                            Quick Links
                        </h1>
                        <div className='flex justify-between align-center gap-8 text-base font-medium'>
                            <div className='flex flex-col gap-4'>
                                <NavLink to='/bharattech' onClick={() => handleItemClick(0)}>Home</NavLink>
                                <NavLink to='/bharattech/AboutBTL' onClick={() => handleItemClick(1)}>About BTL</NavLink>
                                <NavLink to='/bharattech/Events' onClick={() => handleItemClick(2)}>Events</NavLink>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <NavLink to='/bharattech/Gallery' onClick={() => handleItemClick(3)}>Gallery</NavLink>
                                <NavLink to='/bharattech/Registration' onClick={() => handleItemClick(4)}>Registration</NavLink>
                                <NavLink to='/bharattech/ContactUs' onClick={() => handleItemClick(5)}>Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-baseline gap-5 text-blue-900 w-full sm:w-auto mb-6 sm:mb-0'>
                    <img src={location} alt='location' className='h-[20px] w-[20px]' />
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-lg sm:text-2xl'>
                            Andhra University Incubation Hub
                        </h1>
                        <div className='flex justify-between align-center gap-8 text-base font-medium '>
                            <div className='flex flex-col gap-4'>
                                <p>Andhra University College of Engineering,</p>
                                <p>A-Hub, Andhra University North Campus</p>
                                <p>Maddilapalem,Visakhapatnam,</p>
                                <p>Andhra Pradesh 530003</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-start gap-6 text-base font-medium text-blue-900 w-full sm:w-auto'>
                    <div className='flex items-baseline gap-5'>
                        <img src={mail} alt='mail' className='h-[20px] w-[20px]' />
                        <div className='font-bold text-lg sm:text-2xl'>bharatteckleague@gmail.com</div>
                    </div>
                    <div className='flex items-baseline gap-5'>
                        <img src={mobile} alt='mobile' className='h-[20px] w-[20px]' />
                        <div className='font-bold text-lg sm:text-2xl'>88861 22887 / 88861 22889</div>
                    </div>
                    <div className='flex items-baseline gap-6 text-xl sm:text-2xl'>
                        <a href='https://www.facebook.com/teckybot?mibextid=ZbWKwL' target='_blank'><img src={facebook} alt='facebook' className='h-[25px] w-[25px]' /></a>
                        <a href='https://instagram.com/teckybot/' target='_blank'><img src={instagram} alt='instagram' className='h-[25px] w-[25px]' /></a>
                        <a href='https://www.linkedin.com/company/teckybot/' target='_blank'><img src={linkedin} alt='linkedin' className='h-[25px] w-[25px]' /></a>
                        <a href='https://www.youtube.com/@teckybot23' target='_blank'><img src={youtube} alt='youtube' className='h-[25px] w-[25px]' /></a>
                    </div>
                </div>
            </div >

            <div className='flex justify-center my-6'>
                <div className='w-full sm:w-[90%] h-1' style={{ background: "linear-gradient(90deg, rgba(241, 102, 0, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(27, 133, 52, 1) 100%)" }}>
                </div>
            </div>
        </div >
    );
}

export default Footer;
