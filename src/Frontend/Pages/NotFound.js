import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='h-screen bg-cover flex items-center justify-center' style={{ backgroundImage: "url('404.jpg')" }}

        >


            <div className="p-[70px] bg-black flex  flex-col  font-rubik text-center items-center justify-center">
                <h1 className='text-white text-[90px] font-bold z-50' >404!</h1>
                <p className='text-red-500 py-4'>PAGE NOT FOUND</p>
                <p className='text-white text-[14px]'>The page you were looking for could not be found.</p>

                <Link to='/' className='flex  justify-center mt-5 hover:bg-white items-center bg-white py-[2px] rounded border-none px-2'>
                    <img src="al.png" alt="" className='h-5' />
                    <p className='pl-2 text-[11px]  text-black font-[500]'>BACK TO HOMEPAGE</p>
                </Link>
            </div>

        </div>
    )
}

export default NotFound