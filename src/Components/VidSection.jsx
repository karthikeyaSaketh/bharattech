import React from 'react'

const VidSection = () => {
  return (
    <div className='flex justify-center p-4 mt-6'>
        <iframe className='w-[90%] sm:w-[80%] h-[300px] sm:h-[400px] lg:h-[500px]' src="https://www.youtube.com/embed/etgeqBj5Qi0?si=T7V9wqT06OgOcXJ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VidSection