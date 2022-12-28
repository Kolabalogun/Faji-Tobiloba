import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-black py-[80px]'>

            <div className="flex">

                <div className="rounded-[50px] p-2 bg-white mx-3 cursor-pointer">

                    <img src="facebook.svg" alt="facebok" className='h-5' />

                </div>
                <div className="rounded-[50px] p-2 bg-white mx-3 cursor-pointer">

                    <img src="twitter.svg" alt="facebok" className='h-5' />

                </div>
                <div className="rounded-[50px] p-2 bg-white mx-3 cursor-pointer">

                    <img src="linkedin.svg" alt="facebok" className='h-4' />

                </div>
                <div className="rounded-[50px] p-2 bg-white mx-3 cursor-pointer">

                    <img src="instagram.svg" alt="facebok" className='h-5' />

                </div>
            </div>

            <p className='text-white my-8 font-rubik'>The Faji Tobiloba</p>
            <a href='https://ibrahimkolabalogun.web.app/' className='text-white mt-8 font-rubik mb-[-60px] text-[14px]'>Developed by <span className='text-blue-600'>Ibrahim</span> </a>

        </div>
    )
}

export default Footer