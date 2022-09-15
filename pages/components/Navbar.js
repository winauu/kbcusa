import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa';


function Navbar() {
  return (
    <div className='bg-gray-800 flex justify-center items-center space-x-4 text-white h-12'>
        <Link href="/">
          <FaHome className='w-8 h-8 hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'/>
        </Link>
          <Link href="/components/SecondHomePage">
            <h1 className='hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ဘၣ်ဃးဒီးကဝီၤအံၤ</h1>
          </Link>
        <Link href="/components/ThirdHomePage">
          <h1 className='hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ကဝီၤကမံးတံာ်</h1>
        </Link>
        <div className='relative group z-50'>
          <Link href="#">
            <h1 className='hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ဝဲကျိၤတဖၣ်</h1>
          </Link>
          <div className='absolute top-6 -left-4 bg-gray-800 w-44 p-2 hidden group-hover:block font-sans'>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>YOUTH MINISTRY</h1>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>WOMEN MINISTRY</h1>
            <h1 className='hover:bg-blue-700 hover:cursor-pointer'>CHILDREN MINISTRY</h1>
          </div>
        </div>
        <div className='relative group z-50'>
          <Link href="#">
            <h1 className='hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>တၢ်အိၣ်ဖှၣ်တဖၣ်</h1>
          </Link>
          <div className='absolute top-6 -left-4 bg-gray-800 w-96 hidden group-hover:block p-2 font-sans'>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KAREN BAPTIST CHURCH OF LICOLN</h1>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>FIRST KAREN BAPTIST CHURCH OF OMAHA</h1>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>GRACE KAREN BAPTIST CHURCH</h1>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>OMAHA KNYAW BAPTIST CHURCH</h1>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KAREN BAPTIST CHURCH OF DENVER</h1>
            <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>GREELEY GRACE KAREN BAPTIST CHURCH</h1>
            <h1 className='hover:bg-blue-700 hover:cursor-pointer'>KAREN EBENEZER BAPTIST CHURCH</h1>
          </div>
        </div>
        <Link href="/components/SixHomePage">
          <h1 className='hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>တၢ်ဆဲးကျိး</h1>
        </Link>
        <Link href="/components/SeventhHomePage">
          <h1 className='hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 pr-2'>တအိၣ်ယၢၤ</h1>
        </Link>
    </div>
  )
}

export default Navbar