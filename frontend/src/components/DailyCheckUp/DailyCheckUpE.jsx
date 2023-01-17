import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import LinearProgress from "@mui/material/LinearProgress";
import "./style.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useGlobalState } from "./State";
import { Api } from "./Api";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { TiThumbsOk } from "react-icons/ti";
import { AuthContext } from "../../context/AuthContext";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DailyCheckUpE = ({ prevStep }) => {
  const { currentUser } = useContext(AuthContext);
  const email = currentUser.email;
  const [cause, setCause] = useState("");
  const [how, setHow] = useState("");

  const [value, update] = useGlobalState("checkUp");
  const checkupA = value.checkupA
  const checkupB = value.checkupB
  const checkupC = value.checkupC
  const checkupD = value.checkupD

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const submit = () => {
    Api(checkupA,checkupB, checkupC, checkupD, cause, how, email);
    console.log(checkupA,checkupB, checkupC, checkupD, cause, how, email)
    handleOpen()
  };

 

  return (
    <AnimationPage>
      <LinearProgress color="inherit" variant="determinate" value={100} />
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen container bg-[#FFC0CB] flex flex-col justify-center items-center">
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <div className="container flex flex-col justify-center items-center">
              <span className="text-center">Checkup Completed</span>
              <TiThumbsOk
                className="fill-[#FFCC36] mt-5"
                style={{ width: "50px", height: "50px" }}
              />
              <button onClick={() => navigate("/home-1")}
                className="mt-5 bg-black text-white rounded-full"
                style={{ width: "200px", height: "50px" }}
              >
                Home
              </button>
            </div>
          </Box>
        </Modal>
      </Stack>
    </AnimationPage>
  );
};

export default DailyCheckUpE;
