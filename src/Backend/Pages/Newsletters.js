import React from "react";
import Loader from "../../Components/Others/Loader";
import { useGlobalContext } from "../../Function/Context";
import Navbar from "../Components/Navbar";

const Newsletters = () => {
  const { Newsletters, handleDeleteNewsletter, loader } = useGlobalContext();
  const points = Newsletters;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });
  return (
    <div className="bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
      <Navbar />

      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
            <div
              className="flex flex-col p-3
        "
            >
              <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold mb-1">
                Newsletters
              </h6>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="flex flex-col">
              {points?.map((msg, i) => (
                <div key={i} className="border mb-4">
                  <div className=" px-[50px] py-4 sm:px-[20px] flex justify-between items-center">
                    <p class="text-black  text-[16px] font-rubik  font-[600px] hover:text-rubik">
                      {msg.email}
                    </p>

                    <button
                      onClick={() => handleDeleteNewsletter(msg.id)}
                      className="bg-red-600 border-red-600 hover:bg-white hover:text-red-600 text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px]  font-bold transition-colors delay-200 duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Newsletters;
