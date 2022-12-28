import React from 'react'

const Caption = () => {
    return (
        <div className='h-[80vh] flex md:justify-between sm:justify-center  items-center md:px-[150px] px-[80px]'>
            <div className="flex flex-col w-full" >
                <div className="flex items-center">
                    <img src="logoSc.png" className='h-[100px]' alt="" />
                    <img src="su.png" className='h-[120px]' alt="" />
                </div>

                <div className="flex flex-col">
                    <h1 className='font-poppins font-bold md:text-[3.5rem] text-[2.5rem] '>I'm Faji Tobiloba</h1>
                    <p>SU President of the University of Ilorin</p>
                </div>

                <div className="flex my-2">
                    <button className='py-[0.925rem] px-[2.025rem]  transition-colors duration-200 delay-100 border-blue-800 border font-[600] '>Contact me</button>
                    <button className='py-[0.925rem] px-[2.025rem] transition-colors duration-200 delay-100   border-blue-800 border font-[600] bg-transparent mx-2'>My Story</button>
                </div>

            </div>
            <div className="md:flex flex-col hidden" >

                <img src="fajj.png" className='h-[600px] w-[600px]' alt="" />

            </div>
        </div>
    )
}

export default Caption