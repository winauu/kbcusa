import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Image from 'next/image'
import MainContent from './FirstHomePage/MainContent'


const Container = () => {
  return (
    <div className='font-[KNU] w-[1023px] mx-auto min-h-screen'>
        <Header/>
        <Navbar/>
        <MainContent/>
        <Footer/>
    </div>
  )
}

export default Container