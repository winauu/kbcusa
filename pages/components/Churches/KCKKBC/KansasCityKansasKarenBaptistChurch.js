import Image from 'next/image'
import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import KCKKBCparagraph1Left from './KCKKBCparagraph1Left'
import KCKKBCparagraph1Right from './KCKKBCparagraph1Right'
import KCKKBCparagraph2Left from './KCKKBCparagraph2Left'
import KCKKBCparagraph2Right from './KCKKBCparagraph2Right'

function KansasCityKansasKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KansasCityKansasKarenBaptistChurch/KansasCityKansasKarenBaptistChurch.gif' width={1024} height={260} alt='greeley'/>
    <div className='flex bg-white px-20'>
      <ContentTemplatesLeft
          title="w>td.zSd.o&." 
          pic="/images/homePageRightSideImages/pastor-1.gif"
          description="o&.%SrdR{hvR w>td.zSd.o&."
          title2="w> bg t qX u wD>"
          title3="vXw>qJ;usd;t*D>"
          para1={<KCKKBCparagraph1Left/>}
          para2={<KCKKBCparagraph2Left/>}
          />
      <ContentTemplatesRight
          title1="unDbsXxHc&Hmzdw>td.zSd."
          titleSpan="Kansas City Kansas Karen Baptist Church"
          title2="w&gt;td.zSd.t*h&gt;zk.udm"
          title3="w> td. zSd. cd. e> ySR wD cd. & d. rJ w> w z."
          para1={<KCKKBCparagraph1Right/>}
          para2={<KCKKBCparagraph2Right/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
</div>
  )
}

export default KansasCityKansasKarenBaptistChurch