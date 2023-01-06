import React from "react";


import Navbar from "../Components/Navbar"
import Search from "../Components/Search"
import Chats from "../Components/Chats"
const Home = () => {
  return (
     <div className="bg-[#152033] h-screen w-full container p-5">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Home;
