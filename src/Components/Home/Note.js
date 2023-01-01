import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Note = () => {
  const { homePageDetails } = useGlobalContext();

  return (
    <div
      id="note"
      className=" py-[30px] flex items-center justify-center px-[70px] xmd:px-[200px] xl:px-[250px] bg-zinc-200"
    >
      {homePageDetails && (
        <div
          className="font-poppins text-black text-[12px]"
          dangerouslySetInnerHTML={{
            __html: homePageDetails?.aboutDescription,
          }}
        />
      )}
    </div>
  );
};

export default Note;
