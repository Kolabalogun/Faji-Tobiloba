import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { db } from "../../Utils/Firebase";

import Reply from "./Reply";

const Comment = ({ article }) => {
  // Comments  Info

  const commentTime = new Date().toDateString();
  const dateId = new Date().getTime();

  const [comment, commentF] = useState({
    name: "",
    commentTxt: "",
    email: "",
    commentTime: commentTime,
    dateId: dateId,
    reply: [],
  });

  const { name, email, commentTxt } = comment;

  const handleChange = (e) => {
    commentF((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Send Comment to Firebase

  const updateComment = async (e) => {
    e.preventDefault();

    if (commentTxt && name && email) {
      try {
        await updateDoc(doc(db, "Articles", article.id), {
          ...article,
          comment: arrayUnion(comment),
        });
        toast.success("Comment uploaded");
      } catch (err) {
        console.log(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    // window.location.reload();
  };

  // #=============================================#

  // #=============================================#

  const [openReply, openReplyF] = useState(false);
  const [commentId, commentIdF] = useState("");

  // Toggle Open Reply Form
  function handleOpenReply(id) {
    openReplyF(!openReply);
    commentIdF(id);
  }

  // #=============================================#

  // showcase each comment

  function GetComments() {
    if (article.comment.length > 0) {
      const hh = article.comment.map((com, index) => {
        return (
          <div
            key={index}
            className="py-[50px] lg:px-[130px]  px-[20px] w-full border-b-[#ededed] border-b-[1px]"
          >
            <div>
              <div className="flec">
                <div className="flec">
                  <div className="flex  justify-between items-center">
                    <h4 className="text-xs leading-5 text-gray-900 font-semibold uppercase">
                      {com.name}
                    </h4>
                    <button
                      className=" px-5 flex self-center font-semibold py-1 bg-black border-black text-white text-[11px]  hover:bg-white hover:text-black uppercase "
                      onClick={() => handleOpenReply(com.dateId)}
                    >
                      <p>Reply</p>
                    </button>
                  </div>

                  <span className="uppercase text-xs leading-5 text-gray-600 mb-2">
                    {com.commentTime}
                  </span>
                </div>

                <div className="commentTxt">
                  <p className="text-[14px]">{com.commentTxt}</p>
                </div>
              </div>
            </div>
            {/* Replies */}

            {com.reply.map((rep, index) => (
              <div
                key={index}
                className="ml-[50px] my-[20px] py-[20px] border-t-[#ededed] border-t-[1px]"
              >
                <div className="flex">
                  <div className="flec">
                    <div className="flex  justify-between items-center">
                      <h4 className="text-xs leading-5 text-gray-900 font-semibold uppercase">
                        {rep.name}
                      </h4>
                    </div>

                    <span className="uppercase text-xs leading-5 text-gray-600 ">
                      {rep.commentTime}
                    </span>
                  </div>
                </div>

                <div className="commentTxt">
                  <p className="text-[14px]">{rep.replyTxt}</p>
                </div>
              </div>
            ))}
          </div>
        );
      });

      return hh;
    }
  }

  // reply Info

  const [replyObj, replyObjF] = useState({
    name: "",
    replyTxt: "",
    email: "",
    photoID: "",
    commentTime: commentTime,
    dateId: dateId,
  });

  const { replyTxt } = replyObj;

  const handleReplyChange = (e) => {
    replyObjF((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // #=============================================#

  // Updating Comments with Replies
  const [updatedComments, updatedCommentsF] = useState("");

  // Function responsible for checking if the selected commet and adding reply to comments
  function RED() {
    let eachComment = article.comment?.map((comm) => {
      if (comm.dateId === commentId) {
        return {
          ...comm,
          reply: [...comm.reply, replyObj],
        };
      }

      return comm;
    });
    updatedCommentsF(eachComment);
  }

  // Function responsible for sending replies and comments to Firestore

  const wIP = async (e) => {
    e.preventDefault();

    RED();

    if (updatedComments === "") {
    } else if (replyTxt) {
      try {
        await updateDoc(doc(db, "Articles", article.id), {
          ...article,
          comment: updatedComments,
        });
        toast.success("Reply uploaded");
      } catch (err) {
        console.log(err);
      }
      // window.location.reload();
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="">
      <div className=" flexjustify-center flex-col">
        <div className="flex items-center justify-center">
          <div className="w-9 h-[.8px] bg-gray-300"></div>
          <h1 className="px-5 text-gray-900 uppercase text-xs leading-5">
            {article.comment.length} Comments
          </h1>
          <div className="w-9 h-[.8px] bg-gray-300"></div>
        </div>

        <div className="mt-[50px]">{article.comment && <GetComments />}</div>
      </div>

      {openReply && (
        <Reply
          handleChange={handleChange}
          name={name}
          email={email}
          handleReplyChange={handleReplyChange}
          replyObj={replyObj}
          wIP={wIP}
        />
      )}

      {!openReply && (
        <div className="flex flex-col justify-center lg:px-[130px]  px-[20px]  py-[130px] bg-[#f7f7f7] ">
          <div className="flex items-center justify-center">
            <div className="w-9 h-[.8px] bg-gray-300"></div>
            <h1 className="px-5 text-gray-900 uppercase text-xs leading-5">
              leave a comment
            </h1>
            <div className="w-9 h-[.8px] bg-gray-300"></div>
          </div>

          <div className="flex  flex-col  mt-[30px]  text-[14px]">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-3 my-[10px]">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={comment.name}
                placeholder="Your name...*"
                required
                className="border   py-[18px] px-[25px] text-[14px] "
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={comment.email}
                placeholder="Your Email*"
                required
                className="border   py-[18px] px-[25px] text-[14px] "
              />
            </div>

            <textarea
              rows="4"
              name="commentTxt"
              onChange={handleChange}
              value={commentTxt}
              placeholder="Enter your comments here*"
              className="border py-[18px] px-[25px] text-[14px]  
              "
            />

            <button
              onClick={updateComment}
              className=" z-30 mt-5 px-5 flex self-center font-semibold py-2 bg-black border-black text-white  hover:bg-white hover:text-black uppercase "
            >
              send message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
