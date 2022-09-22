import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import GreeleyLeft1 from './GreeleyLeft1'
import GreeleyLeft2 from './GreeleyLeft2'
import GreeleyRight1 from './GreeleyRight1'
import GreeleyRight2 from './GreeleyRight2'
import GreeleyRight3 from './GreeleyRight3'

function GreeleyGraceKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/GreeleyGraceKarenBaptistChurchImage/Greeley Grace Karen Baptist Church.jpg' width={1024} height={260} alt='greeley'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
          title="w>td.zSd.o&." 
          pic="/images/GreeleyGraceKarenBaptistChurchImage/NayLinTun.jpg"
          description="o&.tgpJ;rllw>td.zSd.o&."
          title2="w> bg t qX u wD>"
          title3="vXw>qJ;usd;t*D>"
          para1={<GreeleyLeft1/>}
          para2={<GreeleyLeft2/>}
          />
      <ContentTemplatesRight
          title1="-uHvhb.qd.*hRwrSHRw&gt;td.zSd."
          titleSpan="Greeley Grace Karen Baptist Church"
          title2="w&gt;td.zSd.t*h&gt;zk.udm"
          title3="w&gt;  td. zSd. *H&gt; bg"
          para1={<GreeleyRight1/>}
          para2={<GreeleyRight2/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
</div>
  )
}

export default GreeleyGraceKarenBaptistChurch