
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';


function SixMainContent({handleSubmit,setHandleSumbit}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      
      setHandleSumbit(true)
      emailjs.sendForm('service_b1flkte', 'template_8bn17ud', form.current, 'ZxuKELkVUqLJ1X_yP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
  return (
      <div className='min-h-screen  bg-white p-2'>
      <div className='w-[350px] mx-auto '>
    `  <h1 className='text-center text-3xl py-5'>OKOKAKAK</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-1'>
          <input className='border-[1px] rounded px-2 border-black font-sans' type="text" placeholder='Subject' name='subject' required/>
          <input className='border-[1px] rounded px-2 border-black font-sans' type="text" placeholder='Name' name='name' required/>
          <input className='border-[1px] rounded px-2 border-black font-sans'  type="text" placeholder='Email' name='email' required/>
          <input className='border-[1px] rounded px-2 border-black font-sans'  type="text" placeholder='Phone' name='phone' required/>
          <textArea className='border-[1px] rounded px-2 border-black font-sans'  type="text" placeholder='Message' name='message' required/>
          <button className='bg-purple-700 text-white h-10 rounded px-2 font-sans' type='submit'>Submit</button>
        </form>
         <h1 className='text-3xl py-5'>AJSKJKSAJKJKAS</h1>
         <div className='flex justify-between space-x-40'>
           <div>
            <div className='pb-5'>
              <p>OK</p>
              <p>JKHASK</p>
              <p className='font-sans'>pdee@kbcusacn.org</p>
              <p className='font-sans'>402-601-9414</p>
            </div>
            <div>
              <p>SASA</p>
              <p>AAS</p>
              <p className='font-sans'>pwah@kbcusacn.org</p>
              <p className='font-sans'>402-594-4502</p>
              <p>AS</p>
              <p className='font-sans'>970-405-1856</p>
            </div>
           </div>
           <div>
            <div className='pb-5'>
              <p>ASA</p>
              <p>SASA</p>
              <p className='font-sans'>kpawsoe@kbcusacn.org</p>
              <p className='font-sans'>816-606-3041</p>
              <p>YEU.</p>
              <p className='font-sans'>402-314-1810</p>
            </div>
            <div>
              <p>aa</p>
              <p>LOK</p>
              <p className='font-sans'>720-216-3173</p>
              <div className='flex items-center pt-5'>
                <p className='font-sans'>Email provider: </p>
                <Image src='/images/emailjs-removebg-preview (1).png' width='90px' height='80px' alt='emailjs'/><span className='font-bold text-orange-500 font-sans'>EmailJs</span>
              </div>
            </div>
           </div>
         </div>
      </div>
      
      </div>
  )
}

export default SixMainContent