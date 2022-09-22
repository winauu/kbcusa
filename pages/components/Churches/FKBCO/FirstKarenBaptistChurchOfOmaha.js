import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import FKBCOParagraph1Right from './FKBCOParagraph1Right'
import FKBCOParagraph2Right from './FKBCOParagraph2Right'
import FKBCOParagraph1Left from './FKBCOParagraph1Left'
import FKBCOParagraph2Left from './FKBCOParagraph2Left'

function FirstKarenBaptistChurchOfOmaha() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
      <Header/>
      <Navbar/>
      <Image src='/images/FirstKarenBaptistChurchOfOmahaImage/First Karen Baptist Church of Omaha.jpg' width={1024} height={260} alt='omaha'/>
      <div className='flex bg-white'>
        <ContentTemplatesLeft
          title="w>td.zSd.o&." 
          pic="/images/FirstKarenBaptistChurchOfOmahaImage/Nuyttin.jpg"
          description="o&.tgpJ;rllw>td.zSd.o&."
          title2="w> bg t qX u wD>"
          title3="vXw>qJ;usd;t*D>"
          para1={<FKBCOParagraph1Left/>}
          para2={<FKBCOParagraph2Left/>}
          />
        <ContentTemplatesRight
          title1="unDbsXxHc&amp;Hmzdo&amp;dmwXtd;r[.w&gt;td.zSd."
          titleSpan="Omaha First Karen Baptist Church"
          title2="w&gt;td.zSd.t*h&gt;zk.udm"
          title3="w&gt;  td. zSd. cd. e&gt; ySR wD cd. &amp;d. rJ w&gt; w z."
          para1={<FKBCOParagraph1Right/>}
          para2={<FKBCOParagraph2Right/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default FirstKarenBaptistChurchOfOmaha