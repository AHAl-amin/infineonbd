import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Share/Navbar'
import Footer from '../Pages/Share/Footer'
import Sidebar from '../Pages/Share/Sidebar'

const Main = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto relative'>
        <Navbar />
        <div className='flex '>
          <Sidebar className=' left-0 top-0 h-full' />
          <Outlet className='flex-1' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
