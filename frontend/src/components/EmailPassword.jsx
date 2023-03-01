import React, { useState } from "react";
import  {useNavigate} from "react-router-dom"

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase";
const EmailPassword = ({email}) => {
  const navigate = useNavigate()
  const [emailL, setEmailL] = useState("")
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(emailL)
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = async(e) => {
    e.preventDefault()
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log(userCredentials.user)
          if(!userCredentials.user.emailVerified) {
            setSucc(false);
            setErr("Please verify your email or reset password to get verification link");
            setIsLoading(false)
          } else if(userCredentials.user.displayName === null) {
           navigate("/signup-profile")
          } else {
            const user = userCredentials.user;
            console.log(user)
            setSucc(true);
            setErr("");
            navigate("/")
          }
         
        })
    } catch(error) {
      setErr(error.message);
      setSucc(false);
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="relative m-auto flex flex-col gap-5 pt-[30px]">
      <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
         Welcome back friend!
       </p>
       <p className="pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[84px]">
         Let’s get you logged in again. You are one step away to a better
         mental health.
       </p>
       {succ && (
          <div className="text-center text-[14px] leading-7 font-nomral w-[350px] h-[84px] font-semibold text-green-400">
            Login Successful
          </div>
        )}

        {err && (
          <div className="text-red-600 text-[14px] text-center leading-7 font-nomral w-[350px] h-[84px]d">
            {err}
          </div>
        )}
       
        <span className="relative">
          <input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmailL(e.target.value)}
            className="focus:border-[#EEEEEE] text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[100%] h-[53px] rounded-full p-4"
          />
          <p className="absolute w-[360px] text-[13px] text-[#3A3A3A] text-right -mt-[35px] pr-5">
            Edit
          </p>
        </span>
        <span className="relative w-[360px] rounded-full bg-[#EEEEEE]">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="focus:border-[#EEEEEE] text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[80%] h-[53px] rounded-full p-4"
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
        </span>
        <p onClick={() => navigate("/forgetpassword")} className="pl-4 cursor-pointer text-left text-[14px] font-nomral text-[#3A3A3A] w-[350px]">Forgot Password</p>
        {isLoading ? (
              <button
                className="w-[100%x] h-[53px] text-white bg-[#3A3A3A] rounded-full mx-auto"
                disabled
              >
                {" "}
                <svg
                  class="animate-spin mx-auto h-5 w-5 bg-white"
                  viewBox="0 0 24 24"
                ></svg>
              </button>
            ) : (
              <button onClick={submit} className="w-[80%] h-[53px] text-white bg-[#3A3A3A] rounded-full ">
                Login
              </button>
            )}
       
       
        <p className="pt-[15px] cursor-pointer text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[84px]">Don’t have an account? <span className="font-bold">Sign up</span></p>
      </div>
    </>
  );
};

export default EmailPassword;
