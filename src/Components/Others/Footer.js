import React from "react";

const Footer = () => {
  return (
    <div className="flex border-t-[1px] flex-col items-center justify-center bg-white py-[80px]">
      <div className="flex">
        <div className="rounded-[50px] p-2 bg-black mx-3 cursor-pointer relative hover:bg-blue-500">
          <img src="/facebook.svg" alt="facebok" className="h-5 " />
        </div>
        <div className="rounded-[50px] p-2 bg-black mx-3 hover:bg-twitter cursor-pointer">
          <img src="/twitter.svg" alt="facebok" className="h-5" />
        </div>
        <div className="rounded-[50px] p-2 hover:bg-linked  bg-black mx-3 cursor-pointer">
          <img src="/linkedin.svg" alt="facebok" className="h-4" />
        </div>
        <div className="rounded-[50px] p-2 bg-black hover:bg-ig  mx-3 cursor-pointer">
          <img src="/instagram.svg" alt="facebok" className="h-5" />
        </div>
      </div>

      <p className="text-black my-8 font-rubik">The Faji Tobiloba</p>
      <a
        href="https://ibrahimkolabalogun.web.app/"
        className="text-black mt-8 font-rubik mb-[-60px] text-[13px]"
      >
        Developed by <span className="text-rubik">Ibrahim</span>{" "}
      </a>
    </div>
  );
};

export default Footer;
