import React, {  useEffect, useRef } from "react";

const Message = ({ message }) => {
  // const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
 
  let output;
  if (message["sender"] === "User") {
    output = (
        <div className="flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[70%] p-3 m-2 rounded-3xl border border-[#CBE0E6] flex max-h-[80%] bg-white"
        >
          <span className="text-[#3A3A3A] text-left">{message["text"]}</span>
        </div>
      </div>
    );
  } else {
    output = (
        <div
        ref={ref}
        className="max-w-[70%] lg:max-w-[550px] lg:max-h-[114px] p-3 m-2 rounded-3xl flex flex-col max-h-[80%] bg-[#CBE0E6]"
      >
        <span className="text-[#3A3A3A]">
         {message["text"]}
        </span>
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