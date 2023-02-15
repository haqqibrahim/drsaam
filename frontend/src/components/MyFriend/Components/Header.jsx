import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Timer from "./Timer";

const Headers = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(null);
  const [burger, setBurger] = useState(false)
  const { currentUser } = useContext(AuthContext);

  const { data } = useContext(ChatContext);
  
    const unSub = async () => {
      console.log("Truess")
      const usersRef = doc(db, "users", currentUser.uid);
      console.log("OK")
      const usersSnap = await getDoc(usersRef);
      if (usersSnap.exists()) {
        console.log("Yes yess")
        setTime(true);
        setBurger(false)
        console.log("Yes sir")
      } else {
        setTime(false)
        setBurger(true)
        console.log("No sir")
      }
    };
    unSub()
   
  return (
    <div className="fixed justify-between items-center h-[60px] p-2 pt-3 w-full flex bg-[#0F1828]">
      <div className="flex items-center mt-1">
        <MdOutlineKeyboardArrowLeft
          className="cursor-pointer  fill-gray-500"
          onClick={() => navigate(-1)}
          style={{ width: "40px", height: "40px" }}
        />
        <span className="text-white text-lg font-light ml-2">
          {data.user?.displayName}
        </span>
        {time && <Timer />}
      </div>
      {burger && <div className="cursor-pointer items-center">
        {" "}
        <GiHamburgerMenu
          onClick={() => navigate("/user-profile")}
          className="fill-white p-1 mt-1"
          style={{ width: "40px", height: "40px" }}
        />
      </div>}
    </div>
  );
};

export default Headers;
