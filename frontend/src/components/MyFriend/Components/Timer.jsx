import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../../firebase";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../../context/AuthContext";

const Timer = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const timeLeft = useSelector((state) => state.timer.timeLeft);
  const color = useSelector((state) => state.timer.color);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft === 1) {
        deleteDocs();
        console.log("Done");
        clearInterval(intervalId);
      } else if (timeLeft === 60) {
        dispatch({ type: "CHANGE_COLOR", color: "red" });
      }
      dispatch({ type: "UPDATE_TIME", timeLeft: timeLeft - 1 });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, dispatch]);

  const deleteDocs = async () => {
    try {
      // get Document Ref
      const usersRef = doc(db, "users", currentUser.uid);
      const usersSnap = await getDoc(usersRef);
      const activeRef = doc(db, "Active", currentUser.uid);
      // const combine = localStorage.getItem("combine");
      // const usersChatRef = doc(db, "usersChat", currentUser.uid);
     
      if (!activeRef) {
        alert("Session Ended");
      }
     
      // if (!usersChatRef) {
      //   console.error("No Users Chats Ref");
      // }

      await deleteDoc(activeRef);
      // await updateDoc(usersChatRef, {});

      if (usersSnap.exists()) {
        navigate("/myfriendlist");
      } 
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <div style={{ color: color }} className="pt-[5px] pl-3">
      Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
    </div>
  );
};

export default Timer;
