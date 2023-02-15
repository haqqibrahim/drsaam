import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AnimationPage } from "../../assets/AnimationPage";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.css";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import { AiOutlineHome } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Journal = () => {
  const { currentUser } = useContext(AuthContext);
  const email = currentUser.email;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [journal, setJournal] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    console.log("Submit ");
    e.preventDefault();
    coin();
    setJournal("");
    handleClose();
    console.log("Post Request");
    const response = await fetch(
      "http://afternoon-gorge-68296.herokuapp.com/api/user/journal",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          journal,
        }),
      }
    );
    console.log("Alert")
    console.log(response);
    if (response.ok) {
      console.log("Good");
    } else {
      console.log("Bad");
    }
  };
  const coin = async () => {
    console.log("Coin");
    alert("Journal Saved!")
    const usersRef = doc(db, "users", currentUser.uid);
    const usersSnap = await getDoc(usersRef);
    const journalCount = usersSnap.data().journal_count;
    if (journalCount === 10) {
      try {
        console.log("add");
        const currentDate = new Date().toLocaleDateString();
        await updateDoc(doc(db, "Rio_Coins", currentUser.uid), {
          coin: arrayUnion({
            id: uuid(),
            value: 2,
            date_acquired: currentDate,
            server_Time: Timestamp.now(),
            earned_activity: {
              activity_name: "Journal",
              activity_time: currentDate,
            },
          }),
        });
        await updateDoc(doc(db, "users", currentUser.uid), {
          rio_coin: increment(2),
        });
        await updateDoc(doc(db, "users", currentUser.uid), {
          journal_count: 0,
        });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      await updateDoc(doc(db, "users", currentUser.uid), {
        journal_count: increment(1),
      });
      console.log("Not enough");
      console.log(journalCount);
    }
  };
  return (
    <AnimationPage>
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div className="h-screen relative container bg-blue-100 flex flex-col justify-center items-center">
          <div className="flex space-x-10 p-10">
            <span className="text-center p-1">
              Heyyy {currentUser.displayName}, welcome to your journal <br />
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
          <div
            onClick={() => navigate("/bot")}
            className="absolute inset-x-0 bottom-0 pb-6"
          >
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab sx={{ backgroundColor: "black" }}>
                <AiOutlineHome
                  className="fill-white hover:fill-black"
                  style={{ width: "20px", height: "40px" }}
                />
              </Fab>
            </Box>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="container flex flex-col justify-center items-center rounded-md">
              <form className="container flex flex-col justify-center items-center">
                <div>
                  <textarea
                    id="txtArea"
                    rows="9"
                    placeholder="Feel free to express yourself..."
                    cols="19"
                    className="p-4"
                    onChange={(e) => setJournal(e.target.value)}
                  >
                    {journal}
                  </textarea>
                </div>
                <button
                  onClick={submit}
                  className="cursor-pointer mt-5 bg-black text-white rounded-full"
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
