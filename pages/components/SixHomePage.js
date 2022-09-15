import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import SixMainContent from './SixMainContent'

function SixHomePage() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
      <Header/>
      <Navbar/>
      <SixMainContent/>
      <Footer/>
    </div>
  )
}

export default SixHomePage