import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Share/Navbar'
import Footer from '../Pages/Share/Footer'
import Sidebar from '../Pages/Share/Sidebar'

const Main = () => {
  return (
    <div>
      <div className='max-w-6xl xl:mx-auto mx-4'>
        <Navbar />






        {/* Main Content */}
        <div className='flex-1 min-w-0'>
          <Outlet />
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default Main