import { isEmpty } from "@firebase/util";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
 
  let output;
  if (message["senderId"] === currentUser.uid) {
    output = (
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[70%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg  flex flex-col max-h-[80%] bg-[#375FFF]"
        >
          <span className="text-white">
          {message["text"]}
          </span>
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
        <span className="text-white">
        {message["text"]}
        </span>
        <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
      </div>
    );
  }
  return (
    <>
       {message && (
        output
       )}
    </>
  );
};

export default Message;
