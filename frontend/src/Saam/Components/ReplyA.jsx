import React from "react";

const ReplyA = (props) => {
  return (
    <div className="items-center self-center">
      <div
        className="max-w-[90%] text-center  text-black cursor-pointer hover:bg-gray-300 hover:text-black p-3 m-2 rounded-md border-2 border-gray-300 flex flex-col max-h-[60%] bg-white/40"
        onClick={() => props.handleOptionSelect("Yes, I am new here")}
      >
        Yes, I am new here
      </div>
      <div
        className="max-w-[90%] text-center  text-black cursor-pointer hover:bg-gray-300 hover:text-black p-3 m-2 rounded-md border-2 border-gray-300 flex flex-col max-h-[60%] bg-white/40"
        onClick={() => props.handleOptionSelect("No, I have an account")}
      >
        No, I have an account
      </div>
    </div>
  );
};

export default ReplyA;
