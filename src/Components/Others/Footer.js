import React from "react";

const Footer = () => {
  return (
    <div className="flex border-t-[1px] flex-col items-center justify-center bg-white py-[80px]">
      <div className="flex">
        <a
          href="https://facebook.com/Darasimi-Tobiloba-Faji"
          target={"_blank"}
          className="rounded-[50px] p-2 bg-black mx-3 cursor-pointer relative hover:bg-blue-500"
        >
          <img src="/facebook.svg" alt="facebok" className="h-5 " />
        </a>
        <a
          href="https://instagram.com/thefajitobiloba"
          target={"_blank"}
          className="rounded-[50px] p-2 bg-black hover:bg-ig  mx-3 cursor-pointer"
        >
          <img src="/instagram.svg" alt="facebok" className="h-5" />
        </a>
        <a
          href="https://twitter.com/TheFajiTobiloba"
          target={"_blank"}
          className="rounded-[50px] p-2 bg-black mx-3 hover:bg-twitter cursor-pointer"
        >
          <img src="/twitter.svg" alt="facebok" className="h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/faji-tobiloba-94a0921b2"
          target={"_blank"}
          className="rounded-[50px] p-2 hover:bg-linked  bg-black mx-3 cursor-pointer"
        >
          <img src="/linkedin.svg" alt="facebok" className="h-4" />
        </a>
      </div>

      <p className="text-black my-8 font-rubik">TheFajiTobiloba</p>
      <a
        href="https://ibrahimkolabalogun.web.app/"
        target={"_blank"}
        className="text-black mt-8 font-rubik mb-[-60px] text-[13px]"
      >
        Developed by <span className="text-rubik">Ibrahim</span>
      </a>
    </div>
  );
};

export default Footer;
