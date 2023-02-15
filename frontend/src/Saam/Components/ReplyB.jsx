import React from "react";

const ReplyB = (props) => {
  return (
    <div className="items-center self-center">
      <div className="flex ">
        <div
          className="max-w-[90%] text-center coursor-pointer  text-black cursor-pointer hover:bg-gray-300 hover:text-black p-3 m-2 rounded-md border-2 border-gray-300 flex flex-col max-h-[60%] bg-white/40"
          onClick={() => props.handleOptionSelect("Rio Coin")}
        >
          Rio Coin
        </div>
        <div
          className="max-w-[90%] text-center coursor-pointer  text-black cursor-pointer hover:bg-gray-300 hover:text-black p-3 m-2 rounded-md border-2 border-gray-300 flex flex-col max-h-[60%] bg-white/40"
          onClick={() => props.handleOptionSelect("MyFriend")}
        >
          MyFriend
        </div>
      </div>
      <div className="flex">
        <div
          className="max-w-[90%] text-center coursor-pointer  text-black cursor-pointer hover:bg-gray-300 hover:text-black p-3 m-2 rounded-md border-2 border-gray-300 flex flex-col max-h-[60%] bg-white/40"
          onClick={() => props.handleOptionSelect("Journal")}
        >
          Journal
        </div>
        <div
          className="max-w-[90%] text-center coursor-pointer  text-black cursor-pointer hover:bg-gray-300 hover:text-black p-3 m-2 rounded-md border-2 border-gray-300 flex flex-col max-h-[60%] bg-white/40"
          onClick={() => props.handleOptionSelect("Checkup")}
        >
          Checkup
        </div>
      </div>

      <div className="">
       
        <div
          className="max-w-[90%] text-center coursor-pointer cursor-pointer text-red-500 hover:bg-red-500 hover:text-white p-3 m-2 rounded-md border-2 border-red-500 flex flex-col max-h-[60%] bg-white/80"
          onClick={() => props.handleOptionSelect("Log out")}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default ReplyB;
