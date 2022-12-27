import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa';


function Navbar() {
  return (
    <div className=' bg-gray-800 flex justify-center items-center space-x-4 text-white h-12 z-50'>
        <Link href="/">
          <FaHome className='w-8 h-8 hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'/>
        </Link>
          <Link href="/components/SecondHomePage/SecondHomePage">
            <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ဘၣ်ဃးဒီးကဝီၤအံၤ</h1>
          </Link>
        <Link href="/components/ThirdHomePage/ThirdHomePage">
          <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ကဝီၤကမံးတံာ်</h1>
        </Link>
        <div className='relative group'>
          <Link href="#">
            <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ဝဲကျိၤတဖၣ်</h1>
          </Link>
          <div className='absolute top-6 -left-4 bg-gray-800 w-44 p-2 hidden group-hover:block font-sans z-50'>
            <Link href="/components/youthMinistry/YouthMinistry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>YOUTH MINISTRY</h1>
            </Link>
            <Link href="/components/womenMinistry/WomenMinistry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>WOMEN MINISTRY</h1>
            </Link>
            <Link href="/components/childrenMinistry/ChildrenMinistry">
              <h1 className='hover:bg-blue-700 hover:cursor-pointer'>CHILDREN MINISTRY</h1>
            </Link>
          </div>
        </div>
        <div className='relative group z-10'>
          <Link href="#">
            <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>တၢ်အိၣ်ဖှၣ်တဖၣ်</h1>
          </Link>
          <div className='absolute top-6 -left-4 bg-gray-800 w-96 hidden group-hover:block p-2 font-sans'>
            <Link href="/components/Churches/KBCL/KarenBaptistChurchOfLincoln">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KAREN BAPTIST CHURCH OF LICOLN</h1>
            </Link>
            <Link href="/components/Churches/FKBCO/FirstKarenBaptistChurchOfOmaha">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>FIRST KAREN BAPTIST CHURCH OF OMAHA</h1>
            </Link>
            <Link href="/components/Churches/GKBC/GraceKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>GRACE KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/OKBC/OmahaKnyawBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>OMAHA KNYAW BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/KBCD/KarenBaptistChurchOfDenver">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KAREN BAPTIST CHURCH OF DENVER</h1>
            </Link>
            <Link href="/components/Churches/GGKBC/GreeleyGraceKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>GREELEY GRACE KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/KEBC/KarenEbenezerBaptistChurch">
              <h1 className='hover:bg-blue-700 hover:cursor-pointer'>KAREN EBENEZER BAPTIST CHURCH</h1>
            </Link>
          </div>
        </div>
        <Link href="/components/SixHomePage/SixHomePage">
          <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>တၢ်ဆဲးကျိး</h1>
        </Link>
        <Link href="/components/SeventhHomePage/SeventhHomePage">
          <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 pr-2'>တအိၣ်ယၢၤ</h1>
        </Link>
    </div>
  )
}

export default Navbar