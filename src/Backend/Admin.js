import React, { useEffect } from 'react'
import { useGlobalContext } from '../Function/Context';
import { auth } from '../Utils/Firebase';
import Sidebar from './Components/Sidebar';
import Articles from './Pages/Articles';
import Contact from './Pages/Messages';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import MyStory from './Pages/MyStory';
import Project from './Pages/Project';
import Settings from './Pages/Settings';
import Messages from './Pages/Messages';



export const Admin = () => {

    const { pageState, navigate } = useGlobalContext()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {

            } else {
                navigate('/auth')
            }
        });
    }, []);

    return (

        <div className="
        
        ">

            <div className="w-full h-[400px] md:hidden flex flex-col items-center justify-center text-center">
                <h1 className="text-[2rem] mb-8">
                    Oops!! <br /> Error loading page.
                </h1>
                <p className="text-[1.2rem]">
                    Page will not display on small screen devices...
                </p>
            </div>




            <div className='admin hidden md:block'>


                <Sidebar />






                {



                    pageState === 'home' ? <Home /> :
                        pageState === 'story' ?
                            <MyStory /> :


                            pageState === 'project' ? <Project /> :
                                pageState === 'article' ? <Articles /> :
                                    pageState === 'settings' ?
                                        <Settings /> :
                                        pageState === 'message' ?
                                            <Messages /> :
                                            <Dashboard />

                }






            </div>
        </div>


    )
}
