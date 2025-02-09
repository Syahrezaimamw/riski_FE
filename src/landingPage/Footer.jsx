import React from 'react'
import logo from '../images/logoBuah.png'
const Footer = () => {
  return (
    <footer className="w-full mt-10 pb-4">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/*Grid*/}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
          <a
            className="flex justify-center items-center lg:justify-start"
          >
            <img src={logo} className='w-14' alt="" />
            <span className='ms-2 text-3xl font-semibold'>Zumito</span>
          </a>
          <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
            Trusted in more than 100 countries &amp; 5 million customers. Have any
            query ?
          </p>
          <a
            href="javascript:;"
            className="py-2.5 px-5 h-9 block w-fit bg-[#74C365] rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
          >
            Contact us
          </a>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left ">
          <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a
                href="javascript:;"
                className="text-gray-600 hover:text-[#74C365]"
              >
                Home
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-[#74C365]"
              >
                About
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-[#74C365]"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-[#74C365]"
              >
                Features
              </a>
            </li>
          </ul>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left ">
          <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a
                href="javascript:;"
                className="text-gray-600 hover:text-gray-900"
              >
                Figma UI System
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Icons Assets
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Responsive Blocks
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Components Library
              </a>
            </li>
          </ul>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left">
          <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a
                href="javascript:;"
                className="text-gray-600 hover:text-gray-900"
              >
                FAQs
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Quick Start
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                User Guide
              </a>
            </li>
          </ul>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left">
          <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a
                href="javascript:;"
                className="text-gray-600 hover:text-gray-900"
              >
                News
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Tips &amp; Tricks
              </a>
            </li>
            <li className="mb-6">
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                New Updates
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className=" text-gray-600 hover:text-gray-900"
              >
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*Grid*/}
     
    </div>
  </footer>
  
  
  )
}

export default Footer
