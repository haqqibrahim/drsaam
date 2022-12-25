import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";
import "../../App.css";
import "./style.css";

import { AnimationPage } from "../../assets/AnimationPage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (error != null) {
      console.log(error);
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
        <div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-600 text-center font-loader text-lg font-semibold">
                {error}
              </div>
            )}
            <div className="flex flex-col">
              <label className="pl-2 pb-2 text-gray-500">Email Address</label>
              <input
                placeholder="Provide your login email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-96 text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pt-5 pl-2 pb-2 text-gray-500">Password</label>
              <input
                placeholder="provide your login password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-96 lg:w-full text-light text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <button
              disabled={isLoading}
              className="mt-10 text-center text-white font-loader w-96 h-10 rounded-full bg-gradient-to-r from-[#F600FF] to-[#1800FF]"
            >
              <div>
                <p className="text-white">Sign in</p>
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
