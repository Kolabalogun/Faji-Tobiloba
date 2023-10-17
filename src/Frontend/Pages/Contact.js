import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../../Components/Others/Footer";
import Loader from "../../Components/Others/Loader";
import Navbar from "../../Components/Others/Navbar";
import ScrolltoTop from "../../Components/Others/ScrolltoTop";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import { db } from "../../Utils/Firebase";
import Newletter from "./Newletter";

const initialState = {
  username: "",
  email: "",
  phone: "",
  subject: "",
  description: "",
};

const Contact = () => {
  const {
    setloader,

    showNewsletter,
    notification,
    notificationF,
    loader,
  } = useGlobalContext();

  const [form, setform] = useState(initialState);

  const [dateId, setdateId] = useState("");

  const { username, email, phone, subject, description } = form;

  useEffect(() => {
    window.scroll(0, 0);
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && email && phone && description) {
      setloader(true);
      try {
        await addDoc(collection(db, "Messages"), {
          ...form,
          timestamp: serverTimestamp(),
        });
        await addDoc(collection(db, "Newsletter"), {
          email: email,
        });
        setloader(false);
        toast.success("Message Sent");
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <AnimatedPage>
      {!showNewsletter ? (
        <>
          <>
            {loader ? (
              <Loader />
            ) : (
              <>
                <div
                  className="bg-cover h-[70vh] flex flex-col  justify-center items-center"
                  style={{ backgroundImage: "url('wave.svg')" }}
                >
                  <Navbar />

                  <div className="mt-[-100px] text-center ">
                    <h1 className="text-[55px] leading-[75px] sm:font-bold font-semibold text-white">
                      Contact Me
                    </h1>
                    <p className="text-white">
                      Have any questions? Fill out the form and I’ll get you a
                      response soon!
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:px-[400px]  px-[20px] text-[14px]">
                  <p>
                    Feel free to ask / inquire about anything. Hoping to be a
                    resource and be of help in your journey in any way possible.
                    <br /> <br />
                    Similarly, please use this form or email directly me if your
                    message regards any opportunity.
                  </p>
                </div>

                <div className="flex  flex-col  my-[30px] md:px-[200px] px-[20px] text-[14px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-[10px]">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="border py-[18px] px-[25px] text-[14px] "
                    />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="border py-[18px] px-[25px] text-[14px] "
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 my-[10px]">
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className="border py-[18px] px-[25px] text-[14px] "
                    />
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="border py-[18px] px-[25px] text-[14px] "
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-3 my-[10px]">
                    <textarea
                      name="description"
                      value={description}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                      className="border py-[18px] px-[25px] text-[14px]  
                    "
                      rows="10"
                    />
                  </div>
                  <p className="text-center text-[14px] text-red-600">
                    {notification}
                  </p>

                  <button
                    onClick={handleSubmit}
                    className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
                  >
                    SEND MESSAGE
                  </button>
                </div>

                <Footer />
                <ScrolltoTop />
              </>
            )}
          </>
        </>
      ) : (
        <Newletter />
      )}
    </AnimatedPage>
  );
};

export default Contact;
