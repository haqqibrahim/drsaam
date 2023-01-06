import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "../../App.css";
import "./style.css";

import { AnimationPage } from "../../assets/AnimationPage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home-1");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <AnimationPage>
      <div className="h-screen container flex flex-col justify-center items-center">
        <span className="text-center font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
          Hello Friend!
        </span>
        <span className="text-center mx-16 my-5 text-gray-500">
          We are here to help you de-stress and be anxiety free. Get signed in
          to begin!
        </span>
        {err && (
              <div className="text-red-600 text-center font-loader text-lg font-semibold">
                {err}
              </div>
            )}
        <div>
          <form onSubmit={handleSubmit} className="px-10 justify-center items-center">
            
            
            <div className="flex flex-col">
              <label className="pl-2 pb-2 text-gray-500">Email Address</label>
              <input
                placeholder="Provide your login email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-80 mx-2 text-sm text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pt-5 pl-2 pb-2 text-gray-500">Password</label>
              <input
                placeholder="provide your login password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" mx-2 lg:w-full text-sm w-80 md:w-96 text-light text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <button
              className="mt-10 text-center ml-2 md:w-96 lg:w-full text-white font-loader w-80 h-10 rounded-full bg-gradient-to-r from-[#F600FF] to-[#1800FF]"
            >
              <div>
                <p className="text-white">Log in</p>
              </div>
            </button>
          </form>
        </div>
        <div onClick={() => navigate("/signup")}>
          <p className="w-full text-base font-loader text-center text-gray-500 pt-4">
            Forgot your password?
          </p>
        </div>
        <div onClick={() => navigate("/signup")}>
          <p className="w-full text-base font-loader text-center text-gray-500 pt-2">
            Don't have an account?{" "}
            <span className="text-[#1800FF]">Signup</span>
          </p>
        </div>
      </div>
    </AnimationPage>
  );
};

export default Login;
