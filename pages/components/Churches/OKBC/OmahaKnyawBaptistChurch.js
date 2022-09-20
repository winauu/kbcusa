import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'

function OmahaKnyawBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/OmahaKnyawBaptistChurchImage/Omaha Knyaw Baptist Church.jpg' width={1024} height={260} alt='knyaw'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="saas" 
        pic="/images/OmahaKnyawBaptistChurchImage/RevKweKbaw.jpg"
        description="saas"
        title2="sa"
        title3="a"
        />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
  </div>
  )
}

export default OmahaKnyawBaptistChurch