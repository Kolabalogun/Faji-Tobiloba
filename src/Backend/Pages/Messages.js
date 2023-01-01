import React from 'react'
import Navbar from '../Components/Navbar'

const Messages = () => {
    return (
        <div className='bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard'>
            <Navbar />

            <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
                <div className="flex flex-col p-3
        ">
                    <h6 className='text-[#0d1727] text-base leading-relaxed font-semibold mb-1'>Projects</h6>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="flex flex-col">
                    <div className="border mb-4">
                        <div className=" p-[50px] sm-p-[20px]">
                            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase "><span>Sent on June 30, 2017</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span><a href="blog-grid.html" className="text-medium-gray ">akinola10302@gmail.com</a></span></div>

                            <a href="blog-standard-post.html" class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik">This is a standard post with a preview image</a>

                            <p className="mt-4 text-[12px] font-rubik
                        ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry’s standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nesciunt eveniet quidem aut quibusdam hic saepe voluptatum nihil soluta modi possimus eos debitis vero consequuntur asperiores magnam voluptates ex voluptatem laborum praesentium? Perspiciatis quisquam quibusdam culpa tempora eligendi quam eum consectetur excepturi autem incidunt vitae hic, blanditiis minus, itaque fugiat?</p>

                            <div className="flex justify-between items-center">
                                <button className='bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300'>reply</button>
                                <button className='bg-red-600 border-red-600 hover:bg-white hover:text-red-600 text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300'>Delete</button>
                            </div>

                        </div>

                    </div>
                    <div className="border mb-4">
                        <div className=" p-[50px] sm-p-[20px]">
                            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase "><span>Sent on June 30, 2017</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span><a href="blog-grid.html" className="text-medium-gray ">akinola10302@gmail.com</a></span></div>

                            <a href="blog-standard-post.html" class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik">This is a standard post with a preview image</a>

                            <p className="mt-4 text-[12px] font-rubik
                        ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry’s standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nesciunt eveniet quidem aut quibusdam hic saepe voluptatum nihil soluta modi possimus eos debitis vero consequuntur asperiores magnam voluptates ex voluptatem laborum praesentium? Perspiciatis quisquam quibusdam culpa tempora eligendi quam eum consectetur excepturi autem incidunt vitae hic, blanditiis minus, itaque fugiat?</p>

                            <div className="flex justify-between items-center">
                                <button className='bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300'>reply</button>
                                <button className='bg-red-600 border-red-600 hover:bg-white hover:text-red-600 text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300'>Delete</button>
                            </div>

                        </div>

                    </div>
                    <div className="border mb-4">
                        <div className=" p-[50px] sm-p-[20px]">
                            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase "><span>Sent on June 30, 2017</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span><a href="blog-grid.html" className="text-medium-gray ">akinola10302@gmail.com</a></span></div>

                            <a href="blog-standard-post.html" class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik">This is a standard post with a preview image</a>

                            <p className="mt-4 text-[12px] font-rubik
                        ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry’s standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nesciunt eveniet quidem aut quibusdam hic saepe voluptatum nihil soluta modi possimus eos debitis vero consequuntur asperiores magnam voluptates ex voluptatem laborum praesentium? Perspiciatis quisquam quibusdam culpa tempora eligendi quam eum consectetur excepturi autem incidunt vitae hic, blanditiis minus, itaque fugiat?</p>

                            <div className="flex justify-between items-center">
                                <button className='bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300'>reply</button>
                                <button className='bg-red-600 border-red-600 hover:bg-white hover:text-red-600 text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300'>Delete</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default Messages