import React from 'react'
import logo from '../images/logoBuah.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="bg-white w-full fixed  z-30 top-0 border-gray-200 shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
          Zumito Fruits
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
        
          <Link
            to={'/login'}
            className="text-sm  text-white bg-[#74C365] px-3 py-2 rounded-sm font-semibold  hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
    
  </>
  
  )
}

export default Navbar
