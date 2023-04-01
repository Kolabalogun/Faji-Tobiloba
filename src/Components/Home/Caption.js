import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Function/Context";

const Caption = () => {
  const { homePageDetails } = useGlobalContext();

  return (
    <div className="h-[95vh]  flex flex-col px-10 justify-center  ">
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <img src="logoSc.png" className="h-[80px]" alt="" />
          <img src="su.png" className="h-[100px]" alt="" />
        </div>

        <div className="flex flex-col ">
          <h1 className="font-poppins font-bold lg:text-[2.6rem] md:text-[3.0rem] sm:text-[2.5rem] text-[2.3rem] text-white">
            <div
              dangerouslySetInnerHTML={{
                __html: homePageDetails && homePageDetails?.title,
              }}
            />
            {/* {homePageDetails && homePageDetails?.title} */}
          </h1>
          <p className="py-1 text-[14px] text-white">
            <div
              dangerouslySetInnerHTML={{
                __html: homePageDetails && homePageDetails?.caption,
              }}
            />

            {/* {homePageDetails && homePageDetails?.caption} */}
          </p>
        </div>

        <div className="flex my-2">
          <Link to="/contact">
            <button className="py-[0.825rem] px-[2.025rem]  transition-colors duration-200 delay-100 border-blue-800 border font-[600] text-sm ">
              Contact me
            </button>
          </Link>
          <Link to="/about">
            <button className="py-[0.825rem] px-[2.025rem] transition-colors duration-200 delay-100  border-blue-800 border-[1px] font-[600] bg-transparent mx-2  hover:bg-blue-800 text-white hover:text-white text-sm ">
              My Story
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="xmd:flex flex-col hidden w-full ml-[80px]">
        <img src="fajj.png" className="h-[600px] w-[500px]" alt="" />
      </div> */}
    </div>
  );
};

export default Caption;
