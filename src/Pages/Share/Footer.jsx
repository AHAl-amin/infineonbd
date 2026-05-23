import React from 'react'
import logo from '../../../public/img/logo.png'

function Footer() {
  const navLinks = ['About Us', 'News & Events', 'Product & Service', 'Download', 'Careers', 'Contact Us']

  return (
    <footer className='bg-[#ebebeb] border-t border-gray-400 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center items-center gap-6  pb-6 mb-8'>
          <span className='font-semibold text-gray-600 text-xl'>INFINEON</span>
          <span className='mx-2 lg:block hidden text-gray-400'>|</span>
          <div className='flex flex-wrap justify-center md:gap-6 gap-3'>
            {navLinks.map((link, index) => (
              <a
                key={link}
                href='#'
                className='text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium '
              >
                {link}
                {
                  index !== navLinks.length - 1 && (
                    <span className='ml-5 text-gray-400'>|</span>
                  )
                }
              </a>
            ))}
          </div>
        </nav>

        {/* Logo, Copyright and Contact Info */}
        <div className='flex md:flex-row flex-col gap-2 justify-center'>
          {/* Logo */}
          <div className=''>
            <img src={logo} alt="" className='w-40' />
          </div>

          {/* Copyright and Contact Info */}
          <div className=''>
            <p className='text-gray-700 md:text-xl font-medium mb-2'>
              INFINEON™ 2013-2025. INFINEON Solutions Corp. All Rights Reserved
            </p>
            <div className='flex flex-col sm:flex-row sm:gap-6 text-gray-700 md:text-xl'>
              <p>
                Tel: <span className='font-medium'>0086-21-52996290</span>
              </p>
              <p>
                E-mail: <span className='font-medium'>bd#gmpmax.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
