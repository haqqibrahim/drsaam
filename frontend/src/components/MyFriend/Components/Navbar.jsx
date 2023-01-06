import React from "react";

import { CiCircleMore } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="justify-between flex ">
      <div>
        {" "}
        <span className="text-white text-lg">Chats</span>
      </div>
      <div>
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
