import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='bg-purple-500 text-white flex items-center justify-center space-x-10'>
        {/* <Image 
            src="/images/header.gif"
            width={1023}
            height={129}
        /> */}
        <div>
          <Image src='/kbcusalogo.png' width={140} height={140} alt='logo'/>
        </div>
        <div className='text-4xl'>
          <h1 className='font-sans pb-3'>Central North Area</h1>
          <p>ခၢၣ်သးကလံၤကဝီၤ</p>
        </div>
        <div>
          <h1 className='header-font text-6xl text-red-600 shadow'>KBCUSA</h1>
        </div>
    </div>
  )
}

export default Header