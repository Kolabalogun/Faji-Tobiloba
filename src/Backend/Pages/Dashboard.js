import React from 'react'
import Navbar from '../Components/Navbar'

const Dashboard = () => {
    return (
        <div className='bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard'>
            <Navbar />
            <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
                <div className="flex flex-col p-3
                ">
                    <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold mb-1'>Projects</h6>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
                </div>


            </div>
        </div>
    )
}

export default Dashboard

