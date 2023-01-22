import React,  { useContext, useState } from "react";
import "./style.css"

import {
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../../firebase";

import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";

import { v4 as uuid } from "uuid";


import { IoIosSend } from "react-icons/io";
const Input = () => {
  const [text, setText] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      message: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });
    await updateDoc(doc(db, "usersChat", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "usersChat", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
  }
  return (
    <div className="fixed bottom-0 w-full justify-center items-center flex flex-col h-[75px] p-1 bg-[#0F1828]">
      <div className="flex space-x-6">
        {" "}
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type..."
          value={text}
          className="inputt bg-[#152033] text-white font-light w-[300px] p-2"
        />
         <IoIosSend
         onClick={() => handleSend()}
          className="fill-[#375FFF] mt-2"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
};

export default Input;
