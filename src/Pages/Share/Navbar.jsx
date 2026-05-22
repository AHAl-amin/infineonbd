import { Link, useLocation } from 'react-router-dom';
import Banner from '../Home/Banner';
import { IoSearch } from 'react-icons/io5';
import logo from '../../../public/img/logo.png';

const Navbar = () => {
  const location = useLocation();
  const activeClass = 'text-gray-300 border-b-2 border-gray-300 font-bold';

  return (
    <div>
      <nav className="py-3  sticky top-0 z-50 shadow-black/20 bg-white">
        <div className='flex justify-between items-center'>
          <div className="flex items-center ">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <div className='flex items-center '>
            <input type="search" className='border-y-3 border-l-3 w-[300px] py-1 px-2 border-gray-100 focus:outline-none ' />
            <button className='bg-gradient-to-b from-[#76C219] to-[#3B7E00]  right-0  top-0 text-white h-full flex justify-center items-center border-y-3 border-r-3 border-gray-200 py-[6px] px-3'><IoSearch size='20' /></button>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center">


          <div className="hidden md:flex  bg-gradient-to-b mt-5 from-[#76C219] to-[#3B7E00] w-full justify-between px-12 py-[14px] rounded-xl border-t-2 border-[#ffffff] gap-6 relative">
            <Link
              to="/"
              className={`text-lg relative   ${location.pathname === '/' ? activeClass : 'text-[#ffffff] font-bold'}`}
            >
              INFINEON
              <span className="w-[0.5px] h-14 -top-3 bg-gradient-to-t 
              from-[#ffffff] to-transparent absolute -right-7 "></span>
            </Link>

            <Link
              to="/about"
              className={`text-lg relative ${location.pathname === '/about' ? activeClass : 'text-[#ffffff] font-bold'}`}
            >
              About Us
              <span className="w-[0.5px] h-14 -top-3 bg-gradient-to-t 
              from-[#ffffff] to-transparent absolute  -right-7 "></span>
            </Link>

            <Link
              to="/news-events"
              className={`text-lg relative ${location.pathname === '/news-events' ? activeClass : 'text-[#ffffff] font-bold'}`}
            >
              News & Events
              <span className="w-[0.5px] h-14 -top-3 bg-gradient-to-t 
              from-[#ffffff] to-transparent absolute -right-7 "></span>
            </Link>
            <Link
              to="/product-services"
              className={`text-lg relative ${location.pathname === '/product-services' ? activeClass : 'text-[#ffffff] font-bold'}`}
            >
              Product & Services
              <span className="w-[1px] h-14 -top-3 bg-gradient-to-t 
              from-[#ffffff] to-transparent  absolute -right-7 "></span>
            </Link>

            <Link
              to="/download"
              className={`text-lg relative ${location.pathname === '/download' ? activeClass : 'text-[#ffffff] font-bold'}`}
            >
              Download
              <span className="w-[0.5px] h-14 -top-3 bg-gradient-to-t 
              from-[#ffffff] to-transparent  absolute -right-7 "></span>
            </Link>

            <Link
              to="/careers"
              className={`text-lg relative ${location.pathname === '/careers' ? activeClass : 'text-[#ffffff] font-bold  '}`}
            >
              Careers
              <span className="w-[0.5px] h-14 -top-3 bg-gradient-to-t 
              from-[#ffffff] to-transparent absolute -right-7 "></span>
            </Link>

            <Link
              to="/contact"
              className={`text-lg  ${location.pathname === '/contact' ? activeClass : 'text-[#ffffff] font-bold'}`}
            >
              Contact Us

            </Link>
          </div>


        </div>
      </nav>
      <Banner />
    </div>
  );
};

export default Navbar;
