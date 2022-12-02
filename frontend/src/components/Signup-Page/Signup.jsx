import React from "react";
import Typewriter from "typewriter-effect";

import "../../App.css";

// logo
import Logo from "../../assets/images/white-logo.png";

const Signup = () => {
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
      <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
        Our conversations are private & anonymous. Just provide your <br />{" "}
        email address and password for account ownership
      </p>
      <div className="pt-8">
        <form action="" method="post">
          <div class="grid grid-cols-2 gap-4">
            <input
              placeholder="username"
              id="inputID"
              type="text"
              className="lg:w-96 rounded-md h-8 bg-[#C683E8] p-5"
            />
            <input
              placeholder="email"
              id="inputID"
              type="email"
              className="rounded-md h-8 bg-[#C683E8] p-5"
            />
            <input
              placeholder="phone number"
              id="inputID"
              type="number"
              className=" rounded-md h-8 bg-[#C683E8] p-5"
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
            <p className="text-[#6454FF]">Signup</p>
          </div>
        </a>
      </button>
      <a href="/login">
        <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
          Already have an account? Sign in
        </p>
      </a>
    </div>
  );
};

export default Signup;
