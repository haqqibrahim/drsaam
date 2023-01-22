import React, { useContext, useEffect, useState } from "react";
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
  const [time, setTime] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const { data } = useContext(ChatContext);
  useEffect(() => {
    const unSub = async () => {
      const usersRef = doc(db, "users", currentUser.uid);
      const usersSnap = await getDoc(usersRef);
      if (usersSnap.exists()) {
        setTime(true);
      }
    };

    return () => {
      unSub();
    };
  }, []);
  return (
    <div className="fixed justify-between items-center h-[60px] p-2 pt-3 w-full flex bg-[#0F1828]">
      <div className="flex items-center mt-1">
        <MdOutlineKeyboardArrowLeft
          className="fill-white mt-1"
          onClick={() => navigate(-1)}
          style={{ width: "40px", height: "40px" }}
        />
        <span className="text-white text-lg font-light mt-1">
          {data.user?.displayName}
        </span>
        {time && <Timer />}
      </div>
      <div className="items-center">
        {" "}
        <GiHamburgerMenu
          onClick={() => navigate("/user-profile")}
          className="fill-white p-1 mt-1"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default Headers;
