import React from 'react'
import Image from 'next/image'
import HomePagePastorsImg from '../HomePagePastorsImg'

function MainContentRightSide() {
  return (
    <div className='p-2 flex-1'>
      <h1 className='text-2xl text-[#8C3420] py-2'>ပကွဲမုာ််ဒီးတူူလိာ််မုာ််သု</h1>
      <p className='text-xl'>lljlfajdlkjdsaljfslajfalkjflkjaslkfjlajlafjljkdjaljaflj</p>
      <p className='text-red-500 text-2xl'>helloola wzk</p>
      <div className='py-7'>
        <Image src='/images/homePageRightSideImages/churches-title.gif' width={492} height={33} alt='churchestitle'/>
      </div>
      <div className='flex flex-wrap gap-5'>
        <HomePagePastorsImg img='/images/homePageRightSideImages/pastor.gif' definition="hello" alt='paster'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Nuyttin.jpg' definition="hello" alt='nuyttin'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/RevKweKbaw.jpg' definition="hello" alt='revKweKbaw'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Isaac.jpg' definition="hello" alt='Isaac'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Lar Moo.jpg' definition="hello" alt='larMoo'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/NayLinTun.jpg' definition="hello" alt='NayLinTun'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/Debora.jpg' definition="unDbsXxH c&Hm zd thR bhR M p> w> td. zSd. (cd.vd.&.'d>)" alt='debora'/> 
         <HomePagePastorsImg img='/images/homePageRightSideImages/EhNayMoo.jpg' definition="hello" alt='EhNayMoo'/> 
        <HomePagePastorsImg img='/images/homePageRightSideImages/Tee Moh Bwar Karen Baptist Church.jpg' definition="hello" alt='TeeMohBwar'/> 
        <HomePagePastorsImg img='/images/homePageRightSideImages/Thar Hsa Eh Wah.gif' definition="hello" alt='EhWah'/>
        <HomePagePastorsImg img='/images/homePageRightSideImages/pastor-1.gif' definition="hello" alt='paster-1'/> 
      </div>
    </div>
  )
}

export default MainContentRightSide