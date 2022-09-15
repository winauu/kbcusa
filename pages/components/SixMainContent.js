import React from 'react'

function SixMainContent() {
  return (
    <div className='min-h-screen  bg-white p-2'>
       <h1>Karen</h1>
       <form className='flex flex-col w-[350px] mx-auto gap-y-1'>
         <input className='border-[1px] rounded px-2 border-black font-sans' type="text" placeholder='Name'/>
         <input className='border-[1px] rounded px-2 border-black font-sans'  type="text" placeholder='Email'/>
         <input className='border-[1px] rounded px-2 border-black font-sans'  type="text" placeholder='Phone'/>
         <textArea className='border-[1px] rounded px-2 border-black font-sans'  type="text" placeholder='Message'/>
         <button className='bg-purple-700 text-white h-10 rounded px-2 font-sans' type='submit'>Submit</button>
       </form>

    </div>
  )
}

export default SixMainContent