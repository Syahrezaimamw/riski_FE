import React, { useEffect } from 'react'
import logo from '../images/logoBuah.png'

const Main1 = ({ setModalAdd, setModalLog }) => {
  
  return (
    <div className="w-full  background-image grayscale-20 bg-cover bg-center bg-no-repeat">
      <div className='w-full h-full bg-black/50'>

        <div className='max-w-7xl flex  justify-center mx-auto '>
          <div className='h-[88vh] pe-5 flex items-center justify-center gap-5   w-full'>
            <div className='w-[70%] space-y-4 text-white text-center'>

              <h1 className='text-6xl font-semibold'>Zumito Fruits</h1>
              <h2 className='w-[93%] text-lg font-semibold '>FreshFruit adalah toko buah yang menyediakan berbagai macam buah segar, berkualitas, dan sehat. Kami menawarkan pilihan buah lokal dan impor dengan harga terjangkau, memastikan kepuasan pelanggan dengan kesegaran terbaik setiap hari</h2>
              <p className='w-[]'> Pamulang, BSD, Bintaro, dan sekitarnya</p>
              <div className='flex gap-3 w-full justify-center'>

                <button className='bg-white w-fit px-8 py-2 border-2 border-[#74C365] rounded-md font-semibold text-[#74C365]' onClick={() => setModalAdd(true)}>Daftar</button>
                <button onClick={() => setModalLog(true)} className='text-white w-fit px-8 py-2 border-2 border-[#74C365] rounded-md font-semibold bg-[#74C365]'>login</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Main1
