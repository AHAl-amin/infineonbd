


import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { IoSearch, IoMenu, IoClose, IoCallOutline } from 'react-icons/io5';
import logo from '../../../public/img/logo.jpeg';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass =
    'text-gray-300 border-b-2 border-gray-300 font-bold';

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="py-3 fixed top-0 left-0 right-0 z-50 w-full shadow-black/20 bg-white max-w-6xl mx-auto">
        <div className="container mx-auto ">
          {/* TOP NAV */}
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center md:gap-4 gap-2">
              <div className="">
                <img src={logo} alt="Logo" className="md:h-17 h-9 md:w-auto w-12" />
              </div>

              {/* DESKTOP SEARCH */}
              <div className='sm:leading-6 leading-3'>
                <p className='lg:text-[33.7px] md:text-[20px] text-[14px]  font-bold text-blue-950'>
                  INFINEON ENGINEERING SOLUTIONS
                </p>

                <p className="lg:text-[16px] sm:text-[14px] text-[10px] ">
                  We provide a complete Engineering & Business solution on
                  pharmaceuticals & plastics industries
                </p>

              </div>
            </div>

            <div className="lg:block hidden">
              <div className='hidden lg:flex items-center gap-1 '>

                Contact:


                <p>
                  +88 02 580 533 51
                </p>

              </div>
              <div className="flex items-center justify-end  gap-1 text-end w-full">


                <p className=' text-[14px] cursor-pointer hover:text-blue-800  transition-transform duration-75'>
                  info@infineonbd.com
                </p>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-blue-950"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex bg-gradient-to-b mt-2 from-blue-800 to-blue-950 w-full justify-between px-12 py-2 rounded-xl border-t-2 border-[#ffffff] gap-6 relative uppercase text-sm  ">
            <Link
              to="/"
              className={` relative text-uppercase ${location.pathname === '/'
                ? activeClass
                : 'text-white font-bold text-'
                }`}
            >
              Home
            </Link>

            <Link
              to="/about#about"
              className={` relative ${location.pathname === '/about'
                ? activeClass
                : 'text-white font-bold'
                }`}
            >

              INFINEON
            </Link>

            <Link
              to="/news-events"
              className={` relative ${location.pathname === '/news-events'
                ? activeClass
                : 'text-white font-bold'
                }`}
            >
              News & Events
            </Link>

            <Link
              to="/product-services"
              className={` relative ${location.pathname === '/product-services'
                ? activeClass
                : 'text-white font-bold'
                }`}
            >
              Product & Services
            </Link>


            <Link
              to="/careers"
              className={` relative ${location.pathname === '/careers'
                ? activeClass
                : 'text-white font-bold'
                }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={` ${location.pathname === '/contact'
                ? activeClass
                : 'text-white font-bold'
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="lg:hidden absolute w-full bg-[#ffffff] text-blue-950  mt-2 shadow rounded-xl p-5 space-y-2 uppercase text-sm ">
              {/* MOBILE SEARCH */}
              {/* <div className="lowercase gap-1 text-end text-[12px] ">
                <div className='flex lg:flex justify-end items-center gap-1  '>

                  Contact:


                  <p>
                    +88 02 580 533 51
                  </p>

                </div>
                <div className="flex items-center justify-end  gap-1 text-end w-full">


                  <p className='  cursor-pointer hover:text-blue-800  transition-transform duration-75'>
                    info@infineonbd.com
                  </p>
                </div>
              </div> */}



              <div>
                {/* MOBILE LINKS */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block text-blue-900 font-bold"
                >
                  INFINEON
                </Link>

                <Link
                  to="/about#about"
                  onClick={closeMenu}
                  className="block text-blue-900 font-bold"
                >
                  About Us
                </Link>

                <Link
                  to="/news-events"
                  onClick={closeMenu}
                  className="block text-blue-900 font-bold"
                >
                  News & Events
                </Link>

                <Link
                  to="/product-services"
                  onClick={closeMenu}
                  className="block text-blue-900 font-bold"
                >
                  Product & Services
                </Link>



                <Link
                  to="/careers"
                  onClick={closeMenu}
                  className="block text-blue-900 font-bold"
                >
                  Careers
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block text-blue-900 font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>


    </div>
  );
};

export default Navbar;