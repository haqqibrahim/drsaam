import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../assets/AnimationPage";

const HomeTwo = () => {
  const navigate = useNavigate()
  const note = () => {
    alert('Please refresh browser if you change a selected option')
    navigate("/checkup")
  }
  return (
    <AnimationPage>
      <div className="body h-screen container flex flex-col justify-center items-center">
        <span className="text-slate-500 pb-5">
          What’s on your mind to do today?
        </span>
        <div className="container items-center space-y-10 flex flex-col justify-center md:flex-row h-72 w-72 bg-white border-black rounded-lg">
          <span className="" onClick={note}>
          Daily Check Up
          </span>
          <div className="w-40 h-1 bg-zinc-300"></div>
          <span>
            <a href="http://localhost:3000/journal">My Journal</a>
          </span>
        </div>
      </div>
    </AnimationPage>
  );
};

export default HomeTwo;
