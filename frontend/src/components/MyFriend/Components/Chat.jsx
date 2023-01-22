import React from "react";
import "./css.css"
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  
  return (
    <div className="bg-[#152033] h-screen">
      <div className="">
        <Header />
      </div>
      <div className="pb-[75px] pt-[80px]">
        {" "}
        <Messages />
      </div>
      <div className="">
        {" "}
        <Input />
      </div>
    </div>
  );
};

export default Chat;
