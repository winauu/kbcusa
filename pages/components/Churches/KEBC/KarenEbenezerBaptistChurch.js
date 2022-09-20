import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'

function KarenEbenezerBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenEbenezerBaptistChurchImage/Ebenezer Karen Baptist Church.jpg' width={1024} height={260} alt='ebenezer'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="assa" 
        pic="/images/KarenEbenezerBaptistChurchImage/Debora.jpg"
        description="sa"
        title2="aa"
        title3="ee"
        />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
  </div>
  )
}

export default KarenEbenezerBaptistChurch