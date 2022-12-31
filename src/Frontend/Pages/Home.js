import React, { useEffect } from 'react'
import Footer from '../../Components/Others/Footer'
import Hero from '../../Components/Home/Hero'
import Note from '../../Components/Home/Note'
import AnimatedPage from '../../Utils/AnimatedPage'

const Home = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <AnimatedPage>
            <Hero />
            <Note />
            <Footer />
        </AnimatedPage>
    )
}

export default Home