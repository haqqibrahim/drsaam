import { React, useState } from "react";
import Typewriter from "typewriter-effect";
import { useSignup } from "../../hooks/useSignup";

import "../../App.css";

// logo
import Logo from "../../assets/images/white-logo.png";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, phone, password);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#FA77FF] to-[#6454FF] container flex flex-col justify-center items-center">
      <img src={Logo} alt="Logo" />
      <div>
        <p className="font-loader font-bold text-xl pt-10 text-white">
          <div>
            <Typewriter
              options={{
                strings: ["Hey! I’m Dr.SAAM", "You’re Welcome!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </p>
      </div>
      <div>
        <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
          Our conversations are private & anonymous. Just provide your <br />{" "}
          email address and password for account ownership
        </p>
      </div>
      <div className=" pt-8">
        {error && <div className="text-red-600 text-center font-loader text-lg font-semibold">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="lg:w-96 border-transparent rounded-md h-8 bg-[#C683E8] p-5"
            />
            <input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="lg:w-96 rounded-md h-8 border-transparent bg-[#C683E8] p-5"
            />
            <input
              placeholder="phone number"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className=" rounded-md h-8 bg-[#C683E8] p-5"
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md h-8 bg-[#C683E8] p-5"
            />
          </div>
          <button disabled={isLoading} className="ml-10 md:ml-44 lg:ml-44 mt-10 text-center text-white font-loader lg:w-1/2 w-5/6 h-10 rounded-md bg-white">
            <p className="text-[#6454FF]">Sign up</p>
          </button>
        </form>
      </div>

      <a href="/login">
        <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
          Already have an account? Sign in
        </p>
      </a>
    </div>
  );
};

export default Signup;
