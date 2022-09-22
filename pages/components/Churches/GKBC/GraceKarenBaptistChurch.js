import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import GraceLeft1 from './GraceLeft1'
import GraceLeft2 from './GraceLeft2'
import GraceRight1 from './GraceRight1'
import GraceRight2 from './GraceRight2'
import GraceRight3 from './GraceRight3'

function GraceKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/GraceKarenBaptistChurchImage/Grace Karen Baptist Church.gif' width={1024} height={260} alt='grace'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/GraceKarenBaptistChurchImage/pastor.gif"
        description="o&.tgpJ;rllw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<GraceLeft1/>}
        para2={<GraceLeft2/>}
        />
      <ContentTemplatesRight
            title1="b.qd.*hRunDbsXxHc&amp;Hmzdw&gt;td.zSd."
            titleSpan="Grace Karen Baptist Church"
            title2="w&gt;td.zSd.t*h&gt;zk.udm"
            title3="w&gt;  td. zSd. *H&gt; bg"
            title4="w&gt;  td. zSd. t w&gt; [l; w&gt; *JR"
            para1={<GraceRight1/>}
            para2={<GraceRight2/>}
            para3={<GraceRight3/>}
            line1={<hr className='w-[98%] border-[.5px] border-black'/>}
            line2={<hr className='w-[98%] border-[.5px] border-black'/>}
            line3={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
  </div>
  )
}

export default GraceKarenBaptistChurch