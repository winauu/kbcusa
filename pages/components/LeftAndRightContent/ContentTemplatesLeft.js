import React from 'react'
import Image from 'next/image'

function ContentTemplatesLeft({title, pic, description, title2, title3, para1, para2}) {
  return (
    <div className='min-h-screen bg-white p-2 w-[250px] text-xl'>
        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title}</h1>
        </div>
        <div className='w-[122px] mx-auto'>
            <Image src={pic} width={122} height={121} alt='ok'/>
            <p className='text-[#8C3420] text-center text-2xl break-words'>{description}</p>
        </div>
        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title2}</h1>
            <p>{para1}</p>
        </div>
        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title3}</h1>
            <p>{para2}</p>
        </div>
    </div>
  )
}

export default ContentTemplatesLeft