import React from 'react'
import Image from 'next/image'
import HomePagePastorsImg from '../HomePagePastorsImg'

function MainRightSide() {
  return (
    <div className='p-2 flex-1'>
      <h1 className='text-3xl text-[#8C3420] py-2'>ပကွဲမုာ််ဒီးတူူလိာ််မုာ််သု</h1>
      <p className='text-xl'>
      ql y ySm ,JR o M vX t b. C; 'D; u vHR pd; cX. o; u 0DR u nD bsX xH c&Hm zd w{'>'} td. zSd. o ud; w{'>'} td. zSd. tHR M. vDRIA y u 0DR

      pJ. t *h{'>'} t usdR Ckm 'D; w{'>'} *h{'>'} t *kR t *R oh. w z. y Ck xH. oh. ng tDR ohzJ y ySm ,JR o M t ylR tHR M. vDRI A rf c&Hm t w{'>'} Cl w{'>'} zd; vDR b. vX ok vdR xl; xl; wDR wDR ud; *R w uh{'>'} M. rh{'>'} y u 0DR t w{'>'} qX *hR ok M . vDRI
      </p>
      <p className='text-red-500 text-2xl'>AyXqSX w{'>'} u rH;wHR tqd u wX{'>'} wzk</p>
      <div className='py-7'>
        <Image src='/images/homePageRightSideImages/churches-title.gif' width={492} height={33}/>
      </div>
      <div className='flex flex-wrap gap-5'>
        <HomePagePastorsImg img='/images/homePageRightSideImages/pastor.gif' definition="b. qd. *hR u nD bsX xH c&Hm zd w> td. zSd.
A(rH; pl. &H.)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Nuyttin.jpg' definition="o &dm wX u nD bsX xH c&Hm zd w> td. zSd.
A(0h> td. r [.)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/RevKweKbaw.jpg' definition='td. r [. u nD bsX xH &Hm zd w> td. zSd.
A(0h> td. r [.)'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Isaac.jpg' definition='vh cX. u nD bsX xH c&Hm zd w> td. zSd.
A(0h> vh cX.)'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Lar Moo.jpg' definition="'JbX.u nD bsX xH c&Hm zd w> td. zSd.
(0h>'JbX.)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/NayLinTun.jpg' definition="-uH vh b. qd. *hR w rSHR w> td. zSd.
A(0h>-uHvh)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Debora.jpg' definition="unDbsXxH c&Hm zd thR bhR M p> w> td. zSd. (cd.vd.&.'d>)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/EhNayMoo.jpg' definition="xH*X>eHRunDbsXxH
c& Hmzdw>td.zSd.
(0h> td. r [.)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Tee Moh Bwar Karen Baptist Church.jpg' definition="xHrd>yS>unDbsXxH
c& Hmzdw>td.zSd.
(0h> td. r [.)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Thar Hsa Eh Wah.gif' definition="{hRrREkRthv; unDbsXxH
c& Hmzdw>td.zSd.
(0h> td. r [.)"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/pastor-1.gif' definition="cJpX.pH;xHRcJpX.unDbsXxH
c&Hmzdw>td.zSd.
(0h> cJpJX.)"/>
      </div>
    </div>
  )
}

export default MainRightSide