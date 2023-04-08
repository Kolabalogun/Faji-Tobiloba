import React, { useEffect, useState } from "react";
import Footer from "../../Components/Others/Footer";
import Hero from "../../Components/Home/Hero";
import Note from "../../Components/Home/Note";
import AnimatedPage from "../../Utils/AnimatedPage";
import { useGlobalContext } from "../../Function/Context";

import Loader from "../../Components/Others/Loader";
import ScrolltoTop from "../../Components/Others/ScrolltoTop";
import Newletter from "./Newletter";

const Home = () => {
  const { loader, getHomepageDetails, homePageDetails, showNewsletter } =
    useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);

    getHomepageDetails();
  }, []);

  return (
    <AnimatedPage>
      {!showNewsletter ? (
        <>
          {loader || !homePageDetails ? (
            <Loader />
          ) : (
            <>
              <Hero />
              <Note />
              {/* <Footer /> */}
              <ScrolltoTop />
            </>
          )}
        </>
      ) : (
        <Newletter />
      )}
    </AnimatedPage>
  );
};

export default Home;
