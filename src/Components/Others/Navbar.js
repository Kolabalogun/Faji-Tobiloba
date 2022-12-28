import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Function/Context';





const Navbar = () => {
    const { navigate, signInType } = useGlobalContext();
    const [nav, setnav] = useState(false)

    function handleNavClick() {
        setnav(!nav)
    }

    const [bgColor, bgColorF] = useState();

    const bg = {
        backgroundColor: bgColor ? "rgba(27, 47, 69, 0.9)" : "transparent",
    };

    function handleSetActive(to) {
        if (to === "home") {
            bgColorF(null);
        } else {
            bgColorF("transparent");
        }
    }
    return (
        <div className='w-full h-[80px] z-10 md:px-[120px] px-[60px]' >

            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center ">
                    <h1 className='text-3xl font-bold mr-5  font-rufina sm:text-3xl'>TFT.</h1>



                </div>

                <ul className="hidden md:flex ">
                    {/* <li className='font-rubik text-[14px] cursor-pointer  border-b-zinc-300  '>Home</li> */}

                    <Link
                        activeClass="active"
                        to="/"
                        href="/"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="font-rubik text-[14px] cursor-pointer  border-b-zinc-300 p-4 "
                        onSetActive={handleSetActive}

                        onClick={() => {
                            navigate("/");

                        }}
                    >
                        Home
                    </Link>

                    <Link
                        activeClass="active"
                        to='/about'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="font-rubik text-[14px] cursor-pointer  border-b-zinc-300 p-4 "
                        onSetActive={handleSetActive}

                    // onClick={() => {
                    //     navigate("/about");

                    // }}
                    >
                        My Story
                    </Link>

                    <Link
                        activeClass="active"
                        to='/articles'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="font-rubik text-[14px] cursor-pointer  border-b-zinc-300 p-4 "
                        onSetActive={handleSetActive}

                        onClick={() => {
                            navigate("/articles");

                        }}
                    >
                        Articles
                    </Link>
                    <Link
                        activeClass="active"
                        to='/contact'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="font-rubik text-[14px] cursor-pointer  border-b-zinc-300 p-4 "
                        onSetActive={handleSetActive}

                        onClick={() => {
                            navigate("/contact");

                        }}
                    >
                        Contact
                    </Link>



                </ul>



                <div className="md:hidden cursor-pointer" onClick={handleNavClick}>
                    {!nav ? <img src='menu.svg' className='w-8 h-10' alt='menu' /> : <img src='close.svg' className='w-6 h-8' alt='close' />}

                </div>

            </div>


            {
                nav && <ul className=" h-screen bg-zinc-200 md:hidden w-full px-8">
                    <li className='border-b-2 font-rubik border-zinc-300 w-full cursor-pointer'>Home</li>
                    <li className='border-b-2 font-rubik border-zinc-300 w-full cursor-pointer'>About</li>
                    <li className='border-b-2 font-rubik border-zinc-300 w-full cursor-pointer'>Article</li>
                    <li className='border-b-2 font-rubik border-zinc-300 w-full cursor-pointer'>Contact</li>




                </ul>
            }






        </div>
    )
}

export default Navbar