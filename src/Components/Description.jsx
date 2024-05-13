import React from 'react'
import bgimg from '../data/gradient_img.png'
import logo from '../data/btl_logo.png'

const Description = () => {
  return (
    <div className='flex flex-col m-20 justify-center items-center gap-[80px]'>
        <div className='flex justify-between w-[1230px] h-[280px]' style={{background:`url(${bgimg})`,boxShadow: "0px 0px 20px rgba(0,0,0, 0.25)"}}>
          <div className='w-[60%] h-[280px] content-center'>
            <p className='text-normal text-white m-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi. 
            </p>
          </div>
          <div className='flex w-[30%] items-center justify-center'>
            <div className='w-[250px] h-[172px] content-center'>
              <img src={logo} className='w-full h-full' alt='logo'/>

            </div>

          </div>
        </div>
            
    </div>
  )
}

export default Description
