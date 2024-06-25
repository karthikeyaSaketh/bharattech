  import React from 'react'
  import Footer from '../Components/Footer'
  import img1 from '../data/conf_img_1.png'

  const Confirmation1 = () => {
    return (
      <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row lg:justify-around w-full lg:h-[630px] mb-10'>
          <div className='flex justify-center xl:justify-end items-center w-full lg:w-[40%] h-[350px] sm:h-[550px] lg:h-full'>
            <img src={img1} alt='conf_img_1' className='w-[80%] h-[80%]' />
          </div>
          <div className='flex flex-col justify-center w-full lg:w-[60%] h-full text-center p-2 sm:p-0 lg:mx-8 my-6 sm:my-12'>
            <h1 className='text-[36px] sm:text-[64px] lg:text-[72px] font-semibold mb-6 sm:mb-10'
              style={{ background: "linear-gradient(90deg, rgba(72, 74, 161, 1) 0%, rgba(249, 111, 154, 1) 38%, rgba(252, 195, 40, 1) 67%, rgba(254, 153, 50, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
              Congratulations!
            </h1>
            <h1 className='text-[20px] sm:text-[24px] lg:text-[26px] font-semibold my-4 sm:my-8'>
              Your application has been submitted...
            </h1>
            <h1 className='text-[24px] sm:text-[32px] lg:text-[36px] font-semibold'
              style={{ background: "linear-gradient(90deg, rgba(72, 74, 161, 1) 0%, rgba(249, 111, 154, 1) 38%, rgba(252, 195, 40, 1) 67%, rgba(254, 153, 50, 1) 100%)", backgroundClip: "text", color: "transparent" }}>
              You will receive a confirmation mail shortly
            </h1>
            <div className='hidden sm:flex sm:items-end lg:items-stretch'>
              <div className='relative top-[5%] left-[70%] w-[140px] h-[140px] rounded-full z-10'
                style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
              </div>
              <div className='relative top-[80%] left-[-10%] w-[70px] h-[70px] rounded-full z-10'
                style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
              </div>
            </div>
            <div className='flex items-end sm:hidden'>
              <div className='relative top-[5%] left-[70%] w-[80px] h-[80px] rounded-full z-10'
                style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
              </div>
              <div className='relative top-[65%] left-[10%] w-[40px] h-[40px] rounded-full z-10'
                style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
              </div>
            </div>
          </div>
          <div className='hidden sm:block absolute top-28 left-12 w-[130px] h-[130px] rounded-full'
            style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
          </div>
          <div className='hidden lg:block absolute top-32 left-100 w-[60px] h-[60px] rounded-full z-10'
            style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
          </div>
          <div className='hidden sm:block absolute top-24 right-12 w-[90px] h-[90px] rounded-full z-10'
            style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
          </div>
                  
          <div className='block lg:hidden absolute top-80 left-[-1%] w-[50px] h-[50px] rounded-full z-10'
            style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
          </div>    
          <div className='block sm:hidden absolute top-16 left-[2%] w-[100px] h-[100px] rounded-full z-10'
            style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
          </div>
          <div className='block sm:hidden absolute top-20 right-4 w-[90px] h-[90px] rounded-full'
            style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 0) 100%)" }}>
          </div>

        </div>
        <div className='relative w-full h-auto'>
          <Footer />
        </div>
      </div>
    )
  }

  export default Confirmation1
