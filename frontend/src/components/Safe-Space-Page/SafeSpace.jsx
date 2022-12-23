import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Connect from "./Connect";

const SafeSpace = () => {
  const { user } = useAuthContext();
  const dailyCheckup = JSON.parse(localStorage.getItem("dailyCheckup"));
  const dailyCheckupDate = dailyCheckup.time;

  const updateCheckup = () => {
    const time = new Date().toDateString();
    const checkup = true;
    localStorage.setItem("dailyCheckup", JSON.stringify({ time, checkup }));
  };

  if (dailyCheckupDate !== new Date().toDateString()) {
    // Setting the daily checkup
    return (
      <>
        <h1>{user.username} Please DO checkup</h1>
        <button onClick={updateCheckup}>Checkup</button>
      </>
    );
  } else {
    return (
      <>
        <Connect />
      </>
    );
  }
};

export default SafeSpace;
