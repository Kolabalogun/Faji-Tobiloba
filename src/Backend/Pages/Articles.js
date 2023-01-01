import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../Components/Others/Loader";
import { useGlobalContext } from "../../Function/Context";

import Navbar from "../Components/Navbar";
import NewArticle from "../News/NewArticle";

const Articles = () => {
  const { pageStateF, Articles, handleDeleteArticle, loader } =
    useGlobalContext();

  const points = Articles;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  const [state, setstate] = useState(true);

  function handleState(params) {
    setstate(!state);
  }

  const { id } = useParams();

  useEffect(() => {
    id && pageStateF("article");

    id && setstate(false);
  }, [id]);

  return (
    <div className="bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
      <Navbar />
      {loader ? (
        <Loader />
      ) : (
        <>
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
                {points?.map((article, index) => (
                  <div className="flex flex-col" key={index}>
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                      <img
                        src={article?.imgUrl}
                        alt="ArticleImg"
                        className="w-[100%] rounded-lg  h-[300px]"
                      />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                      <h5 className="font-semibold text-[#344767]">
                        {article?.title}
                      </h5>

                      <div
                        className="py-4 text-[13px]"
                        dangerouslySetInnerHTML={{
                          __html: `${article?.description.substring(
                            0,
                            150
                          )}...`,
                        }}
                      />

                      <div className="flex justify-between">
                        <Link to={`/admin/updateArticle/${article?.id}`}>
                          <button className="py-1 px-2 text-[13px] font-semibold uppercase ">
                            EDIT Article
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteArticle(article?.id)}
                          className="py-1 px-2 text-[13px] font-semibold uppercase bg-red-600 border-red-600 hover:text-red-500"
                        >
                          DELETE Article
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  onClick={handleState}
                  className="flex py-5 flex-col border-dashed border-[3px] hover:opacity-60 bg-white cursor-pointer rounded-lg justify-center items-center"
                >
                  <img src="plus.svg" alt="" className="h-5" />

                  <h5 className="py-5 font-semibold text-[#344767]">
                    New Article
                  </h5>
                </div>
              </div>
            </div>
          ) : (
            <NewArticle handleState={handleState} />
          )}
        </>
      )}
    </div>
  );
};

export default Articles;
