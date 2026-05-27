


import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../Home/Banner';
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
      <nav className="py-3 sticky top-0 z-50 shadow-black/20 bg-white">
        <div className="container mx-auto ">
          {/* TOP NAV */}
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div className="">
                <img src={logo} alt="Logo" className="h-17 w-auto" />
              </div>

              {/* DESKTOP SEARCH */}
              <div className='leading-6'>
                <p className='hidden lg:block text-[33.7px]  font-bold text-blue-950'>
                  INFINEON ENGINEERING SOLUTIONS
                </p>

                <p className="text-[16px] ">
                  We provide a complete Engineering & Business solution on
                  pharmaceuticals & plastics industries
                </p>

              </div>
            </div>

            <div className="">
              <div className='hidden lg:flex items-center gap-1 '>
                {/* <input type="search" placeholder='Search products' className='border-y-3 border-l-3 w-[200px] py-1 px-2 border-gray-100 focus:outline-none ' />
                <button className='bg-gradient-to-b from-blue-950 to-blue-800  right-0  top-0 text-white h-full flex justify-center items-center border-y-3 border-r-3 border-gray-200 py-[6px] px-3'><IoSearch size='20' /></button> */}
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
              className="lg:hidden text-3xl text-[#3B7E00]"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex bg-gradient-to-b mt-3 from-blue-800 to-blue-950 w-full justify-between px-12 py-2 rounded-xl border-t-2 border-[#ffffff] gap-6 relative uppercase text-sm  ">
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
            <div className="lg:hidden absolute w-full  mt-2 bg-gradient-to-b from-[#76C219] to-[#3B7E00] rounded-xl p-5 space-y-4">
              {/* MOBILE SEARCH */}


              <div className='flex w-full items-center '>
                <input type="search" placeholder='Search products' className='border-y-3 border-l-3 w-full py-1 px-2 border-gray-100 focus:outline-none ' />
                <button className='bg-gradient-to-b   from-blue-950 to-blue-800 right-0  top-0 text-white h-full flex justify-center items-center border-y-3 border-r-3 border-gray-200 py-[6px] px-3'><IoSearch size='20' /></button>
              </div>

              {/* MOBILE LINKS */}
              <Link
                to="/"
                onClick={closeMenu}
                className="block text-white font-bold"
              >
                INFINEON
              </Link>

              <Link
                to="/about#about"
                onClick={closeMenu}
                className="block text-white font-bold"
              >
                About Us
              </Link>

              <Link
                to="/news-events"
                onClick={closeMenu}
                className="block text-white font-bold"
              >
                News & Events
              </Link>

              <Link
                to="/product-services"
                onClick={closeMenu}
                className="block text-white font-bold"
              >
                Product & Services
              </Link>



              <Link
                to="/careers"
                onClick={closeMenu}
                className="block text-white font-bold"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-white font-bold"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>

      <Banner />
    </div>
  );
};

export default Navbar;