import React from 'react'
import img1 from '../data/timeline/1.png'
import img2 from '../data/timeline/2.png'
import img3 from '../data/timeline/3.png'
import img4 from '../data/timeline/4.png'
import img5 from '../data/timeline/5.png'
import img6 from '../data/timeline/6.png'
import img7 from '../data/timeline/7.png'
import img8 from '../data/timeline/8.png'
import img9 from '../data/timeline/9.png'

const Events = () => {
  const text = "EVENT TIMELINE"

  return (
    <div className='flex flex-col relative items-center my-4 w-full'>
      <div className='my-4 sm:my-6 lg:mt-20 h-20 flex justify-center items-center'>
        <h1 style={{ color: '#F47923' }} className='text-[40px] text-center sm:text-[70px] lg:text-[90px] xl:text-[128px] tracking-widest font-bold'>
          {text.split('').map((letter, index) => (
            <span key={index} style={{ "text-shadow": "0px 4px 10px rgba(0,0,0, 0.2)" }}>{letter}</span>
          ))}
        </h1>
      </div>

      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img1} alt="img1" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img2} alt="img2" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img3} alt="img3" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img4} alt="img4" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img5} alt="img5" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img6} alt="img6" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img7} alt="img7" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img8} alt="img8" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>  


      <div className='flex flex-col sm:flex-row justify-center align-center items-center relative my-4 sm:mt-6 lg:mt-10 xl:mt-16 w-[80%]'
        style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex justify-around align-center items-center w-full sm:w-[50%] xl:w-[60%] gap-4 p-6 lg:p-8 xl:p-10 sm:pr-0'>
          <img src={img9} alt="img9" className='w-[90%] xl:w-[98%] h-[300px] lg:h-[400px] xl:h-[500px]' />
          <div
            className="hidden sm:block w-[1px] h-[300px] lg:h-[400px] xl:h-[500px]"
            style={{ backgroundColor: "#8F8F8F" }}
          >
          </div>
        </div>

        <div className='flex justify-center align-center items-center w-[90%] sm:w-[40%] p-8 sm:p-10 text-center'>
          <p>
            Problem statements for both junior and senior level can be found in the Events section, under competitions.
          </p>
        </div>
      </div>    
      


    </div>
  )
}

export default Events;