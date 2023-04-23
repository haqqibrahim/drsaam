import React, { useState, useContext } from "react";
import Mid from "../assets/images/mid.png";
import Cool from "../assets/images/cool.png";
import Normal from "../assets/images/normal.png";
import Sad from "../assets/images/sad.png";
import Bad from "../assets/images/bad.png";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuid } from "uuid";
import { IoCloseOutline } from "react-icons/io5";
import mixpanel from "mixpanel-browser";

import { useLocation,useNavigate } from "react-router";
import { db } from "../firebase";
import { doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
const JournalEdit = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", {
    debug: true,
    ignore_dnt: true,
  });
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const [data, setData] = useState(location.state?.message || "");
  const [eMoji, seteMoji] = useState(data.emoji);
  const [jnls, setJournal] = useState("");
  const [source, setSource] = useState(data.source);
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const jnlRef = doc(db, "Journal", currentUser.uid);
      const jnlSnap = await getDoc(jnlRef);
      if (jnlSnap.exists) {
        let foundObj = null;
        let foundIndex = -1;

        const jnlsArray = jnlSnap.data().journal;
        for (let i = 0; i < jnlsArray.length; i++) {
          if (jnlsArray[i].id === data.id) {
            foundObj = jnlsArray[i];
            foundIndex = i;
            break;
          }
        }
        jnlsArray.splice(foundIndex, 1);
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

        const updatedJournal = {
          id: uuid(),
          source,
          emoji: eMoji,
          journal: jnls,
          server_Time: Timestamp.now(),
          time: `${formattedTime} ${formattedDate}`,
        };
        jnlsArray.push(updatedJournal);
        // console.log(jnlsArray)
        const updatedData = {
          journal: jnlsArray,
        };
        await updateDoc(jnlRef, updatedData);
        mixpanel.track("Journal update/edit Saved")
        setErr("");
        setSucc(true);
        setJournal("");
        navigate("/journal")
      } else {
        alert("There is an error");
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
      setSucc(false);
    }
  };
  const back = () => {
   navigate("/journal")
   mixpanel.track("No changes made to journal")
  }
  return (
    <div className=" bg-[#3A3A3A66]/40 w-screen h-screen flex flex-col">
      <div className="w-[391px] flex flex-col h-[802px] my-[20px] bg-white rounded-[24px] m-auto">
        {succ && (
          <div className="mx-auto mt-2 text-center text-[14px] leading-7 font-nomral w-[350px] font-semibold text-green-400">
            Journal Saved
          </div>
        )}

        {err && (
          <div className="mx-auto mt-2 text-red-600 text-[14px] text-center leading-5 font-nomral w-[350px] ">
            {err}
          </div>
        )}
        <div className="flex flex-col mx-auto">
          <p className="w-[79px] h-[21px] leading-[21px] text-[14px] mx-auto font-normal lg:pt-[60px]  pt-[10px]">
            Source Tag
          </p>
          <input
            className="p-4 placeholder:text-[#3A3A3A] text-[#3A3A3A] font-normal placeholder:font-normal leading-[24px] placeholder:leading-[24px] text-[14px] placeholder:text-[14px] w-[353px] mt-[30px] h-[61px] rounded-[24px] bg-[#E5E5E5]"
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g Relationship, Work, School, Friend"
          />
        </div>
        <div className="flex flex-col mx-auto">
          <p className="w-[150px] h-[21px] leading-[21px] text-[14px] mx-auto font-normal  pt-[30px]">
            Emoji rating: {eMoji}
          </p>
          <span className="p-2 flex placeholder:text-[#3A3A3A] text-[#3A3A3A] font-normal placeholder:font-normal leading-[24px] placeholder:leading-[24px] text-[14px] placeholder:text-[14px] w-[353px] mt-[30px] h-[61px] rounded-[24px] bg-[#E5E5E5]">
            <button
              onClick={() => seteMoji("Terrific")}
              className="mx-auto focus:border flex focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Cool}
                alt="Cool Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto "
              />
            </button>
            <button
              onClick={() => seteMoji("Happy")}
              className="focus:border focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Normal}
                alt="Mid Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
            <button
              onClick={() => seteMoji("Neutral")}
              className="mx-auto focus:border flex focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Mid}
                alt="Mid Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
            <button
              onClick={() => seteMoji("Sad")}
              className="focus:border focus:border-black focus:rounded-md focus:w-[50px] focus:h-[50px]"
            >
              <img
                src={Sad}
                alt="Sad Emoji"
                className="w-[45px] h-[45px] cursor-pointer m-auto"
              />
            </button>
            <button
              onClick={() => seteMoji("Awful")}
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
          <p className="w-[100px] h-[21px] leading-[21px] text-[14px] mx-auto font-normal  pt-[30px]">
            Journal note
          </p>
          <textarea
            className="p-4 text-left placeholder:text-[#3A3A3A] text-[#3A3A3A] font-normal placeholder:font-normal leading-[26px] placeholder:leading-[26px] text-[14px] placeholder:text-[14px] w-[350px] mt-[30px] h-[200px] rounded-[24px] bg-[#E5E5E5]"
            type="text"
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Write about your thoughts and feelings here to make up your journal"
          >
            {data.journal}
          </textarea>
        </div>
        <button
          onClick={submit}
          className="text-center p-3 text-white w-[83px] mt-4 h-[45px] bg-[#3A3A3A] rounded-[100px] mx-auto"
        >
          Save
        </button>
        <span
          onClick={back}
          className="mx-auto mt-2 cursor-pointer text-white w-[40px] h-[40px] bg-[#3A3A3A] flex rounded-full"
        >
          <IoCloseOutline
            className="fill-white m-auto "
            style={{ width: "20px", height: "20px" }}
          />
        </span>
      </div>
    </div>
  );
};

export default JournalEdit;
