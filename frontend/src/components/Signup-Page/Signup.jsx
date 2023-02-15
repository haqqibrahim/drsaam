import { React, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AnimationPage } from "../../assets/AnimationPage";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc, Timestamp, arrayUnion } from "firebase/firestore";
import { v4 as uuid } from "uuid";

import "../../App.css";
import "./style.css"

const Signup = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      setSucc(true);
      setErr("");
      await updateProfile(res.user, {
        displayName,
        phoneNumber,
      });
      const currentDate = new Date().toLocaleDateString();
      localStorage.setItem("friend", false)
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        status: "user",
        phoneNumber,
        login_time: currentDate,
        rio_coin: 1,
        journal_count: 0,
      });
      await setDoc(doc(db, "usersChat", res.user.uid), {});
      await setDoc(doc(db, "Rio_Coins", res.user.uid), {
        coin: arrayUnion(
          {
            id: uuid(),
            value: 1,
            date_acquired: currentDate,
            server_Time: Timestamp.now(),
            earned_activity: {
              activity_name: "Login",
              activity_time:currentDate,
            },
           }
        )
       });
      navigate("/bot");
    } catch (error) {
      setErr(error.message);
      setSucc(false);
    }
  };

  return (
    <AnimationPage>
      <div className="h-screen container flex flex-col justify-center items-center">
        <span className="text-center font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#000000]/50 to-[#000000]">
          Hello Friend!
        </span>
        <span className="text-center mx-10 my-5 text-gray-500">
          We are here to help you de-stress and be anxiety free. Note that your
          data is kept private. Sign up to begin!
        </span>
        {succ && (
          <div className="text-center font-loader text-base font-semibold text-green-400">
            Signup Successful
          </div>
        )}

        {err && (
          <div className="text-red-600 text-center font-loader text-base font-semibold">
            {err}
          </div>
        )}
        <div>
          <form onSubmit={handleSubmit} className="p-5">
            <div className="flex flex-col pb-2">
              <label className="pl-2 pb-2 text-gray-500">Email Address</label>
              <input
                placeholder="Provide your login email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="mx-2 lg:w-full text-sm pl-4 inputt w-80 md:w-96 text-light text-gray-500 border-2 focus:border-gray-500 border-gray-500 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col pb-2">
              <label className="pl-2 pt-2 pb-2 text-gray-500">Username</label>
              <input
                placeholder="Username"
                type="text"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                className="mx-2 lg:w-full text-sm  pl-4 inputt w-80 md:w-96 text-light text-gray-500 border-2 focus:border-gray-500 border-gray-500 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col pb-2">
              <label className="pl-2 pt-2 pb-2 text-gray-500">
                Phone Number
              </label>
              <input
                placeholder="Phone Number"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="mx-2 lg:w-full text-sm  pl-4 inputt w-80 md:w-96 text-light text-gray-500 border-2 focus:border-gray-500 border-gray-500 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col pb-2">
              <label className="pt-2 pl-2 pb-2 text-gray-500">Password</label>
              <input
                placeholder="Provide your login password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mx-2 lg:w-full text-sm  pl-4 inputt w-80 md:w-96 text-light text-gray-500 border-2 focus:border-gray-500 border-gray-500 rounded-full bg-white h-8 p-5"
              />
            </div>

            <button className="mt-10 text-center  md:w-96 lg:w-full text-white font-loader w-80 h-10 rounded-full bg-[#3A3A3A]">
              <div>
                <p className="text-wh">Sign up</p>
              </div>
            </button>
          </form>
        </div>
        <div onClick={() => navigate("/login")}>
          <p className="cursor-pointer w-full text-sm font-loader text-center text-gray-500 pt-2">
            Alrady have an account?{" "}
            <span className="text-gray-500 font-bold">Signin</span>
          </p>
        </div>
      </div>
    </AnimationPage>

  );
};

export default Signup;
