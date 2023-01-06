import { React, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AnimationPage } from "../../assets/AnimationPage";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

import "../../App.css";

const Signup = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await updateProfile(res.user, {
        displayName,
        phoneNumber,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        status: "user",
        phoneNumber,
      });
      await setDoc(doc(db, "usersChat", res.user.uid), {});
      navigate("/home-1");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  return (
    <AnimationPage>
      <div className="h-screen container flex flex-col justify-center items-center">
        <span className="text-center font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
          Hello Friend!
        </span>
        <span className="text-center mx-16 my-5 text-gray-500">
          We are here to help you de-stress and be anxiety free. Note that your
          data is kept private. Sign up to begin!
        </span>
        {err && (
          <div className="text-red-600 text-center font-loader text-lg font-semibold px-10">
            {err}
          </div>
        )}
        <div>
          <form onSubmit={handleSubmit} className="p-5">
            <div className="flex flex-col">
              <label className="pl-2 pb-2 text-gray-500">Email Address</label>
              <input
                placeholder="Provide your login email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="lg:w-full w-80 md:w-96 text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pl-2 pt-2 pb-2 text-gray-500">Username</label>
              <input
                placeholder="username"
                type="text"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                className="lg:w-full w-80 md:w-96 text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pl-2 pt-2 pb-2 text-gray-500">
                Phone Number
              </label>
              <input
                placeholder="phoneNumber number"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="lg:w-full w-80 md:w-96 text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pt-2 pl-2 pb-2 text-gray-500">Password</label>
              <input
                placeholder="provide your login password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="lg:w-full w-80 md:w-96 text-light text-gray-500 border-2 focus:border-indigo-500/100 border-indigo-500/100 rounded-full bg-white h-8 p-5"
              />
            </div>

            <button className="mt-10 text-center  md:w-96 lg:w-full text-white font-loader w-80 h-10 rounded-full bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
              <div>
                <p className="text-wh">Sign up</p>
              </div>
            </button>
          </form>
        </div>
        <div onClick={() => navigate("/login")}>
          <p className="w-full text-base font-loader text-center text-gray-500 pt-2">
            Alrady have an account?{" "}
            <span className="text-[#1800FF]">Signin</span>
          </p>
        </div>
      </div>
    </AnimationPage>

    // <div className="h-screen w-screen bg-gradient-to-r from-[#FA77FF] to-[#6454FF] container flex flex-col justify-center items-center">
    //   <img src={Logo} alt="Logo" />
    //   <div>
    //     <p className="font-loader font-bold text-xl pt-10 text-white">
    //       <div>
    //         <Typewriter
    //           options={{
    //             strings: ["Hey! I’m Dr.SAAM", "You’re Welcome!"],
    //             autoStart: true,
    //             loop: true,
    //           }}
    //         />
    //       </div>
    //     </p>
    //   </div>
    //   <div>
    //     <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
    //       Our conversations are private & anonymous. Just provide your <br />{" "}
    //       email address and password for account ownership
    //     </p>
    //   </div>
    //   <div className=" pt-8">
    //     {error && <div className="text-red-600 text-center font-loader text-lg font-semibold">{error}</div>}
    //     <form onSubmit={handleSubmit}>
    //       <div className="grid grid-cols-2 gap-4">
    //         <input
    //           placeholder="username"
    //           type="text"
    //           onChange={(e) => setUsername(e.target.value)}
    //           value={username}
    //           className="lg:w-96 border-transparent rounded-md h-8 bg-[#C683E8] p-5"
    //         />
    //         <input
    //           placeholder="email"
    //           type="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //           className="lg:w-96 rounded-md h-8 border-transparent bg-[#C683E8] p-5"
    //         />
    //         <input
    //           placeholder="phoneNumber number"
    //           type="number"
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //           value={phoneNumber}
    //           className=" rounded-md h-8 bg-[#C683E8] p-5"
    //         />
    //         <input
    //           placeholder="password"
    //           type="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           value={password}
    //           className="rounded-md h-8 bg-[#C683E8] p-5"
    //         />
    //       </div>
    //       <button disabled={isLoading} className="ml-10 md:ml-44 lg:ml-44 mt-10 text-center text-white font-loader lg:w-1/2 w-5/6 h-10 rounded-md bg-white">
    //         <p className="text-[#6454FF]">Sign up</p>
    //       </button>
    //     </form>
    //   </div>

    //   <a href="/login">
    //     <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
    //       Already have an account? Sign in
    //     </p>
    //   </a>
    // </div>
  );
};

export default Signup;
