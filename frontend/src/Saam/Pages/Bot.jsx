import React, { useContext } from "react";
import Body from "./Body";
import BodyB from "./BodyB";
import { AuthContext } from "../../context/AuthContext";

const Bot = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Body />;
  } else {
    return <BodyB />;
  }
};

export default Bot;
