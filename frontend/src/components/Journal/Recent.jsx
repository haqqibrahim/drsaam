import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { RiAddLine } from "react-icons/ri";
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
              className="cursor-pointer w-[92%] mx-auto h-18 bg-white mt-2 p-4 rounded-md"
            >
              <div className="text-black font-medium text-[14px]">{data.title}</div>
              <div className="flex space-x-2 justify-between pt-1">
                {" "}
                <span className="text-gray-500 font-light text-[13px]">
                  {data.journal.length > 28
                    ? `${data.journal.slice(0, 28)}...`
                    : data.journal}
                </span>
                <span className="text-gray-500 font-light text-[10px]">
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
                  <form className="container flex flex-col justify-center items-start">
                    <textarea
                      type="text"
                      placeholder="Title"
                      className="w-[80%] h-[40px]  text-lg font-semibold text-left "
                      onChange={(e) => setTitle(e.target.value)}
                    >
                      {title}
                    </textarea>
                    <textarea
                      // id="txtArea"
                      rows="9"
                      placeholder="Feel free to express yourself..."
                      cols="20"
                      className="min-w-[80%] max-w-[60%] font-light"
                      onChange={(e) => setJournal(e.target.value)}
                    >
                      {journal}
                    </textarea>
                    <button
                      onClick={submit}
                      className="cursor-pointer mx-auto mt-5 bg-black text-white rounded-full"
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
      <button className="flex space-x-1 items-center text-[13px] text-gray-500 cursor-pointer mx-auto mt-4 rounded-full py-[11px] px-[11px] bg-gray-100 ">
        {/* <span>Add</span> */}
      <RiAddLine
          onClick={handleOpen}
          className="fill-gray-500 cursor-pointer mx-auto"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
      
    </>
  );
};

export default Recent;
