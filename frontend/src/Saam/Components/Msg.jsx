import React, { useState, useEffect } from "react";
import BotA from "./BotA";
import ReplyA from "./ReplyA";
import UserA from "./UserA";

const Msg = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[time.getDay()];
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const amPm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const [isReplyADisplayed, setIsReplyADisplayed] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsReplyADisplayed(true);
      clearInterval(intervalId);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-100 pb-[75px] pt-[80px] w-full h-full flex flex-col p-2">
      <div className="items-center self-center">
        <p className="text-slate-800 ">
          {" "}
          {day}, {formattedHour}:{formattedMinutes} {amPm}
        </p>
      </div>
      <BotA />
      {selectedOption ? (
        <UserA selectedOption={selectedOption} />
      ) : (
        isReplyADisplayed && <ReplyA handleOptionSelect={handleOptionSelect} />
      )}
    </div>
  );
};

export default Msg;
