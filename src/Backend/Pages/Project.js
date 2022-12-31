import React from 'react'
import Navbar from '../Components/Navbar'

const Project = () => {
    return (
        <div className='bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 pb-4 h-full dashboard'>
        <Navbar />
        <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
            <div className="flex flex-col p-3
            ">
                <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold mb-1'>Projects</h6>
                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="grid xl:grid-cols-4  lg:grid-cols-3 grid-cols-2 gap-4 my-5 mx-3">
                <div className="flex flex-col">
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                        <img src="a.jpg" alt="projectImg" className='w-[100%] rounded-lg' />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                        <h5 className='font-semibold text-[#344767]'>
                            Project 1
                        </h5>

                        <p className='py-4 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequatur animi placeat quos fuga non voluptate, quo atque beatae vitae.</p>

                        <div className="flex justify-between">
                            <button className='py-1 px-2 text-[13px] font-semibold  '>EDIT PROJECT</button>
                            <button className='py-1 px-2 text-[13px] font-semibold  bg-red-600 border-red-600 hover:text-red-500'>DELETE PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                        <img src="b.jpg" alt="projectImg" className='w-[100%] rounded-lg' />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                        <h5 className='font-semibold text-[#344767]'>
                            Project 2
                        </h5>

                        <p className='py-4 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequatur animi placeat quos fuga non voluptate, quo atque beatae vitae.</p>

                        <div className="flex justify-between">
                            <button className='py-1 px-2 text-[13px] font-semibold  '>EDIT PROJECT</button>
                            <button className='py-1 px-2 text-[13px] font-semibold  bg-red-600 border-red-600 hover:text-red-500'>DELETE PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                        <img src="c.jpg" alt="projectImg" className='w-[100%] rounded-lg' />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                        <h5 className='font-semibold text-[#344767]'>
                            Project 3
                        </h5>

                        <p className='py-4 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequatur animi placeat quos fuga non voluptate, quo atque beatae vitae.</p>

                        <div className="flex justify-between">
                            <button className='py-1 px-2 text-[13px] font-semibold  '>EDIT PROJECT</button>
                            <button className='py-1 px-2 text-[13px] font-semibold  bg-red-600 border-red-600 hover:text-red-500'>DELETE PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                        <img src="d.jpg" alt="projectImg" className='w-[100%] rounded-lg' />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                        <h5 className='font-semibold text-[#344767]'>
                            Project 4
                        </h5>

                        <p className='py-4 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequatur animi placeat quos fuga non voluptate, quo atque beatae vitae.</p>

                        <div className="flex justify-between">
                            <button className='py-1 px-2 text-[13px] font-semibold  '>EDIT PROJECT</button>
                            <button className='py-1 px-2 text-[13px] font-semibold  bg-red-600 border-red-600 hover:text-red-500'>DELETE PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                        <img src="e.jpg" alt="projectImg" className='w-[100%] rounded-lg' />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                        <h5 className='font-semibold text-[#344767]'>
                            Project 5
                        </h5>

                        <p className='py-4 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequatur animi placeat quos fuga non voluptate, quo atque beatae vitae.</p>

                        <div className="flex justify-between">
                            <button className='py-1 px-2 text-[13px] font-semibold  '>EDIT PROJECT</button>
                            <button className='py-1 px-2 text-[13px] font-semibold  bg-red-600 border-red-600 hover:text-red-500'>DELETE PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-dashed border-[3px] hover:opacity-60 bg-white cursor-pointer rounded-lg justify-center items-center">

                    <img src="plus.svg" alt="" className='h-5' />

                    <h5 className='py-5 font-semibold text-[#344767]'>
                        New Project
                    </h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Project