import Image from 'next/image'
import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import HGNKBCparagraph1Left from './HGNKBCparagraph1Left'
import HGNKBCparagraph1right from './HGNKBCparagraph1right'
import HGNKBCparagraph2Left from './HGNKBCparagraph2Left'


function HteeGerNeeKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/TeeGerNeeKarenBaptistChurch/TeeGerNeeKarenBaptistChurch.jpeg' width={1024} height={260} alt='omaha'/>
    <div className='flex bg-white px-10'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/homePageRightSideImages/EhNayMoo.jpg"
        description="o&.tJ.eh.rlw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<HGNKBCparagraph1Left/>}
        para2={<HGNKBCparagraph2Left/>}
        />
      <ContentTemplatesRight
        title1="xH*X>eHRunDbsXxHc&Hmzdw>td.zSd."
        titleSpan="Htee Ger Nee Karen Baptist Church"
        title2="xH*X>eHRunDbsXxHc& Hmzdw>td.zSd.t*h>tusdRzk.udmA"
        para1={<HGNKBCparagraph1right/>}
        line1={<hr className='w-[98%] border-[.5px] border-black'/>}
      />
    </div>
    <Footer/>
  </div>
  )
}

export default HteeGerNeeKarenBaptistChurch