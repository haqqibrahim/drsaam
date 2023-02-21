import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const UserB = (props) => {
  const navigate = useNavigate();
  const coin = () => {
    setTimeout(() => {
      navigate("/coin");
    }, 2000);
  };
  const friend = () => {
    setTimeout(() => {
      navigate("/myfriendlist");
    }, 2000);
  };
  const journal = () => {
    setTimeout(() => {
      navigate("/journal");
    }, 2000);
  };
  const checkup = () => {
    setTimeout(() => {
      navigate("/checkup");
    }, 2000);
  };

  if (props.selectedOption === "Rio Coin") {
    coin();
  }
  if (props.selectedOption === "MyFriend") {
    friend();
  }
  if (props.selectedOption === "Journal") {
    journal();
  }
  if (props.selectedOption === "Checkup") {
    checkup();
  }
 
  if (props.selectedOption === "Log out") {
    signOut(auth)
  }
  return (
    <div className="flex-col-reverse flex items-end">
      <div className="text-black max-w-[70%] p-3 m-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-h-[80%] bg-gray-300">
        {props.selectedOption}
      </div>
    </div>
  );
};

export default UserB;
