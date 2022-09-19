import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <Image 
            src="/images/header.gif"
            width={1023}
            height={129}
        />
    </div>
  )
}

export default Header