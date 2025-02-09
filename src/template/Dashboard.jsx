import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import ModalProfile from './ModalProfile';
import logo from '../images/logoBuah.png'
import { Link, useNavigate } from 'react-router-dom';
const Dashboard = ({ children, page }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect ke halaman login jika tidak ada token
    }
  }, [navigate]);

  const [decode, setDecode] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('token')
    data ?
      setDecode(jwtDecode(data))
      : <></>
  }, [])
  const [open, setOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const list = [
    {
      nama: 'Daftar Menu',
      ic: '',
      link: '/menu',
    },
    {
      nama: 'Data Pembeli',
      ic: '',
      link: '/pembeli',
    },
    {
      nama: 'Data Admin',
      ic: '',
      link: '/admin',
    },
    {
      nama: 'Transaksi',
      ic: '',
      link: '/transaksi',
    },
  ]
  return (
    <div>
      <>
        <ModalProfile profile={profile} decode={decode} setProfile={setProfile}></ModalProfile>
        <nav className="bg-white  fixed w-full z-0 top-0 shadow-none start-0 border-b-2 border-[#74C365]">
          <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 py-3">
            <div></div>
            <button
              onClick={() => setProfile(true)}
              type="button"
              className="flex cursor-pointer text-white bg-gray-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  p-0.5 text-center rounded-full"
            >
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="w-10 h-10 rounded-full"
              />

            </button>
            <div className="flex md:hidden  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={() => open ? setOpen(false) : setOpen(true)}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

          </div>
        </nav>


        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-1 w-64 h-screen bg-white transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}  sm:translate-x-0`}
          aria-label="Sidebar"
        >

          <div className="h-full overflow-y-auto  border-r-2 border-[#74C365] shadow-r-xl" >
            <div className='w-full h-[170px] bg-[#74C365] flex justify-center items-center'>

              <div

                className="w-full flex flex-col items-center justify-center gap-1"
              >
                <div className='h-25 w-25 bg-white flex items-center justify-center rounded-full'>

                  <img
                    src={logo}
                    className="  h-15"
                    alt="Flowbite Logo"
                  />
                </div>
                <p className="self-center  text-3xl  whitespace-nowrap text-white font-semibold ">
                  Zumito Fruits
                </p>
              </div>
            </div>
            <ul className="space-y-4  px-3  py-4 mt-2   font-medium">
              {
                list.map((e, i) => (
                  <li key={i}>

                    <Link to={e.link}>
                      <span
                        href="#"
                        className={` flex  items-center p-2  rounded-lg ${page === e.link ? 'justify-center bg-[#74C365]  text-white' : 'justify-start text-green-500'}  hover:bg-[#74C365]/80  group hover:text-white`}
                      >
                        <svg
                          className={`w-5 h-5  transition duration-75 group-hover:text-white ${page === e.link ? ' text-white' : 'text-[#74C365] '}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 21"
                        >
                          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className="ms-3 ">{e.nama}</span>
                      </span>
                    </Link>
                  </li>

                ))
              }

            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64 mt-20 px-6">
        <div className={`p-4 ${page =='/menu'?"border-2 border-green-700 border-dashed rounded-lg":""}  `}>


            {children}
          </div>
        </div>

      </>

    </div>
  )
}

export default Dashboard
