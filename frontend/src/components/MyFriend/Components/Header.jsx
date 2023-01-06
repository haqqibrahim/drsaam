import React from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Headers = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-between items-center h-[60px] p-2 pt-3 w-full flex bg-[#0F1828]">
      <div className="flex items-center mt-1">
        <MdOutlineKeyboardArrowLeft
          className="fill-white mt-1"
          onClick={() => navigate(-1)}
          style={{ width: "40px", height: "40px" }}
        />
        <span className="text-white text-lg font-light mt-1">Karen Audit</span>
      </div>
      <div className="items-center">
        {" "}
        <GiHamburgerMenu
        onClick={() => navigate("/user-profile")}
          className="fill-white p-1 mt-1"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default Headers;
