import React from "react";
import { AnimationPage } from "../../assets/AnimationPage";

const WelcomeTwo = () => {
  const redirect = () => {
    setTimeout(function () {
      window.location = "http://localhost:3000/welcome-3";
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
