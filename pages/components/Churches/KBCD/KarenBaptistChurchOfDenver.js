import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import DeverLeft1 from './DeverLeft1'
import DenverLeft2 from './DenverLeft2'
import DenverRight1 from './DenverRight1'
import DeverRight2 from './DeverRight2'
import DenverRight3 from './DenverRight3'
import DenverRight4 from './DenverRight4'

function KarenBaptistChurchOfDenver() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenBaptistChurchOfDenverImage/First Karen Baptist Church of Denver.jpg' width={1024} height={260} alt='denver'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/KarenBaptistChurchOfDenverImage/Lar Moo.jpg"
        description="o&.tgpJ;rllw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<DeverLeft1/>}
        para2={<DenverLeft2/>}
        />
      <ContentTemplatesRight
           title1="'JbX.unDbsXxHc&amp;Hmzdw&gt;td.zSd."
           titleSpan="First Karen Baptist Church Of Denver"
           title2=" w&gt;td.zSd.t*h&gt;zk.udm"
           title3="w&gt;   wD cd. &amp;d. rJ 'D; w&gt; qD vDR ym vDR"
           title4="w&gt; [l; w&gt; *JR w z."
           title5="w&gt;  td. zSd. t w&gt; o; ck u pD. w&gt; rR vD&gt; w z."
           para1={<DenverRight1/>}
           para2={<DeverRight2/>}
           para3={<DenverRight3/>}
           para4={<DenverRight4/>}
           line1={<hr className='w-[98%] border-[.5px] border-black'/>}
           line2={<hr className='w-[98%] border-[.5px] border-black'/>}
           line3={<hr className='w-[98%] border-[.5px] border-black'/>}
           line4={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
  </div>
  )
}

export default KarenBaptistChurchOfDenver