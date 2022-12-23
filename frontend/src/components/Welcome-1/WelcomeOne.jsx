import { React } from "react";

import { AnimationPage } from "../../assets/AnimationPage";

const WelcomeOne = () => {
  const redirect = () => {
    setTimeout(function () {
      window.location = "http://localhost:3000/welcome-2";
    }, 4000);
  };
  return (
    <AnimationPage>
      {redirect()}
      <div className="bg-black h-screen container space-y-72 flex flex-col justify-center items-center">
        <span className="text-white font-semibold text-xl">
          Hey! I'm <span className="text-[#6454FF] text-xl">Dr.SAAM</span>
        </span>
      </div>
    </AnimationPage>
  );
};

export default WelcomeOne;
