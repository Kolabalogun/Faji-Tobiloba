import { signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

import { toast } from "react-toastify";
import Navbar from "../../Components/Others/Navbar";
import { useGlobalContext } from "../../Function/Context";
import { auth, db } from "../../Utils/Firebase";

const initialState = {
  email: "",
};
const Newletter = () => {
  const {
    setshowNewsletter,
    setloader,
    notificationF,
    notification,
    navigate,
  } = useGlobalContext();

  const [state, setstate] = useState(initialState);

  const { email } = state;

  function handleChange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  const handleAuth = async (e) => {
    e.preventDefault();

    if (email) {
      setloader(true);
      try {
        await addDoc(collection(db, "Newsletter"), {
          ...state,
        });
        setloader(false);
        localStorage.setItem("email", true);
        toast.success("Email Submitted");
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="h-[100vh] relative p-8 overflow-hidden w-full bg-[#0d1727]">
      {/* <Navbar /> */}

      <div
        onClick={() => {
          setshowNewsletter(false);
        }}
        className="absolute top-5 right-5 cursor-pointer"
      >
        <img src="close.svg" alt="close" className="h-7" />
      </div>

      <div className="flex h-[90vh] items-center justify-center">
        <div className="flex  z-1 flex-col  font-rubik text-center ">
          <h1 className="text-white font-rubik sm:text-[25px] text-[21px] font-bold bg-transparent z-30">
            Sign Up for our Newsletter
          </h1>

          <p className="text-white text-[14px] bg-transparent z-30">
            Please enter your Email
          </p>
          <div className=" grid grid-cols-1  bg-transparent z-30 my-[26px]">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              className="max-w-[700px] border py-[10px] w-full px-[20px]  text-[14px] outline-none  "
            />
          </div>

          {notification && (
            <p className="text-red-700 py-4 text-[14px] bg-transparent z-30">
              {notification}
            </p>
          )}

          <button
            onClick={handleAuth}
            className=" z-30 px-5 py-2 bg-white border-none text-black self-center hover:bg-black hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
