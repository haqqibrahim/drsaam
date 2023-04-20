import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { setLoading } from '../Action/action';
const Messages = (props) => {
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", currentUser.uid), (doc) => {
      doc.exists() && setMessages(doc.data().message);
      console.log(messages)
    });

    

    return () => {
      unSub();
    };
  }, [currentUser.uid]);

  return (
    <div className="h-[100%] flex w-screen lg:w-[100%]  p-1 flex-col mx-auto">
      {messages.length > 0 ? (
        messages.map((message) => {
          if (message.sender === "User") {
            return (
              <div key={message.id} className="flex flex-row-reverse" ref={ref}>
                <div className="max-w-[70%] min-w-[77px] p-3 m-2 rounded-3xl  border border-[#CBE0E6] flex max-h-[100%] bg-white">
                  <p className="text-[#3A3A3A] leading-7 font-normal text-[15px] mx-auto">
                    {message.text}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
             <>
              <div key={message.id} ref={ref} className="">
                <div className="max-w-[70%] w-auto inline-block lg:max-w-[550px] lg:max-h-[114px] p-3 m-2 rounded-3xl flex-col max-h-[100%] bg-[#CBE0E6]">
                  <span className="text-[#3A3A3A] leading-7 font-normal text-[15px]  mx-auto]">
                    {message.text}
                  </span>
                </div>
              </div>
              {props.isLoading && <p>Loading...</p>}
             </>
            );
          }
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};



export default Messages;
