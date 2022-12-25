import React from "react";

import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import { BsArrowRightCircle,BsArrowLeftCircle } from "react-icons/bs";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useGlobalState } from "./State";
const DailyCheckUpB = ({ nextStep, prevStep }) => {
  const [value,update] = useGlobalState("score");
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
      <LinearProgress color="inherit" variant="determinate" value={40} />
      <div className="container p-5 bg-[#FFF0B4] flex flex-col justify-center items-center">
        <div className="flex space-x-10 p-5">
        <div className="">
            {" "}
            <BsArrowLeftCircle
              onClick={Previous}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <span className="text-center">Why is that? Why do you think so? <span className="font-bold">What caused it?</span></span>
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
              onClick={() => update((v) => v + 1)}
              className="mt-5 h-20 pl-5 flex items-center w-72 bg-white border-black rounded-lg"
            >
              <div className="flex-none">
                <FormControlLabel value="1" control={<Radio />} label="School" />
              </div>
            </div>
            <div
               onClick={() => update((v) => v + 2)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="2" control={<Radio />} label="Money" />
            </div>
            <div
              onClick={() => update((v) => v + 3)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="3" control={<Radio />} label="Room mates" />
            </div>
            <div
               onClick={() => update((v) => v + 4)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="4" control={<Radio />} label="Relationship" />
            </div>
            <div
               onClick={() => update((v) => v + 5)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="5" control={<Radio />} label="Friends" />
            </div>
            <div
             onClick={() => update((v) => v + 6)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="6" control={<Radio />} label="Family" />
            </div>
            <div
             onClick={() => update((v) => v + 7)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="6" control={<Radio />} label="Food" />
            </div>
            <div
             onClick={() => update((v) => v + 8)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="6" control={<Radio />} label="Health Issues" />
            </div>
            <div
             onClick={() => update((v) => v + 9)}
              className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
            >
              <FormControlLabel value="6" control={<Radio />} label="Others" />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </AnimationPage>
  );
};

export default DailyCheckUpB;
