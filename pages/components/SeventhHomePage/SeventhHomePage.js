import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import SeventhMainContent from './SeventhMainContent'

function SeventhHomePage() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
      <Header/>
      <Navbar/>
      <SeventhMainContent/>
      <Footer/>
    </div>
  )
}

export default SeventhHomePage