import React from 'react'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import MainContentLeftSide from './MainLeftSide';
import MainContentRightSide from './MainContentRightSide';






const MainContent = () => {
  return (
    <div>
      <Splide aria-label="My Favorite Images" options={{
        type   : 'loop',
        autoplay     : true,
        arrows: false,
        pagination: false,
      }}>
        <SplideSlide>
          <Image src='/images/slideshowImages/GJ0A8379.jpg' width={1024} height={260} alt='slide1'/>
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/prayer.jpg' width={1024} height={260} alt='slide2'/>
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/women.jpg' width={1024} height={260} alt='slide3'/>
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/youth.jpg' width={1024} height={260} alt='slide4'/> 
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/youthsing.jpg' width={1024} height={260} alt='slide5'/>
        </SplideSlide>
      </Splide>
      
      <div className='min-h-screen bg-white p-2 flex'>
        <MainContentLeftSide/>
        <MainContentRightSide/>
        
      </div>

    </div>
  )
}

export default MainContent