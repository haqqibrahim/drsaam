import React from "react";

import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useGlobalState } from "./State";
const DailyCheckUpC = ({ nextStep, prevStep }) => {
  const [value, update] = useGlobalState("checkUp");
  const updating = (checkupC) => {
    update((p) => ({ ...p, checkupC }));
  };
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <AnimationPage>
      <LinearProgress color="inherit" variant="determinate" value={50} sx={{height: "8px"}}/>
      <div className="container h-screen p-5 bg-[#FFC0CB] flex flex-col justify-center items-center">
        <div className="flex space-x-10 p-5">
          <div className="">
            {" "}
            <BsArrowLeftCircle
              onClick={Previous}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <span className="text-center">How often have you felt this way in the past 2 weeks?</span>
          <div className="">
            {" "}
            <BsArrowRightCircle
              onClick={Continue}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
        </div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <div
              onClick={() => updating("Everyday")}
              className="mt-5 h-20 pl-5 flex items-center w-72 bg-white border-black rounded-lg"
            >
              <div className="flex-none">
                <FormControlLabel value="1" control={<Radio />} label="Everyday" />
              </div>
            </div>
            <div
              onClick={() => updating("rarely")}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="2" control={<Radio />} label="Rarely" />
            </div>
            <div
              onClick={() => updating("sometimes")}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="3" control={<Radio />} label="Sometimes" />
            </div>
            <div
              onClick={() => updating("Never")}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="4" control={<Radio />} label="Never" />
            </div>
            
          </RadioGroup>
        </FormControl>
      </div>
    </AnimationPage>
  );
};

export default DailyCheckUpC;
