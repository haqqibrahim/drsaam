import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

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

import { BiCoinStack } from "react-icons/bi";

const HomeTwo = () => {
  const { currentUser } = useContext(AuthContext);
  localStorage.setItem("currentUserId", currentUser.uid);
  const navigate = useNavigate();
  return (
    <div className=" h-screen container flex flex-col p-8">
      <div className="flex flex-col">
        <span onClick={() => signOut(auth)} className="font-semibold text-xl">
          Heyyy, {currentUser.displayName}
        </span>
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
          
          <div onClick={() => navigate("/coin")} className="bg-stone-100 items-center rounded-md w-[180px] h-[170px]">
            <div className="flex flex-col mt-3">
              <div>
                <BiCoinStack
                  className="fill-stone-800  ml-5"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <span className="text-stone-800 font-bold pl-5 pr-8 pt-2">
                Loco Coins
              </span>
              <span className="ml-5 mt-2 pr-2 text-sm font-light">
               Gather Loco coins and get nice
                <span className="font-bold"> incentives/gifts</span> <br />{" "}
              </span>
            </div>
          </div>
          <div
            onClick={() => navigate("/checkup")}
            className="bg-blue-100 items-center rounded-md w-[180px] h-[170px]"
          >
            <div className="flex flex-col mt-5">
              <div>
                <BsUiChecks
                  className="fill-blue-300  ml-5"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <span className="text-blue-300 font-bold pl-5 pr-8 pt-2">
                Checkup
              </span>
              <span className="ml-5 mt-2 pr-2 text-sm font-light">
                Mental health checkup{" "}
                <span className="font-bold">3 times a day</span>
              </span>
            </div>
          </div>
        </div>
        <div
        
          className="flex mt-5 space-x-4"
        >
          <div   onClick={() => navigate("/myfriendlist")} className="bg-green-100 items-center rounded-md w-[180px] h-[170px]">
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
          <div
            onClick={() => navigate("/journal")}
            className="bg-pink-100 rounded-md w-[180px] h-[170px]"
          >
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
        <div className="flex mt-5 space-x-4">
          <div className="bg-indigo-100 rounded-md w-[180px] h-[170px]">
            <div className="flex flex-col mt-5">
              <div>
                <BsBarChartFill
                  className="fill-indigo-400  ml-5"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <span className="text-indigo-400 font-bold pl-5 pr-8 pt-2">
                Assessment
              </span>
              <span className="ml-5 mt-2 pr-2 text-sm font-light">
                Grade your{" "}
                <span className="font-bold">mental health level</span>
              </span>
            </div>
          </div>

          <div className="bg-white rounded-md w-[180px] h-[170px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
