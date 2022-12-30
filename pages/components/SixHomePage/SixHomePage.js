import {useState} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import EmailSent from './EmailSent'

import SixMainContent from './SixMainContent'

function SixHomePage() {
  const [handleSubmit, setHandleSumbit] = useState(false);
  return (
    <div>
      {handleSubmit ? <EmailSent/> : 
      <div className='w-[850px] bg-white mx-auto min-h-screen'>
        <Header/>
        <Navbar/>
        <SixMainContent  handleSubmit={handleSubmit} setHandleSumbit={setHandleSumbit}/>
        <Footer/>
      </div>
      }
    </div>
  )
}

export default SixHomePage