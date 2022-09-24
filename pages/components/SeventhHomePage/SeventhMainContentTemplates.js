import React from 'react'
import Link from 'next/link'

function SeventhMainContentTemplates({title, link}) {
  return (
    <li className='list-decimal font-sans'>
        <Link href={`${link}`}>
            <a target="_blank" className="focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1 font-[KNU]">{title}</a> 
        </Link>
    </li> 
  )
}

export default SeventhMainContentTemplates