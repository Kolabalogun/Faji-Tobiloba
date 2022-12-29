import React, { useEffect } from 'react'
import Quote from '../../Components/About/Quote'
import Story from '../../Components/About/Story'
import Footer from '../../Components/Others/Footer'
import Navbar from '../../Components/Others/Navbar'
import AnimatedPage from '../../Utils/AnimatedPage'

const About = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    return (
        <AnimatedPage >
            <div className="bg-rubik  h-full w-full">
                <Navbar />
                <Story />
                <Quote />
                <Footer />
            </div>
        </AnimatedPage>
    )
}

export default About