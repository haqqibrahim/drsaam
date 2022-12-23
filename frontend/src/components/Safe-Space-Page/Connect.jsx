import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// logo
import Logo from "../../assets/images/logo.png";

const Connect = () => {
  const { user } = useAuthContext();
  const uid = user.uid;
  async function getFriend(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    };
    const response = await fetch("/api/myfriend/getmyfriend", requestOptions);
    if (response.ok) {
      console.log("We good");
    } else {
      console.log("Nope");
    }
  }
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
      <button
        onClick={getFriend}
        className="mt-10 text-center text-white font-loader w-2/3 h-10 rounded-md bg-gradient-to-r from-[#FA77FF] to-[#6454FF]"
      >
        <a href="/">
          <div>
            <p>MyFriend</p>
          </div>
        </a>
      </button>
    </div>
  );
};

export default Connect;
