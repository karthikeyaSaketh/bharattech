import React from 'react'
import Footer from '../Components/Footer'
import img1 from '../data/aboutbtl/1.png'
import img2 from '../data/aboutbtl/2.png'
import img2_phone from '../data/aboutbtl/2_1.png'
import img3 from '../data/aboutbtl/3.png'
import img4 from '../data/aboutbtl/4.png'
import img5 from '../data/aboutbtl/5.png'
import logo from '../data/aboutbtl/logo.png'

const AboutBtl = () => {
  return (
    <div className='flex flex-col w-full mt-4'>
      <div className='flex justify-center items-center w-full' >
        <h1 className='text-[40px] xl:text-[76px] font-bold text-center' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%", backgroundClip: "text", color: "transparent" }}>
          ORIGIN OF BHARAT TECK LEAGUE
        </h1>
      </div>

      <div className='mt-6 w-full p-8 pt-0 sm:p-16 sm:pt-0 xl:pt-16 text-left' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex flex-col-reverse xl:flex-row w-full justify-around items-center'>
          <div className='flex flex-col gap-8 leading-[30px]'>
            <p className='text-[18px] text-justify'>
              <b>
                Bharat Teck League 2024</b> (BTL 2024) was initiated with the vision of promoting and encouraging young minds to develop an interest in technology
              and prepare for the future. This event aims to be the largest technical league in Bharat, dedicated to Bharat's students. By uniting young innovators from across the nation, BTL 2024 is not just a competition but a platform for growth,
              technological awareness, and future readiness.
            </p>
            <p className='text-[18px] text-justify'>
              Join us in this monumental event as we celebrate and cultivate the burgeoning technological landscape of our country, preparing the next generation of tech leaders for the future. Let's embark on this exciting journey together,
              inspiring and nurturing tomorrow's innovators.
            </p>
          </div>
          <img src={logo} alt='logo' className='w-[80%] xl:w-[40%]' />
        </div>
      </div>

      <div className='flex flex-col my-10 w-full h-auto bg-top bg-contain p-8' style={{ backgroundImage: `url(${img1})` }}>
        <h1 className='text-center text-white text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[96px] font-bold'>
          EVOLUTION OF BTL
        </h1>
        <div className='flex flex-col items-start pt-8 sm:pt-0 leading-loose sm:px-12'>
          <p className='text-white text-left text-[20px] sm:text-[24px]'>
            Andhra Teck League 2023:
          </p>
          <p className='text-white text-[16px] text-justify'>
            The foundation for BTL 2024 was laid by the remarkable success of the Andhra Teck League 2023,
            an event that showcased Andhra Pradesh's impressive technological capabilities.
            This event was more than just a competition; it was a celebration of innovation and entrepreneurship.
            With over <b>1500 students</b> participating at the zonal levels, the league highlighted the immense talent present in the region.
            The <b>grand finale</b>, which featured more than <b>600 students</b>, was a testament to the nurturing of excellence and the inspiration provided to young minds.
            The Andhra Teck League 2023 not only identified winners but also played a crucial role in encouraging students to pursue their technological aspirations, setting a strong precedent for future tech events in the state.
          </p>
          <br />
        </div>

        <div className='flex flex-col items-start pt-8 sm:pt-0 leading-loose sm:px-12'>
          <p className='text-white text-left text-[20px] sm:text-[24px]'>
            Key Supporters and Locations:
          </p>

          <p className='text-white text-[16px] text-justify'>
            The success of Andhra Teck League 2023 was made possible by the invaluable support from key figures and organizations. Distinguished supporters included <b>Shri Dr. Prasad Reddy, Vice Chancellor of Andhra University,</b>
            and <b>Shri Ravi Eswarapu, AHUB CEO</b>. Additionally, partnerships with <b>Alcove Partners</b> and <b>TIE Vizag</b> significantly contributed to the event's success. The league was structured in several stages, starting with preliminary online registrations.
            Zonal level competitions were held in four major cities: Visakhapatnam at <b>NSRIT Engineering College</b>, Kakinada at <b>Aditya Engineering College</b>, Vijayawada at <b>Potti Sriramulu Chalavadi Mallikarjunarao College of Engineering & Technology</b>, and Nellore at
            <b> Narayana Engineering College</b>. The grand finale took place at <b>AHUB</b> on the <b>Andhra University</b> campus, providing a fitting conclusion to a highly competitive and inspiring event. This meticulously organized event not only highlighted the region’s technological prowess but also set the stage for the upcoming Bharat Teck League 2024, promising to unite and inspire young innovators across the nation.
          </p>
        </div>
      </div>

      <div className='w-full my-10'>
        <img src={img2} alt='img2' className='hidden sm:block sm:h-[400px] lg:h-[600px] xl:h-[700px] w-full' />
        <img src={img2_phone} alt='img2' className='block sm:hidden h-[600px] w-full' />
      </div>

      <div className='flex flex-col items-center my-6'>
        <div className='flex justify-center items-center w-full' style={{ background: "linear-gradient(90deg, rgba(255, 114, 31, 1) 0%, rgba(255, 114, 31, 1) 20%, rgba(1, 105, 193, 1) 40%, rgba(1, 105, 193, 1) 60%, rgba(27, 133, 52, 1) 80%, rgba(27, 133, 52, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
          <h1 className='text-center text-[32px] sm:text-[48px] lg:text-[52px] xl:text-[80px] font-bold'>
            BHARAT TECK LEAGUE 2024
          </h1>
        </div>
        <p className='text-[16px] sm:text-[24px] lg:text-[30px] xl:text-[28px] p-6 sm:p-12 lg:p-16 text-justify'>
          Building on the success of the Andhra Teck League, BTL 2024 will cover three states: Andhra Pradesh, Telangana, and Himachal Pradesh. The event is organized by Teckybot and will include more than 1500 participants. The competition is structured in three phases.
        </p>

        <div className='flex flex-wrap justify-around items-center gap-20 my-8'>
          <div className='w-[350px] sm:w-[400px] h-[250px] sm:h-[280px] bg-contain sm:bg-cover bg-no-repeat rounded-[16px] sm:rounded-[20px]' style={{ backgroundImage: `url(${img3})`, boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <div className='flex flex-col w-full h-full justify-around items-center text-center p-8'>
              <h1 className='text-[#FF721F] text-[24px] font-semibold'>
                PRELIMINARY LEVEL
              </h1>
              <p className='text-[16px]'>
                Online registrations and content submission for Andhra Pradesh, Telangana, and Himachal Pradesh.
              </p>
            </div>
          </div>
          <div className='w-[350px] sm:w-[400px] h-[250px] sm:h-[280px] bg-contain sm:bg-cover bg-no-repeat rounded-[16px] sm:rounded-[20px]' style={{ backgroundImage: `url(${img4})`, boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <div className='flex flex-col w-full h-full justify-around items-center text-center p-8'>
              <h1 className='text-[#0169C1] text-[24px] font-semibold'>
                ZONAL LEVEL
              </h1>
              <p className='text-[16px]'>
                Zonal level competition will be held across multiple zones in three states (Andhra Pradesh, Telangana and Himachal Pradesh).
              </p>
            </div>
          </div>
          <div className='w-[350px] sm:w-[400px] h-[250px] sm:h-[280px] bg-contain sm:bg-cover bg-no-repeat rounded-[16px] sm:rounded-[20px]' style={{ backgroundImage: `url(${img5})`, boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <div className='flex flex-col w-full h-full justify-around items-center text-center p-8'>
              <h1 className='text-[#1B8534] text-[24px] font-semibold'>
                FINAL LEVEL
              </h1>
              <p className='text-[16px] px-8'>
                Final level to be held on Engineers' Day, September 15, 2024, at AHUB, Andhra University Incubation Center, Visakhapatnam
              </p>
            </div>
          </div>
        </div>


        <div className='flex flex-col sm:flex-row my-6 sm:my-16 sm:h-[200px] w-full sm:w-[90%] justify-around items-center tracking-widest text-center gap-10 sm:gap-0'>
          <div className='w-[80%] sm:w-[40%] sm:h-full flex flex-col justify-evenly items-center'>
            <p className='text-[#0169C1] font-bold text-[30px] lg:text-[36px]'>HIMACHAL PRADESH</p>
            <p className='text-[20px] lg:text-[24px] font-medium text-[#5F5F5F]'>ZONAL (17-08-2024)</p>
          </div>
          <div className='w-[80%] sm:w-[40%] h-[150px] sm:h-full flex flex-col justify-evenly items-center bg-[#0169C1] text-white rounded-[20px]'>
            <p className='font-bold text-[30px] lg:text-[36px] tracking-widest'>SHIMLA</p>
            <p className='font-bold text-[30px] lg:text-[36px] tracking-widest'>CHANDIGARH</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row my-6 sm:my-16 sm:h-[200px] w-full sm:w-[90%] justify-around items-center tracking-widest text-center gap-10 sm:gap-0'>
          <div className='w-[80%] sm:w-[40%] sm:h-full flex flex-col justify-evenly items-center'>
            <p className='text-[#0169C1] font-bold text-[30px] lg:text-[36px]'>TELANGANA</p>
            <p className='text-[20px] lg:text-[24px] font-medium text-[#5F5F5F]'>ZONAL (24-08-2024)</p>
          </div>
          <div className='w-[80%] sm:w-[40%] h-[150px] sm:h-full flex flex-col justify-evenly items-center bg-[#0169C1] text-white rounded-[20px]'>
            <p className='font-bold text-[30px] lg:text-[36px] tracking-widest'>HYDERABAD</p>
            <p className='font-bold text-[30px] lg:text-[36px] tracking-widest'>WARANGAL</p>
          </div>
        </div>


        <div className='flex flex-col sm:flex-row my-6 sm:my-16 w-full sm:w-[90%] justify-around items-center sm:items-start tracking-widest text-center gap-10 sm:gap-0'>
          <div className='w-[80%] sm:w-[40%] sm:h-[200px] flex flex-col justify-evenly items-center'>
            <p className='text-[#0169C1] font-bold text-[30px] lg:text-[36px]'>ANDHRA PRADESH</p>
            <p className='text-[20px] lg:text-[24px] font-medium text-[#5F5F5F]'>ZONAL (01-09-2024)</p>
          </div>
          <div className='w-[80%] sm:w-[40%] h-[250px] sm:h-[400px] flex flex-col justify-evenly items-center bg-[#0169C1] text-white rounded-[20px]'>
            <p className='font-bold text-[26px] lg:text-[36px] tracking-widest'>VISAKHAPATNAM</p>
            <p className='font-bold text-[26px] lg:text-[36px] tracking-widest'>RAJAHMUNDRY</p>
            <p className='font-bold text-[26px] lg:text-[36px] tracking-widest'>VIJAYAWADA</p>
            <p className='font-bold text-[26px] lg:text-[36px] tracking-widest'>NELLORE</p>
          </div>
        </div>
      </div>

      <div className="mb-16" style={{ background: "linear-gradient(90deg, rgba(255, 114, 31, 1) 0%, rgba(255, 114, 31, 1) 20%, rgba(1, 105, 193, 1) 40%, rgba(1, 105, 193, 1) 60%, rgba(27, 133, 52, 1) 80%, rgba(27, 133, 52, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
        <h1 className='text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-center px-4 sm:px-0'>
          FINAL EVENT VENUE<br />
          WILL BE ANNOUNCED SHORTLY
        </h1>
      </div>


      <div className='relative w-full mt-10 h-auto'>
        <Footer />
      </div>

    </div>
  )
}

export default AboutBtl

