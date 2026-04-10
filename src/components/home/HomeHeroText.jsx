
import React from 'react'
import Video from './video'

const HomeHeroText = () => { 
  return (
    <div className='font-[font2] pt-5 text-center text-white'>

      <div className='text-[8vw] uppercase flex justify-center items-center leading-[8vw]'>
        The spark for
        </div>
      <div className='text-[8vw] uppercase  flex justify-center items-center leading-[8vw]'>
        all 
        <div className='h-[8vw] w-[16vw] rounded-full mt-5 overflow-hidden'>
          <Video />
          </div> things</div>
      <div className='text-[8vw] uppercase flex justify-center items-center leading-[8vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText
