import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Note = () => {
  const { homePageDetails } = useGlobalContext();

  return (
    <div
      id="note"
      className=" py-[90px] flex items-center justify-center sm:px-[100px] px-[20px] xmd:px-[200px] xl:px-[250px] bg-zinc-200"
    >
      {homePageDetails && (
        <div
          style={{ fontSize: 14 }}
          className="font-poppins text-black"
          dangerouslySetInnerHTML={{
            __html: homePageDetails?.aboutDescription,
          }}
        />
      )}
    </div>
  );
};

export default Note;
