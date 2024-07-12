import React from 'react'
import Footer from '../Components/Footer'
import img1 from '../data/events/1.jpg'
import img2 from '../data/events/2.jpg'
import img3 from '../data/events/3.jpg'
import img4 from '../data/events/4.jpg'
import img5 from '../data/events/5.jpg'
import img6 from '../data/events/6.jpg'
import img7 from '../data/events/7.jpg'
import img8 from '../data/events/8.jpg'
import arrow from '../data/events/arrow.png'
import img9 from '../data/events/9.jpg'
import img10 from '../data/events/10.jpg'
import img11 from '../data/events/11.jpg'
import vr from '../data/events/vr.jpg'
import d from '../data/events/3d.jpg'
import teckybot from '../data/events/teckybot.jpg'
import { NavLink } from 'react-router-dom'

const Eventpage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
      <div className='flex flex-col text-center'>
        <div className='w-full h-auto' style={{ background: "linear-gradient(1deg, rgba(241, 102, 0, 0.6) 0%, rgba(241, 102, 0, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
          <h1 className='text-[40px] sm:text-[48px] lg:text-[64px] xl:text-[96px] font-bold'>
            COMPETITIONS
          </h1>
        </div>
        <p className='text-[18px] sm:text-[22px]'>
          Open to students for engaging and challenging technical competitions
        </p>
      </div><br />

      <div className='flex flex-col w-[85%] justify-start'>
        <h1 className='text-[32px]'>
          Junior Level
        </h1>
        <div className='flex flex-col xl:flex-row items-center w-full h-auto mt-6 gap-4 xl:gap-0'>
          <div className='flex flex-col sm:flex-row w-full xl:w-[50%] justify-around items-center gap-4 sm:gap-0'>
            <div className='flex flex-col gap-4'>
              <img src={img1} alt="img1" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>3D Printing</p>
                <NavLink to='/bharattech/Events/3dprinting'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <img src={img2} alt="img2" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Robotics</p>
                <NavLink to='/bharattech/Events/roboticsjunior'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row w-full xl:w-[50%] justify-around items-center gap-4 sm:gap-0'>
            <div className='flex flex-col gap-4'>
              <img src={img3} alt="img3" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Drone Technology</p>
                <NavLink to='/bharattech/Events/dronejunior'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <img src={img4} alt="img4" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Clean Energy</p>
                <NavLink to='/bharattech/Events/cleanEnergy'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-[85%] justify-start mt-8'>
        <h1 className='text-[32px]'>
          Senior Level
        </h1>
        <div className='flex flex-col xl:flex-row items-center w-full h-auto mt-6 gap-4 xl:gap-0'>
          <div className='flex flex-col sm:flex-row w-full xl:w-[50%] justify-around items-center gap-4 sm:gap-0'>
            <div className='flex flex-col gap-4'>
              <img src={img5} alt="img5" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Artificial Intelligence</p>
                <NavLink to='/bharattech/Events/AISenior'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <img src={img6} alt="img6" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Robotics</p>
                <NavLink to='/bharattech/Events/roboticsSenior'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row w-full xl:w-[50%] justify-around items-center gap-4 sm:gap-0'>
            <div className='flex flex-col gap-4'>
              <img src={img7} alt="img7" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Drone Technology</p>
                <NavLink to='/bharattech/Events/droneSenior'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <img src={img8} alt="img8" className='w-[280px] h-[280px] rounded-[20px]' />
              <div className='flex justify-between items-center px-2'>
                <p className='text-[16px]'>Internet of Things</p>
                <NavLink to='/bharattech/Events/iot'>
                  <img src={arrow} alt="arrow" className='h-[40px] w-[40px] rounded-[50%]' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-col text-center mt-12'>
        <div className='w-full h-auto' style={{ background: "linear-gradient(0deg, rgba(95, 95, 95, 1) 0%, rgba(0, 0, 0, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
          <h1 className='text-[40px] sm:text-[48px] lg:text-[64px] xl:text-[96px] font-bold'>
            TECK SHOWS
          </h1>
        </div>
        <p className='text-[18px] sm:text-[22px] px-6'>
          Join us for Teck Shows, open to all, running for 30 to 60 minutes each show (open for everyone)
        </p>
      </div><br />

      <div className='flex flex-wrap justify-around w-full gap-6 mt-10'>
        <div className='flex flex-col items-center gap-4'>
          <img src={img9} alt="img9" className='w-[300px] h-[300px] rounded-[20px]' />
          <p className='text-[30px] font-semibold'>DRONE SHOW</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img src={img10} alt="img10" className='w-[300px] h-[300px] rounded-[20px]' />
          <p className='text-[30px] font-semibold'>ROBOTICS SHOW</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img src={img11} alt="img11" className='w-[300px] h-[300px] rounded-[20px]' />
          <p className='text-[30px] font-semibold'>AI SHOW</p>
        </div>

      </div>


      <div className='flex flex-col text-center mt-16'>
        <div className='w-full h-auto'>
          <h1 className='inline-block text-[40px] sm:text-[48px] lg:text-[64px] xl:text-[96px] font-bold' style={{ background: "linear-gradient(270deg, rgba(1, 105, 193, 1) 0%, rgba(255, 114, 31, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
            TECK ZONES
          </h1>
        </div>
        <p className='text-[18px] sm:text-[22px] px-6'>
          Experience cutting-edge technology in our Teck Zones, available to everyone throughout the event (open for everyone)
        </p>
      </div><br />



      <div className='flex flex-col xl:flex-row-reverse w-[300px] sm:w-[550px] xl:w-[1280px] h-[650px] sm:h-[800px] xl:h-[400px] rounded-[20px] my-4 sm:my-10' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='w-full sm:w-[550px] h-auto sm:h-[400px] xl:h-full flex-shrink-0'>
          <img src={teckybot} alt="teckybot" className='h-full w-full relative top-0' />
        </div>
        <div className='flex flex-col w-auto h-full items-center justify-center sm:gap-4 xl:gap-12'>
          <h1 className='text-[34px] sm:text-[48px] font-semibold'>
            <span className='text-[#FF721F]'>TECKYBOT </span><span className='text-[#0169C1]'>ZONE</span>
          </h1>
          <p className='text-[16px] px-6 sm:px-20 leading-[30px] sm:leading-[40px] text-justify'>
            Experience the vision of Teckybot and explore our innovative products. The Teckybot Zone is where technology and creativity come together, offering a glimpse into the future with our latest advancements and solutions for everyone.
          </p>
        </div>
      </div>


      <div className='flex flex-col xl:flex-row w-[300px] sm:w-[550px] xl:w-[1280px] h-[650px] sm:h-[800px] xl:h-[400px] rounded-[20px] my-4 sm:my-10' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='w-full sm:w-[550px] h-auto sm:h-[400px] xl:h-full flex-shrink-0'>
          <img src={d} alt="3d" className='h-full w-full relative top-0' />
        </div>
        <div className='flex flex-col w-auto h-full items-center justify-center sm:gap-4 xl:gap-12'>
          <h1 className='text-[34px] sm:text-[48px] font-semibold'>
            <span className='text-[#FF721F]'>3D TECH </span><span className='text-[#0169C1]'>ZONE</span>
          </h1>
          <p className='text-[16px] px-6 sm:px-20 leading-[30px] sm:leading-[40px] text-justify'>
            Discover the fascinating world of 3D printing at the 3D Zone. Here, you'll find 3D printers and a variety of 3D printed objects that showcase applications across different domains. See how 3D printing is transforming industries and sparking new possibilities.
          </p>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row-reverse w-[300px] sm:w-[550px] xl:w-[1280px] h-[650px] sm:h-[800px] xl:h-[400px] rounded-[20px] my-4 sm:my-10' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='w-full sm:w-[550px] h-auto sm:h-[400px] xl:h-full flex-shrink-0'>
          <img src={vr} alt="vr" className='h-full w-full relative top-0' />
        </div>
        <div className='flex flex-col w-auto h-full items-center justify-center sm:gap-4 xl:gap-12'>
          <h1 className='text-[34px] sm:text-[48px] font-semibold'>
            <span className='text-[#FF721F]'>AR/VR </span><span className='text-[#0169C1]'>ZONE</span>
          </h1>
          <p className='text-[16px] px-6 sm:px-20 leading-[30px] sm:leading-[40px] text-justify'>
            Step into the future with our AR/VR Zone, where you can experience the incredible potential of augmented reality and virtual reality. Explore how AR and VR technologies will revolutionize everyday life and create new opportunities for innovation and interaction.
          </p>
        </div>
      </div>


      <div className='relative w-full h-auto mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default Eventpage
