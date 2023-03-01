import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// Component
const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClick = () => {
    navigate("/resetdone");
  };

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
  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Reset your password
        </p>

        <div className="flex flex-col gap-2.5 pt-[30px] ">
          <span className="relative mx-auto  w-[90%] rounded-full bg-[#EEEEEE]">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="focus:border-[#EEEEEE]  text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[85%] h-[53px] rounded-full p-4"
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
          <span className="relative mx-auto  w-[90%] rounded-full bg-[#EEEEEE]">
            <input
              type={showPassword2 ? "text" : "password"}
              id="password"
              value={confirmPassword}
              onChange={handlePasswordChange2}
              placeholder="Confirm password"
              className="focus:border-[#EEEEEE] mx-auto  text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[85%] h-[53px] rounded-full p-4"
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
          <button
            onClick={handleClick}
            className="w-[90%] mx-auto h-[53px] text-white bg-[#3A3A3A] rounded-full "
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
