import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../assets/AnimationPage";

import "./style.css";
const WelcomeThree = () => {
  const navigate = useNavigate()
  const redirect = () => {
    setTimeout(function () {
      navigate("/login");
    }, 4000);
  };
  return (
    <AnimationPage>
      {redirect()}
      <div className="body h-screen container space-y-72 flex flex-col justify-center items-center">
        <div className="">
          <span className="font-semibold text-xl text-white">
            Let’s get you signed in
          </span>
        </div>
      </div>
    </AnimationPage>
  );
};

export default WelcomeThree;
