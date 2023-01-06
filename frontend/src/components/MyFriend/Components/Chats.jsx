import React from "react";
import {useNavigate} from "react-router-dom"

const Chats = () => {
    const  navigate = useNavigate()

  const images = [
    "https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12289141/pexels-photo-12289141.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14642654/pexels-photo-14642654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14332931/pexels-photo-14332931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14246458/pexels-photo-14246458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/13802257/pexels-photo-13802257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/10356867/pexels-photo-10356867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11220223/pexels-photo-11220223.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ];
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  return (
    <div className="">
      <div onClick={() => navigate("/myfriend/chat")} className="mt-4 h-16 w-full  items-center justify-center">
        <div className="pt-2 items-center flex space-x-4">
          <img
            src={getRandomImage()}
            alt=""
            style={{ width: "50px", height: "50px" }}
            className="rounded-md m-1"
          />
          <div className="flex flex-col">
            {" "}
            <span className="text-white">username: big-kings</span>
            <span className="text-slate-300 text-sm">I feel okay today mehn</span>
          </div>
        </div>
      </div>
      <div className="mt-4 h-16 w-full  items-center justify-center">
        <div className="pt-2 items-center flex space-x-4">
          <img
            src={getRandomImage()}
            alt=""
            style={{ width: "50px", height: "50px" }}
            className="rounded-md m-1"
          />
          <div className="flex flex-col">
            {" "}
            <span className="text-white">username: big-kings</span>
            <span className="text-slate-300 text-sm">I feel okay today mehn</span>
          </div>
        </div>
      </div>
      <div className="mt-4 h-16 w-full  items-center justify-center">
        <div className="pt-2 items-center flex space-x-4">
          <img
            src={getRandomImage()}
            alt=""
            style={{ width: "50px", height: "50px" }}
            className="rounded-md m-1"
          />
          <div className="flex flex-col">
            {" "}
            <span className="text-white">username: big-kings</span>
            <span className="text-slate-300 text-sm">I feel okay today mehn</span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-16 w-full  items-center justify-center">
        <div className="pt-2 items-center flex space-x-4">
          <img
            src={getRandomImage()}
            alt=""
            style={{ width: "50px", height: "50px" }}
            className="rounded-md m-1"
          />
          <div className="flex flex-col">
            {" "}
            <span className="text-white">username: big-kings</span>
            <span className="text-slate-300 text-sm">I feel okay today mehn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;