import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AnimationPage } from "../../assets/AnimationPage";
import { AuthContext } from "../../context/AuthContext";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import Typewriter from "typewriter-effect";
import {
  BsChatLeftQuote,
  BsUiChecks,
  BsJournalAlbum,
  BsChatText,
  BsBarChartFill,
} from "react-icons/bs";

import { CgBot } from "react-icons/cg";
const HomeTwo = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <AnimationPage>
      <div className=" h-screen container flex flex-col p-8">
        <div className="flex flex-col">
          <span onClick={() => signOut(auth)} className="font-semibold text-xl">Heyyy, {currentUser.displayName}</span>
          <span className="text-slate-400 pb-5 text-bolder">
            <Typewriter
              options={{
                strings: ["What’s on your mind to do today?"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </div>
        <div className="container h-screen p-5 flex flex-col items-center">
          <div className="mt-1 h-24 pl-5 flex items-center w-96 bg-blue-500 border-black rounded-lg">
            <div className="flex items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <div>
                    <BsChatLeftQuote
                      className="fill-white mt-2"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <span className="text-white font-extralight px-10">
                    "Self-care is how you take your power back." - Lalah Delia
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 space-x-4">
            <div onClick={() => navigate("/checkup")} className="bg-blue-100 items-center rounded-md w-[180px] h-[170px]">
              <div className="flex flex-col mt-5">
                <div>
                  <BsUiChecks
                    className="fill-blue-300  ml-5"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <span className="text-blue-300 font-bold pl-5 pr-8 pt-2">
                  Daily Checkup
                </span>
                <span className="ml-5 mt-2 pr-2 text-sm font-light">
                  Mental health checkup{" "}
                  <span className="font-bold">3 times a day</span>
                </span>
              </div>
            </div>
            <div onClick={() => navigate("/journal")} className="bg-pink-100 rounded-md w-[180px] h-[170px]">
              <div className="flex flex-col mt-5">
                <div>
                  <BsJournalAlbum
                    className="fill-pink-300  ml-5"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <span className="text-pink-300 font-bold pl-5 pr-8 pt-2">
                  Journal
                </span>
                <span className="ml-5 mt-2 pr-2 text-sm font-light">
                  A <span className="font-bold">private</span> place to express
                  your deepest thoughts
                </span>
              </div>
            </div>
          </div>
          <div onClick={() => navigate("/myfriendlist")} className="flex mt-5 space-x-4">
            <div className="bg-green-100 items-center rounded-md w-[180px] h-[170px]">
              <div className="flex flex-col mt-5">
                <div>
                  <BsChatText
                    className="fill-green-400  ml-5"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <span className="text-green-400 font-bold pl-5 pr-8 pt-2">
                  My Friend
                </span>
                <span className="ml-5 mt-2 pr-2 text-sm font-light">
                  A friend you have <span className="font-bold">annoymous</span>{" "}
                  chats with
                </span>
              </div>
            </div>
            <div className="bg-indigo-100 rounded-md w-[180px] h-[170px]">
              <div className="flex flex-col mt-5">
                <div>
                  <BsBarChartFill
                    className="fill-indigo-400  ml-5"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <span className="text-indigo-400 font-bold pl-5 pr-8 pt-2">
                  Assssment
                </span>
                <span className="ml-5 mt-2 pr-2 text-sm font-light">
                  Grade your{" "}
                  <span className="font-bold">mental health level</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-5 space-x-4">
            <div className="bg-stone-100 items-center rounded-md w-[180px] h-[170px]">
              <div className="flex flex-col mt-3">
                <div>
                  <CgBot
                    className="fill-stone-800  ml-5"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <span className="text-stone-800 font-bold pl-5 pr-8 pt-2">
                  Dr.SAAM
                </span>
                <span className="ml-5 mt-2 pr-2 text-sm font-light">
                  Chat with{" "}
                  <span className="font-bold">Dr.SAAM an AI Chatbot</span>{" "}
                  <br /> <span className="font-bold">(Protoype)</span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md w-[180px] h-[170px]"></div>
          </div>
        </div>
      </div>
      {/* <div className="body h-screen container flex flex-col justify-center items-center">
        <span className="text-slate-800 pb-5 text-bold">
          <Typewriter
            className="text-slate-500 pb-5 text-bolder"
            options={{
              strings: ["What’s on your mind to do today?"],
              autoStart: true,
              loop: true,
              delay: 75
            }}
          />
        </span>

        <div className="container items-center space-y-10 flex flex-col justify-center md:flex-row h-72 w-72 bg-white border-black rounded-lg">
          <span className="" onClick={note}>
            Daily Check Up
          </span>
          <div className="w-40 h-1 bg-zinc-300"></div>
          <span onClick={() => navigate("/journal")}>
           My Journal
          </span>
        </div>
      </div> */}
    </AnimationPage>
  );
};

export default HomeTwo;
