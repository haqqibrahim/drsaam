import React from "react";
import Typewriter from "typewriter-effect";

import "../../App.css";

// logo
import Logo from "../../assets/images/white-logo.png";

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#FA77FF] to-[#6454FF] container flex flex-col justify-center items-center">
      <img src={Logo} alt="Logo" />
      <p className="font-loader font-bold text-xl pt-10 text-white">
      <Typewriter
          options={{
            strings: ["Hey! I’m Dr.SAAM", "You’re Welcome!"],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <p className="w-full text-base font-loader text-center p-10 text-gray-100 pt-4">
        Remember our conversations are private & anonymous. Provide your details
        to get logged in
      </p>
      <div className="lg:pt-8">
        <form action="" method="post">
          <div class="grid grid-cols-2 gap-4">
            <input
              placeholder="email"
              id="inputID"
              type="email"
              className="lg:w-96 rounded-md h-8 bg-[#C683E8] p-5"
            />

            <input
              placeholder="password"
              id="inputID"
              type="password"
              className="rounded-md h-8 bg-[#C683E8] p-5"
            />
          </div>
        </form>
      </div>
      <button className="mt-10 text-center text-white font-loader lg:w-1/2 w-5/6 h-10 rounded-md bg-white">
        <a href="/signup">
          <div>
            <p className="text-[#6454FF]">Sign in</p>
          </div>
        </a>
      </button>
      <a href="/signup">
        <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
          Not yet a member? Create an account now!
        </p>
      </a>
    </div>
  );
};

export default Login;
