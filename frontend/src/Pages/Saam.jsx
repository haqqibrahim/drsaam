import React from "react";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Footer from "../components/Footer";
const Saam = () => {
  return (
    <div className="h-screen flex relative">
      <Header />
      <div className="pt-[80px] pb-[80px] flex m-auto">
        <Messages />
      </div>
      <div className="absolute">
      <Footer />
      </div>
    </div>
  );
};

export default Saam;
