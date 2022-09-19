import {useState} from 'react'
import { FaHome, FaTelegramPlane } from 'react-icons/fa';
import EmailLoading from './EmailLoading';
import Link from 'next/link';
import { motion } from "framer-motion"

function EmailSent() {
    const [turnTrue, setTurnTrue] = useState(true);
    setTimeout(()=> {
        setTurnTrue(false)
    }, 2000)
  
  return (
    <div>
    {turnTrue ? <EmailLoading/> : 
    <div className='min-h-screen bg-white p-2 font-sans'>
    <motion.div  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["2%", "2%", "2%", "2%", "2%"],
    }}
     className='w-96 mx-auto mt-60 mb-5 py-2 rounded text-gray-600 bg-green-300 flex flex-col justify-center items-center'>
            <FaTelegramPlane className='text-center text-7xl animate-pulse'/>
            <p className='w-96 word-wrap text-center text-xl mx-auto pb-4'>
                Your email has been successful sent. Please kindly and patiently wait for one of us to reach out.
                Thank you for reaching out to <span className='text-[#8C3420] font-bold text-2xl italics'>KBCUSA</span>.
            </p>
        </motion.div>
        <div className='text-center flex justify-center'>
            <Link href='/'>
            <button className='flex items-center justify-center bg-purple-500 text-white px-5 py-4 rounded font-bold'>
                <FaHome className='text-2xl pr-2'/>
                Home
            </button>
            </Link>
        </div>
    </div>
    }
    </div>
  )
}

export default EmailSent