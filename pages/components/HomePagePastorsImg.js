import React from 'react'
import Image from 'next/image'

function HomePagePastorsImg({img, definition}) {
  return (
    <div className='w-[122px]'>
        <Image src={img} width='122px' height='121px'/>
        <p className='text-lg text-center'>
          {definition}
        </p>
    </div>
  )
}

export default HomePagePastorsImg