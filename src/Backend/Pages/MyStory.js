import React from 'react'
import Navbar from '../Components/Navbar'

const MyStory = () => {
    return (
        <div className='bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 pb-4 h-full dashboard'>
            <Navbar />
            <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
                <div className="flex flex-col p-3
        ">
                    <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold mb-1'>My Story</h6>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
                </div>


                <div className="m-3">



                    <div className="flex  flex-col  my-[30px]  text-[14px]">

                        <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold '>Top Text</h6>

                        <div className="grid grid-cols-1 gap-3 my-[10px]">

                            <input type="text" placeholder='Title' required className='border py-[18px] px-[25px] text-[14px] w-full' />

                        </div>

                        <input type="file" name="" id="" placeholder='Enter About Image' required className='border py-[18px] px-[25px] text-[14px] w-full' />


                    </div>
                </div>
                <div className="mx-3">



                    <div className="flex  flex-col  my-[10px]  text-[14px]">

                        <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold '>Intro</h6>


                        <div className="grid grid-cols-1 gap-3 my-[10px]">
                            <textarea placeholder='About you...' required className='border py-[18px] px-[25px] text-[14px]  
                '  rows="7" />

                        </div>

                    </div>

                    <div className="flex  flex-col  my-[10px]  text-[14px]">

                        <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold '>Education</h6>


                        <div className="grid grid-cols-1 gap-3 my-[10px]">
                            <textarea placeholder='About you...' required className='border py-[18px] px-[25px] text-[14px]  
                '  rows="7" />

                        </div>

                    </div>

                    <div className="flex  flex-col  my-[10px]  text-[14px]">

                        <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold '>Career</h6>


                        <div className="grid grid-cols-1 gap-3 my-[10px]">
                            <textarea placeholder='About you...' required className='border py-[18px] px-[25px] text-[14px]  
                '  rows="7" />

                        </div>


                    </div>

                    <div className="flex  flex-col  my-[10px]  text-[14px]">

                        <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold '>Intro</h6>


                        <div className="grid grid-cols-1 gap-3 my-[10px]">
                            <textarea placeholder='About you...' required className='border py-[18px] px-[25px] text-[14px]  
                '  rows="7" />

                        </div>

                        <button className='text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white'>SAVE</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyStory