import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import EbenezarLeft1 from './EbenezarLeft1'
import EbenezarLeft2 from './EbenezarLeft2'
import EbenezarRight1 from './EbenezarRight1'
import EbenezarRight2 from './EbenezarRight2'
import EbenezarRight3 from './EbenezarRight3'

function KarenEbenezerBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenEbenezerBaptistChurchImage/Ebenezer Karen Baptist Church.jpg' width={1024} height={260} alt='ebenezer'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/KarenEbenezerBaptistChurchImage/Debora.jpg"
        description="o&.tgpJ;rllw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<EbenezarLeft1/>}
        para2={<EbenezarLeft2/>}
       
        />
      <ContentTemplatesRight
            title1="unDbsXxHc&amp;HmzdthRbhRMp&gt;w&gt;td.zSd."
            titleSpan="Karen Ebenezer Baptist Church"
            title2=" w&gt;td.zSd.t*h&gt;zk.udm"
            title3="w&gt;  td. zSd. ySR wD cd. &amp;d. rJ w&gt;"
            title4="w&gt;  td. zSd. t w&gt; [l; w&gt; *JR"
            para1={<EbenezarRight1/>}
            para2={<EbenezarRight2/>}
            para3={<EbenezarRight3/>}
            line1={<hr className='w-[98%] border-[.5px] border-black'/>}
            line2={<hr className='w-[98%] border-[.5px] border-black'/>}
            line3={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
  </div>
  )
}

export default KarenEbenezerBaptistChurch