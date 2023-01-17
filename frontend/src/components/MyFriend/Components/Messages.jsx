import React, { useContext, useState, useEffect } from "react";
import { ChatContext } from "../../../context/ChatContext";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import "./style.css";

import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().message);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="bg-[#152033] h-full p-1">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}

    </div>
  );
};

export default Messages;
