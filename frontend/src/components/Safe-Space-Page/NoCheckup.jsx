import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// logo
import Logo from "../../assets/images/logo.png";

const NoCheckup = () => {
  const { user } = useAuthContext();
  return (
    <div className="container flex flex-col justify-center items-center pt-60">
      <img src={Logo} alt="logo" />
      <p className="font-loader font-bold text-xl pt-10">
        Hello {user.username}
      </p>
      <p className="text-base font-loader pt-4">Welcome to your safe space</p>
      <p className="text-base font-loader">
        Click the button to connect with a{" "}
        <span className="font-bold">MyFriend</span>
      </p>
      <button className="mt-10 text-center text-white font-loader w-2/3 h-10 rounded-md bg-gradient-to-r from-[#FA77FF] to-[#6454FF]">
        <a href="/">
          <div>
            <p>MyFriend</p>
          </div>
        </a>
      </button>
    </div>
  );
};

export default NoCheckup;
