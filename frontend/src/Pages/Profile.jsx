import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth,db } from "../firebase";
import { updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
    const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const DOB = `${day}/${month}/${year}`;
    await updateDoc(doc(db, "users", currentUser.uid), {
      nickname,
      fullName,
      phoneNumber,
      DOB,
    });
    await updateProfile(auth.currentUser, {
      displayName: nickname,
      phoneNumber
    })
    alert("Your Profile has been updated")
  };
  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Make changes to profile
        </p>
        <p className="pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] mx-auto w-[300px] h-[84px]">
         Making changes are not bad, <br /> they are sign of growth.
        </p>
        <div className="flex flex-col gap-5 pt-[30px] mx-auto">
          <input
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Nickname"
            type="text"
            className="focus:border-[#EEEEEE] mx-auto text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
          />
          <input
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Fullname"
            type="text"
            className="focus:border-[#EEEEEE] mx-auto text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
          />
          <input
            onChange={(e) => setphoneNumber(e.target.value)}
            placeholder="Phone number"
            type="text"
            className="focus:border-[#EEEEEE] mx-auto text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
          />
          <div className="mx-auto flex bg-[#EEEEEE] rounded-full w-[90%]">
            <input
              onChange={(e) => setDay(e.target.value)}
              placeholder="Day"
              type="text"
              className="focus:border-[#EEEEEE] mx-auto text-center text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[30%] h-[53px] rounded-l-full p-4"
            />
            <span className="text-[#3A3A3A] mx-auto font-extrabold my-auto">|</span>
            <input
              onChange={(e) => setMonth(e.target.value)}
              placeholder="Month"
              type="text"
              className="focus:border-[#EEEEEE] mx-auto text-center text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[30%] h-[53px] px-6"
            />
            <span className="text-[#3A3A3A] mx-auto font-extrabold my-auto">|</span>
            <input
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              type="text"
              className="focus:border-[#EEEEEE] mx-auto text-center text-[#3A3A3A] text-[13px] rounded-r-full leading-5 bg-[#EEEEEE] w-[30%] h-[53px] p-4"
            />
          </div>
          {isLoading ? (
              <button
                className="w-[90%] h-[53px] text-white bg-[#3A3A3A] rounded-full mx-auto"
                disabled
              >
                {" "}
                <svg
                  class="animate-spin mx-auto h-5 w-5 bg-white"
                  viewBox="0 0 24 24"
                ></svg>
              </button>
            ) : (
              <button onClick={submit} className="w-[90%] mx-auto h-[53px] text-white bg-[#3A3A3A] rounded-full ">
                Done
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
