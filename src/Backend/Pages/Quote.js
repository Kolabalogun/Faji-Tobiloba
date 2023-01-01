import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Components/Others/Loader";
import { useGlobalContext } from "../../Function/Context";
import { db } from "../../Utils/Firebase";
import Navbar from "../Components/Navbar";

const initialState = {
  author: "",
  Quote: "",
  active: "true",
};

const Quote = () => {
  const {
    Quotes,
    handleDeleteQuote,
    loader,
    navigate,
    setloader,
    user,
    notificationF,
    notification,
  } = useGlobalContext();

  const [form, setform] = useState(initialState);

  const { author, Quote } = form;

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleQouteChange = (e) => {
    setform({ ...form, Quote: [e.target.value] });
  };

  const points = Quotes;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  const [dateId, setdateId] = useState("");

  // to set timeId
  useEffect(() => {
    window.scroll(0, 0);
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (author && Quote) {
      setloader(true);
      try {
        await addDoc(collection(db, "Quotes"), {
          ...form,

          timestamp: serverTimestamp(),

          userId: user.uid,
          dateId: dateId,
          comment: [],
        });

        setloader(false);
        toast.success("Quote added");
        setform(initialState);
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    navigate("/admin");
  };

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
                Quotes
              </h6>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 my-5 mx-3">
              {points?.map((Quote, index) => (
                <div className="flex flex-col border" key={index}>
                  <div className="px-4 py-6 flex flex-col">
                    <h5 className="font-semibold px-4 text-[#344767]">
                      {Quote?.author}
                    </h5>

                    <div
                      className="py-4 px-4 text-[14px]"
                      dangerouslySetInnerHTML={{
                        __html: Quote?.Quote,
                      }}
                    />

                    <div className="flex px-4 justify-between">
                      <button
                        onClick={() => handleDeleteQuote(Quote?.id)}
                        className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500"
                      >
                        DELETE Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-3">
              <div className="flex  flex-col  my-[30px]  text-[14px]">
                <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                  Add New Quote
                </h6>

                <div className="grid grid-cols-1 gap-3 my-[10px]">
                  <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleChange}
                    placeholder="Author"
                    required
                    className="border py-[18px] px-[25px] text-[14px] w-full"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 my-[10px]">
                  <textarea
                    placeholder="Quote"
                    name="Quote"
                    value={Quote}
                    onChange={handleQouteChange}
                    required
                    className="border py-[18px] px-[25px] text-[14px]  
                    "
                    rows="10"
                  />
                </div>
              </div>
              <p className="text-red-600 text-[14px] self-center flex">
                {notification}
              </p>
              <button
                onClick={handleSubmit}
                className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
              >
                SAVE
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quote;
