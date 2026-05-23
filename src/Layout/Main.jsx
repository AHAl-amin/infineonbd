import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Share/Navbar'
import Footer from '../Pages/Share/Footer'
import Sidebar from '../Pages/Share/Sidebar'

const Main = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto'>
        <Navbar />

        <div className='flex my-6  shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden'>

          {/* Sidebar */}
          <div className='w-76 shrink-0'>
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className='flex-1 min-w-0'>
            <Outlet />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Main