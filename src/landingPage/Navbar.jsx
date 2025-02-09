import React from 'react'
import logo from '../images/logoRamen.png'
const Navbar = () => {
  return (
    <>
    <nav className="bg-white w-full fixed top-0 border-gray-200 shadow-lg">
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
           Ramenku
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="tel:5541251234"
            className="text-sm  text-gray-500  hover:underline"
          >
            (555) 412-1234
          </a>
          <a
            href="#"
            className="text-sm  text-orange-500 font-semibold  hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
    
  </>
  
  )
}

export default Navbar
