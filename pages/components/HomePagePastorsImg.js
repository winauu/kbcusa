import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

function HomePagePastorsImg({img, definition, alt, link}) {


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-[122px]'>
        <Link href={`${link}`}>
          <div onMouseOver={() => setIsOpen(isOpen => !isOpen)} className='group'>
            <Image  className='hover:cursor-pointer' src={img} width='122px' height='121px' alt={alt}/>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className='w-full h-1 group-hover:bg-blue-400'></motion.div>
          </div>
        </Link>
        <p className='text-lg text-center'>
          {definition}
        </p>
    </div>
  )
}

export default HomePagePastorsImg