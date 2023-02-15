import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../../firebase";
import {
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  Timestamp
} from "firebase/firestore";
import { AuthContext } from "../../../context/AuthContext";
import { v4 as uuid } from "uuid";

const Timer = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const timeLeft = useSelector((state) => state.timer.timeLeft);
  const color = useSelector((state) => state.timer.color);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft === 1) {
        timer_end();
        console.log("Done");
        clearInterval(intervalId);
      } else if (timeLeft === 60) {
        dispatch({ type: "CHANGE_COLOR", color: "red" });
      }
      dispatch({ type: "UPDATE_TIME", timeLeft: timeLeft - 1 });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, dispatch]);

  const timer_end = async () => {
    try {
      // get Document Ref
      const usersRef = doc(db, "users", currentUser.uid);
      const usersSnap = await getDoc(usersRef);
      const activeRef = doc(db, "Active", currentUser.uid);

      if (!activeRef) {
        alert("Session Ended");
      }

      await deleteDoc(activeRef);

      if (usersSnap.exists()) {
        const currentDate = new Date().toLocaleDateString();
        console.log("Yes Coins");
        await updateDoc(doc(db, "Rio_Coins", currentUser.uid), {
          coin: arrayUnion({
            id: uuid(),
            value: 5,
            date_acquired: currentDate,
            server_Time: Timestamp.now(),
            earned_activity: {
              activity_name: "MyFriend",
              activity_time: currentDate,
            },
          }),
        });
        console.log("Okay")
        await updateDoc(doc(db, "users", currentUser.uid), {
          rio_coin: increment(5),
        });
        console.log("Mad")
        localStorage.setItem("friend", true);
        navigate("/myfriendlist");
      }
     
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <div style={{ color: color }} className="pt-[3px] pl-3">
      Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
    </div>
  );
};

export default Timer;
