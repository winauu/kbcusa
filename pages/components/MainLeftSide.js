import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function MainLeftSide() {
  return (
    <div className='flex flex-col border-r-[1px] gap-y-5 pr-2 border-black w-[250px]'>
      <Image src='/images/homePageLeftSideImages/sidebarpic.gif' width='245px' height='81px'/>
      <Image src='/images/homePageLeftSideImages/adstitle.gif' width='245px' height='33px'/>
      <Image src='/images/homePageLeftSideImages/facebook.gif' width='245px' height='81px'/>
      <Image src='/images/homePageLeftSideImages/Calendar.gif' width='245px' height='81px'/>
      <Image src='/images/homePageLeftSideImages/KTSC Application form.gif'width='245px' height='81px'/>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Image src='/images/homePageLeftSideImages/reporttitle.gif'width='245px' height='33px'/>
      <Link href='/'>
        <h1>Hello</h1>
      </Link>
      <Image src='/images/homePageLeftSideImages/facebook3.jpg'width='245px' height='130px'/>
    </div>
  )
}

export default MainLeftSide