import { React } from "react";
import {useNavigate} from "react-router-dom"
 
import { AnimationPage } from "../../assets/AnimationPage";

const WelcomeOne = () => {
  const navigate = useNavigate()
  const redirect = () => {
    setTimeout(function () {
     navigate("/welcome-2");
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
