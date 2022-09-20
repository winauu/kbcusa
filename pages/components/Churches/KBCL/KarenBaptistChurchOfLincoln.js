import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import Navbar from '../../Navbar'
import Image from 'next/image'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
function KarenBaptistChurchOfLincoln() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenBaptistChurchOfLincolnImage/Lincoln Karen Baptist Church.jpg' width={1024} height={260} alt='lincoln'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="sasa" 
        pic="/images/KarenBaptistChurchOfLincolnImage/Isaac.jpg"
        description="a"
        title2="kjlk"
        title3="n"
        />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
  </div>
  )
}

export default KarenBaptistChurchOfLincoln