import React from 'react'

const VidSection = () => {
  return (
    <div className='flex justify-center items-center mt-16'>
      <div className='flex w-[80%] justify-center items-center rounded-[20px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='relative w-full pb-[56.25%] rounded-[20px] overflow-hidden'>
          <iframe className='absolute top-0 left-0 w-full h-full' src="https://www.youtube.com/embed/xIxNDfhUtVA?si=egYsmhbDH7y8lUup" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
      </div>

    </div>
  )
}

export default VidSection