import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import axios from 'axios';
import { convertToRp } from '../currency';
import ModalMenu from '../components/ModalMenu';
const Menu = () => {
    const [dataMenu, setDataMenu] = useState([])

    const getAllData = async () => {

        return await axios.get('http://localhost:3100/menu/')
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    useEffect(() => {
        getAllData().then((result) => setDataMenu(result))
    }, [])
    const [modalAdd, setModalAdd] = useState()
    // console.log(dataMenu)

    const [data, setData] = useState({
        nama: '',
        harga: 0,
        stock: 0,
        deskripsi: '',
        gambar: '',

    })
    console.log(data)
    const handleAddMenu = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3100/menu/create', data);
            console.log('Login berhasil:', response.data.data);
            window.location.href = '/menu'
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
    };


    const [modalAddUp, setModalAddUp] = useState()
    const [id, setId] = useState()
    const [dataUp, setDataUp] = useState()
    const getDataById = async () => {

        return await axios.get('http://localhost:3100/menu/find/' + id)
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    //update
    const updateUser = async (e) => {
        console.log('ss')
        try {
            const response = await axios.put('http://localhost:3100/menu/update/' + id,
                dataUp,
            );
            window.location.href = '/menu'

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
    useEffect(() => {
        id ?
            getDataById().then((result) => setDataUp((result)))
            : <></>
    }, [id])

    function handleDelete(id) {
        try {
            axios.delete(`http://localhost:3100/menu/delete/${id}`);
            console.log(`User ${id} deleted`);
            window.location.href = '/menu'
        } catch (error) {
            console.error('Delete failed:', error.response ? error.response.data : error.message);
        }
    }
    return (
        <>
            <Dashboard page='/menu'>
                <ModalMenu judul='Tambah data Menu' data={data} onSub={handleAddMenu} setData={setData} state={{ modalAdd, setModalAdd }}></ModalMenu>
                {dataUp ?
                    <ModalMenu judul='Edit data Menu' data={dataUp} onSub={updateUser} setData={setDataUp} state={{ modalAdd: modalAddUp, setModalAdd: setModalAddUp }}></ModalMenu>
                    : ''
                }
                <div className='w-full flex justify-end'>

                    <button onClick={() => setModalAdd(true)} className='rounded-md bg-[#74C365] px-3 py-1 text-white cursor-pointer'>Add Menu</button>
                </div>
                <div className=' flex w-[100%] gap-12 flex-wrap '>

                    {
                        dataMenu.map((e, i) => (

                            <div key={i} class="relative flex flex-col md:flex-row w-[500px] my-6 bg-white shadow-sm border border-slate-200 rounded-lg ">
                                <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                                        alt="card-image"
                                        class="h-full w-full rounded-md md:rounded-lg object-cover"
                                    />
                                </div>
                                <div class="p-6">
                                    <div className='w-full flex justify-between items-end'>


                                        <h4 class="mb-2 text-slate-800 text-xl font-semibold">
                                            {e.nama}
                                        </h4>
                                        <h4 class="mb-2 text-slate-800 text-md font-semibold">
                                            Stock /
                                            <span className='font-normal'>

                                            {e.stock}
                                            </span>
                                        </h4>
                                    </div>
                                    <p class="mb-5 text-slate-600 leading-normal font-light">
                                        {e.deskripsi.substring(0, 80)}...
                                    </p>
                                    <div className='full w-full  flex justify-between items-end'>
                                        <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                            {convertToRp(e.harga)}
                                                </a>

                                            <div className='flex w-fit gap-2'>

                                                <button className='px-2 cursor-pointer text-green-500' onClick={() => {
                                                    setModalAddUp(true)
                                                    setId(e.id)
                                                }
                                                }
                                                ><FaPen /></button>
                                                <button className='px-2 rounded-md py-2 cursor-pointer bg-[#74C365] text-white'
                                                    onClick={(() => handleDelete(e.id))}><FaTrash /></button>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </Dashboard>
        </>
    )
}


export default Menu
