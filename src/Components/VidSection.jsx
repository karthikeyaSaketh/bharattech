import React from 'react'

const VidSection = () => {
  return (
    <div className='flex justify-center mt-16'>
      <div className='flex w-[80%] justify-center items-center rounded-[20px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <iframe className='w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[20px]' src="https://www.youtube.com/embed/xIxNDfhUtVA?si=egYsmhbDH7y8lUup" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default VidSection