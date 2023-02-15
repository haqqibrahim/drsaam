import React from "react";
import { useNavigate } from "react-router-dom";

const UserA = (props) => {
  const navigate = useNavigate();
  const signup = () => {
    setTimeout(() => {
      navigate("/signup");
    }, 2000);
  };
  const login = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  if (props.selectedOption === "Yes, I am new here") {
    signup();
  } else {
    login();
  }
  return (
    <div className="flex-col-reverse flex items-end">
      <div className="text-black max-w-[70%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-h-[80%] bg-gray-300">
        {props.selectedOption}
      </div>
    </div>
  );
};

export default UserA;
