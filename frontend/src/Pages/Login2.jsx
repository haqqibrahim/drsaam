// Import necessary modules
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import mixpanel from "mixpanel-browser";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Define Login component
const Login2 = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", {
    debug: true,
    ignore_dnt: true,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.message || "";
  const [emailL, setEmailL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(emailL);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log(userCredentials.user);

          if (!userCredentials.user.emailVerified) {
            mixpanel.identify(userCredentials.user.uid);
            mixpanel.track("Login", {
              "Verified User": false,
            });
            setSucc(false);
            setErr(
              "Please verify your email or reset password to get verification link"
            );
            setIsLoading(false);
          } else if (!userCredentials.user.displayName) {
            mixpanel.identify(userCredentials.user.uid);
            mixpanel.track("Login", {
              "Verified User": true,
            });
            navigate("/signup-profile");
          } else {
            const user = userCredentials.user;
            console.log(user);
            mixpanel.identify(user.uid);
            mixpanel.track("Login", {
              "Verified User": true,
            });
            setSucc(true);
            setErr("");
            navigate("/preloader", { state: { message: "prepare" } });
          }
        }
      );
    } catch (error) {
      setErr(error.message);
      setSucc(false);
      setIsLoading(false);
    }
  };
  const forgotPassword = () => {
   navigate("/forgetpassword")
   mixpanel("Forgot Password")
  }
  // Render the Login component
  return (
    <div className="w-screen h-screen flex">
      <div className="relative m-auto flex flex-col gap-5 pt-[30px]">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Welcome back friend!
        </p>
        <p className="pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[90%] mx-auto h-[84px]">
          Let’s get you logged in again. You are one step away to a better
          mental health.
        </p>

        {succ && (
          <div className="text-center mx-auto text-[14px] leading-7 font-nomral w-[350px] h-[84px] font-semibold text-green-400">
            Login Successful
          </div>
        )}

        {err && (
          <div className="text-red-600 text-[14px] mx-auto text-center leading-7 font-nomral w-[350px] h-[84px]d">
            {err}
          </div>
        )}

        <form onSubmit={submit} className="flex  flex-col gap-2.5 pt-[30px]">
          <span className="relative mx-auto  w-[90%] rounded-full bg-[#EEEEEE] ">
            <input
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmailL(e.target.value)}
              className="focus:border-[#EEEEEE] text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
            />
            <p
              onClick={() => navigate("/login", { state: { message: email } })}
              className="cursor-pointer absolute w-[100%] text-[13px] text-[#3A3A3A] text-right -mt-[35px] pr-6"
            >
              Edit
            </p>
          </span>
          <span className="relative mx-auto w-[90%] rounded-full bg-[#EEEEEE]">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="focus:border-[#EEEEEE] mx-auto  text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[85%] h-[53px] rounded-full p-4"
            />
            <span
              className="absolute text-right mt-[18px] pl-1 cursor-pointer"
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
          <p
            onClick={forgotPassword}
            className="mr-auto pl-7 cursor-pointer text-left text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] "
          >
            Forgot Password
          </p>
          {isLoading ? (
            <button
              className="mt-5 w-[90%] h-[53px] text-white bg-[#3A3A3A] rounded-full mx-auto"
              disabled
            >
              {" "}
              <svg
                class="animate-bounce rounded-full mx-auto h-2 w-2 bg-white"
                viewBox="0 0 24 24"
              ></svg>
            </button>
          ) : (
            <button className="mt-5 w-[90%] mx-auto h-[53px] text-white bg-[#3A3A3A] rounded-full ">
              Proceed
            </button>
          )}
        </form>
        <p
          onClick={() => navigate("/signup")}
          className="mx-auto pt-[15px] cursor-pointer text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[84px]"
        >
          Don’t have an account? <span className="font-bold">Sign up</span>
        </p>
      </div>
    </div>
  );
};

// Export the Login component
export default Login2;
