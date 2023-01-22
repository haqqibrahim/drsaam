import React, { useState, useContext } from "react";

import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

import { AuthContext } from "../../../context/AuthContext";

const Bio = () => {
  const { currentUser } = useContext(AuthContext);
  const [bio, setBio] = useState("");
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "myfriend", currentUser.uid), {
        bio,
      });
      setSucc(true)
      setBio("");
      setErr("")
    } catch (err) {
        setErr(err.message);
        setSucc(false);
    }
  };
  return (
    <div className="bg-[#152033] flex flex-col justify-center items-center h-screen w-full container p-6">
      <div className="text-white text-center font-semibold text-2xl">
        Your Bio
      </div>
      {err && (
          <div className="text-red-600 text-center font-loader text-base font-semibold">
            {err}
          </div>
        )}
        {succ && (
          <div className="text-green-400 text-center font-loader text-base font-semibold">
            Bio Update Successful
          </div>
        )}
      <div>
        <textarea
          id="txtArea"
          rows="8"
          placeholder="Create your bio"
          cols="40"
          className="p-4 mt-5 bg-[#0F1828] text-white"
          onChange={(e) => setBio(e.target.value)}
        >
          {bio}
        </textarea>
      </div>
      <button
        onClick={submit}
        className="mt-10 text-center ml-2 md:w-96 lg:w-full text-white font-loader w-80 h-10 rounded-full bg-blue-800"
      >
        <div>
          <p className="text-white">Submit</p>
        </div>
      </button>
    </div>
  );
};

export default Bio;
