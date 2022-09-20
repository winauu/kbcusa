import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'

function GraceKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/GraceKarenBaptistChurchImage/Grace Karen Baptist Church.gif' width={1024} height={260} alt='grace'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="ss" 
        pic="/images/GraceKarenBaptistChurchImage/pastor.gif"
        description="as"
        title2="sas"
        title3="sasa"
        />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
  </div>
  )
}

export default GraceKarenBaptistChurch