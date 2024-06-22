import React from 'react'
import Footer from '../Components/Footer'
import img1 from '../data/aboutbtl/1.png'
import img2 from '../data/aboutbtl/2.png'
import img3 from '../data/aboutbtl/3.png'
import img4 from '../data/aboutbtl/4.png'
import img5 from '../data/aboutbtl/5.png'

const AboutBtl = () => {
  return (
    <div className='flex flex-col w-full mt-4'>
      <div className='flex justify-center items-center w-full' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
        <h1 className='text-[40px] sm:text-[80px] xl:text-[128px] font-bold'>
          ORIGIN OF BTL
        </h1>
      </div>

      <div className='mt-6 w-full p-10 sm:p-16 text-left' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <p className='text-[18px] sm:text-[24px] text-justify'>
          <b>Bharat Teck League 2024</b> (BTL 2024) was initiated with the vision of promoting and encouraging young minds to develop an interest in technology
          and prepare for the future. This event aims to be the largest technical league in Bharat, dedicated to Bharat's students. By uniting young innovators from across the nation, BTL 2024 is not just a competition but a platform for growth,
          technological awareness, and future readiness. Join us in this monumental event as we celebrate and cultivate the burgeoning technological landscape of our country, preparing the next generation of tech leaders for the future. Let's embark on this exciting journey together,
          inspiring and nurturing tomorrow's innovators.
        </p>
      </div>

      <div className='flex flex-col my-10 w-full h-auto bg-top bg-contain p-8' style={{ backgroundImage: `url(${img1})` }}>
        <h1 className='text-center text-white text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[96px] font-bold'>
          BACKGROUND & EVOLUTION
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
            Zonal level competitions were held in four major cities: Visakhapatnam at <b>NSRIT Engineering College</b>, Kakinada at <b>Aditya Engineering College</b>, Vijayawada at <b>Potti Sri Chadalavada Mallikarjun College of Engineering and Technology</b>, and Nellore at
            <b> Narayana Engineering College</b>. The grand finale took place at <b>AHUB</b> on the <b>Andhra University</b> campus, providing a fitting conclusion to a highly competitive and inspiring event. This meticulously organized event not only highlighted the region’s technological prowess but also set the stage for the upcoming Bharat Teck League 2024, promising to unite and inspire young innovators across the nation.
          </p>
        </div>
      </div>

      <div className='w-full my-10'>
        <img src={img2} alt='img2' className='h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[800px] w-full' />
      </div>

      <div className='flex flex-col items-center my-6'>
        <div className='flex justify-center items-center w-full' style={{ background: "linear-gradient(90deg, rgba(255, 114, 31, 1) 0%, rgba(255, 114, 31, 1) 20%, rgba(1, 105, 193, 1) 40%, rgba(1, 105, 193, 1) 60%, rgba(27, 133, 52, 1) 80%, rgba(27, 133, 52, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
          <h1 className='text-center text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[96px] font-bold'>
            BHARAT TECH LEAGUE 2024
          </h1>
        </div>
        <p className='text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[36px] p-6 sm:p-12 lg:p-16'>
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

      </div>


      <div className='relative w-full mt-10 h-auto'>
        <Footer />
      </div>

    </div>
  )
}

export default AboutBtl

