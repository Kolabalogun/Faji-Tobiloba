import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Function/Context";

const Caption = () => {
  const { homePageDetails } = useGlobalContext();

  return (
    <>
      <div className="h-[99vh]  z-50 flex flex-col relative px-6 xl:px-[120px] max-w-4xl md:px-[50px] justify-center  ">
        <div className="flex flex-col  ">
          <div className="flex items-center">
            <img src="logoSc.png" className="h-[70px] md:h-[80px]" alt="" />
            <img src="su.png" className="h-[70px] md:h-[100px]" alt="" />
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
            <p className="py-1 text-[7px] md:text-[14px] text-white">
              <div
                dangerouslySetInnerHTML={{
                  __html: homePageDetails && homePageDetails?.caption,
                }}
              />
            </p>
          </div>

          <div className="flex my-2">
            <Link to="/contact">
              <button className="py-[0.825rem] px-[2.225rem]   transition-colors duration-200 delay-100 border-blue-800 border font-[600] text-[13px] sm:text-sm ">
                Contact me
              </button>
            </Link>
            <Link to="/about">
              <button className="py-[0.825rem] px-[2.225rem]  transition-colors duration-200 delay-100  border-blue-800 border-[1px] font-[600] bg-transparent mx-2  hover:bg-blue-800 text-white hover:text-white text-[13px] sm:text-sm  ">
                My Story
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute hidden xl:flex bottom-8 right-9">
        <img src="gears/gear (1).svg" alt="gear" className="h-52 w-52" />
      </div>

      <div className="absolute hidden xl:flex  bottom-12 right-[35%]">
        <img src="gears/gg.svg" alt="gear" className="h-64 w-h-64" />
      </div>
      <div className="absolute hidden xl:flex top-20 right-11">
        <img
          src="gears/gears-lubricant.svg"
          alt="gear"
          className="h-96 w-h-96"
        />
      </div>
    </>
  );
};

export default Caption;
