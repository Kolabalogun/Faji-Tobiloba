import React from 'react'
import Navbar from '../Others/Navbar'
import { Link } from "react-scroll";


import Caption from './Caption'

const Hero = () => {
    return (
        <div id='home' className="w-full bg-rubik h-screen  bg-cover">
            < Navbar />

            <Caption />



            <Link
                activeClass="active"
                to="note"

                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="absolute cursor-pointer hover:scale-[0.9]  bottom-5 left-[50%] transition-all duration-200 delay-100  mouse"

            >
                <span className="mouse-wheel"></span>
            </Link>






        </div >
    )
}

export default Hero



// style={{ backgroundImage: "url('h1.svg')" }}