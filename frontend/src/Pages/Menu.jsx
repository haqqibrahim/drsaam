import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="justify-end items-center h-[60px] p-2 pt-10 w-full flex bg-white">
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer w-[70px] mt-[10px] mr-0  lg:mr-[10px] h-[70px]  flex rounded-full  border-8 border-[#CBE0E6]"
        >
          <GrFormClose className="fill-gray-500 m-auto " />
        </span>
      </div>
      <div className="ml-[40px] align-middle mt-[20px] space-y-14 w-[273px] h-[550px]">
        <p
          onClick={() => navigate("/profile")}
          className="text-[16px] leading-7 align-middle font-normal cursor-pointer"
        >
          Profile
        </p>
        <p
          onClick={() => navigate("/review")}
          className="text-[16px] leading-7 align-middle font-normal cursor-pointer"
        >
          Drop a review or feature request
        </p>
        <p
          onClick={() => navigate("/tour")}
          className="text-[16px] leading-7 align-middle font-normal cursor-pointer"
        >
          Navigation tour video
        </p>
        <p
          className="text-[16px] leading-7 align-middle font-normal cursor-pointer"
        >
          <a href="https://www.dropbox.com/scl/fi/72a4j0tpalhd8uadnvftm/Omari-AI-SAAM-FAQ.paper?dl=0&rlkey=b45izksllw6kp4b0md9bk3foo"> FAQ</a>
        </p>
        <p
          className="text-[16px] leading-7 align-middle font-normal cursor-pointer"
        >
          <a href="https://www.dropbox.com/scl/fi/z0j4c29be4n1cr2fx8zfw/Privacy-Policy-for-Omari-AI-s-SAAM.paper?dl=0&rlkey=zzjy22hfref6s3ypvu23q95o0/"> Privacy policy</a>
        </p>
        <p className="text-[16px] leading-7 align-middle font-normal cursor-pointer">
          <a href="https://www.dropbox.com/scl/fi/hgs3vu18pr3xojpvhb0r5/_-Terms-and-Conditions-for-Omari-AI-s-SAAM.paper?dl=0&rlkey=qfvcnsxar99nyxcnyflyb2vjk">
            Terms and Condition
          </a>
        </p>
        <p
          onClick={() => auth.signOut()}
          className="text-[16px] leading-7 align-middle font-normal cursor-pointer text-red-600"
        >
          Log out
        </p>
      </div>
    </div>
  );
};

export default Menu;
