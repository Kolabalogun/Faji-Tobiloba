import React from "react";

const Reply = ({ handleReplyChange, replyObj, wIP }) => {
  return (
    <div className="flex flex-col justify-center items-center py-[130px] bg-[#f7f7f7]">
      <div className="flex items-center">
        <div className="w-9 h-[.8px] bg-gray-300"></div>
        <h1 className="px-5 text-gray-900 uppercase text-xs leading-5">
          leave a reply
        </h1>
        <div className="w-9 h-[.8px] bg-gray-300"></div>
      </div>
      <div className="flex  flex-col  mt-[30px]  text-[14px]">
        <div className="grid grid-cols-2 gap-3 my-[10px]">
          <input
            type="text"
            name="name"
            onChange={handleReplyChange}
            value={replyObj.name}
            placeholder="Your name...*"
            required
            className="border w-[400px] py-[18px] px-[25px] text-[14px] "
          />
          <input
            type="email"
            name="email"
            onChange={handleReplyChange}
            value={replyObj.email}
            placeholder="Your Email*"
            required
            className="border w-[400px] py-[18px] px-[25px] text-[14px] "
          />
        </div>

        <textarea
          rows="4"
          name="replyTxt"
          onChange={handleReplyChange}
          value={replyObj.replyTxt}
          placeholder="Enter your reply here*"
          className="border py-[18px] px-[25px] text-[14px]  
          "
        />
        <button
          onClick={wIP}
          className=" z-30 mt-5 px-5 flex self-center font-semibold py-2 bg-black border-black text-white  hover:bg-white hover:text-black uppercase "
        >
          send reply
        </button>
      </div>
    </div>
  );
};

export default Reply;
