import React, { useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import Box from "@mui/material/Box";

import {
  doc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
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



const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [journal, setJournal] = useState("");
  const [title, setTitle] = useState("");
  const submit = async (e) => {
    console.log("Submit");
    e.preventDefault();
    coin();
    console.log("Post Request 2");
    handleClose();
    console.log("Post Request");
    try {
      const currentDate = new Date().toLocaleDateString();
      await updateDoc(doc(db, "Journal", currentUser.uid), {
        journal: arrayUnion({
          id: uuid(),
          title,
          journal,
          server_Time: Timestamp.now(),
          time: currentDate,
        }),
      });
      setJournal("");
    } catch (e) {
      alert("Erroorrrr")
      console.log(e.message);
    }
   
    
  };
  const coin = async () => {
    console.log("Coin");
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
    <div>
      <div className="bg-transparent w-screen h-16 flex p-3 items-center justify-center">
        <p className="text-black text-[18px] font-semibold">Journal</p>
        
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
              <div className="">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-[80%] text-lg font-semibold text-left "
                  // style={{ fontSize: '24px' }} 
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="">
                <textarea
                  // id="txtArea"
                  rows="9"
                  placeholder="Feel free to express yourself..."
                  cols="19"

                  className="mt-5 ml-5 font-light"
                  onChange={(e) => setJournal(e.target.value)}
                >
                  {journal}
                </textarea>
              </div>
              <button
                onClick={submit}
                className="cursor-pointer mt-5 bg-black text-white rounded-full"
                style={{ width: "150px", height: "40px" }}
              >
                Done
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
