import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
const Messages = () => {
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", currentUser.uid), (doc) => {
      doc.exists() && setMessages(doc.data().message);
      console.log(messages);
    });

    return () => {
      unSub();
    };
  }, [currentUser.uid]);

  return (
    <div className="h-fit p-1 pb-24 flex flex-col mx-auto">
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[70%] p-3 m-2 rounded-3xl border border-[#CBE0E6] flex max-h-[80%] bg-white"
        >
          <span className="text-[#3A3A3A] text-left">Hello</span>
        </div>
      </div>
      <div
        ref={ref}
        className="max-w-[70%] lg:max-w-[550px] lg:max-h-[114px] p-3 m-2 rounded-3xl flex flex-col max-h-[80%] bg-[#CBE0E6]"
      >
        <span className="text-[#3A3A3A]">
          Hey! I'm Dr. SAAM, your AI friend. I'm always here to chat about
          anything that's on your mind. I'm trained to help with your mental
          health, so what's on your mind that you would like to discuss today?
        </span>
      </div>
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[70%] p-3 m-2 rounded-3xl border border-[#CBE0E6] flex max-h-[80%] bg-white"
        >
          <span className="text-[#3A3A3A] text-left">
            I have a big presentation at work tomorrow and I'm worried I'll mess
            it up.
          </span>
        </div>
      </div>
      <div
        ref={ref}
        className="w-[80px] p-3 m-2 rounded-3xl flex flex-col h-[40px] bg-[#CBE0E6]"
      >
        <span className="flex justify-around m-auto space-x-3">
          <svg
            class="animate-bounce rounded-full mx-auto h-[10px] w-[10px] bg-white"
            viewBox="0 0 24 24"
          ></svg>
          <svg
            class="animate-bounce rounded-full mx-auto h-[10px] w-[10px] bg-white"
            viewBox="0 0 24 24"
          ></svg>
          <svg
            class="animate-bounce rounded-full mx-auto h-[10px] w-[10px] bg-white"
            viewBox="0 0 24 24"
          ></svg>
        </span>
      </div>
    </div>
  );
};

export default Messages;
