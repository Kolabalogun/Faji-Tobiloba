import { useState } from "react";
import Navbar from "../Components/Navbar";
import NewArticle from "../News/NewArticle";

const Articles = () => {
  const [state, setstate] = useState(true);

  function handleState(params) {
    setstate(!state);
  }

  return (
    <div className="bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
      <Navbar />

      {state ? (
        <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
          <div
            className="flex flex-col p-3
        "
          >
            <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold mb-1">
              Articles
            </h6>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 my-5 mx-3">
            <div className="flex flex-col">
              <div className="cursor-pointer rounded-lg  shadow-2xl">
                <img
                  src="a.jpg"
                  alt="ArticleImg"
                  className="w-[100%] rounded-lg"
                />
              </div>
              <div className="p-1 py-6 flex flex-col">
                <h5 className="font-semibold text-[#344767]">Article 1</h5>

                <p className="py-4 text-[13px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias consequatur animi placeat quos fuga non voluptate,
                  quo atque beatae vitae.
                </p>

                <div className="flex justify-between">
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase ">
                    EDIT Article
                  </button>
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500">
                    DELETE Article
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="cursor-pointer rounded-lg  shadow-2xl">
                <img
                  src="b.jpg"
                  alt="ArticleImg"
                  className="w-[100%] rounded-lg"
                />
              </div>
              <div className="p-1 py-6 flex flex-col">
                <h5 className="font-semibold text-[#344767]">Article 2</h5>

                <p className="py-4 text-[13px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias consequatur animi placeat quos fuga non voluptate,
                  quo atque beatae vitae.
                </p>

                <div className="flex justify-between">
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase ">
                    EDIT Article
                  </button>
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500">
                    DELETE Article
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="cursor-pointer rounded-lg  shadow-2xl">
                <img
                  src="c.jpg"
                  alt="ArticleImg"
                  className="w-[100%] rounded-lg"
                />
              </div>
              <div className="p-1 py-6 flex flex-col">
                <h5 className="font-semibold text-[#344767]">Article 3</h5>

                <p className="py-4 text-[13px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias consequatur animi placeat quos fuga non voluptate,
                  quo atque beatae vitae.
                </p>

                <div className="flex justify-between">
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase ">
                    EDIT Article
                  </button>
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500">
                    DELETE Article
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="cursor-pointer rounded-lg  shadow-2xl">
                <img
                  src="d.jpg"
                  alt="ArticleImg"
                  className="w-[100%] rounded-lg"
                />
              </div>
              <div className="p-1 py-6 flex flex-col">
                <h5 className="font-semibold text-[#344767]">Article 4</h5>

                <p className="py-4 text-[13px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias consequatur animi placeat quos fuga non voluptate,
                  quo atque beatae vitae.
                </p>

                <div className="flex justify-between">
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase ">
                    EDIT Article
                  </button>
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500">
                    DELETE Article
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="cursor-pointer rounded-lg  shadow-2xl">
                <img
                  src="e.jpg"
                  alt="ArticleImg"
                  className="w-[100%] rounded-lg"
                />
              </div>
              <div className="p-1 py-6 flex flex-col">
                <h5 className="font-semibold text-[#344767]">Article 5</h5>

                <p className="py-4 text-[13px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias consequatur animi placeat quos fuga non voluptate,
                  quo atque beatae vitae.
                </p>

                <div className="flex justify-between">
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase ">
                    EDIT Article
                  </button>
                  <button className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500">
                    DELETE Article
                  </button>
                </div>
              </div>
            </div>
            <div
              onClick={handleState}
              className="flex flex-col border-dashed border-[3px] hover:opacity-60 bg-white cursor-pointer rounded-lg justify-center items-center"
            >
              <img src="plus.svg" alt="" className="h-5" />

              <h5 className="py-5 font-semibold text-[#344767]">New Article</h5>
            </div>
          </div>
        </div>
      ) : (
        <NewArticle handleState={handleState} />
      )}
    </div>
  );
};

export default Articles;
