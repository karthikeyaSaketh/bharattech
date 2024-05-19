import React from 'react'
import ImgSlider from '../Components/ImgSlider'
import Description from '../Components/Description'
import Events from '../Components/Events'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col mt-4'>
      <ImgSlider/>
      <Description/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default Home
