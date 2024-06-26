import React from 'react'
import Footer from '../Components/Footer'
import s1 from '../data/Gallery/1.png'
import s2 from '../data/Gallery/2.png'
import s3 from '../data/Gallery/3.png'
import s4 from '../data/Gallery/4.png'
import s5 from '../data/Gallery/5.png'
import sc1 from '../data/Gallery/s1.png'
import sc2 from '../data/Gallery/s2.png'
import sc3 from '../data/Gallery/s3.png'
import sc4 from '../data/Gallery/s4.png'
import sc5 from '../data/Gallery/s5.png'
import sc6 from '../data/Gallery/s6.png'
import s6 from '../data/Gallery/6.png'
import s7 from '../data/Gallery/7.png'
import s8 from '../data/Gallery/8.png'
import s9 from '../data/Gallery/9.png'
import s10 from '../data/Gallery/10.png'
import sc7 from '../data/Gallery/s7.png'
import sc8 from '../data/Gallery/s8.png'
import sc9 from '../data/Gallery/s9.png'
import sc10 from '../data/Gallery/s10.png'
import sc11 from '../data/Gallery/s11.png'
import sc12 from '../data/Gallery/s12.png'


const Gallery = () => {
  const text = "RECAP OF 2023"
  return (
    <div className='flex flex-col w-full mt-2'>
      <div className='flex justify-center items-center w-full'>
        <h1 className='text-[40px] sm:text-[76px] font-black text-[#F16600CC] text-center' style={{ fontFamily: "Nunito Sans, sans-serif", fontStyle: "italic" }}>
          {text.split('').map((letter, index) => (
            <span key={index} style={{ textShadow: "0px 4px 10px rgba(0,0,0, 0.2)" }}>
              {letter}
            </span>
          ))}
        </h1>
      </div>


      <div className='flex justify-center my-8 sm:my-4'>
        <div className='flex w-[80%] sm:w-[75%] justify-center items-center rounded-[20px]' style={{ boxShadow: '2px 2px 40px rgba(0,0,0, 0.25)' }}>
        <iframe className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-[20px]" src="https://www.youtube.com/embed/MukwVizWaSw?si=DbZgZP3uDNzJfdob" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <div className='flex flex-col-reverse xl:flex-row justify-center items-center w-full xl:h-[570px] my-8 lg:my-16 sm:px-20 gap-8 xl:gap-0'>
        <div className='flex flex-wrap w-full lg:w-[80%] xl:w-[50%] justify-evenly items-center gap-8 h-full'>
          <img src={s1} alt="img1" className='w-[266px] h-[266px]' />
          <img src={s2} alt="img2" className='w-[266px] h-[266px]' />
          <img src={s3} alt="img3" className='w-[266px] h-[266px]' />
          <img src={s4} alt="img4" className='w-[266px] h-[266px]' />
        </div>
        <div className='flex justify-center w-full sm:w-[70%] lg:w-[50%] h-full px-6'>
          <img src={s5} alt="img5" className='w-[570px] h-full' />
        </div>
      </div>


      <div className='relative flex items-center justify-center h-[230px] sm:h-[320px] w-full overflow-x-auto'>
        <div className='flex items-center h-[200px] sm:h-[250px] mt-4 sm:mt-0 overflow-hidden'>
          <div className='flex animate-loop-scroll'>
            <img src={sc1} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc2} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc3} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
          <div className='flex animate-loop-scroll' aria-hidden="true">
            <img src={sc1} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc2} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc3} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
        </div>
      </div>

      <div className='relative flex items-center justify-center h-[230px] sm:h-[320px] w-full overflow-x-auto'>
        <div className='flex flex-row-reverse items-center h-[200px] sm:h-[250px] mt-4 sm:mt-0 overflow-hidden'>
          <div className='flex animate-reverse-loop-scroll'>
            <img src={sc4} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc5} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc6} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
          <div className='flex animate-reverse-loop-scroll' aria-hidden="true">
            <img src={sc4} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc5} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc6} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row justify-center items-center w-full xl:h-[570px] my-8 lg:my-16 sm:px-20 gap-8 xl:gap-0'>
        <div className='flex justify-center w-full sm:w-[70%] lg:w-[50%] h-full px-6'>
          <img src={s6} alt="img5" className='w-[570px] h-full' />
        </div>
        <div className='flex flex-wrap w-full lg:w-[80%] xl:w-[50%] justify-evenly items-center gap-8 h-full'>
          <img src={s7} alt="img1" className='w-[266px] h-[266px]' />
          <img src={s8} alt="img2" className='w-[266px] h-[266px]' />
          <img src={s9} alt="img3" className='w-[266px] h-[266px]' />
          <img src={s10} alt="img4" className='w-[266px] h-[266px]' />
        </div>
      </div>

      <div className='relative flex items-center justify-center h-[230px] sm:h-[320px] w-full overflow-x-auto'>
        <div className='flex items-center h-[200px] sm:h-[250px] mt-4 sm:mt-0 overflow-hidden'>
          <div className='flex animate-loop-scroll'>
            <img src={sc7} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc8} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc9} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
          <div className='flex animate-loop-scroll' aria-hidden="true">
            <img src={sc7} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc8} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc9} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
        </div>
      </div>

      <div className='relative flex items-center justify-center h-[230px] sm:h-[320px] w-full overflow-x-auto'>
        <div className='flex flex-row-reverse items-center h-[200px] sm:h-[250px] mt-4 sm:mt-0 overflow-hidden'>
          <div className='flex animate-reverse-loop-scroll'>
            <img src={sc10} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc11} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc12} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
          <div className='flex animate-reverse-loop-scroll' aria-hidden="true">
            <img src={sc10} alt='img1' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc11} alt='img2' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
            <img src={sc12} alt='img3' className='w-[250px] sm:w-[370px] h-[200px] sm:h-[270px]  max-w-none mx-4 sm:mx-16 xl:mx-20' />
          </div>
        </div>
      </div>


      <div className='relative w-full mt-10 h-auto'>
        <Footer />
      </div>

    </div>
  )
}

export default Gallery
