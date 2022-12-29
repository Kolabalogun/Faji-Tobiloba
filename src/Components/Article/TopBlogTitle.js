import React from 'react'
import Navbar from '../Others/Navbar'

const TopBlogTitle = () => {
    return (
        <>  <div className="bg-black absolute opacity-60 z-1 h-[80vh] w-full"></div>

            <div className="bg-rubik  h-[80vh] w-full justify-center items-center flex  bg-no-repeat bg-cover flex-col " style={{ backgroundImage: "url('a.jpg')" }}>
                <Navbar />

                <h1 className='text-white font-poppins z-10 bg-transparent text-[50px] px-[100px]  text-5xl font-semibold mb-2'>My Articles</h1>

                <span class="font-medium uppercase text-xs leading-5 text-white text-[11px]">25 April 2020&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;by <a href="blog-masonry.html" class="text-white">Faji Tobiloba</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="blog-masonry.html" class="text-white">Design</a></span>

            </div></>
    )
}

export default TopBlogTitle