import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, arrayUnion, Timestamp } from "firebase/firestore";
import mixpanel from 'mixpanel-browser';
import { encryptData } from "../Crypto";
const Signup = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", { debug: true, ignore_dnt: true });

  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChange2 = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const submit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErr("Confirm Password incorrect");
      setSucc(false);
    } else {
      try {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              fullName: "",
              nickname: "",
              email,
              phoneNumber: "",
              DOB: "",
            });
            setDoc(doc(db, "chats", user.uid), { message: [] });
            setDoc(doc(db, "Memory", user.uid), { memory: [] });

            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };

            const date = new Date();
            const formattedDate = date.toLocaleDateString("en-US", options);
            const formattedTime = date.toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            });
            const encryptionSecretKey = process.env.REACT_APP_ENCRYPTION_SECRET_KEY
            const journal = "Your personal space"
            const encryptedJournal = encryptData(journal, encryptionSecretKey)
            setDoc(doc(db, "Journal", user.uid), {
              journal: arrayUnion({
                id: uuid(),
                source: "Welcome",
                emoji: "Terrific",
                journal: encryptedJournal,
                server_Time: Timestamp.now(),
                time: `${formattedTime} ${formattedDate}`,
              }),
            });
            mixpanel.identify(user.uid)
            mixpanel.track("Signup", {
              'Verified User' : false
            })
            setSucc(true);
            setErr("");
            sendEmailVerification(auth.currentUser).then(() => {
              auth.signOut();
            });
            navigate("/emailverification", { state: { message: email } });
          }
        );
      } catch (error) {
        setErr(error.message);
        setSucc(false);
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Create your account
        </p>
        <p className="pt-[10px] text-[#3A3A3A]  text-center text-[14px] leading-7 font-nomral w-[90%] mx-auto h-[84px]">
          Looks like you are new here. Let’s set things up! Please not that
          email verification is required for signup as a security measure.
        </p>
        {succ && (
          <div className="mx-auto pt-2 text-center text-[14px] leading-7 font-nomral w-[350px] h-[84px] font-semibold text-green-400">
            Signup Successful
          </div>
        )}

        {err && (
          <div className="pt-2 mx-auto text-red-600 text-[14px] text-center leading-7 font-nomral w-[350px] h-[84px]d">
            {err}
          </div>
        )}
        <div className="flex flex-col gap-5 pt-[10px]">
          <form onSubmit={submit} className="flex  flex-col gap-2.5 pt-[30px]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              className="focus:border-[#EEEEEE] mx-auto  text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
            />
            <span className="relative mx-auto  w-[90%] rounded-full bg-[#EEEEEE]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="focus:border-[#EEEEEE] mx-auto  text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
              />
              <span
                className="absolute text-right mt-[18px] cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="fill-gray-500"
                    style={{ width: "20px", height: "20px" }}
                  />
                ) : (
                  <AiFillEye
                    className="fill-gray-500"
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
              </span>
            </span>{" "}
            <span className="mx-auto relative w-[90%] rounded-full bg-[#EEEEEE]">
              <input
                type={showPassword2 ? "text" : "password"}
                id="password"
                value={confirmPassword}
                onChange={handlePasswordChange2}
                placeholder="Confirm password"
                className="focus:border-[#EEEEEE] mx-auto text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
              />
              <span
                className="absolute text-right mt-[18px] cursor-pointer"
                onClick={handleTogglePasswordVisibility2}
              >
                {showPassword2 ? (
                  <AiFillEyeInvisible
                    className="fill-gray-500"
                    style={{ width: "20px", height: "20px" }}
                  />
                ) : (
                  <AiFillEye
                    className="fill-gray-500"
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
              </span>
            </span>
            <span
             
              className="mr-auto ml-12 relative space-x-2 cursor-pointer  w-[90%] "
            >
              <span className="text-left text-[14px] leading-7 font-nomral text-[#3A3A3A]"><a href="https://www.dropbox.com/scl/fi/hgs3vu18pr3xojpvhb0r5/_-Terms-and-Conditions-for-Omari-AI-s-SAAM.paper?dl=0&rlkey=qfvcnsxar99nyxcnyflyb2vjk">
            Terms and Condition
          </a></span>
              <input
                type="checkbox"
                required
                className="absolute mt-[7px] my-auto"
              />
            </span>
            {isLoading ? (
              <button
                className="mt-5 w-[90%] h-[53px] text-white bg-[#3A3A3A] rounded-full mx-auto"
                disabled
              >
                {" "}
                <svg
                  class="animate-spin mx-auto h-5 w-5 bg-white"
                  viewBox="0 0 24 24"
                ></svg>
              </button>
            ) : (
              <button className="mt-5 w-[90%] mx-auto h-[53px] text-white bg-[#3A3A3A] rounded-full ">
                Proceed
              </button>
            )}
          </form>
        </div>
        <p
          onClick={() => navigate("/login")}
          className="pt-[15px] mx-auto cursor-pointer text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[84px]"
        >
          Already have an account? <span className="font-bold">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
