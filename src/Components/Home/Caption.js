import React from 'react'
import { useGlobalContext } from '../../Function/Context'

const Caption = () => {

    const { homePageDetails } = useGlobalContext()

    return (
        <div className='h-[80vh] pt-[80px] grid md:grid-cols-2 grid-cols-1 md:justify-center sm:justify-center  items-center xl:px-[140px] md:px-[80px] px-[80px]'>

            <div className="flex flex-col w-full flex-wrap " >
                <div className="flex items-center">
                    <img src="logoSc.png" className='h-[100px]' alt="" />
                    <img src="su.png" className='h-[120px]' alt="" />
                </div>

                <div className="flex flex-col mt-[-10px]">
                    <h1 className='font-poppins font-bold lg:text-[2.6rem] md:text-[3.0rem] text-[2.5rem]  text-white'>{homePageDetails && homePageDetails.title}</h1>
                    <p className='py-1  text-white'>{homePageDetails && homePageDetails.caption}</p>
                </div>

                <div className="flex my-2">
                    <button className='py-[0.825rem] px-[2.025rem]  transition-colors duration-200 delay-100 border-blue-800 border font-[600] '>Contact me</button>
                    <button className='py-[0.825rem] px-[2.025rem] transition-colors duration-200 delay-100  border-blue-800 border-[1px] font-[600] bg-transparent mx-2  hover:bg-blue-800 text-white hover:text-white'>My Story</button>
                </div>

            </div>

            <div className="md:flex flex-col hidden w-full ml-[80px]" >

                <img src="fajj.png" className='h-[600px] w-[500px]' alt="" />

            </div>
        </div>
    )
}

export default Caption