import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Hand from "../assets/images/hand.png";
import Terrific from "../assets/images/cool.png";
import Happy from "../assets/images/normal.png";
import Neutral from "../assets/images/mid.png";
import Sad from "../assets/images/sad.png";
import Awful from "../assets/images/bad.png";
import mixpanel from "mixpanel-browser";
import { decryptData } from "../Crypto";
import { TbSmartHome } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
const Journal = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", {
    debug: true,
    ignore_dnt: true,
  });
  const { currentUser } = useContext(AuthContext);
  const [jnls, setJnls] = useState([]);
  useEffect(() => {
    const getJournals = () => {
      const unsub = onSnapshot(
        doc(db, "Journal", currentUser.uid),
        (snapshot) => {
          setJnls(snapshot.data().journal);
        }
      );
      return () => {
        unsub();
      };
    };
    currentUser.uid && getJournals();
  }, [currentUser.uid, setJnls]);
  const navigate = useNavigate();
  const Preview = (data) => {
    navigate("/journalpreview", { state: { message: data } });
    mixpanel.track("Journal Preview");
  };
  const addJnl = () => {
    navigate("/journalnew");
    mixpanel.track("Add to Journal");
  };

  const saam = () => {
    navigate("/saam");
    mixpanel.track("Journal Home to Saam");
  };

  return (
    <div className="relative bg-[#3A3A3A66]/40 w-screen mx-auto h-screen flex flex-col ">
      <div className="sm:w-[95%] md:w-[10%] lg:w-[25%] h-[120px] rounded-[100px] bg-[#3A3A3A] flex mx-auto mt-[20px]">
        <span className="flex space-x-3 mx-auto">
          <img
            src={Hand}
            alt="hand Emoji"
            className="w-[50p] h-[50px] m-auto"
          />
          <span className="flex flex-col">
            <p className="text-white w-[111px] h-[24px] font-medium leading-6 text-[16px] mt-[14px]">
              Journal notes
            </p>
            <p className="text-white/80 w-[230px] mr-[20px] text-left h-[50px] font-medium leading-[21px] text-[12px]">
              Tap on a <span className="text-white">journal note</span> to read
              or edit it’s contents or Tap on your{" "}
              <span className="text-white">emoji tag</span> to begin a
              conversation
            </p>
          </span>
        </span>
      </div>
      <div className="mt-[40px] gap-y-[10px] flex flex-col mx-auto">
        {jnls
          .slice(-4)
          .reverse()
          .map((data, index) => {
            const encryptionSecretKey = process.env.REACT_APP_ENCRYPTION_SECRET_KEY
            
            const decyptedJournal = decryptData(data.journal, encryptionSecretKey)
            let emoji;
            switch (data.emoji) {
              case "Hand":
                emoji = Hand;
                break;
              case "Terrific":
                emoji = Terrific;
                break;
              case "Happy":
                emoji = Happy;
                break;
              case "Neutral":
                emoji = Neutral;
                break;
              case "Sad":
                emoji = Sad;
                break;
              case "Awful":
                emoji = Awful;
                break;
              default:
                emoji = null;
            }
            return (
              <div key={index}>
                <div className="w-[330px] h-[78px] rounded-[100px] bg-[#3A3A3A] flex mx-auto">
                  <span
                    onClick={() => Preview(data)}
                    className="cursor-pointer flex space-x-3 mx-auto"
                  >
                    {emoji && (
                      <img
                        src={emoji}
                        alt={data.emoji}
                        className="w-[40p] h-[40px] m-auto pl-2"
                      />
                    )}
                    <span className="flex flex-col">
                      <p className="text-white/80 w-[205px] h-[18px] font-light leading-[18px] text-[12px] mt-[4px]">
                        {data.time}
                      </p>
                      <p className="text-white w-[240px] text-left h-[24px] font-medium leading-[24px] text-[14px] mt-[8px]">
                        {decyptedJournal.length > 28
                          ? `${decyptedJournal.slice(0, 28)}...`
                          : decyptedJournal}
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="space-y-2 absolute inset-x-0 bottom-0 mb-[21px]">
        <span
          onClick={addJnl}
          className=" cursor-pointer h-[50px] w-[50px] bg-[#3A3A3A] rounded-[100px] flex mx-auto"
        >
          <IoMdAdd
            className="fill-white m-auto"
            style={{ width: "24px", height: "24px" }}
          />
        </span>
        <span className="cursor-pointer w-[80px] h-[80px] bg-white rounded-[100px] border-[10px] border-[#3A3A3A] mx-auto flex">
          <TbSmartHome
            onClick={saam}
            className="fill-white m-auto"
            style={{ width: "24px", height: "24px" }}
          />
        </span>
      </div>
    </div>
  );
};

export default Journal;
