import React, { useState, useEffect } from "react";

import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import { useGlobalState } from "./State";
const DailyCheckUpB = ({ nextStep, prevStep }) => {
  const styles = {
    container: {
      borderRadius: '10px 0px 0px 10px',
      width: "350px", height: "100px" 
    },
  };
  const [vals, setVals] = useState("");
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const [value, update] = useGlobalState("checkUp");

  useEffect(() => {
    update(vals)
  
   
  }, [update, vals])
  
  return (
    <AnimationPage>
      <LinearProgress color="inherit" variant="determinate" value={40} sx={{height: "8px"}}/>
      <div className="container h-screen p-5 bg-[#FFF0B4] flex flex-col justify-center items-center">
        <div className="flex space-x-10 p-5">
          <div className="">
            {" "}
            <BsArrowLeftCircle
              onClick={Previous}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <span className="text-center">Why do you feel that way?</span>
          <div className="">
            {" "}
            <BsArrowRightCircle
              onClick={Continue}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
        </div>
        <div
        style={styles.container}
          className="bg-white flex flex-col ml-3 rounded-l-lg rounded-tr-lg "
        >
          <input
            type="text"
            name=""
            id=""
            value={vals}
            onChange={(e) => setVals(e.target.value)}
            placeholder="Let's hear you out..."
            className="text-left p-3 "
          />
        </div>
      </div>
    </AnimationPage>
  );
};

export default DailyCheckUpB;
