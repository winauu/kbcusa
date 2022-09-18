import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ChildrenMainContent from './ChildrenMainContent'
function ChildrenMinistry() {
  return (
  <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <ChildrenMainContent/>
    <Footer/>
  </div>  
  )
}

export default ChildrenMinistry