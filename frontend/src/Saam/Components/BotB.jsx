import React, { useState, useEffect } from "react";

const BotB = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "You are now in your safe space!",
    "What's on your mind to do?",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (messageIndex === messages.length - 1) {
        clearInterval(intervalId);
        return;
      }
      setMessageIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [messageIndex, messages.length]);

  return (
    <div>
      {messages.map((message, index) => (
        <div
          key={index}
          className="max-w-[70%] self-start p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg  flex flex-col max-h-[80%] bg-white/80"
        >
          {index <= messageIndex ? message : null}
        </div>
      ))}
    </div>
  );
};

export default BotB;
