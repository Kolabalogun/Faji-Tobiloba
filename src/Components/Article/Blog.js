import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Blog = () => {
  const { Articles } = useGlobalContext();

  return (
    <div className="p-[100px] grid md:grid-cols-2 gap-4 grid-cols-1">
      <div className="flex flex-col w-full mb-[60px] sm:mb-[30px]">
        <div className="cursor-pointer">
          <img src="a.jpg" alt="blogImg" className="w-[100%]" />
        </div>

        <div className="border">
          <div className=" p-[50px] sm-p-[20px]">
            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
              <span>Posted on June 30, 2017</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span>
                <a href="blog-grid.html" className="text-medium-gray ">
                  Branding
                </a>
              </span>
            </div>

            <a
              href="blog-standard-post.html"
              class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
            >
              This is a standard post with a preview image
            </a>

            <p
              className="mt-4 text-[12px] font-rubik
                        "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry industry’s standard
              dummy text Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text.
            </p>

            <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[60px] sm:mb-[30px]">
        <div className="cursor-pointer">
          <img src="b.jpg" alt="blogImg" className="w-[100%]" />
        </div>
        <div className="border">
          <div className=" p-[50px] sm-p-[20px]">
            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
              <span>Posted on June 30, 2017</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span>
                <a href="blog-grid.html" className="text-medium-gray ">
                  Branding
                </a>
              </span>
            </div>

            <a
              href="blog-standard-post.html"
              class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
            >
              This is a standard post with a preview image
            </a>

            <p
              className="mt-4 text-[12px] font-rubik
                        "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry industry’s standard
              dummy text Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text.
            </p>

            <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[60px] sm:mb-[30px]">
        <div className="cursor-pointer">
          <img src="c.jpg" alt="blogImg" className="w-[100%]" />
        </div>
        <div className="border">
          <div className=" p-[50px] sm-p-[20px]">
            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
              <span>Posted on June 30, 2017</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span>
                <a href="blog-grid.html" className="text-medium-gray ">
                  Branding
                </a>
              </span>
            </div>

            <a
              href="blog-standard-post.html"
              class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
            >
              This is a standard post with a preview image
            </a>

            <p
              className="mt-4 text-[12px] font-rubik
                        "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry industry’s standard
              dummy text Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text.
            </p>

            <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[60px] sm:mb-[30px]">
        <div className="cursor-pointer">
          <img src="d.jpg" alt="blogImg" className="w-[100%]" />
        </div>
        <div className="border">
          <div className=" p-[50px] sm-p-[20px]">
            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
              <span>Posted on June 30, 2017</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span>
                <a href="blog-grid.html" className="text-medium-gray ">
                  Branding
                </a>
              </span>
            </div>

            <a
              href="blog-standard-post.html"
              class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
            >
              This is a standard post with a preview image
            </a>

            <p
              className="mt-4 text-[12px] font-rubik
                        "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry industry’s standard
              dummy text Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text.
            </p>

            <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[60px] sm:mb-[30px]">
        <div className="cursor-pointer">
          <img src="e.jpg" alt="blogImg" className="w-[100%]" />
        </div>
        <div className="border">
          <div className=" p-[50px] sm-p-[20px]">
            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
              <span>Posted on June 30, 2017</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span>
                <a href="blog-grid.html" className="text-medium-gray ">
                  Branding
                </a>
              </span>
            </div>

            <a
              href="blog-standard-post.html"
              class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
            >
              This is a standard post with a preview image
            </a>

            <p
              className="mt-4 text-[12px] font-rubik
                        "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry industry’s standard
              dummy text Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text.
            </p>

            <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[60px] sm:mb-[30px]">
        <div className="cursor-pointer">
          <img src="f.jpg" alt="blogImg" className="w-[100%]" />
        </div>
        <div className="border">
          <div className=" p-[50px] sm-p-[20px]">
            <div className="text-gray-700 text-[12px] mb-[5px] font-rubik uppercase ">
              <span>Posted on June 30, 2017</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span>
                <a href="blog-grid.html" className="text-medium-gray ">
                  Branding
                </a>
              </span>
            </div>

            <a
              href="blog-standard-post.html"
              class="text-black uppercase text-[16px] font-rubik  font-[600px] mb-[15px] hover:text-rubik"
            >
              This is a standard post with a preview image
            </a>

            <p
              className="mt-4 text-[12px] font-rubik
                        "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry industry’s standard
              dummy text Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text.
            </p>

            <button className="bg-black border-black hover:bg-white hover:text-black text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
