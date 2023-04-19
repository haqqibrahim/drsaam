import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoPinSharp } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { AuthContext } from "../context/AuthContext";
import { setDoc,doc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuid } from "uuid";

const Review = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [rating, setRating] = useState("");
  const [excelent, setExcelent] = useState(false);
  const [avg, setAvg] = useState(false);
  const [poor, setPoor] = useState(false);
  const [review, setReview] = useState("");
  const ext = () => {
    setRating("Excelent");
    setExcelent(true);
    setAvg(false);
    setPoor(false);
  };
  const aveg = () => {
    setRating("Average");
    setAvg(true);
    setExcelent(false);
    setPoor(false);
  };
  const pr = () => {
    setRating("poor");
    setPoor(true);
    setExcelent(false);
    setAvg(false);
  };
  const submit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Review", uuid()), {
      rating,
      review,
      email: currentUser.email
    });
    setReview("")
    setPoor(false);
    setExcelent(false);
    setAvg(false)
    alert("Review Submitted");
  };
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="justify-between items-center h-[60px] p-2 pt-10 w-full flex bg-white">
        <p className="w-[72px] h-[28px] ml-[20px] lg:ml-[40px] text-[#3A3A3A] font-bold leading-7">
          Saam
        </p>
        <span
          onClick={() => navigate("/menu")}
          className="cursor-pointer w-[70px] mt-[10px] mr-0  lg:mr-[10px]  h-[70px]  flex rounded-full  border-8 border-[#3A3A3A]"
        >
          <FaGripLines className="fill-gray-500 m-auto " />
        </span>
      </div>
      <div className="flex flex-col m-auto">
        <span className="w-[339px] flex m-auto space-x-3">
          <span
            onClick={ext}
            className={
              excelent
                ? "border border-[#AEAEAE] cursor-pointer bg-[#3A3A3A] focus:bg-[#3A3A3A] rounded-[100px]  w-[117px] h-[53px] mx-auto"
                : "border border-[#AEAEAE] cursor-pointer bg-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] rounded-[100px]  w-[117px] h-[53px] mx-auto"
            }
          >
            <p
              className={
                excelent
                  ? "text-center  m-auto p-4 text-white focus:text-white"
                  : "text-center text-[#3A3A3A] m-auto p-4 hover:text-white focus:text-white"
              }
            >
              Excelent
            </p>
          </span>
          <span
            onClick={aveg}
            className={
              avg
                ? "border border-[#AEAEAE] cursor-pointer bg-[#3A3A3A] focus:bg-[#3A3A3A] rounded-[100px]  w-[117px] h-[53px] mx-auto"
                : "border border-[#AEAEAE] cursor-pointer bg-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] rounded-[100px]  w-[117px] h-[53px] mx-auto"
            }
          >
            <p
              className={
                avg
                  ? "text-center  m-auto p-4 text-white focus:text-white"
                  : "text-center text-[#3A3A3A] m-auto p-4 hover:text-white focus:text-white"
              }
            >
              Average
            </p>
          </span>
          <span
            onClick={pr}
            className={
              poor
                ? "border border-[#AEAEAE] cursor-pointer bg-[#3A3A3A] focus:bg-[#3A3A3A] rounded-[100px]  w-[117px] h-[53px] mx-auto"
                : "border border-[#AEAEAE] cursor-pointer bg-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] rounded-[100px]  w-[117px] h-[53px] mx-auto"
            }
          >
            <p
              className={
                poor
                  ? "text-center  m-auto p-4 text-white focus:text-white"
                  : "text-center text-[#3A3A3A] m-auto p-4 hover:text-white focus:text-white"
              }
            >
              Poor
            </p>
          </span>
        </span>
        <div className="mt-6 m-auto relative w-[379px] flex h-[206px] bg-[#3A3A3A] rounded-3xl">
          <div className=" flex flex-col mx-auto mt-5">
            <span className="flex rounded-3xl space-x-5">
              <span className=" flex">
                <IoPinSharp
                  className="fill-white m-auto"
                  style={{ width: "24px", height: "24px" }}
                />
                <textarea
                  placeholder="Give a review or feature recommendation"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="text-left text-white placeholder:text-white/50 bg-[#3A3A3A] pt-4 m-auto w-[300px]"
                ></textarea>
              </span>
            </span>
          </div>
        </div>
        <button
          onClick={submit}
          className="flex text-white w-[112px] mt-10 h-[45px] bg-[#3A3A3A] rounded-[100px] mx-auto"
        >
          <span className="m-auto flex space-x-5">
            Send{" "}
            <BiSend
              className="fill-white cursor-pointer my-auto"
              style={{ width: "18px", height: "18px" }}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Review;
