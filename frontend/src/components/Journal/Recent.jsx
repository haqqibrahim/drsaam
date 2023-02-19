import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { RiAddLine } from "react-icons/ri";
// import { MdDelete } from "react-icons/md";
import { db } from "../../firebase";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  doc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  Timestamp,
  deleteDoc,
  getDoc,
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
  const [open2, setOpen2] = React.useState(false);
  const [journal, setJournal] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("")
  const handleOpen = (data) => {
    setOpen(true);
    setTitle(data.title);
    setJournal(data.journal);
    setId(data.id);
  };
  const handleOpen2 = () => {
    setOpen2(true);
    submitJournal();
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

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
  const submitJournal = async (e) => {
    console.log("Submit");
    e.preventDefault();
    handleClose2();
    coin();
    console.log("Post Request 2");
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
      alert("Error");
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

  const deleteJournal = () => {
    alert("Delete");
  };

  const updateJournal = async (e, targetId, title, journal) => {
    e.preventDefault();
    handleClose();
    try {
      // Get Docment Ref
      console.log(targetId);
      const jnlRef = doc(db, "Journal", currentUser.uid);
      const jnlSnap = await getDoc(jnlRef);
      // Checking if doc exists
      // Checking if document exists
      if (jnlSnap.exists) {
        let foundObj = null;
        let foundIndex = -1;

        const jnlsArray = jnlSnap.data().journal;
        for (let i = 0; i < jnlsArray.length; i++) {
          if (jnlsArray[i].id === targetId) {
            foundObj = jnlsArray[i];
            foundIndex = i;
            break;
          }
        }
        console.log(foundObj);
        console.log(foundIndex);
        // Remove the old journal object
        jnlsArray.splice(foundIndex, 1);
        console.log(foundIndex);
        console.log(jnlsArray);

        const currentDate = new Date().toLocaleDateString();

        // Create the updated journal object and add it to the end of the array
        const updatedJournal = {
          id: uuid(),
          title: title,
          journal: journal,
          server_Time: Timestamp.now(),
          time: currentDate,
        };
        jnlsArray.push(updatedJournal);
        // console.log(jnlsArray)
        const updatedData = {
          journal: jnlsArray,
        };

        await updateDoc(jnlRef, updatedData);
        setJournal("");
      } else {
        console.log("There's an error");
      }
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
              <div className="flex space-x-2 justify-between pt-1">
                <div className="text-black font-medium text-[14px]">
                  {data.title}
                </div>
                {/* <MdDelete
                  onClick={deleteJournal}
                  className="fill-gray-500 cursor-pointer"
                  style={{ width: "20px", height: "20px" }}
                /> */}
              </div>
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
                      onClick={(e) => updateJournal(e, id, title, journal)}
                      className="cursor-pointer text-center p-2 mx-auto mt-5 bg-black text-white rounded-full"
                      style={{ width: "150px", height: "40px" }}
                    >
                      Done
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
          onClick={handleOpen2}
          className="fill-gray-500 cursor-pointer mx-auto"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container flex flex-col justify-center items-center rounded-md">
            <form className="container flex flex-col justify-center items-center">
              <textarea
                type="text"
                placeholder="Title"
                className="w-[80%] h-[40px]  text-lg font-semibold text-left "
                // style={{ fontSize: '24px' }}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>

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
                onClick={submitJournal}
                className="cursor-pointer mt-5 bg-black text-white rounded-full"
                style={{ width: "150px", height: "40px" }}
              >
                Done
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Recent;
