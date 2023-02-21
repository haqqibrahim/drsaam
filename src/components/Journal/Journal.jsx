import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.css";

import Fab from "@mui/material/Fab";
import { AiOutlineHome } from "react-icons/ai";

import Navbar from "./Navbar";
import Recent from "./Recent"


const Journal = () => {
 
  const navigate = useNavigate();



  return (
    <AnimationPage>
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen w-screen align-center relative container bg-blue-100 flex flex-col pb-1">
          <Navbar />
          <Recent />
           
        </div>
        <div
        onClick={() => navigate("/bot")}
        className="absolute inset-x-0 ml-2 bottom-0 pb-[15%]"
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab sx={{ backgroundColor: "black" }}>
            <AiOutlineHome
              className="fill-white"
              style={{ width: "20px", height: "40px" }}
            />
          </Fab>
        </Box>
      </div>
      </Stack>
    </AnimationPage>
  );
};

export default Journal;
