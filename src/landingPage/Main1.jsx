import React from 'react'
import logo from '../images/logoRamen.png'

const Main1 = ({setModalAdd,setModalLog}) => {
  return (
    <div className='max-w-7xl flex  justify-center mx-auto'>
        <div className='h-[80vh] pe-5 flex flex-col justify-center gap-5  pt-30 w-[45%]'>
            <h1 className='text-6xl font-semibold'>Ramenku</h1>
            <h2 className='w-[93%] text-lg font-semibold text-gray-700'>Nikmati ramen dengan kuah gurih, mie kenyal, dan topping premium yang dibuat dari bahan berkualitas. Rasakan cita rasa autentik yang memanjakan lidah!</h2>
            <p>📍 Lokasi: Pamulang, BSD, Bintaro, dan sekitarnya</p>
            <div className='flex gap-3'>

            <button className='bg-white w-fit px-8 py-2 border-2 border-orange-500 rounded-md font-semibold text-orange-500' onClick={()=>setModalAdd(true)}>Daftar</button>
            <button onClick={()=>setModalLog(true)} className='text-white w-fit px-8 py-2 border-2 border-orange-500 rounded-md font-semibold bg-orange-500'>login</button>
            </div>
        </div>
        <div className='h-[80vh]  flex items-center justify-end pt-30 w-[45%]'>
            <img src={logo} alt="" />
        </div>
      
    </div>
  )
}

export default Main1
