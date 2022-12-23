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
import {
  BsArrowRightCircle,
  BsEmojiFrownFill,
  BsEmojiDizzyFill,
  BsFillEmojiSmileFill,
  BsFillEmojiLaughingFill,BsFillEmojiSunglassesFill,BsFillEmojiAngryFill
} from "react-icons/bs";

const DailyCheckUpA = ({ nextStep, prevStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const [update] = useGlobalState("count");
  return (
    <AnimationPage>
      <LinearProgress color="inherit" variant="determinate" value={20} />
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen container bg-slate-200 flex flex-col justify-center items-center">
          <div className="flex space-x-10">
            <span>How do you feel today?</span>
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
                  <div className="flex justify-center items-center">
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Sad"
                    />
                    <BsEmojiFrownFill
                      className="fill-[#FFCC36] "
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                </div>
              </div>
              <div
                onClick={() => update((v) => v + 2)}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Tired"
                  />
                  <BsEmojiDizzyFill
                    className="fill-[#FFCC36] "
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>{" "}
              </div>
              <div
                onClick={() => update((v) => v + 3)}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Okay"
                  />
                  <BsFillEmojiSmileFill
                    className="fill-[#FFCC36] "
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>{" "}
              </div>
              <div
                onClick={() => update((v) => v + 4)}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Happy"
                  />
                  <BsFillEmojiLaughingFill
                    className="fill-[#FFCC36] "
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>{" "}
              </div>
              <div
                onClick={() => update((v) => v + 5)}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="Excited"
                    />
                    <BsFillEmojiSunglassesFill
                      className="fill-[#FFCC36] "
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
              </div>
              <div
                onClick={() => update((v) => v + 6)}
                className="h-20 mt-5 pl-5  flex items-center w-72 bg-white border-black rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <FormControlLabel
                    value="6"
                    control={<Radio />}
                    label="Angry"
                  />
                  <BsFillEmojiAngryFill
                    className="fill-[#FFCC36] "
                    style={{ width: "25px", height: "25px" }}
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

export default DailyCheckUpA;
