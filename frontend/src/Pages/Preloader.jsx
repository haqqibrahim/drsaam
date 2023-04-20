import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Preloader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const text = location.state?.message || "";

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  return (
    <div className="w-screen h-screen flex">
      <div className="relative flex flex-col m-auto">
        <div className="flex justify-center">
          <svg
            class="animate-bounce rounded-full h-2 w-2 bg-[#3A3A3A]"
            viewBox="0 0 24 24"
          ></svg>
        </div>
        <p className="text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] w-[350px] h-[84px]">
          Taking a moment to {text} your safe space.
        </p>
        {/* <span className="animate-spin h-10 w-10 bg-[#3A3A3A] mx-auto"></span> */}
      </div>
    </div>
  );
};

export default Preloader;
