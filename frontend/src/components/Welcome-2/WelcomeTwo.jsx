import React from "react";
import {useNavigate} from "react-router-dom"
 
import { AnimationPage } from "../../assets/AnimationPage";

const WelcomeTwo = () => {
  const navigate = useNavigate()
  const redirect = () => {
    setTimeout(function () {
      navigate("/welcome-3");
    }, 4000);
  };
  return (
    <AnimationPage>
      {redirect()}
      <div className="bg-white h-screen container space-y-72 flex flex-col justify-center items-center">
        <span className="font-semibold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
          Your Simulated AI Assistant Medic
        </span>
      </div>
    </AnimationPage>
  );
};

export default WelcomeTwo;
