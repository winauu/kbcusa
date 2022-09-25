import React from 'react'
import HomePagePastorsImg from '../HomePagePastorsImg'
import Image from 'next/image'

function ThirdMainContent() {
  return (
    <div>
    <Image src='/images/FirstlinkImage/firstLinkImg.jpg' width={1024} height={260} alt='firstLinkImg'/>
      <div className='flex flex-wrap w-3/4 p-2 gap-5 mx-auto'>
        <HomePagePastorsImg img='/images/ThirdLinkImages/KweKbawLay.jpg' definition='loremh akija hdslo aoiu ahd' alt='KweKbawLay'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/Nuyttin.jpg' definition='loremh akija hdslo aoiu ahd' alt='Nuyttin'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/panawdee.jpg' definition='loremh akija hdslo aoiu ahd' alt='panawdee'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/Isaac.jpg' definition='loremh akija hdslo aoiu ahd' alt='Isaac'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/MooDay.jpg' definition='loremh akija hdslo aoiu ahd' alt='Mooday'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/PoTuJu.jpg' definition='loremh akija hdslo aoiu ahd' alt='poTuJu'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/preehtoo.gif' definition='ဘၣ်ဆိၣ်ဂ့ၤကညီီဘျၢ' alt='preehtoo'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/TheBlayMoo.jpg' definition='loremh akija hdslo aoiu ahd' alt='blaymoo'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/TharJulia.jpg' definition='loremh akija hdslo aoiu ahd' alt='julia'/>
        <HomePagePastorsImg img='/images/ThirdLinkImages/TharMooStar.jpg' definition='loremh akija hdslo aoiu ahd' alt='moostar'/>
      </div>
    </div>
  )
}

export default ThirdMainContent