import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlineHome } from "react-icons/ai";

import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { isEmpty } from "@firebase/util";

const MyFriendList = () => {
  const { currentUser } = useContext(AuthContext);
  const [combine, setCombine] = useState("");
  const [myFriend, setMyfriend] = useState(null);
  const [chats, setchats] = useState([]);
  const [active, setActive] = useState([]);
  const { dispatch } = useContext(ChatContext);

  const navigate = useNavigate();

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

  const getFriend = async () => {
    const collectionSnapshot = await getDocs(collection(db, "myfriend"));
    const totalDocuments = collectionSnapshot.size;
    const randomIndex = Math.floor(Math.random() * totalDocuments);
    const randomDoc = collectionSnapshot.docs[randomIndex];
    setMyfriend(randomDoc.data());
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "usersChat", currentUser.uid), (doc) => {
        setchats(doc.data());
        console.log(chats);
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  useEffect(() => {
    const getActiveChats = () => {
      const unsub2 = onSnapshot(doc(db, "Active", currentUser.uid), (doc) => {
        setActive(doc.data());
      });

      return () => {
        unsub2();
      };
    };
    currentUser.uid && getActiveChats();
  }, [currentUser.uid]);

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > myFriend.uid
        ? currentUser.uid + myFriend.uid
        : myFriend.uid + currentUser.uid;
    localStorage.setItem("combine", combinedId);
    setCombine(combinedId);
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { message: [] });
        // create user chats
        await updateDoc(doc(db, "usersChat", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: myFriend.uid,
            displayName: myFriend.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "usersChat", myFriend.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            email: currentUser.email,
          },
          [combinedId + ".lastMessage"]: {
            text: "New User Connecion",
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await setDoc(doc(db, "Active", currentUser.uid), {
          [currentUser.uid + ".userInfo"]: {
            uid: myFriend.uid,
            displayName: myFriend.displayName,
            bio: myFriend.bio,
          },

          [currentUser.uid + ".date"]: serverTimestamp(),
        });
      } else {
        await setDoc(doc(db, "Active", currentUser.uid), {
          [currentUser.uid + ".userInfo"]: {
            uid: myFriend.uid,
            displayName: myFriend.displayName,
            bio: myFriend.bio,
          },

          [currentUser.uid + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  const openChat = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    navigate("/chat");
  };

  let output;

  const item = JSON.parse(localStorage.getItem("friend"));
  console.log(item);
  if (item === true) {
    console.log("Yes");
    output = (
      <div className="pt-5">
        <div
          onClick={() => getFriend()}
          className="w-full pointer-events-none text-center p-2 text-white text-base rounded-md mt-3 items-center"
        >
          Your MyFriend session is over for today, see you tomorrow
        </div>
      </div>
    );
  } else {
    if (isEmpty(active)) {
      output = (
        <div className="divide-y divide-slate-700">
          <div>
            <span className="text-gray-500 font-light">
              Click button to get a MyFriend
            </span>
            <div
              onClick={() => getFriend()}
              className="w-full mb-5 text-[14px] h-10 bg-white text-center p-2 text-black text-base rounded-md mt-8 items-center"
            >
              Get a new MyFriend
            </div>
          </div>

          <div className="divide-y divide-slate-700 space-y-8">
            {myFriend && (
              <div
                onClick={handleSelect}
                className="cursor-pointer mt-2 h-16 w-full  items-center justify-center"
              >
                <div className="pt-2 items-center flex space-x-4 relative">
                  <img
                    src={getRandomImage()}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-md m-1 border-2 p-1 border-[#166FF6]"
                  />
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">{myFriend.displayName}</span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[95%]">
                      {myFriend.bio}
                    </span>
                  </div>
                  <div className="rounded-full absolute inset-y-0 right-5 mt-8 mx-12 bg-[#166FF6] w-[16px] h-[16px]"></div>

                  <div className="rounded-full absolute inset-y-0 right-5 mt-8 mx-10 bg-[#166FF6] animate-ping  w-[16px] h-[16px]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      output = (
        <div className="pt-5">
          <span className=" text-gray-500 font-light">Your active MyFriend session. Tap to continue</span>

          <div className="divide-y divide-slate-700 space-y-8">
            <div
              onClick={() => openChat(active[`${currentUser.uid}.userInfo`])}
              key={active[0]}
              className="cursor-pointer mt-2 h-16 w-full  items-center justify-center"
            >
              <div className="pt-2 items-center flex space-x-4">
                <img
                  src={getRandomImage()}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-md m-1 border-2 p-1 border-[#166FF6]"
                />
                <div className="flex flex-col">
                  {" "}
                  <span className="text-white">
                    {active[`${currentUser.uid}.userInfo`].displayName}
                  </span>
                  <span className="text-slate-300 text-sm max-w-[100%] max-h-[95%]">
                    {active[`${currentUser.uid}.userInfo`].bio}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="bg-[#152033] h-screen w-full container p-6">
      <div className=" pb-5">
        <div className="justify-between flex">
          <div>
            <span className="text-white text-lg">MyFriend</span>
          </div>
          {/* <div onClick={() => navigate("/bot")}>
            {" "}
            <AiOutlineHome
              className="fill-white pb-2"
              style={{ width: "40px", height: "40px" }}
            />
          </div> */}
        </div>
      </div>
      <div className="pt-5">
        <div
          onClick={() => getFriend()}
          className="w-full pointer-events-none text-center p-2 text-white text-base rounded-md mt-3 items-center"
        >
         
         We currently facing a downtime, the AI is at it's capacity!
        </div>
      </div>
      <div
        onClick={() => navigate("/bot")}
        className="absolute inset-x-0 bottom-0 pb-6"
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab sx={{ backgroundColor: "#166FF6" }}>
            <AiOutlineHome
              className="fill-white hover:fill-black"
              style={{ width: "20px", height: "40px" }}
            />
          </Fab>
        </Box>
      </div>
    </div>
  );
};

export default MyFriendList;
