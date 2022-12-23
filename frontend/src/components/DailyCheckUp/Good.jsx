import React from "react";
import { useGlobalState } from "./State";

const Good = () => {
  const [value] = useGlobalState("count");
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default Good;
