import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const message = (e) => {
    e.preventDefault();
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/resetpasswordmessage", { state: { message: email } });
      })
      .catch((error) => {
        setErr(error.message);
        setIsLoading(false)

      });
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Forgot your password?
        </p>
        <p className="pt-[10px] mx-auto text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[300px] h-[84px]">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
        {err && (
          <div className="text-red-600 text-[14px] text-center leading-7 font-nomral w-[350px] h-[84px]d">
            {err}
          </div>
        )}
        <div className="flex flex-col gap-2.5 pt-[30px] ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            className="focus:border-[#EEEEEE] mx-auto text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
          />
           {isLoading ? (
              <button
                className="w-[90%] h-[53px] text-white bg-[#3A3A3A] rounded-full mx-auto"
                disabled
              >
                {" "}
                <svg
                  class="animate-bounce mx-auto h-2 rounded-full w-2 bg-white"
                  viewBox="0 0 24 24"
                ></svg>
              </button>
            ) : (
              <button onClick={message} className="mx-auto w-[90%] h-[53px] text-white bg-[#3A3A3A] rounded-full ">
                Proceed
              </button>
            )}
        </div>
        <p
          onClick={() => navigate("/login")}
          className="pt-[15px] cursor-pointer text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[84px]"
        >
          Return to sign in
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
