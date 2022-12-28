import React, { useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "../Frontend/Pages/Home";
import NotFound from "../Frontend/Pages/NotFound";
import Articles from "../Frontend/Pages/Articles";
import Contact from "../Frontend/Pages/Contact";
import About from "../Frontend/Pages/About";


const Pages = ({ user, handleLogout, loader }) => {

    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>


                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />





                <Route path="/articles" element={<Articles />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
