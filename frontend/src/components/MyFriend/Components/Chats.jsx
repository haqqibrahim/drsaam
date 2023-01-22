import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebase";
import { ChatContext } from "../../../context/ChatContext";
import { isEmpty } from "@firebase/util";

const Chats = () => {
  const navigate = useNavigate();
  const [chats, setchats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const images = [
    "https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12289141/pexels-photo-12289141.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14642654/pexels-photo-14642654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14332931/pexels-photo-14332931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14246458/pexels-photo-14246458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/13802257/pexels-photo-13802257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/10356867/pexels-photo-10356867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11220223/pexels-photo-11220223.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "usersChat", currentUser.uid), (doc) => {
        setchats(doc.data());
        console.log(chats);
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  let vals = [];

  if (isEmpty(chats)) {
    vals = [];
  } else {
    for (const key in chats) {
      vals.push({
        key: key,
        date: chats[key]["date"].toDate(),
        element: (
          <div
            key={key}
            onClick={() => handleSelect(chats[key]["userInfo"])}
            className="mt-4 h-16 w-full  items-center justify-center"
          >
            <div className="pt-2 items-center flex space-x-4">
              <img
                src={getRandomImage()}
                alt=""
                style={{ width: "50px", height: "50px" }}
                className="rounded-md m-1"
              />
              <div className="flex flex-col">
                {" "}
                <span className="text-white">
                  {chats[key]["userInfo"]["displayName"]}
                </span>
                <span className="text-slate-300 text-sm">
                  {chats[key]["lastMessage"]["text"]}
                </span>
              </div>
            </div>
          </div>
        ),
      });
    }
  }

  vals.sort((a, b) => b.date - a.date);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    dispatch({ type: "START_TIMER" });
    navigate("/chat");
  };

  if (Object.keys(chats).length === 0) {
    return <div className="text-white mt-5">No Chats Available</div>;
  } else {
    return <div className="">{chats && vals.map((val) => val.element)}</div>;
  }
};

export default Chats;
