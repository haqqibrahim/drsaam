import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import Hand from "../assets/images/hand.png";
import Terrific from "../assets/images/cool.png";
import Happy from "../assets/images/normal.png";
import Neutral from "../assets/images/mid.png";
import Sad from "../assets/images/sad.png";
import Awful from "../assets/images/bad.png";

const JournalPreview = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(location.state?.message || "");
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
    <div className="relative bg-[#3A3A3A66]/40 w-full h-full max-h-full flex flex-col">
      <span className="flex flex-col mx-auto mt-4">
        <p className="text-center mx-auto w-[146px] h-[52px] text-white font-semibold leading-[21px] text-[14px]">
          {data.time}
        </p>
      </span>

      <div className="w-[389px] relative flex flex-col h-[711px] my-[20px] bg-white rounded-[24px] m-auto">
        <span className="absolute top-0 right-0 text-[#3A3A3A] mt-[55px] mr-5 leading-[24px] text-[16px]">
          ~{data.emoji}
        </span>
        <img
          src={emoji}
          alt={data.emoji}
          className="w-[45p] h-[45px] cursor-pointer mx-auto mt-5"
        />
        <span className="p-4  w-[351px] mt-[30px] mx-auto h-[421px] rounded-[24px] bg-[#E5E5E5]">
          <span className="flex flex-col">
            <span className="mx-auto text-[#3A3A3A] mt-5 leading-[21px] text-[14px] w-[134px] h-[45px] rounded-[24px] bg-white p-3 text-center">
              {data.source}
            </span>
            <p className="text-center mt-5 text-[#3A3A3A] leading-[21px] text-[14px] w-[311px] h-[286px]">
              {data.journal}
            </p>
          </span>
        </span>
        <span
          onClick={() => navigate("/journaledit", { state: { message: data } })}
          className="cursor-pointer mx-auto text-[#3A3A3A] mt-5 leading-[21px] text-[14px] w-[75px] h-[45px] rounded-[24px] bg-[#E5E5E5] p-3 text-center"
        >
          Edit
        </span>
        <span
          onClick={() => navigate("/saam")}
          className="mx-auto cursor-pointer text-white mt-10 leading-[21px] text-[14px] w-[134px] h-[45px] rounded-[24px] bg-[#3A3A3A] p-3 text-center"
        >
          Talk about it
        </span>
      </div>
      <span
        onClick={() => navigate(-1)}
        className="absolute top-0 right-0 mt-4 mr-5 cursor-pointer text-white w-[40px] h-[40px] bg-[#3A3A3A] flex rounded-full"
      >
        <IoCloseOutline
          className="fill-white m-auto "
          style={{ width: "20px", height: "20px" }}
        />
      </span>
    </div>
  );
};

export default JournalPreview;
