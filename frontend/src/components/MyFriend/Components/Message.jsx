import React, { useEffect, useRef } from "react";

const Message = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
          <div
        ref={ref}
        className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg flex flex-col max-h-[80%] bg-[#0F1828]"
      >
        <span className="text-white">
          This is the text i think This is the text i think, This is the text i
          think
        </span>
        <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
      </div>
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg  flex flex-col max-h-[80%] bg-[#375FFF]"
        >
          <span className="text-white">
            This is the text i think This is the text i think, This is the text
            i think
          </span>
          <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
        </div>
      </div>
      <div
        ref={ref}
        className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg flex flex-col max-h-[80%] bg-[#0F1828]"
      >
        <span className="text-white">
          This is the text i think This 
        </span>
        <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
      </div>
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg  flex flex-col max-h-[80%] bg-[#375FFF]"
        >
          <span className="text-white">
            This is the text i think This is the text i think, This is the text
            i think  This is the text i think This is the text i think, This is the text
            i think
          </span>
          <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
        </div>
      </div>
      
      <div
        ref={ref}
        className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg flex flex-col max-h-[80%] bg-[#0F1828]"
      >
        <span className="text-white">
          This is the text i think This is the text i think, This is the text i
          think
        </span>
        <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
      </div>
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg  flex flex-col max-h-[80%] bg-[#375FFF]"
        >
          <span className="text-white">
            This is the text i think This is the text i think, This is the text
            i think
          </span>
          <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
        </div>
      </div>
      <div
        ref={ref}
        className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg flex flex-col max-h-[80%] bg-[#0F1828]"
      >
        <span className="text-white">
          This is the text i think This 
        </span>
        <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
      </div>
      <div className="flex flex-row-reverse">
        <div
          ref={ref}
          className="max-w-[50%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg  flex flex-col max-h-[80%] bg-[#375FFF]"
        >
          <span className="text-white">
            This is the text i think This is the text i think, This is the text
            i think  This is the text i think This is the text i think, This is the text
            i think
          </span>
          <span className="text-xs text-gray-200 pr-1 pt-1 pb-1">just now</span>
        </div>
      </div>
      
    </>
  );
};

export default Message;
