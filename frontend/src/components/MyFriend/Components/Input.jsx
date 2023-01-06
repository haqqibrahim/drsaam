import React from "react";
import "./style.css"

import { IoIosSend } from "react-icons/io";
const Input = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col h-[75px] p-1 bg-[#0F1828]">
      <div className="flex space-x-6">
        {" "}
        <input
          type="text"
          placeholder="Type..."
          className="inputt bg-[#152033] text-white font-light w-[300px] p-2"
        />
         <IoIosSend
          className="fill-[#375FFF] mt-2"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
};

export default Input;
