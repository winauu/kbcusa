import Image from 'next/image'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ContentTemplatesLeft from '../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../Navbar'
import EKBCparagraph1Left from './EKBCparagraph1Left'
import EKBCparagraph2Left from './EKBCparagraph2Left'


function EmmanuelKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/EmmanuelKarenBaptistChurch/EmmanuelKarenBaptistChurch.gif' width={1024} height={260} alt='omaha'/>
    <div className='flex bg-white px-10'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/homePageRightSideImages/TharHsaEhWah.gif"
        description="o&.q.tJ.0gw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<EKBCparagraph1Left/>}
        para2={<EKBCparagraph2Left/>}
        />
      <ContentTemplatesRight
        title1="{hRrREkRthv;unDbsXxHc&Hmzdw>td.zSd."
        titleSpan="Emmanuel Karen Baptist Church"
        // title2="xH*X>eHRunDbsXxHc& Hmzdw>td.zSd.t*h>tusdRzk.udmA"
        // para1={<TMBKCparagraph1Right/>}
        // para2={<TMBKCparagraph2Right/>}
        // line1={<hr className='w-[98%] border-[.5px] border-black'/>}
        // line2={<hr className='w-[98%] border-[.5px] border-black'/>}
      />
    </div>
    <Footer/>
  </div>
  )
}

export default EmmanuelKarenBaptistChurch