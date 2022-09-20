import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'

function GreeleyGraceKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/GreeleyGraceKarenBaptistChurchImage/Greeley Grace Karen Baptist Church.jpg' width={1024} height={260} alt='greeley'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
          title="ok" 
          pic="/images/GreeleyGraceKarenBaptistChurchImage/NayLinTun.jpg"
          description="s"
          title2="ss"
          title3="a"
          />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
</div>
  )
}

export default GreeleyGraceKarenBaptistChurch