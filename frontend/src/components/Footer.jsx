import React, { useContext, useState } from "react";
import { TbSmartHome } from "react-icons/tb";
import { BiSend } from "react-icons/bi";
import { IoPinSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";

import { db } from "../firebase";

import { AuthContext } from "../context/AuthContext";

import { v4 as uuid } from "uuid";

const Footer = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");

  const send = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "chats", currentUser.uid), {
      message: arrayUnion({
        id: uuid(),
        text,
        sender: "User",
        date: Timestamp.now(),
      }),
    });
    setText("");
    handleSubmit();
  };

  const handleSubmit = () => {
    fetch("https://8546-154-113-158-227.eu.ngrok.io/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text, chats: "" }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        await updateDoc(doc(db, "chats", currentUser.uid), {
          message: arrayUnion({
            id: uuid(),
            text: data.message,
            sender: "Ai",
            date: Timestamp.now(),
          }),
        });
        // setResponse(data.message);
        // const chat = { user: message, assistant: data.message };
        // setChats([...chats, chat]);
        // setJnl("")
      });
  };
  return (
    <div className="absolute space-x-1 inset-x-0 rounded-[100px]   bottom-0 w-[90%] flex m-auto h-[80px] bg-[#CBE0E6] p-1">
      <div className="h-[60px] cursor-pointer flex w-[60px] rounded-[100px] bg-white my-auto">
        <TbSmartHome
          onClick={() => navigate("/journal")}
          className="fill-white m-auto"
          style={{ width: "24px", height: "20px" }}
        />
      </div>
      <div className="h-[60px] relative flex lg:w-[95%] w-[90%] rounded-[100px] bg-white my-auto">
        <IoPinSharp
          className="fill-[#3A3A3A] m-auto absolute inset-y-0 left-0 ml-2"
          style={{ width: "24px", height: "20px" }}
        />
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="How can I help you?"
          className="w-[80%] lg:w-[95%] m-auto leading-[22.5px]  placeholder:leading-[22.5px] text-[15px] placeholder:text-[15px] font-normal placeholder:font-normal text-[#3A3A3A]"
        />
        <BiSend
          onClick={send}
          className="fill-[#3A3A3A] cursor-pointer m-auto absolute inset-y-0 right-0 mr-5"
          style={{ width: "24px", height: "20px" }}
        />
      </div>
    </div>
  );
};

export default Footer;
