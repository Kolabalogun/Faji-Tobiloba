import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Function/Context";

const Blog = () => {
  const { Articles } = useGlobalContext();

  const points = Articles;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  return (
    <div className="lg:px-[100px] py-[100px]  px-[20px] xmd:px-[100px] grid md:grid-cols-2 gap-4 grid-cols-1">
      {points?.map((article, index) => (
        <div
          key={index}
          className="flex flex-col w-full mb-[60px] sm:mb-[30px]"
        >
          <Link to={`/article/${article?.title}`}>
            <div className="cursor-pointer">
              <img
                src={article?.imgUrl}
                alt="blogImg"
                className="w-[100%] h-[300px]  sm:h-[400px] xmd:h-[450px]"
              />
            </div>
          </Link>

          <div className="border">
            <div className=" sm:p-[50px] p-[10px] py-[50px]">
              <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
                {Articles.length > 0 && (
                  <span>
                    Posted on {article.timestamp?.toDate().toDateString()}
                  </span>
                )}
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <span className="hidden sm:flex">
                  <span className="text-medium-gray ">{article?.author}</span>
                </span>
              </div>

              <a
                href="blog-standard-post.html"
                className="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
              >
                {article?.title}
              </a>

              <div
                className="mt-4 text-[12px] font-rubik
                 "
                dangerouslySetInnerHTML={{
                  __html: `${article?.description.substring(0, 150)}...`,
                }}
              />

              <Link to={`/article/${article?.title}`}>
                <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
                  Continue Reading
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
