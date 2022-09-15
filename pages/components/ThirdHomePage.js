import React from 'react'
import ThirdMainContent from './ThirdMainContent'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

function ThirdHomePage() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
        <Header/>
        <Navbar/>
        <ThirdMainContent/>
        <Footer/>
    </div>  
  )
}

export default ThirdHomePage