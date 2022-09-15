import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import SecondMainContent from './SecondMainContent'

function SecondHomePage() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
        <Header/>
        <Navbar/>
        <SecondMainContent/>
        <Footer/>
    </div>
  )
}

export default SecondHomePage