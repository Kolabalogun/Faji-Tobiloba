import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useGlobalContext } from '../../Function/Context';





const Navbar = () => {
    const { navigate } = useGlobalContext();
    const [nav, setnav] = useState(false)

    function handleNavClick() {
        setnav(!nav)
    }





    const [windowHeight, windowHeightF] = React.useState(0);

    React.useEffect(() => {
        const watchHeight = () => {
            let scrollY = window.scrollY;

            windowHeightF(scrollY);
            console.log(windowHeight);
        };

        window.addEventListener("scroll", watchHeight);

        return function () {
            window.removeEventListener("scroll", watchHeight);
        };
    }, []);



    const bg = {
        backgroundColor: windowHeight > 0 ? "white" : "transparent",
    };






    return (
        <div style={bg} className='w-full h-[80px] z-10 md:px-[120px] px-[60px] fixed  top-0 bg-transparent transition-all ' >

            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center ">
                    <h1 className='text-3xl font-bold mr-5  font-rufina sm:text-3xl'>TFT.</h1>



                </div>

                <ul className="hidden md:flex ">
                    {/* <li className='font-rubik text-[14px] cursor-pointer  border-b-zinc-300  '>Home</li> */}

                    <Link
                        activeClass="active"
                        to="home"
                        href="/"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="font-rubik text-[14px] cursor-pointer  border-b-zinc-300 p-4 "


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


                        onClick={() => {
                            navigate("/about");

                        }}
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