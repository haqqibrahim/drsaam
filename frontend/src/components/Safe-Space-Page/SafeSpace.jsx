import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import NoCheckup from './NoCheckup'

const SafeSpace = () => {
  const { user } = useAuthContext();
  const dailyCheckup = JSON.parse(localStorage.getItem("dailyCheckup"));
  const dailyCheckupDate = dailyCheckup.time;

  if (dailyCheckupDate !== new Date().toDateString()) {
    // Setting the daily checkup
    const time = new Date().toDateString();
    const checkup = true;
    localStorage.setItem("dailyCheckup", JSON.stringify({ time, checkup }));

    return (
      <>
        <h1>SafeSpace</h1>
        <span>{user.uid}</span>
      </>
    );
  } else {
    return (
      <>
        <NoCheckup />
      </>
    );
  }
};

export default SafeSpace;
