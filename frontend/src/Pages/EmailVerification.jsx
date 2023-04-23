import React from "react";
import mixpanel from "mixpanel-browser";

import { useLocation, useNavigate } from "react-router-dom";
const EmailVerification = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", {
    debug: true,
    ignore_dnt: true,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.message || "";
  const openMail = () => {
    window.open("mailto:");
  };

  const ToLogin = () => {
    mixpanel.track("Email Verification");
    navigate("/login");

  };

  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Email verification
        </p>
        <span className=" pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] mx-auto w-[320px] h-[112px]">
          Please take a moment to verify your email address. We sent an email
          with a verification link to{" "}
          <span className="text-[#3A3A3A] font-bold cursor-pointer">
            {email}
          </span>
          . If you didn’t receive the email, check your spam folder.{" "}
          <span
            onClick={openMail}
            className="text-[#3A3A3A] font-bold cursor-pointer"
          >
            Click here
          </span>{" "}
          to open email
        </span>
        <div className="flex flex-col gap-2.5 pt-[50px]">
          <button
            onClick={ToLogin}
            className="w-[90%] mx-auto h-[53px] leading-6 text-white bg-[#3A3A3A] rounded-full text-[15px]"
          >
            Proceed to sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
