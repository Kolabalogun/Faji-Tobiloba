import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Story = () => {
  const { MyStoryDetails } = useGlobalContext();

  return (
    <div
      id="story"
      className="py-[120px] px-[60px] md:px-[100px] xl:px-[100px] lg:px-[100px] flex-col flex "
    >
      <div className="flex flex-nowrap xl:px-[130px] lg:px-[0px] ">
        <div className="rounded-[50%] h-[250px] w-[250px] relative border">
          {MyStoryDetails && (
            <img
              className="rounded-[50%] object-fill absolute  w-[100%] h-full"
              src={MyStoryDetails.imgUrl}
              alt="faji"
            />
          )}
        </div>

        <div className="w-[70%] flex flex-nowrap">
          <h2 className="font-bold text-[40px] whitespace-pre-wrap flex-wrap leading-[50px] font-poppins my-[2rem]  pl-9 text-white">
            {MyStoryDetails && MyStoryDetails.topText}
          </h2>
        </div>
      </div>

      <div className="flex flex-col ml-[150px] mt-[70px]">
        <div className="flex items-start">
          <div className="flex items-center w-[50%]">
            <div className="w-[200px] bg-white h-[2px]"></div>
            <p className="font-poppins  w-7 px-[120px] text-[12px] text-white">
              Intro
            </p>
          </div>
          <div className=" flex flex-wrap w-[800px] ">
            <p className="break-words text-white ">
              {MyStoryDetails && (
                <div
                  className="break-words text-white "
                  dangerouslySetInnerHTML={{ __html: MyStoryDetails.intro }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[150px] mt-[70px]">
        <div className="flex items-start">
          <div className="flex items-center w-[50%]">
            <div className="w-[200px] bg-white h-[2px]"></div>
            <p className="font-poppins  w-7 px-[120px] text-[12px] text-white">
              Education
            </p>
          </div>
          <div className=" flex flex-wrap w-[800px] ">
            <p className="break-words text-white ">
              {MyStoryDetails && (
                <div
                  className="break-words text-white "
                  dangerouslySetInnerHTML={{ __html: MyStoryDetails.education }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[150px] mt-[70px]">
        <div className="flex items-start">
          <div className="flex items-center w-[50%]">
            <div className="w-[200px] bg-white h-[2px]"></div>
            <p className="font-poppins  w-7 px-[120px] text-[12px] text-white">
              Career
            </p>
          </div>
          <div className=" flex flex-wrap w-[800px] ">
            <p className="break-words text-white ">
              {MyStoryDetails && (
                <div
                  className="break-words text-white "
                  dangerouslySetInnerHTML={{ __html: MyStoryDetails.career }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[150px] mt-[70px]">
        <div className="flex items-start">
          <div className="flex items-center w-[50%]">
            <div className="w-[200px] bg-white h-[2px]"></div>
            <p className="font-poppins  w-7 px-[120px] text-[12px] text-white">
              Achievement
            </p>
          </div>
          <div className=" flex flex-wrap w-[800px] ">
            <p className="break-words text-white ">
              {MyStoryDetails && (
                <div
                  className="break-words text-white "
                  dangerouslySetInnerHTML={{
                    __html: MyStoryDetails.achievement,
                  }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[150px] mt-[70px]">
        <div className="flex items-start">
          <div className="flex items-center w-[50%]">
            <div className="w-[200px] bg-white h-[2px]"></div>
            <p className="font-poppins  w-7 px-[120px] text-[12px] text-white">
              Public References
            </p>
          </div>
          <div className=" flex flex-wrap w-[800px] ">
            {MyStoryDetails && (
              <div
                className="break-words text-white "
                dangerouslySetInnerHTML={{ __html: MyStoryDetails.publicRef }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
