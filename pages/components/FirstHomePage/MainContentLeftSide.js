import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function MainContentLeftSide() {
  return (
    <div className='flex flex-col border-r-[1px] gap-y-5 pr-2 border-black w-[280px]'>
      <Image src='/images/homePageLeftSideImages/sidebarpic.gif' width='245px' height='81px' alt='sidebarpic'/>
      <Image src='/images/homePageLeftSideImages/adstitle.gif' width='245px' height='33px' alt='adstitle'/>
      <Link href="https://www.facebook.com/lermumar/">
        <a target="_blank" className='hover:cursor-pointer'>
          <Image src='/images/homePageLeftSideImages/facebook.gif' width='270px' height='81px' alt='facebook'/>
        </a>
      </Link>
      <Link href="/components/Calendar/Calender">
        <a target="_blank" className='hover:cursor-pointer'>
          <Image src='/images/homePageLeftSideImages/Calendar.gif' width='270px' height='81px' alt='calender'/>
        </a>
      </Link>
      <Link href="/resources/Meeting_report/KTSC Application Form.pdf">
        <a target="_blank">
          <Image src='/images/homePageLeftSideImages/applicationform.gif' width='270px' height='81px' alt='applicationform'/>
        </a>
      </Link>
      <Link href='/resources/Meeting_report/Meeting 10/Phone meeting for CN training second time.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>vDwJpdw{'>'}td.zSd.vX u0DR w{'>'}rRvdcHbsDwbsD*D{'>'}</a>
      </Link>
      <Link href='/resources/downloads/KBCUSA ByLaw.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>u&Xrd{'>'}yS{'>'} w{'>'}bsXcd.oh.</a>
      </Link>
      <Link href='/resources/Meeting_report/KBCUSA department training 2016.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>u&Xrd{'>'}yS{'>'}`&apos;`D;0JRusdRwz. w{'>'}td.zSd.`&apos;`D;w{'>'}rRvdwz.t*h{'>'}</a>
      </Link>
      <Link href='/resources/Meeting_report/KBCUSA evangelical department training 2016.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>w{'>'}bd;b.oh.ng`&apos;`D; vHmw{'>'}uGJrkm b.C;w{'>'}o;ckupD.0JRusdRw{'>'}rRvd</a>
      </Link>
      <Link href='/resources/Meeting_report/KBCUSA religion education training 2016.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>w{'>'}bd;b.oh.ng `&apos;`D; vHmw{'>'}uGJrkm b.C; c&Hmzd w{'>'}ul. b.ul.oh 0JRusdR w{'>'}rRvd</a>
      </Link>
      <Link href='/resources/Meeting_report/kbcusa regional report.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>u0DRw{'>'}ymzsg ql u&Xrd{'>'}yS{'>'} w{'>'}td{'>'}zSd.z;`&apos;`d. t`&apos;`d</a>
      </Link>
      <Link href='/resources/Meeting_report/KBCUSA 501c3 exemptions.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold font-sans hover:text-purple-500 hover:cursor-pointer'>KBCUSA 501c3 Group Exemption</a>
      </Link>
      <Link href='/resources/Meeting_report/KBCUSA annual meeting 2016.pdf'>
        <a target='_blank'  className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>u&Xrd{'>'}yS{'>'} w{'>'}td{'>'}zSd.z;`&apos;`d. w{'>'}qJ;vDRrHR vHmywH</a>
      </Link>
      <Link href='/resources/Meeting_report/KBCUSA minister conference 3-21.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>o&.orgw{'>'}&hvdmrkmvdm u&Xzd vHmtk.o;</a>
      </Link>
      <Link href='/resources/Meeting_report/Report for church.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>w{'>'}td.zSd.vHmuvlRt`&apos;`d</a>
      </Link>
      <Link href='/resources/downloads/KBCUSA CN Receipt.pdf'>
        <a target='_blank' className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'> u0DRA vHm wl{'>'} vdm ph</a>
      </Link>

     
      <Image src='/images/homePageLeftSideImages/reporttitle.gif'width='270px' height='33px' alt='reportitle'/>
      <Link href='/components/SeventhHomePage/SeventhHomePage'>
        <h1 className='text-2xl border-b-black border-b-[.5px] font-bold hover:text-purple-500 hover:cursor-pointer'>uvHRpd;cX.o;u0DR unDbsXxHc&Hmzdw{'>'}td.zSd. tw{'>'}uGJ;eD.wz.</h1>
      </Link>
      <iframe width="270" height="170"
        src="https://www.youtube.com/embed/videoseries?list=PLiS_aW9RRE7tEvKKh2oKZ55Her7cfw9I7">
      </iframe>
      <Link href="https://www.facebook.com/lermumar/?ref=hl">
        <a target="_blank">
          <Image src='/images/homePageLeftSideImages/facebook3.jpg'width='270px' height='130px' alt='facebook3'/>
        </a>
      </Link>
    </div>
  )
}

export default MainContentLeftSide