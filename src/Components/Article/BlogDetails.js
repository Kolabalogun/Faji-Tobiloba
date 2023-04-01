import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-scroll";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import { db } from "../../Utils/Firebase";
import Footer from "../Others/Footer";
import Loader from "../Others/Loader";

import Navbar from "../Others/Navbar";
import ScrolltoTop from "../Others/ScrolltoTop";
import Comment from "./Comment";

const BlogDetails = () => {
  const { loader, Articles } = useGlobalContext();

  const { id } = useParams();

  const [form, setform] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);

    if (Articles.length > 0) {
      function nn() {
        const currentArticle = Articles?.filter((item, index) => {
          return item.title === id;
        });
        setform(currentArticle);
      }

      id && nn();
    }
  }, [Articles, id]);

  return (
    <AnimatedPage>
      {loader || !form || Articles.length < 0 ? (
        <Loader />
      ) : (
        <>
          {form?.map((article, i) => (
            <div key={i} className="relative">
              <div className="bg-black absolute opacity-60 z-1 h-[80vh] w-full"></div>

              <div
                className="bg-rubik  h-[80vh] w-full justify-center  items-center flex  bg-no-repeat bg-cover bg-center flex-col "
                style={{ backgroundImage: `url(${article?.imgUrl})` }}
              >
                <Navbar />

                <h1 className="text-white font-poppins z-10 bg-transparent text-[50px] lg:px-[100px]  px-[20px] text-2xl text-center  md:text-5xl font-semibold mb-2">
                  {article?.title}
                </h1>

                <span className="font-medium z-10 bg-transparent uppercase text-xs leading-5 text-white text-[11px]">
                  {article?.timestamp.toDate().toDateString()}
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;by{" "}
                  <span className="text-white">{article?.author}</span>
                </span>

                <Link
                  activeClass="active"
                  to="details"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className=" bg-transparent z-10 mt-5 cursor-pointer hover:scale-[0.9]  bottom-5 left-[50%] transition-all duration-200 delay-100  mouse"
                >
                  <span className="mouse-wheel"></span>
                </Link>
              </div>

              <div
                id="details"
                className=" py-[130px]  lg:px-[130px]  px-[20px] text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: article?.description,
                }}
              />
              <Comment article={article} />
            </div>
          ))}
          <Footer />
          <ScrolltoTop />
        </>
      )}
    </AnimatedPage>
  );
};

export default BlogDetails;
