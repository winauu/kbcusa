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
        title="w>td.zSd.o&." 
        pic="/images/KarenBaptistChurchOfLincolnImage/Isaac.jpg"
        description="o&.tgpJ;rllw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        />
      <ContentTemplatesRight/>
    </div>
    <Footer/>
  </div>
  )
}

export default KarenBaptistChurchOfLincoln