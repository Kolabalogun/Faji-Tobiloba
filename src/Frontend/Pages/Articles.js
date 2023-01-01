import React, { useEffect } from "react";
import Blog from "../../Components/Article/Blog";
import Footer from "../../Components/Others/Footer";
import Navbar from "../../Components/Others/Navbar";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";

const Articles = () => {
  const { Articles } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div
        className="bg-rubik  h-[50vh] w-full flex flex-col justify-center"
        style={{ backgroundImage: "url('aa.svg')" }}
      >
        <Navbar />

        <h1 className="text-white font-poppins text-[50px] px-[100px] font-bold">
          My Articles
        </h1>
        <p className="text-white font-poppins  px-[100px]  text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <Blog />

      <Footer />
    </AnimatedPage>
  );
};

export default Articles;
