import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import "./style.css";
// import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "animate.css/animate.css";

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

const Journal = () => {
  const { user } = useAuthContext();
  const username = user.username;
  const email = user.email;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [journal, setJournal] = useState("");
  // const navigate = useNavigate();

  const submit = async (e) => {
    setJournal("");
    handleClose();
    e.preventDefault();
    const response = await fetch("https://afternoon-gorge-68296.herokuapp.com/api/user/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        journal,
      }),
    });
    if (!response.ok) {
      console.log("error");
    }
  };

  return (
    <AnimationPage>
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen container bg-[#FFC0CB] flex flex-col justify-center items-center">
          <div className="flex space-x-10 p-10">
            <span className="text-center p-1">
              Heyyy {username}, welcome to your journal <br />
              <span className="font-bold">
                (The My Eyes Only for your Thoughts)
              </span>
            </span>
          </div>

          <div className="">
            <button
              onClick={handleOpen}
              className="mt-5 bg-black text-white rounded-full"
              style={{ width: "200px", height: "50px" }}
            >
              Let's Begin
            </button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="container flex flex-col justify-center items-center">
              <form className="container flex flex-col justify-center items-center">
                <div>
                  <textarea
                    id="txtArea"
                    rows="10"
                    placeholder="Feel free to express yourself..."
                    cols="20"
                    className="p-4"
                    onChange={(e) => setJournal(e.target.value)}
                  >
                    {journal}
                  </textarea>
                </div>
                <button
                  onClick={submit}
                  className="mt-5 bg-black text-white rounded-full"
                  style={{ width: "200px", height: "50px" }}
                >
                  Done
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </Stack>
    </AnimationPage>
  );
};

export default Journal;
