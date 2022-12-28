import React from 'react'
import Quote from '../../Components/About/Quote'
import Story from '../../Components/About/Story'
import Footer from '../../Components/Others/Footer'
import Navbar from '../../Components/Others/Navbar'
import AnimatedPage from '../../Utils/AnimatedPage'

const About = () => {
    return (
        <AnimatedPage >
            <div className="bg-zinc-300  h-full w-full">
                <Navbar />
                <Story />
                <Quote />
                <Footer />
            </div>
        </AnimatedPage>
    )
}

export default About