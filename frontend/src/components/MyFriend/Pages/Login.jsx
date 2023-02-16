import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

import { AnimationPage } from "../../../assets/AnimationPage";
import "../../../App.css";
import "./style.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  var a = [
    "Small",
    "Blue",
    "cute",
    "green",
    "case",
    "bloom",
    "time",
    "king",
    "queen",
    "bug",
    "atom",
  ];
  var b = [
    "Bear",
    "cat",
    "big",
    "lane",
    "care",
    "laya",
    "quell",
    "kovacs",
    "jaegar",
    "konrad",
    "kaykay",
  ];

  var rA = Math.floor(Math.random() * a.length);
  var rB = Math.floor(Math.random() * b.length);
  var displayName = a[rA] + b[rB];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSucc(true);
      setErr("");
      await updateProfile(res.user, {
        displayName
      });
      await setDoc(doc(db, "myfriend", res.user.uid), {
        status: "myfriend",
        displayName,
        uid: res.user.uid,
        bio: ""
      });
      await setDoc(doc(db, "usersChat", res.user.uid), {});
      setErr(false);
      navigate("/myfriend/home");
    } catch (err) {
      setErr(err.message);
      setSucc(false);
    }
  };

  return (
    <AnimationPage>
      <div className="h-screen container flex flex-col justify-center items-center">
        <span className="text-center font-semibold text-2xl text-blue-800">
          My Friend!
        </span>
        <span className="text-center mx-16 my-5 text-gray-500">
          Welcome, you are here to be the listening ear to our users. Login with
          credentials provided to you
        </span>
        {err && (
          <div className="text-red-600 text-center font-loader text-base font-semibold">
            {err}
          </div>
        )}
        {succ && (
          <div className="text-green-400 text-center font-loader text-base font-semibold">
            Login Successful
          </div>
        )}
        <div>
          <form
            onSubmit={handleSubmit}
            className="px-10 justify-center items-center"
          >
            <div className="flex flex-col">
              <label className="pl-2 pb-2 text-gray-500">Email Address</label>
              <input
                placeholder="Provide your login email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-80 mx-2 text-sm text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-md bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pt-5 pl-2 pb-2 text-gray-500">Password</label>
              <input
                placeholder="provide your login password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" mx-2 lg:w-full text-sm w-80 md:w-96 text-light text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-md bg-white h-8 p-5"
              />
            </div>
            <button className="mt-10 text-center ml-2 md:w-96 lg:w-full text-white font-loader w-80 h-10 rounded-full bg-blue-800">
              <div>
                <p className="text-white">Log in</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </AnimationPage>
  );
};

export default SignIn;
