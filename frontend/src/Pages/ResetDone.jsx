import React from "react"
import { useNavigate } from "react-router-dom";

const ResetDone = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Email Sent!
        </p>
        <span className=" pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[112px]">
        Click “Return to sign in” to get back into your account. SAAM awaits your arrival!
        </span>
        <div className="flex flex-col gap-2.5 pt-[10px]">
          <button onClick={() => navigate("/login")} className="w-[360px] h-[53px] leading-6 text-white bg-[#3A3A3A] rounded-full text-[15px]">
           Return to Sign in
          </button>
        </div>
      </div>
    </div>
    )
}

export default ResetDone