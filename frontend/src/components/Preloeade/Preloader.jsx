import React from "react";
import {useNavigate} from "react-router-dom"
 
import Logo from "../../assets/images/logo.png";
import OmariLogo from "../../assets/images/mini.png";
import { AnimationPage } from "../../assets/AnimationPage";

const Preloader = () => {
  const navigate = useNavigate()
  const redirect = () => {
    setTimeout(function () {
     navigate("/welcome-1");
    }, 4000);
  };
  return (
    <AnimationPage>
      <div className="bg-white  h-screen container space-y-72 flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="mt-64 animate-bounce" />
        <div>
          {redirect()}
          <p className="text-center text-zinc-500 font-medium">from</p>
          <div className="flex flex-row animate">
            <img src={OmariLogo} alt="Omari AI" srcset="" />
          </div>
        </div>
      </div>
    </AnimationPage>
  );
};

export default Preloader;
