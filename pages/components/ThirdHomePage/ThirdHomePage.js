import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import ThirdMainContent from './ThirdMainContent'

function ThirdHomePage() {
  return (
    <div className='w-[1023px] bg-white mx-auto min-h-full'>
        <Header/>
        <Navbar/>
        <ThirdMainContent/>
        <Footer/>
    </div>  
  )
}

export default ThirdHomePage