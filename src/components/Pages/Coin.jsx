import { React, useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { send } from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

const Coin = () => {
  const { currentUser } = useContext(AuthContext);
  const [balance, setBalance] = useState(null);
  const [coinData, setCoinData] = useState([]);
  const navigate = useNavigate();
  const name = currentUser.displayName;
  const email = currentUser.email;
  const id = currentUser.uid;

  useEffect(() => {
    const getBalance = () => {
      const unsub2 = onSnapshot(
        doc(db, "users", currentUser.uid),
        (snapshot) => {
          setBalance(snapshot.data().rio_coin);
        }
      );
      return () => {
        unsub2();
      };
    };
    currentUser.uid && getBalance();
  }, [currentUser.uid]);

  useEffect(() => {
    const getCoins = () => {
      const unsub = onSnapshot(
        doc(db, "Rio_Coins", currentUser.uid),
        (snapshot) => {
          setCoinData(snapshot.data().coin);
        }
      );
      return () => {
        unsub();
      };
    };
    currentUser.uid && getCoins();
  }, [currentUser.uid]);

  const revive = () => {
    const templateParams = {
      name,
      email,
      id,
    };
    send(
      "service_s4z8rgo",
      "template_i6ov6nd",
      templateParams,
      "ssAr9pERVXGK9bNxE"
    );
    alert("Revive Email Sent");
    navigate("/bot");
  };

  return (
    <div className="bg-black h-screen w-screen m-0 p-5 self-center items-center relative">
      <div className="divide-y divide-green-700">
        <div className="pb-5 divide-y divide-red-700">
          <div className="justify-between flex">
            <div className="flex flex-col">
              <span className="text-white font-semibold text-lg">
                Rio Coins
              </span>
              <span className="text-[#6454FF] font-semibold text-lg">
                {balance} Coins
              </span>
            </div>
            <div onClick={() => revive()}>
              <div className="text-[14px] w-140px font-medium text-center rounded-full h-40px justify-center p-2 px-4 bg-white text-[#6454FF]">
                Revive Coins
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="text-white pt-[2px]">Recent Coin Activity</div>
        <div className="">
          <Tooltip
            placement="bottom"
            title="Every MyFriend session give you 5 coins, Every successful Login gives you 1 coin, Every checkup you take gives you 2 coins, and for every 10 journal you get 2 coins"
            arrow
          >
            <button>
              <BsFillInfoCircleFill
                className="fill-white"
                style={{ width: "15px", height: "30px" }}
              />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="mt-6">
        {coinData.slice(-10).map((coin, index) => (
          <div key={index} className="relative flex justify-between mt-[10px]">
            <span className="text-gray-400 font-light">
              {coin.earned_activity.activity_name}
            </span>
            <div className=" space-x-10 text-left justify-end items-end">
              {/* <span className="text-[#6454FF] w-full text-left text-light">
                {coin.value} coins
              </span> */}
              <span className="text-gray-400 w-[20px] text-left">
                {coin.date_acquired}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => navigate("/bot")}
        className="absolute inset-x-0 ml-2 bottom-0 pb-[25%]"
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab sx={{ backgroundColor: "#6454FF" }}>
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

export default Coin;
