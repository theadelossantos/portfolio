import "./navbar.css"
import { useState } from "react"
import logo from "../../assets/logo3.svg"
import {motion} from "framer-motion"
import {Link, animateScroll as scroll} from "react-scroll"
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-screen z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 md:flex">
        <div className="flex flex-wrap items-center justify-between p-4 w-full">
          <a href="" className="text-black flex items-center space-x-2 rtl:space-x-reverse">
            <img src={logo} alt="Logo" className="h-12" />
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="self-center whitespace-nowrap text-headline font-semibold dark:text-white hover:text-black">Thea Clarisse</motion.span>
          </a>
          <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isNavbarOpen}>
              <span className="sr-only"></span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className={`items-center justify-between w-full p-4 md:flex md:w-auto md:order-1 ${isNavbarOpen ? 'block':'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 dark:border-gray-700">
              <li className="mb-2">
                <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70} duration={300} onClick={toggleNavbar} className="menu-item" aria-current="page">Home</Link>
              </li>
              <li className="mb-2">
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-70} duration={300} onClick={toggleNavbar} className="menu-item">Skills</Link>
              </li>
              <li className="mb-2">
                <Link activeClass="active" to="Portfolio" spy={true} smooth={true} offset={-70} duration={300} onClick={toggleNavbar} className="menu-item">Portfolio</Link>
              </li>
              <li className="mb-2">
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={300} onClick={toggleNavbar} className="menu-item">Contact</Link>
              </li>
            </ul>
          </div>

        </div>
        
    </nav>
  )
}

export default Navbar