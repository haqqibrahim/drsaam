import React, { useState, useContext } from "react";
import Mid from "../assets/images/mid.png";
import Cool from "../assets/images/cool.png";
import Normal from "../assets/images/normal.png";
import Sad from "../assets/images/sad.png";
import Bad from "../assets/images/bad.png";
import { useNavigate } from "react-router-dom";
import mixpanel from "mixpanel-browser";

import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { v4 as uuid } from "uuid";
const JournalNew = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", {
    debug: true,
    ignore_dnt: true,
  });
  const { currentUser } = useContext(AuthContext);
  const [source, setSource] = useState("");
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState("");
  const [journal, setJnls] = useState("");
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if(journal.length === 0) {
      setErr("Empty journal can't be submitted");
      setSucc(false);
    } else {
      
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });

    try {
      await updateDoc(doc(db, "Journal", currentUser.uid), {
        journal: arrayUnion({
          id: uuid(),
          source,
          emoji,
          journal,
          server_Time: Timestamp.now(),
          time: `${formattedTime} ${formattedDate}`,
        }),
      });
      setErr("");
      setSucc(true);
      setSource("");
      setJnls("");
      mixpanel.track("New Journel Entry")
      navigate("/journal")
    } catch (error) {
      setErr(error.message);
      setSucc(false);
    }
    }
  };
  return (
    <div className=" bg-[#3A3A3A66]/40  flex flex-col">
      <div className="w-[330px] flex flex-col h-[802px] my-[20px] bg-white rounded-[24px] m-auto">
        {succ && (
          <div className="mx-auto pt-10 text-center text-[14px] leading-7 font-nomral w-[350px] font-semibold text-green-400">
            Journal Saved
          </div>
        )}

        {err && (
          <div className="mx-auto pt-10 text-red-600 text-[14px] text-center leading-5 font-nomral w-[350px] ">
            {err}
          </div>
        )}
        <div className="flex flex-col mx-auto">
          <p className="w-[79px] h-[21px] leading-[21px] text-[14px] mx-auto font-normal lg:pt-[60px]  pt-[20px]">
            Source Tag
          </p>
          <input
            className="p-4 placeholder:text-[#3A3A3A]/60 text-[#3A3A3A] font-normal placeholder:font-normal leading-[24px] placeholder:leading-[24px] text-[14px] placeholder:text-[12px] w-[300px] mt-[30px] h-[61px] rounded-[24px] bg-[#E5E5E5]"
            type="text"
            required
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g Relationship, Work, School, Friend"
          />
        </div>
        <div className="flex flex-col mx-auto">
          <p className="w-[150px] h-[21px] leading-[21px] text-[14px] mx-auto font-normal  pt-[30px]">
            Emoji rating: {emoji}
          </p>
          <span className="p-2 flex placeholder:text-[#3A3A3A]/60 text-[#3A3A3A] font-normal placeholder:font-normal leading-[24px] placeholder:leading-[24px] text-[14px] placeholder:text-[12px] w-[300px] mt-[30px] h-[61px] rounded-[24px] bg-[#E5E5E5]">
            <button
              onClick={() => setEmoji("Terrific")}
              className="mx-auto focus:border flex focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Cool}
                alt="Cool Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto "
              />
            </button>
            <button
              onClick={() => setEmoji("Happy")}
              className="focus:border focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Normal}
                alt="Mid Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
            <button
              onClick={() => setEmoji("Neutral")}
              className="mx-auto focus:border flex focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Mid}
                alt="Mid Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
            <button
              onClick={() => setEmoji("Sad")}
              className="focus:border focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Sad}
                alt="Sad Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
            <button
              onClick={() => setEmoji("Awful")}
              className="mx-auto focus:border flex focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Bad}
                alt="Bad Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
          </span>
        </div>
        <div className="flex flex-col mx-auto">
          <p className="w-[89px] text-center h-[21px] leading-[21px] text-[14px] mx-auto font-normal  pt-[30px]">
            Journal note
          </p>
          <textarea
            className="p-4 text-left placeholder:text-[#3A3A3A]/60 text-[#3A3A3A] font-normal placeholder:font-normal leading-[26px] placeholder:leading-[26px] text-[14px] placeholder:text-[12px] w-[300px] mt-[30px] h-[200px] rounded-[24px] bg-[#E5E5E5]"
            type="text"
            required
            value={journal}
            onChange={(e) => setJnls(e.target.value)}
            placeholder="Write about your thoughts and feelings here to make up your journal"
          ></textarea>
        </div>
        <button
          onClick={submit}
          className="text-center p-3 text-white w-[83px] mt-10 h-[45px] bg-[#3A3A3A] rounded-[100px] mx-auto"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default JournalNew;
