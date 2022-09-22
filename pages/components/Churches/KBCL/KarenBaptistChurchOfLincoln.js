import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import Navbar from '../../Navbar'
import Image from 'next/image'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import KBCLParagraph1Right from './KBCLParagraph1Right'
import KBCLParagraph2Right from './KBCLParagraph2Right'
import KBCLParagraph1Left from './KBCLParagraph1Left'
import KBCLParagraph2Left from './KBCLParagraph2Left'
import KBCLParagraph3Right from './KBCLParagraph3Right'
import KBCLParagraph4Right from './KBCLParagraph4Right'
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
        para1={<KBCLParagraph1Left/>}
        para2={<KBCLParagraph2Left/>}
        />
      <ContentTemplatesRight
          title1="vhcX.unDbsXxHc&Hmzdw>td.zSd."
          titleSpan="First Karen Baptist Church of Lincoln"
          para1={<KBCLParagraph1Right/>}
          title2="w>td.zSd.t*h>zk.udm"
          para2={<KBCLParagraph2Right/>}
          para3={<KBCLParagraph3Right/>}
          para4={<KBCLParagraph4Right/>}
          title3="w> td. zSd. ySR wD cd. &d. rJ w>"
          title4="(cIw)A c&amp;Hm  zd w&gt; od. vdySR b. rl b. 'g w z. rh&gt; 0J"
          title5="w&gt;  td. zSd. t w&gt; [l; w&gt; *JR "
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

export default KarenBaptistChurchOfLincoln