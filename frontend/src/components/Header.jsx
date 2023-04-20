import React from "react";
import {useNavigate} from "react-router-dom"
import { FaGripLines } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className=" fixed justify-between items-center h-[60px] p-2 pt-10 w-full flex bg-white">
      <p className="w-[72px] h-[28px] ml-[20px] lg:ml-[40px] text-[#3A3A3A] font-bold leading-7"  onClick={() => navigate("/home")}>
        Saam
      </p>
      <span onClick={() => navigate("/menu")} className="cursor-pointer w-[70px] mt-[10px] mr-0  lg:mr-[10px] h-[70px]  flex rounded-full  border-8 border-[#CBE0E6]">
        <FaGripLines
          className="fill-gray-500 m-auto "
          style={{ width: "20px", height: "20px" }}
        />
      </span>
    </div>
  );
};

export default Header;
