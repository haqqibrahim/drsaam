import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import "./style.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useGlobalState } from "./State";
import { Api } from "./Api";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const DailyCheckUpE = ({ prevStep }) => {
  const { user } = useAuthContext();
  const email = user.email;
  const [cause, setCause] = useState("");
  const [how, setHow] = useState("");
  const [value] = useGlobalState("score");

  const navigate = useNavigate();

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const submit = () => {
    Api(value, cause, how, email);
    navigate("/home-1");
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
              value={how}
              onChange={(e) => setHow(e.target.value)}
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
              value={cause}
              onChange={(e) => setCause(e.target.value)}
              placeholder="Let's know how"
              className="text-left pl-3"
            />
          </div>
          <button
            onClick={submit}
            className="mt-5 bg-black text-white rounded-full"
            style={{ width: "200px", height: "50px" }}
          >
            Proceed
          </button>
        </div>
      </Stack>
    </AnimationPage>
  );
};

export default DailyCheckUpE;
