import React from 'react'
import MainLeftSide from './mainLeftSide'
import MainRightSide from './mainRightSide'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



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
          <Image src='/images/slideshowImages/GJ0A8379.jpg' width={1024} height={260} />
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/prayer.jpg' width={1024} height={260} />
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/women.jpg' width={1024} height={260} />
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/youth.jpg' width={1024} height={260} /> 
        </SplideSlide>
        <SplideSlide>
          <Image src='/images/slideshowImages/youthsing.jpg' width={1024} height={260} />
        </SplideSlide>
      </Splide>
      
      <div className='min-h-screen bg-white p-2 flex'>
        <MainLeftSide />
        <MainRightSide/>
      </div>

    </div>
  )
}

export default MainContent