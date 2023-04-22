import React, { useRef,useContext, useState, useEffect } from "react";
import { TbSmartHome } from "react-icons/tb";
import { BiSend } from "react-icons/bi";
import { IoPinSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

import { AuthContext } from "../context/AuthContext";

import { v4 as uuid } from "uuid";

const Footer = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");

  const send = async (e) => {
    e.preventDefault();
    let content = text;
    let role = "user";
    await updateDoc(doc(db, "Memory", currentUser.uid), {
      memory: arrayUnion({
        role,
        content,
      }),
    });
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

  const [messages, setMessages] = useState([]);
  const [jnl, setJnl] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "Memory", currentUser.uid), (doc) => {
      doc.exists() && setMessages(doc.data().memory);
      console.log(messages);
    });
    const unSub2 = onSnapshot(doc(db, "Journal", currentUser.uid), (doc) => {
      doc.exists() && setJnl(doc.data().journal);
      // console.log(jnl);
    });

    return () => {
      unSub2();
      unSub();
    };
  }, [currentUser.uid]);

  const handleSubmit = () => {
    fetch("https://murmuring-gorge-56642.herokuapp.com/saam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
        chats: messages,
        sourceTag: jnl[jnl.length - 1].source,
        emojiRating: jnl[jnl.length - 1].emoji,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        let role = "assistant";
        let content = data.message;
        await updateDoc(doc(db, "Memory", currentUser.uid), {
          memory: arrayUnion({
            role,
            content,
          }),
        });
        await updateDoc(doc(db, "chats", currentUser.uid), {
          message: arrayUnion({
            id: uuid(),
            text: data.message,
            sender: "Ai",
            date: Timestamp.now(),
          }),
        });
      });
  };
  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      // submit the form or input
      let content = text;
      let role = "user";
      await updateDoc(doc(db, "Memory", currentUser.uid), {
        memory: arrayUnion({
          role,
          content,
        }),
      });
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
    }
  };
  const inputElement = useRef(null);

useEffect(() => {
  inputElement.current.onfocus = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
});

  return (
    <div className="fixed inset-x-0  bottom-0 bg-white w-screen h-fit">
      <div className=" space-x-1  rounded-[100px]   w-[90%] flex m-auto h-[69px] bg-[#CBE0E6] p-1">
        <div className="h-[55px] ml-[0.5%] cursor-pointer flex w-[60px] rounded-[100px] bg-white my-auto">
          <TbSmartHome
            onClick={() => navigate("/journal")}
            className="fill-white m-auto"
            style={{ width: "24px", height: "20px" }}
          />
        </div>
        <div className="h-[60px] mb-1 relative flex lg:w-[93.5%] mr-[0.8rem] w-[90%] rounded-[100px] bg-white my-auto">
          <IoPinSharp
            className="fill-[#3A3A3A] m-auto absolute inset-y-0 left-0 ml-2"
            style={{ width: "24px", height: "20px" }}
          />
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            ref={inputElement}
            onKeyDown={handleKeyPress}
            placeholder="How can I help you?"
            className="w-[80%] pr-5 lg:w-[95%] pl-[0.4rem] m-auto leading-[22.5px]  placeholder:leading-[22.5px] text-[15px] placeholder:text-[15px] font-normal placeholder:font-normal text-[#3A3A3A]"
          />
          <BiSend
            onClick={send}
            className="fill-[#3A3A3A] cursor-pointer m-auto absolute inset-y-0 right-0 mr-5"
            style={{ width: "24px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
