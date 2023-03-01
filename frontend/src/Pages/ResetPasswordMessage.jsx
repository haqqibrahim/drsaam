import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ResetPasswordMessage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const email = location.state?.message || "";
  const sendEmail = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Email Sent");
    })
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Email Sent!
        </p>
        <span className=" pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] mx-auto w-[300px] h-[112px]">
          We sent an email with a reset link to{" "}
          <span className="text-[#3A3A3A] font-bold">{email}</span>. If you
          haven’t received an email in 5 minutes, check your spam folder or{" "}
          <span className="text-[#3A3A3A] cursor-pointer font-bold" onClick={sendEmail}>Click here </span> to
          resend
        </span>
        <div className="flex flex-col gap-2.5 pt-[50px]">
          <button onClick={() => navigate("/login")} className="w-[90%] mx-auto h-[53px] leading-6 text-white bg-[#3A3A3A] rounded-full text-[15px]">
           Return to Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordMessage;
