import React from "react";
import "./style.css"
import Message from "./Message";

const Messages = () => {
  return (
    <div
      className="bg-[#152033] h-full p-1" style={{ overflow: 'scroll'}}
    >
              
     
      <Message />
    </div>
  );
};

export default Messages;
