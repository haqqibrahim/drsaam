import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { IoPinSharp } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();
  //   navigate("/preloader", { state: { message: "prepare" } });

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="justify-between items-center h-[60px] p-2 pt-10 w-full flex bg-white">
        <p className="w-[72px] h-[28px] ml-[20px] lg:ml-[40px] text-[#3A3A3A] font-bold leading-7">
          Saam
        </p>
        <span
          onClick={() => navigate("/menu")}
          className="cursor-pointer w-[70px]  mt-[10px] mr-0  lg:mr-[10px] h-[70px]  flex rounded-full  border-8 border-[#FFC0CB]"
        >
          <FaGripLines className="fill-gray-500 m-auto " />
        </span>
      </div>
      <div className="m-auto  relative w-[330px] lg:w-[590px]  flex h-[166px] bg-[#FFC0CB] rounded-3xl">
        <div className=" flex flex-col m-auto">
          <span className="w-[301px] lg:w-[559px] h-[58px] lg:h-[63px] flex rounded-[100px] bg-white/50 m-auto">
            <IoPinSharp
              className="fill-[#3A3A3A] m-auto lg:ml-36 ml-6"
              style={{ width: "24px", height: "20px" }}
            />
            <p className="text-center lg:mr-[153px] text-[14px] ml-0  text-[#3A3A3A] m-auto mr-[2rem]">
              What would you like to do now?
            </p>
          </span>
          <span className="w-[300px] lg:w-[556px] h-[73px] flex pt-5 mx-auto">
            <span
              onClick={() => navigate("/journal")}
              className="cursor-pointer rounded-[100px] bg-white w-[141px] lg:w-[267px] h-[53px] mx-auto"
            >
              <p className="text-center  text-[15px] text-[#3A3A3A] m-auto p-4">
                Journal
              </p>
            </span>
            <span
              onClick={() => navigate("/saam")}
              className="cursor-pointer rounded-[100px] bg-white w-[141px] lg:w-[267px] h-[53px] mx-auto"
            >
              <p className="text-center  text-[15px] text-[#3A3A3A] m-auto p-4">
                AI friend
              </p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
