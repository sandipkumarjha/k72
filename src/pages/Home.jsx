import React, { useRef } from 'react'
import Video from '../components/home/video'
import HomeBottom from '../components/home/HomeBottom'
import HomeHeroText from '../components/home/HomeHeroText'
const Home = () => {
  return (
    <>
    
    <div className='h-screen w-screen fixed'>
      <Video/>
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between'>
         <HomeHeroText/>
         <HomeBottom/>
    </div>
    </> 
  )
}

export default Home
