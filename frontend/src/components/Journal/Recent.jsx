import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  doc,
  updateDoc,
  onSnapshot,
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
  // boxShadow: 10,
  p: 4,
};

const Recent = () => {
  const { currentUser } = useContext(AuthContext);
  const [jnls, setJnls] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [journal, setJournal] = useState("");
  const [title, setTitle] = useState("");
  const handleOpen = (data) => {
    setOpen(true);
    setTitle(data.title);
    setJournal(data.journal);
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const getJournals = () => {
      const unsub = onSnapshot(
        doc(db, "Journal", currentUser.uid),
        (snapshot) => {
          console.log(snapshot.data().journal);
          setJnls(snapshot.data().journal);
          console.log(jnls);
        }
      );
      return () => {
        unsub();
      };
    };
    currentUser.uid && getJournals();
  }, [currentUser.uid]);
  const submit = async (e) => {
    alert("Submit");
    setTitle("");
    setJournal("");
    e.preventDefault();
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
      setTitle("");
      setJournal("");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {jnls
        .slice(-5)
        .reverse()
        .map((data, index) => (
          <div key={index}>
            <div
              onClick={() => handleOpen(data)}
              className="cursor-pointer w-[96%] mx-2 h-18 bg-white mt-8 p-4 rounded-md"
            >
              <div className="text-black font-semibold">{data.title}</div>
              <div className="flex space-x-2 justify-between pt-1">
                {" "}
                
                <span className="text-gray-500 font-light">
                  {data.journal.length > 28
                    ? `${data.journal.slice(0, 28)}...`
                    : data.journal}
                </span>
                <span className="text-gray-500 font-light font-sm">
                  {data.time}
                </span>
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
                        type="text"
                        placeholder="Title"
                        row="1"
                        col="1"
                        className="text-md font-semibold"
                        onChange={(e) => setTitle(e.target.value)}
                      >
                        {title}
                      </textarea>
                    </div>
                    <div>
                      <textarea
                        // id="txtArea"
                        rows="9"
                        placeholder="Feel free to express yourself..."
                        cols="22"
                        className="mr-6 font-light"
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
                      Submit
                    </button>
                  </form>
                </div>
              </Box>
            </Modal>
          </div>
        ))}
    </>
  );
};

export default Recent;
