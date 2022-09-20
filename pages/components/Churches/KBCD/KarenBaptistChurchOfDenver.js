import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'

function KarenBaptistChurchOfDenver() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenBaptistChurchOfDenverImage/First Karen Baptist Church of Denver.jpg' width={1024} height={260} alt='denver'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="assa" 
        pic="/images/KarenBaptistChurchOfDenverImage/Lar Moo.jpg"
        description="as"
        title2="AA"
        title3="bb"
        />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
  </div>
  )
}

export default KarenBaptistChurchOfDenver