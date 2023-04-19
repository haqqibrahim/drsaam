// Import necessary modules
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Define Login component
const Login = () => {
  const location = useLocation();

  // Initialize state variables
  const [email, setEmail] = useState(location.state?.message || "");

  // Initialize navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle click event and show email and password fields
  const handleProceed = () => {
    navigate("/login2", { state: { message: email } });
  };

  // Render the Login component
  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Welcome back friend!
        </p>
        <p className="mx-auto pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[90%] h-[84px]">
          Let’s get you logged in again. You are one step away to a better
          mental health.
        </p>
        <div className="flex flex-col gap-5 pt-[40px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            className="focus:border-[#EEEEEE] mx-auto text-[#3A3A3A] text-[13px] leading-5 bg-[#EEEEEE] w-[90%] h-[53px] rounded-full p-4"
          />
          <button
            onClick={handleProceed}
            className="w-[90%] mx-auto h-[53px] text-white bg-[#3A3A3A] rounded-full "
          >
            Proceed
          </button>
        </div>
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
export default Login;
