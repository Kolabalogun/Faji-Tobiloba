
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

        };

        window.addEventListener("scroll", watchHeight);

        return function () {
            window.removeEventListener("scroll", watchHeight);
        };
    }, [windowHeight]);



    const bg = {
        backgroundColor: windowHeight > 0 ? "white" : "transparent",
    };
    const tcolo = {
        color: windowHeight > 0 ? "#000" : "white",
    };






    return (
        <div style={bg} className='w-full h-[80px] z-10  fixed  top-0 bg-transparent transition-all xl:px-[80px] md:px-[80px] px-[60px] shadow-sm
' >

            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center ">
                    <h1 style={tcolo} className='text-3xl font-bold mr-5  font-rufina sm:text-4xl text-white'>TFT.</h1>



                </div>

                <ul className="hidden md:flex ">


                    <Link
                        activeClass="active"
                        to="home"
                        href="/"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        style={tcolo}
                        className={windowHeight > 0 ? "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white" : "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "}


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
                        style={tcolo}
                        className={windowHeight > 0 ? "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white" : "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "}


                        onClick={() => {
                            navigate("/about");

                        }}
                    >
                        My Story
                    </Link>
                    <Link
                        activeClass="active"
                        to='/project'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        style={tcolo}
                        className={windowHeight > 0 ? "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white" : "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "}


                        onClick={() => {
                            navigate("/projects");

                        }}
                    >
                        Projects
                    </Link>

                    <Link
                        activeClass="active"
                        to='/articles'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        style={tcolo}
                        className={windowHeight > 0 ? "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white" : "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "}


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
                        style={tcolo}
                        className={windowHeight > 0 ? "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white" : "font-rubik text-[14px] cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "}


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
                nav && <ul className=" h-screen w-ful bg-zinc-200 md:hidden l px-8">
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