import React from "react";
import {useNavigate} from "react-router-dom"

import { CiCircleMore } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="justify-between flex ">
      <div>
        {" "}
        <span className="text-white text-lg">Chats</span>
      </div>
      <div onClick={() => navigate("/myfriend/bio")}>
        {" "}
        <CiCircleMore
          className="fill-white pb-2"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
