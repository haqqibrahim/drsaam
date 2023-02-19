import React from "react";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import { useGlobalState } from "./State";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const DailyCheckUpD = ({ nextStep, prevStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const [value, update] = useGlobalState("checkUp");
  const updating = (checkupD) => {
    update((p) => ({ ...p, checkupD }));
  }
  return (
    <AnimationPage>
      <LinearProgress color="inherit" variant="determinate" value={80} sx={{height: "8px"}}/>
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen container bg-[#98B2EA] flex flex-col justify-center items-center">
          <div className="flex space-x-10 p-5">
            <div className="">
              {" "}
              <BsArrowLeftCircle
                onClick={Previous}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <span className="text-center">
              Rate how your day has been so far
            </span>
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
                onClick={() => updating("good")}
                className="mt-5 h-20 pl-5 flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex-none">
                  <div className="flex justify-center items-center">
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Good"
                    />
                  </div>
                </div>
              </div>
              <div
                onClick={() => updating("bad")}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel value="2" control={<Radio />} label="Bad" />
                </div>{" "}
              </div>
              <div
                onClick={() => updating("okay")}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Okay"
                  />
                </div>{" "}
              </div>
              <div
                onClick={() => updating("overwhelming")}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Overwhelming"
                  />
                </div>{" "}
              </div>
              <div
                onClick={() => updating("terrible")}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Terrible"
                  />
                </div>
              </div>
              <div
                onClick={() => updating("stressful")}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="6"
                    control={<Radio />}
                    label="Stressful"
                  />
                </div>{" "}
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </Stack>
    </AnimationPage>
  );
};

export default DailyCheckUpD;
