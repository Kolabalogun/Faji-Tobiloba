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
import Login from "../Auth/Login";
import { useGlobalContext } from "./Context";
import { Admin } from "../Backend/Admin";
import Gallery from "../Frontend/Pages/Gallery";

const Pages = () => {
  const { user } = useGlobalContext();

  const location = useLocation();
  return (
    // <AnimatePresence wait>
    // <Routes key={location.pathname} location={location}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/projects" element={<Project />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />

      <Route path="*" element={<NotFound />} />

      <Route path="/auth" element={<Login />} />

      {user && (
        <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/updateArticle/:id" element={<Admin />} />
        </>
      )}
    </Routes>

    // </Routes>
    // {/* </AnimatePresence> */}
  );
};

export default Pages;
