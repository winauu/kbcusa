import React from 'react'
import MainLeftSide from './mainLeftSide'
import MainRightSide from './mainRightSide'
import Image from 'next/image'
const MainContent = () => {
  return (
    <div>
      <Image src='/images/SeventhLinkImages/record.jpeg' width={1024} height={260} />
      <div className='min-h-screen bg-white p-2 flex'>
        <MainLeftSide/>
        <MainRightSide/>
      </div>

    </div>
  )
}

export default MainContent