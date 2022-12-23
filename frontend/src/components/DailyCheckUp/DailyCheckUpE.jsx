import React from "react";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import "./style.css";
import { BsArrowLeftCircle } from "react-icons/bs";

const DailyCheckUpE = ({ prevStep }) => {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <AnimationPage>
      <LinearProgress color="inherit" variant="determinate" value={100} />
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen container bg-[#FF8D6A] flex flex-col justify-center items-center">
          <div className="flex space-x-10 p-5">
            <div className="">
              {" "}
              <BsArrowLeftCircle
                onClick={Previous}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <span className="text-center pr-20">
              Rate how your day has been so far
            </span>
          </div>
          <div
            className="bg-white flex flex-col"
            style={{ width: "350px", height: "100px" }}
          >
            <span className="font-light text-sm text-left p-3">
              What is the biggest change since yesterday?
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Let's know the cause"
              className="text-left pl-3"
            />
          </div>
          <div
            className="bg-white flex flex-col mt-10"
            style={{ width: "350px", height: "100px" }}
          >
            <span className="font-light text-sm text-left p-3">
              How do you think you can be assisted?
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Let's know how"
              className="text-left pl-3"
            />
          </div>
        </div>
      </Stack>
    </AnimationPage>
  );
};

export default DailyCheckUpE;
