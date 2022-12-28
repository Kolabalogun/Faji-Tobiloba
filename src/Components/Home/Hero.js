import React from 'react'
import Navbar from '../Others/Navbar'
import { Link } from "react-scroll";


import Caption from './Caption'

const Hero = () => {
    return (
        <div id='home' className="w-full h-screen bg-zinc-300 bg-cover">
            < Navbar />

            <Caption />



            <Link
                activeClass="active"
                to="note"

                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="absolute cursor-pointer hover:scale-75  bottom-5 left-[50%] transition-all duration-200 delay-100 "

            >
                <img src="ad.png" className='h-8
                ' alt="" />
            </Link>




        </div >
    )
}

export default Hero



// style={{ backgroundImage: "url('h1.svg')" }}