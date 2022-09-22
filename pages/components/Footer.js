import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
   FaRegCopyright,
   FaFacebookF, 
   FaYoutube, 
   FaCcPaypal,
   FaCcVisa,
   FaCcMastercard,
   FaCcDiscover,
   FaCcAmex
  } 
   from 'react-icons/fa';


function Footer() {
  return (
    <div className='bg h-54 text-white'>
      <div className='flex justify-evenly px-10'>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Home</h1>
          <Link href='/'>ကဘျံးပၤတၢ</Link>
          <Link href="/components/SecondHomePage/SecondHomePage">ဘၣ်ဃးဒီးကဝီၤအံၤ</Link>
          <Link href="/components/ThirdHomePage/ThirdHomePage">ကဝီၤကမံးတံာ်</Link>
          <Link href="/components/childrenMinistry/ChildrenMinistry">ဝဲၤကျိၤ</Link>
          <Link href="/components/womenMinistry/WomenMinistry">ok</Link>
          <Link href="/components/youthMinistry/YouthMinistry">ok</Link>
          <Link href="/components/SixHomePage/SixHomePage">တၢ်ဆဲးကျိး</Link>
        </div>
          <hr className='border-gray-500 border-[1px] h-[190px]'/>
      </div>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Donate</h1>
          <div className='flex space-x-2'>
            <div>
              <Link href='/'>
                <FaCcPaypal className='text-6xl '/>
              </Link>
              <Link href='/'>
                <FaCcVisa className='text-6xl'/>
              </Link>
              <Link href='/'>
                <FaCcMastercard className='text-6xl'/>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <FaCcDiscover className='text-6xl'/>
              </Link>
              <Link href='/'>
                <FaCcAmex className='text-6xl'/>
              </Link>
            </div>
          </div>
        </div>
          <hr className='border-gray-500 border-[1px]  h-[190px]'/>
      </div>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5 font-sans'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Central North KBC</h1>
          <h1>E-mails:</h1>
          <p>kbcusacn@gmail.com</p>
          <p>info@kbcusacn.org</p>
          <div className='opacity-0'>
            <p>kbcusacn@gmail.com</p>
            <p>info@kbcusacn.org</p>
            <p>kbcusacn@gmail.com</p>
            <p>info@kbcusacn.org</p>

          </div>
        </div>
      </div>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5 font-sans'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Find Us On</h1>
          <div className='flex space-x-6'>
            <Link href="https://www.facebook.com/lermumar/">
              <a target="_blank">
                <FaFacebookF className='text-blue-500 text-3xl'/>
              </a>
            </Link>
            <Link href="https://www.youtube.com/user/KBCUSACN">
              <a target="_blank">
                <FaYoutube className='text-red-500 text-3xl'/>
              </a>
            </Link>
          </div>
          <div className='opacity-0'>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      <div className='font-sans flex justify-center space-x-4 bg-gray-800 w-full h-12 items-center'>
        <div className='flex items-center space-x-2'>
          <FaRegCopyright/>
          <p>NORTH REGION KAREN BAPTIST CHURCHES</p>
        </div>
        <h1 className='font-sans text-center'>Web Design by <span className='font-KNU text-2xl'>ဝ့မၠံၣ်အီၤ</span> (Win Aung)</h1>
      </div>
    </div>
  )
}

export default Footer