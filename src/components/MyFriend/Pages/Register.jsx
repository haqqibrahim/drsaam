import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

import { AnimationPage } from "../../../assets/AnimationPage";

import { uniqueNamesGenerator, adjectives, colors } from 'unique-names-generator';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const displayName = uniqueNamesGenerator({
            dictionaries: [adjectives, colors], // colors can be omitted here as not used
            length: 2
          });
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName,
      });
      await setDoc(doc(db, "myfriend", res.user.uid), {
        uid: res.user.uid,
        name,
        displayName,
        email,
        about,
      });
      await setDoc(doc(db, "usersChat", res.user.uid), {});
      setErr("")
      navigate("/myfriend/login");
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  return (
    <AnimationPage>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="About you"
          cols="30"
          rows="10"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
        {err && <h1>{err}</h1>}
      </form>
    </AnimationPage>
  );
};

export default Register;
