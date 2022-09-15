import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'
import Navbar from './Navbar'
import Image from 'next/image'


const HomePage = () => {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
        <Header/>
        <Navbar/>
        <MainContent/>
        <Footer/>
    </div>
  )
}

export default HomePage