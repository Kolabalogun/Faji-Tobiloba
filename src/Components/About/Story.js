import React from "react";
import { useGlobalContext } from "../../Function/Context";
import ScrolltoTop from "../Others/ScrolltoTop";

const Story = () => {
  const { MyStoryDetails } = useGlobalContext();

  return (
    <div
      id="story"
      className="py-[120px] px-[8px] sm:px-[30px] xmd:px-[30px] xl:px-[100px] lg:px-[50px] flex-col flex "
    >
      <div className="flex items-center md:flex  flex-col-reverse  xl:px-[130px] lg:px-[0px] ">
        <div className="rounded-[10%] h-[250px] bg-white opacity-90 z-0  w-[250px] relative border">
          {MyStoryDetails && (
            <img
              className="rounded-[10%] object-fill absolute   bg-transparent z-10  w-[100%] h-full"
              src={MyStoryDetails?.imgUrl}
              alt="faji"
            />
          )}
        </div>

        <div className="w-full xmd:w-[70%] flex ">
          <h2 className="sm:font-bold font-semibold lg:text-[40px] xmd:text-[35px] text-[33px]  font-poppins my-[2rem]  pl-5 sm:pl-9 text-white">
            {MyStoryDetails && MyStoryDetails?.topText}
          </h2>
        </div>
      </div>

      <div className="md:flex flex flex-col lg:ml-[150px] xmd:ml-[50px]  md:ml-[30px]  ml-[20px] mt-[70px]">
        <div className="flex items-start md:flex-row flex-col">
          <div className="flex items-center md:flex-row flex-col  md:w-[40%] w-full  ">
            <div className="md:w-[200px] md:mb-0 mb-4 w-full  bg-white h-[2px]"></div>
            <p className="font-poppins  sm:w-7  sm:px-[120px] text-[12px] text-white py-5 md:py-0">
              Intro
            </p>
          </div>
          <div className=" flex flex-wrap md:w-[800px] w-full ">
            {MyStoryDetails && (
              <div
                className="break-words text-white "
                dangerouslySetInnerHTML={{ __html: MyStoryDetails?.intro }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="md:flex flex flex-col lg:ml-[150px] xmd:ml-[50px]  md:ml-[30px]  ml-[20px] mt-[70px]">
        <div className="flex items-start md:flex-row flex-col">
          <div className="flex items-center md:flex-row flex-col  md:w-[40%] w-full  ">
            <div className="md:w-[200px] md:mb-0 mb-4 w-full  bg-white h-[2px]"></div>
            <p className="font-poppins  sm:w-7  sm:px-[120px] text-[12px] text-white py-5 md:py-0">
              Education
            </p>
          </div>
          <div className=" flex flex-wrap md:w-[800px] w-full ">
            {MyStoryDetails && (
              <div
                className="break-words text-white "
                dangerouslySetInnerHTML={{ __html: MyStoryDetails?.education }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="md:flex flex flex-col lg:ml-[150px] xmd:ml-[50px]  md:ml-[30px]  ml-[20px] mt-[70px]">
        <div className="flex items-start md:flex-row flex-col">
          <div className="flex items-center md:flex-row flex-col  md:w-[40%] w-full  ">
            <div className="md:w-[200px] md:mb-0 mb-4 w-full  bg-white h-[2px]"></div>
            <p className="font-poppins  sm:w-7  sm:px-[120px] text-[12px] text-white py-5 md:py-0">
              Career
            </p>
          </div>
          <div className=" flex flex-wrap md:w-[800px] w-full ">
            {MyStoryDetails && (
              <div
                className="break-words text-white "
                dangerouslySetInnerHTML={{ __html: MyStoryDetails?.career }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="md:flex flex flex-col lg:ml-[150px] xmd:ml-[50px]  md:ml-[30px]  ml-[20px] mt-[70px]">
        <div className="flex items-start md:flex-row flex-col">
          <div className="flex items-center md:flex-row flex-col  md:w-[40%] w-full  ">
            <div className="md:w-[200px] md:mb-0 mb-4 w-full  bg-white h-[2px]"></div>
            <p className="font-poppins  sm:w-7  sm:px-[120px] text-[12px] text-white py-5 md:py-0">
              Achievement
            </p>
          </div>
          <div className=" flex flex-wrap md:w-[800px] w-full ">
            {MyStoryDetails && (
              <div
                className="break-words text-white "
                dangerouslySetInnerHTML={{
                  __html: MyStoryDetails?.achievement,
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="md:flex flex flex-col lg:ml-[150px] xmd:ml-[50px]  md:ml-[30px]  ml-[20px] mt-[70px]">
        <div className="flex items-start md:flex-row flex-col">
          <div className="flex items-center md:flex-row flex-col  md:w-[40%] w-full  ">
            <div className="md:w-[200px] md:mb-0 mb-4 w-full  bg-white h-[2px]"></div>
            <p className="font-poppins    sm:px-[120px] text-[12px] text-white py-5 md:py-0">
              Public References
            </p>
          </div>
          <div className=" flex flex-wrap md:w-[800px] w-full ">
            {MyStoryDetails && (
              <div
                className="break-words text-white "
                dangerouslySetInnerHTML={{ __html: MyStoryDetails?.publicRef }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
