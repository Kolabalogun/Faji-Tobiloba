import React, { useEffect } from "react";
import Quote from "../../Components/About/Quote";
import Story from "../../Components/About/Story";
import Footer from "../../Components/Others/Footer";
import Loader from "../../Components/Others/Loader";
import Navbar from "../../Components/Others/Navbar";
import ScrolltoTop from "../../Components/Others/ScrolltoTop";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import Newletter from "./Newletter";

const About = () => {
  const { loader, getMyStoryDetails, MyStoryDetails, showNewsletter } =
    useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    getMyStoryDetails();
  }, []);

  return (
    <AnimatedPage>
      {!showNewsletter ? (
        <>
          {loader || !MyStoryDetails ? (
            <Loader />
          ) : (
            <div className="bg-rubik  h-full w-full">
              <Navbar />
              <Story />
              <Quote />
              <Footer />
              <ScrolltoTop />
            </div>
          )}
        </>
      ) : (
        <Newletter />
      )}
    </AnimatedPage>
  );
};

export default About;
