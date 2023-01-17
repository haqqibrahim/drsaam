import React from "react";

import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
      <div className="h-screen">
        <div className="">
          <Header />
        </div>
        <div className="h-5/6">
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
