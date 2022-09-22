import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'

function Calender() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
        <Header/>
        <Navbar/>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=a2JjdXNhY25AZ21haWwuY29t&amp;src=YTlqdmhhZDUyMjlzcjVzdmg5bnNhOW9hZjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uY2hyaXN0aWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%233F51B5&amp;color=%230B8043&amp;title=Central%20North%20Area%20-%20KBCUSA" className="border-[1px] border-[#777]" width="1020" height="600" frameborder="0" scrolling="no"></iframe>
        <Footer/>
    </div>
  )
}

export default Calender