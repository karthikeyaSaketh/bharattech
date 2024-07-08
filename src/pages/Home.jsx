import React from 'react'
import ImgSlider from '../Components/ImgSlider'
import Events from '../Components/Events'
import Footer from '../Components/Footer'
import Partners from '../Components/Partners'
import VidSection from '../Components/VidSection'
import Links from '../Components/Links'

const Home = () => {
  return (
    <div className='flex flex-col mt-4'>
      <ImgSlider/>
      <VidSection/>
      <Events/>
      <Links/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home
