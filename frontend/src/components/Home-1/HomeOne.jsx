import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../assets/AnimationPage";

const HomeOne = () => {
  const navigate = useNavigate();
  const day = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      return "Top of the morning to you!";
    } else if (curHr < 18) {
      return "Hey you, day's almost over hang in there!";
    } else {
      return "wooh, must have been a long";
    }
  };
  return (
    <AnimationPage>
      <div className="bg-black h-screen container flex flex-col justify-center items-center">
        <span className="font-semibold text-center text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
          {day()}
        </span>
        <button className="mt-5 text-center text-white font-loader w-96 h-10 rounded-full bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
          <div onClick={() => navigate("/home-2")}>
            <p className="text-wh">Let’s get started</p>
          </div>
        </button>
      </div>
    </AnimationPage>
  );
};

export default HomeOne;
