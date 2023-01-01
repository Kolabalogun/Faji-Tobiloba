import React, { useEffect } from 'react'
import Quote from '../../Components/About/Quote'
import Story from '../../Components/About/Story'
import Footer from '../../Components/Others/Footer'
import Loader from '../../Components/Others/Loader'
import Navbar from '../../Components/Others/Navbar'
import { useGlobalContext } from '../../Function/Context'
import AnimatedPage from '../../Utils/AnimatedPage'

const About = () => {

    const { loader, getMyStoryDetails,
        MyStoryDetails, } = useGlobalContext()

    useEffect(() => {
        window.scroll(0, 0)
        getMyStoryDetails()
    }, [])


    return (
        <AnimatedPage >
            {loader || !MyStoryDetails ? <Loader /> : <div className="bg-rubik  h-full w-full">
                <Navbar />
                <Story />
                <Quote />
                <Footer />
            </div>}
        </AnimatedPage>
    )
}

export default About