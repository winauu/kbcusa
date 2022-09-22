import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import KnyawLeft1 from './KnyawLeft1'
import KnyawLeft2 from './KnyawLeft2'
import KnyawRight1 from './KnyawRight1'


function OmahaKnyawBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/OmahaKnyawBaptistChurchImage/Omaha Knyaw Baptist Church.jpg' width={1024} height={260} alt='knyaw'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/OmahaKnyawBaptistChurchImage/RevKweKbaw.jpg"
        description="o&.tgpJ;rllw>td.zSd.o&."
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<KnyawLeft1/>}
        para2={<KnyawLeft2/>}
        />
      <ContentTemplatesRight
            title1="td;r[.unDbsXxHc&amp;Hmzdw&gt;td.zSd."
            titleSpan="Omaha Knyaw Baptist Church"
            title2="w&gt;td.zSd.t*h&gt;zk.udm"
            para1={<KnyawRight1/>}
            line1={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
  </div>
  )
}

export default OmahaKnyawBaptistChurch