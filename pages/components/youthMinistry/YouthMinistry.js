import React from 'react'
import Image from 'next/image'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import YouthMainContent from './YouthMainContent'

function YouthMinistry() {
  return (
  <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <YouthMainContent/>
    <Footer/>
  </div>  
  )
}

export default YouthMinistry