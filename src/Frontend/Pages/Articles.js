import React, { useEffect } from "react";
import Blog from "../../Components/Article/Blog";
import Footer from "../../Components/Others/Footer";
import Loader from "../../Components/Others/Loader";
import Navbar from "../../Components/Others/Navbar";
import ScrolltoTop from "../../Components/Others/ScrolltoTop";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import Newletter from "./Newletter";

const Articles = () => {
  const { loader, Articles, showNewsletter } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <AnimatedPage>
         {!showNewsletter ? (
        <>

      {loader || Articles.length < 1 ? (
        <Loader />
      ) : (
        <>
          <div
            className="bg-rubik  h-[60vh] sm:h-[50vh] w-full   flex flex-col justify-center "
            style={{ backgroundImage: "url('aa.svg')" }}
          >
            <Navbar />

            <h1 className="text-white font-poppins text-[50px] lg:px-[50px] px-[20px] sm:font-bold font-semibold">
              My Articles
            </h1>
            <p className="text-white font-poppins lg:px-[50px] px-[20px]  text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <Blog />

          <Footer />
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

export default Articles;
