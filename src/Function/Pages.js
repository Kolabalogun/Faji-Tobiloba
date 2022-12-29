import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "../Frontend/Pages/Home";
import NotFound from "../Frontend/Pages/NotFound";
import Articles from "../Frontend/Pages/Articles";
import Contact from "../Frontend/Pages/Contact";
import About from "../Frontend/Pages/About";
import Project from "../Frontend/Pages/Project";
import BlogDetails from "../Components/Article/BlogDetails";


const Pages = () => {

    const location = useLocation();
    return (
        <AnimatePresence wait>
            <Routes key={location.pathname} location={location}>


                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />





                <Route path="/projects" element={<Project />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
