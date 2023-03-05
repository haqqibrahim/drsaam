import React from "react";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Footer from "../components/Footer";
const Saam = () => {
  return (
    <div className="h-screen flex relative">
      <Header />
      <div className="pb-[75px] pt-[80px] flex mx-auto">
        <Messages />
      </div>
        {" "}
      
       <Footer />
  
    
    </div>
  );
};

export default Saam;
