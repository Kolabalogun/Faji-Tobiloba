import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import { db } from "../../Utils/Firebase";
import Footer from "../Others/Footer";
import Loader from "../Others/Loader";

import Navbar from "../Others/Navbar";
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
            <div key={i}>
              <div className="bg-black absolute opacity-60 z-1 h-[80vh] w-full"></div>

              <div
                className="bg-rubik  h-[80vh] w-full justify-center items-center flex  bg-no-repeat bg-cover flex-col "
                style={{ backgroundImage: `url(${article?.imgUrl})` }}
              >
                <Navbar />

                <h1 className="text-white font-poppins z-10 bg-transparent text-[50px] px-[100px]  text-5xl font-semibold mb-2">
                  {article?.title}
                </h1>

                <span className="font-medium z-10 bg-transparent uppercase text-xs leading-5 text-white text-[11px]">
                  {article?.timestamp.toDate().toDateString()}
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;by{" "}
                  <span className="text-white">{article?.author}</span>
                </span>
              </div>

              <div
                className=" p-[130px] text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: article?.description,
                }}
              />
              <Comment article={article} />
            </div>
          ))}
          <Footer />
        </>
      )}
    </AnimatedPage>
  );
};

export default BlogDetails;
