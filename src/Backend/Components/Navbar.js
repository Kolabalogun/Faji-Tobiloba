import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Navbar = () => {
  const { handleLogout, user } = useGlobalContext();

  return (
    <div className="py-3 px-5 flex justify-between items-center bg-[#fafbfc] shadow-lg">
      <div className="all-center ">
        <img className="h-8" src="svg/user (1).png" alt="userlogo" />
        <p className="uppercase font-semibold px-3 text-[#67748e]">
          {user?.displayName}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-1 text-[13px] uppercase bg-red-600 border-red-600 hover:bg-white hover:text-red-600 font-semibold"
      >
        logout
      </button>
    </div>
  );
};

export default Navbar;
