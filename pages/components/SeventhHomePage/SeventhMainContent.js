import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SeventhMainContentTemplates from './SeventhMainContentTemplates'
import listOfLinks from '../../../linksoflinks'
function SeventhMainContent() {
  
  return (
    <div>
      <Image src='/images/SeventhlinkImages/record.jpeg' width={1024} height={260} alt='record'/>
      <div className='min-h-screen bg-white p-2'>
        <div className='w-3/4 mx-auto'>
            <h1 className='text-[#8C3420] text-3xl text-center py-3'>uvHRpd;cX.o;u0DRAw{'>'}uGJ;eD.Awz.</h1>
            <hr className='font-bold text-3xl w-3/4 mx-auto border-[1px] border-black mb-3'/>
            <div className='list-decimal w-3/4 mx-auto flex flex-col text-2xl'>
              
            {listOfLinks.map(item => (
              <SeventhMainContentTemplates 
                key={item.id}
                title={item.title}
                link={item.link}
                />
            ))}
            </div>
       
		
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              this is the second section of the page
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          
          <h3 className='text-[#8C3420] text-3xl text-center py-3'>u0DRvHmvJ&gt;t'dwz.</h3>
          <hr className='font-bold text-3xl w-3/4 mx-auto border-[1px] border-black mb-3'/>
          <ol className='list-decimal flex flex-col w-3/4 mx-auto text-2xl'>
            <li className='font-sans'>
              <Link href="/resources/downloads/KBCUSA CN Logo.jpg">
                  <a title="Logo" target="_new" className='font-[KNU] focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'> u0D vdRudR</a>
              </Link>
            </li> 

           <li className='font-sans'>
            <Link href="/resources/downloads/KBCUSA CN Receipt.pdf">
              <a title="Received" target="_new" className='font-[KNU] focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'> u0DRAvHmwl&gt;vdmph A(t'd)</a>
            </Link>
           </li> 
           <li className='font-sans'>
            <Link href="/resources/downloads/Report for church.pdf">
              <a title="Report For Church" target="_new" className='font-[KNU] focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'>w&gt;td. zSd.tvHm ym zsgA(t'd)</a>
            </Link>
           </li> 
           <li className='font-sans'>
            <div className='flex space-x-2'>
              <h1 className='font-[KNU] focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'>u 0DR t vHm y &amp;X w uGD. t'd </h1>

              <Link className='list-decimal' href="/resources/downloads/KBCUSA CN Letter Head.docx">
                <a className='font-sans focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1' target="_blank">( Word )</a>
              </Link>
              <p className='font-sans'>or</p>
         
              <Link href="/resources/downloads/KBCUSA CN Letter Head Plain.pdf">
                <a  target="_new" className='font-sans focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'>( PDF )</a>
              </Link>
            </div>
           </li>
           <li className='font-sans'>
             <div className='flex space-x-2'>
              <h1 className='font-[KNU]'>rHR vHm uh zd w z. (t'd) </h1>
              <Link href="/resources/downloads/KBCUSA CN Letter Head.docx">
                <a target="_blank" className='font-sans focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'>( Word )</a>
              </Link>
              <p className='font-sans'>or</p>
              <Link href="/resources/downloads/KBCUSA CN Letter Head Plain.pdf" >
                <a  target="_new" className='font-sans focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'>( PDF )</a> 
              </Link>
             </div>
           </li>
          <li className='font-sans visited:text-purple-600'>
             <div className='flex space-x-2'>
              <h1 className='font-[KNU]'>ySR xD. w&gt; td. zSd. t p &amp;D A(t 'd) </h1>
      
              <Link href="/resources/downloads/Central North contact list.xls">
                <a className='font-sans focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'>( Excel )</a> 
              </Link>
              <p className='font-sans'>or</p>
              <Link href="/resources/downloads/Central North contact list.pdf">
                <a target="_new" className='font-sans focus:border-blue-400 focus:border-2 focus:px-2 focus:py-1'> ( PDF )</a>
              </Link>			
             </div>
          </li>
          </ol>

	  
    
           
        </div>
      </div>
    </div>
  )
}

export default SeventhMainContent