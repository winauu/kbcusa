import React from 'react'

function ContentTemplatesRight({title1, title2, title3, title4, title5, title6, titleSpan, 
  line1, line2, line3, line4, line5, 
  para1, para2, para3, para4}) {
  return (
    <div className='px-5 w-[80%] p-2 text-xl'>
      <h1 className='text-[#8C3420] text-2xl'>{title1}<span className='font-sans'>-{titleSpan}</span></h1>
      <h1 className='pt-4 text-2xl text-[#8C3420] '>{title2}</h1>
      {line1}
      <p className='py-3 text-xl'>{para1}</p>
      <h1 className='text-2xl text-[#8C3420]'>{title3}</h1>
      {line2}
      <p className='py-3 text-xl'>{para2}</p>
      <h1 className='text-2xl text-[#8C3420]'>{title4}</h1>
      {line3}
      <p>{para3}</p>
      <h1 className='text-2xl text-[#8C3420]'>{title5}</h1>
      {line4}
      <p>{para4}</p>
      <h1 className='text-2xl text-[#8C3420]'>{title6}</h1>
      {line5}
    </div>
  )
}

export default ContentTemplatesRight