import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Function/Context";

const Quote = () => {
  const { Quotes } = useGlobalContext();

  const [quot, quotF] = useState([{ author: "", Quote: [] }]);

  useEffect(() => {
    if (Quotes.length > 0) {
      quotF(Quotes);
    }
  }, []);

  const [index, indexF] = React.useState(0);

  const { author, Quote } = quot[index];

  function checkNumber(number) {
    if (number > quot.length - 1) {
      return 0;
    }
    if (number < 0) {
      return quot.length - 1;
    }
    return number;
  }

  function handleprev(params) {
    indexF((prevState) => {
      let newIndex = prevState - 1;
      return checkNumber(newIndex);
    });
  }
  function handlenext(params) {
    indexF((prevState) => {
      let newIndex = prevState + 1;
      return checkNumber(newIndex);
    });
  }

  useEffect(() => {
    const hh = setTimeout(() => {
      handlenext();
    }, 5000);
    return () => clearTimeout(hh);
  }, [index]);

  return (
    <div className="py-[10vh] px-1 sm:px-3 md:px-7 flex items-center justify-between bg-zinc-200">
      <div
        onClick={handleprev}
        className="p-2  bg-zinc-200 cursor-pointer hover:bg-zinc-100  rounded-xl"
      >
        <img src="al.png" className="h-8 w-8" alt="" />
      </div>

      <div
        key={index}
        className=" w-full items-center justify-center flex-col px-1 md:px-7 text-center"
      >
        {Quote.map((d, index) => (
          <h1
            key={index}
            className="font-bold text-[20px] xmd:text-[40px] md:text-[30px] text-center "
          >
            "{d}"
          </h1>
        ))}

        <p className="mt-7 text-black">{author}</p>
      </div>

      <div
        onClick={handlenext}
        className="p-2  bg-zinc-200 cursor-pointer hover:bg-zinc-100  rounded-xl"
      >
        <img src="ar.png" className="h-8" alt="" />
      </div>
    </div>
  );
};

export default Quote;
