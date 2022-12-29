import React from 'react'
import Image from 'next/image'
import HomePagePastorsImg from '../HomePagePastorsImg'

function MainContentRightSide() {
  return (
    <div className='p-2 flex-1'>
      <h1 className='text-xl text-[#8C3420] py-2'>ပကွဲမုာ််ဒီးတူူလိာ််မုာ််သု</h1>
      {/* <h1 className='text-xl text-[#8C3420] py-2'>yuGJrkmf&aposD;wlIvdmfrkmfok</h1> */}
      <p className='text-xl'>
	ql y ySm ,JR o M vX t b. C; &apos;D; u vHR pd; cX. o; u 0DR u nD bsX xH c&amp;Hm zd w&gt; td. zSd. o ud; w&gt; td. zSd. tHR M. vDRIA y u 0DR t *h&gt; t usdR&lt; At w&gt; zH; w&gt; rR t 0JR usdR 0JR &apos;h w z.&lt; Aw&gt; td. zSd. vX t rR o ud; w&gt; vX u 0DR tHR t ylR w z.&lt; A y [D. u 0DR uD&gt; pJ. t *h&gt; t usdR Ckm &apos;D; w&gt; *h&gt; t *kR t *R oh. w z. y Ck xH. oh. ng tDR ohzJ y ySm ,JR o M t ylR tHR M. vDRI A rf c&amp;Hm t w&gt; Cl w&gt; zd; vDR b. vX ok vdR xl; xl; wDR wDR ud; *R w uh&gt; M. rh&gt; y u 0DR t w&gt; qX *hR ok M . vDRI 
      </p>
      <div className='py-7'>
        <Image src='/images/homePageRightSideImages/churches-title.gif' width={492} height={33} alt='churchestitle'/>
      </div>
      <div className='flex flex-wrap gap-5'>
         <HomePagePastorsImg img='/images/homePageRightSideImages/pastor.gif' definition="b. qd. *hR u nD bsX xH c&Hm zd w> td. zSd.
A(rH; pl. &H.)" alt='paster' link="/components/Churches/GKBC/GraceKarenBaptistChurch"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Nuyttin.jpg' definition="o &dm wX u nD bsX xH c&Hm zd w> td. zSd.
A(0h> td. r [.)" alt='nuyttin' link="/components/Churches/FKBCO/FirstKarenBaptistChurchOfOmaha"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/RevKweKbaw.jpg' definition='td. r [. u nD bsX xH &Hm zd w> td. zSd.
A(0h> td. r [.)' alt='revKweKbaw' link="/components/Churches/OKBC/OmahaKnyawBaptistChurch"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Isaac.jpg' definition='vh cX. u nD bsX xH c&Hm zd w> td. zSd.
A(0h> vh cX.)' alt='Isaac' link="/components/Churches/KBCL/KarenBaptistChurchOfLincoln"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/LarMoo.jpg' definition="'JbX.u nD bsX xH c&Hm zd w> td. zSd.
(0h>'JbX.)" alt='larMoo' link="/components/Churches/KBCD/KarenBaptistChurchOfDenver"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/NayLinTun.jpg' definition="-uH vh b. qd. *hR w rSHR w> td. zSd.
A(0h>-uHvh)" alt='NayLinTun' link="/components/Churches/GGKBC/GreeleyGraceKarenBaptistChurch"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Debora.jpg' definition="unDbsXxH c&Hm zd thR bhR M p> w> td. zSd. (cd.vd.&.'d>)" alt='debora' link="/components/Churches/KEBC/KarenEbenezerBaptistChurch"/> 
        <HomePagePastorsImg img='/images/homePageRightSideImages/EhNayMoo.jpg' definition="xH*X>eHRunDbsXxHc& Hmzdw>td.zSd.(0h> td. r [.)" alt='EhNayMoo' link="/"/> 
        <HomePagePastorsImg img='/images/homePageRightSideImages/TeeMohBwarKarenBaptistChurch.jpg' definition="xHrd>yS>unDbsXxH
c& Hmzdw>td.zSd.
(0h> td. r [.)" alt='TeeMohBwar' link="/"/> 
        <HomePagePastorsImg img='/images/homePageRightSideImages/TharHsaEhWah.gif' definition="{hRrREkRthv; unDbsXxH
c& Hmzdw>td.zSd.
(0h> td. r [.)" alt='EhWah' link="/"/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/pastor-1.gif' definition="cJpX.pH;xHRcJpX.unDbsXxH
c&Hmzdw>td.zSd.
(0h> cJpJX.)" alt='paster-1'link="/"/> 
      </div>
    </div>
  )
}

export default MainContentRightSide