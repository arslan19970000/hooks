import React from 'react'
import Sidebar from './components/Sidebar.js'
import Navbar from './components/navbar.js'
import '../src/App.css'
import Contant from './components/Contant.js'
import Footer from './components/Footer.js'
import Card from './components/card.js'
const App = () => {
  

  return (
    <div className='page  b'>
      <div className='sidebar_part'>
        <Sidebar />
      </div>
      
      <div className='page_content bg-amber-200'>
        <div><Navbar/></div>
        <br></br>
        <div className='text-gray-800 mt-20 '><Contant name=""arslan /></div>
        
        <br></br>
        <div className='bg-slate-400 py-15 mt-44 mb-12'><Footer/></div>
      </div>
      <div>        
      </div>
      
    </div>
  )
}

export default App
