import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Components/Others/Loader";
import { useGlobalContext } from "../../Function/Context";
import Navbar from "../Components/Navbar";

const Messages = () => {
  const { Messages, handleDeleteMessage, loader } = useGlobalContext();
  const points = Messages;

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
                Messages
              </h6>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="flex flex-col">
              {points?.map((msg, i) => (
                <div key={i} className="border mb-4">
                  <div className=" p-[50px] sm-p-[20px]">
                    <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
                      <span>
                        Sent on {msg.timestamp.toDate().toDateString()}
                      </span>
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      <span>
                        <span className="text-medium-gray ">
                          {msg.username}
                        </span>
                      </span>
                    </div>

                    <a
                      href="blog-standard-post.html"
                      class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
                    >
                      {msg.subject}
                    </a>

                    <div
                      className="mt-4 text-[12px] font-rubik"
                      dangerouslySetInnerHTML={{
                        __html: msg.description,
                      }}
                    />

                    <div className="flex justify-between items-center">
                      <a
                        href={`mailto:${msg.email}`}
                        className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300"
                      >
                        reply
                      </a>
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="bg-red-600 border-red-600 hover:bg-white hover:text-red-600 text-white leading-5 text-[10px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300"
                      >
                        Delete
                      </button>
                    </div>
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

export default Messages;
