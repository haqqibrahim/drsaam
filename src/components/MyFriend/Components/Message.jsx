import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import addNotification from 'react-push-notification';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [notification, setNotification] = useState(false);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  useEffect(() => {
    let lastTimestamp = null;
  
    const getNotifications = () => {
      const unsub = getDoc(doc(db, "Notification", data.chatId), (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          console.log("Yes it working ")

          if (data.time !== lastTimestamp) {
            console.log("Yes itworks")
            setNotification(true);
            successNotification();
            lastTimestamp = data.time;
          }
        } else {
          setNotification(false);
        }
      });
  
      return () => {
        unsub();
      };
    };
  
    data.chatId && getNotifications();
  }, [data.chatId]);
  function successNotification (){
    addNotification({
      title: 'Success',
      subtitle: 'You have successfully submitted',
      message: 'Welcome to GeeksforGeeks',
      theme: 'light',
      closeButton:"X",
      backgroundTop:"green",
      backgroundBottom:"yellowgreen"
    })
  };
  
  
  let output;
  if (message["senderId"] === currentUser.uid) {
    output = (
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[70%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg  flex flex-col max-h-[80%] bg-[#375FFF]"
        >
          <span className="text-white">{message["text"]}</span>
          <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
        </div>
      </div>
    );
  } else {
    output = (
      <div
        ref={ref}
        className="max-w-[70%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg flex flex-col max-h-[80%] bg-[#0F1828]"
      >
        <span className="text-white">{message["text"]}</span>
        <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
      </div>
    );
  }
  return <>{message && output}</>;
};

export default Message;
