import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  Timestamp
} from "firebase/firestore";

import "../../App.css";
import "./style.css";

import { AnimationPage } from "../../assets/AnimationPage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const usersRef = doc(db, "users", res.user.uid);
      const usersSnap = await getDoc(usersRef);
      const loginTime = usersSnap.data().login_time;
      const currentDate = new Date().toLocaleDateString();
      if (loginTime === currentDate) {
        console.log("No coin");
        await setDoc(doc(db, "usersChat", res.user.uid), {});
        await setDoc(doc(db, "Journal", res.user.uid), {
          journal: arrayUnion({
            id: uuid(),
            title: "Welcome",
            journal: "Your personal space",
            server_Time: Timestamp.now(),
            time: currentDate,
          }),
        });
        localStorage.setItem("id", res.user.uid);
        const currentDateLogin = new Date();
        localStorage.setItem('loggedInDate', currentDateLogin);
        setSucc(true);
        setErr(false);
        localStorage.setItem("friend", false)
        navigate("/bot");
      } else {
        console.log("Yes Coin");
        await updateDoc(doc(db, "Rio_Coins", res.user.uid), {
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
        console.log("2");
        localStorage.setItem("friend", false)
        await updateDoc(doc(db, "users", res.user.uid), {
          rio_coin: increment(1),
          login_time: currentDate,
        });
        console.log("3");
        localStorage.setItem("friend", false)
        await setDoc(doc(db, "usersChat", res.user.uid), {});
        await setDoc(doc(db, "Journal", res.user.uid), {});
        localStorage.setItem("id", res.user.uid);
        setSucc(true);
        setErr(false);
        navigate("/bot");
      }
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
      setSucc(false);
    }
  };

  return (
    <AnimationPage>
      <div className="h-screen container flex flex-col justify-center items-center">
        <span className="-mt-20 text-center font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#000000]/50 to-[#000000]">
          Hello Friend!
        </span>
        <span className="text-center mx-10 px-10 my-5 text-gray-400">
          We are here to help you de-stress and be anxiety free. Get signed in
          to begin!
        </span>
        {succ && (
          <div className="text-center font-loader text-base font-semibold text-green-400">
            Login Successful
          </div>
        )}

        {err && (
          <div className="text-red-600 text-center font-loader text-base font-semibold">
            {err}
          </div>
        )}
        <div>
          <form
            onSubmit={handleSubmit}
            className="px-10 pt-10 justify-center items-center"
          >
            <div className="flex flex-col">
              <label className="pl-2 pb-2 text-gray-500">Email Address</label>
              <input
                placeholder="Provide your login email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-80 mx-2 pl-4 text-sm   text-gray-500 border-2 focus:border-gray-500 border-gray-500 rounded-full bg-white h-8 p-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="pt-5 pl-2 pb-2 text-gray-500">Password</label>
              <input
                placeholder="Provide your login password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" mx-2 pl-4 lg:w-full text-sm w-80 md:w-96 text-light text-gray-500 border-2 focus:border-gray-500 border-gray-500 rounded-full bg-white h-8 p-5"
              />
            </div>
            <button className="mt-10 text-center ml-2 md:w-96 lg:w-full text-white font-loader w-80 h-10 rounded-full bg-[#3A3A3A]">
              <div>
                <p className="text-white">Log in</p>
              </div>
            </button>
          </form>
        </div>
        {/* <div onClick={() => navigate("/signup")}>
          <p className="w-full text-sm font-loader text-center text-gray-500 pt-8">
            Forgot your password?
          </p>
        </div> */}
        <div onClick={() => navigate("/signup")}>
          <p className="cursor-pointer w-full text-sm font-loader text-center text-gray-500 pt-8">
            Don't have an account?{" "}
            <span className="text-gray-500 font-bold">Signup</span>
          </p>
        </div>
      </div>
    </AnimationPage>
  );
};

export default Login;
