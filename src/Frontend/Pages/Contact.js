import React, { useEffect } from 'react'
import Footer from '../../Components/Others/Footer'
import Navbar from '../../Components/Others/Navbar'

const Contact = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <div className="bg-cover h-[70vh] flex flex-col justify-center items-center" style={{ backgroundImage: "url('wave.svg')" }}>
                <Navbar />

                <div className="mt-[-100px] text-center ">
                    <h1 className='text-[55px] leading-[75px] font-bold text-white'>Contact Me</h1>
                    <p className='text-white'>Have any questions? Fill out the form and I’ll get you a response soon!</p>
                </div>

            </div>

            <div className="flex items-center justify-center px-[400px] text-[14px]">
                <p>Feel free to ask / inquire about anything (school, basketball, internships, music, etc). Hoping to be a resource and be of help in your journey in any way possible.
                    <br /> <br />

                    Similarly, please use this form or email directly me if your message regards any opportunity.</p>
            </div>

            <div className="flex  flex-col  my-[30px] px-[200px] text-[14px]">
                <div className="grid grid-cols-2 gap-3 my-[10px]">
                    <input type="text" placeholder='Name' required className='border py-[18px] px-[25px] text-[14px] ' />
                    <input type="email" placeholder='Email' required className='border py-[18px] px-[25px] text-[14px] ' />
                </div>
                <div className="grid grid-cols-2 gap-3 my-[10px]">
                    <input type="number" placeholder='Phone' required className='border py-[18px] px-[25px] text-[14px] ' />
                    <input type="text" placeholder='Subject' className='border py-[18px] px-[25px] text-[14px] ' />
                </div>
                <div className="grid grid-cols-1 gap-3 my-[10px]">
                    <textarea placeholder='Message' required className='border py-[18px] px-[25px] text-[14px]  
                    '  rows="10" />

                </div>

                <button className='text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white'>SEND MESSAGE</button>
            </div>



            <Footer />
        </>
    )
}

export default Contact

