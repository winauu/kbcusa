import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function MainLeftSide() {
  return (
    <div className='flex flex-col border-r-[1px] gap-y-5 pr-2 border-black w-[250px]'>
      <Image src='/images/homePageLeftSideImages/sidebarpic.gif' width='245px' height='81px' alt='sidebarpic'/>
      <Image src='/images/homePageLeftSideImages/adstitle.gif' width='245px' height='33px' alt='adstitle'/>
      <Image src='/images/homePageLeftSideImages/facebook.gif' width='245px' height='81px' alt='facebook'/>
      <Image src='/images/homePageLeftSideImages/Calendar.gif' width='245px' height='81px' alt='calender'/>
      <Image src='/images/homePageLeftSideImages/KTSC Application form.gif'width='245px' height='81px' alt='applicationform'/>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>vDwJpdw</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>uasdsad</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>asdjkals</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold w-[230px]'>wsasadsas</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold w-[240px]'>sadasdsa</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>asdsa</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold font-sans'>KBCUSA 501c3 Group Exemption</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>sadsad</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>ooasidsia</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>jalsjd</h1>
      </Link>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>lklkkl</h1>
      </Link>

     
      <Image src='/images/homePageLeftSideImages/reporttitle.gif'width='245px' height='33px' alt='reportitle'/>
      <Link href='/'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold'>uksjdadfl</h1>
      </Link>
      <iframe width="245" height="170"
        src="https://www.youtube.com/embed/videoseries?list=PLiS_aW9RRE7tEvKKh2oKZ55Her7cfw9I7">
      </iframe>
      <Image src='/images/homePageLeftSideImages/facebook3.jpg'width='245px' height='130px' alt='facebook3'/>
    </div>
  )
}

export default MainLeftSide