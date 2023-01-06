import React from "react";
import {useNavigate} from "react-router-dom"

import { AnimationPage } from "../../../assets/AnimationPage";

import { BsChatText } from "react-icons/bs";

const MyFriendList = () => {
    const navigate = useNavigate()
  const images = [
    "https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12289141/pexels-photo-12289141.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14642654/pexels-photo-14642654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14332931/pexels-photo-14332931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14246458/pexels-photo-14246458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/13802257/pexels-photo-13802257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/10356867/pexels-photo-10356867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11220223/pexels-photo-11220223.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  return (
    <AnimationPage>
      <div className="bg-[#152033] h-screen w-full container p-6 divide-y divide-slate-700">
        <div className=" pb-5">
          <div className="justify-between flex">
            <div>
              <span className="text-white text-lg">MyFriend</span>
            </div>
            <div>
              {" "}
              <BsChatText
                className="fill-white pb-2"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <span className=" text-slate-500 font-light">
            Pick a MyFriend of your choice
          </span>

          <div className="divide-y divide-slate-700 space-y-8">
            <div onClick={() => navigate("/chat")} className="mt-2 h-16 w-full  items-center justify-center">
              <div className="pt-2 items-center flex space-x-4">
                <img
                  src={getRandomImage()}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-md m-1"
                />
                <div className="flex flex-col">
                  {" "}
                  <span className="text-white">big-kings</span>
                  <span className="text-slate-300 text-sm max-w-[100%] max-h-[95%]">
                    I am a software eng, a very good one. I like cars, movies
                    and money, <span onClick={() => navigate("/myfriendprofile")} className="text-slate-600">Read more..</span>
                  </span>
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
                  <span className="text-white">big-kings</span>
                  <span className="text-slate-300 text-sm max-w-[100%] max-h-[95%]">
                    I am a softwarre eng, a very good one. I like cars, movies
                    and money, <span onClick={() => navigate("/myfriendprofile")} className="text-slate-600">Read more..</span>
                  </span>
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
                  <span className="text-white">big-kings</span>
                  <span className="text-slate-300 text-sm max-w-[100%] max-h-[95%]">
                    I am a softwarre eng, a very good one. I like cars, movies
                    and money, <span className="text-slate-600">Read more..</span>
                  </span>
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
                  <span className="text-white">big-kings</span>
                  <span className="text-slate-300 text-sm max-w-[100%] max-h-[95%]">
                    I am a softwarre eng, a very good one. I like cars, movies
                    and money, <span className="text-slate-600">Read more..</span>
                  </span>
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
                  <span className="text-white">big-kings</span>
                  <span className="text-slate-300 text-sm max-w-[100%] max-h-[100%]">
                    I am a softwarre eng, a very good one. I like cars, movies
                    and money, <span className="text-slate-600">Read more..</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationPage>
  );
};

export default MyFriendList;
