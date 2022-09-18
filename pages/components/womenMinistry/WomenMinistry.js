import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
import WomenMainContent from './WomenMainContent'
function WomenMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <WomenMainContent/>
    <Footer/>
  </div>  
  )
}

export default WomenMinistry