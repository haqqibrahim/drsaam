import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Logo from "../../assets/images/saam.png";
import Checkup from "../../assets/images/Checkup.png";
import Journal from "../../assets/images/Journal.png";
import Friend from "../../assets/images/friend.png";
import Quote from "../../assets/images/Quote.png";
import Lock from "../../assets/images/Lock.png";
import Omari from "../../assets/images/omari.png";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoLogoTwitter,
} from "react-icons/io";
import { BsArrowDown } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Info = () => {
  const navigate = useNavigate();
  const [checkup, setCheckup] = useState(true);
  const [journal, setJournal] = useState(false);
  const [myFriend, setMyFriend] = useState(false);

  const [haqq, setHaqq] = useState(true);
  const [kay, setKay] = useState(false);
  const [steph, setSteph] = useState(false);
  const [ade, setAde] = useState(false);

  const HaqqToKay = () => {
    setHaqq(false);
    setKay(true);
  };

  const HaqqToAde = () => {
    setHaqq(false);
    setAde(true);
  };

  const KayToHaqq = () => {
    setKay(false);
    setHaqq(true);
  };

  const KayToSteph = () => {
    setKay(false);
    setSteph(true);
  };

  const StephToAde = () => {
    setSteph(false);
    setAde(true);
  };

  const AdeToSteph = () => {
    setAde(false);
    setSteph(true);
  };

  const StephToKay = () => {
    setSteph(false);
    setKay(true);
  };

  const AdeToHaqq = () => {
    setAde(false);
    setHaqq(true);
  };

  const CheckupToJournal = () => {
    setCheckup(false);
    setJournal(true);
  };

  const JournalToCheckup = () => {
    setJournal(false);
    setCheckup(true);
  };

  const JournalToFriend = () => {
    setJournal(false);
    setMyFriend(true);
  };

  const FriendToJournal = () => {
    setMyFriend(false);
    setJournal(true);
  };

  const FriendToCheckup = () => {
    setMyFriend(false);
    setCheckup(true);
  };

  const CheckupToFriend = () => {
    setCheckup(false);
    setMyFriend(true);
  };

  const Feature = (props) => {
    return (
      <div className=" flex flex-col  items-center space-y-10">
        <p className="text-black text-center text-[24px]">{props.feature}</p>
        <img
          src={props.img}
          alt="feature"
          className="p-1 pt-4"
          width="550px"
          height="500px"
        />
      </div>
    );
  };

  // const Features = (props) => {
  //   return (
  //     <div className="relative ml-20">
  //       <div className="h-[200px] rounded-md mt-20 w-[654px] bg-[#F5F5F7] absolute flex space-x-5">
  //         <p className="text-[24px] m-2 pt-20">{props.title}</p>
  //       </div>
  //       <div className="absolute ml-[350px]">
  //         <img src={props.img} alt="feature" width="250px" height="750px" />
  //       </div>
  //     </div>
  //   );
  // };
  const Quotes = (props) => {
    return (
      <div className="pt-10 absolute " style={{ position: "relative" }}>
        <img
          className="h-[381px] w-screen"
          src={Quote}
          alt="Quote"
          // style={{ width: "100%" }}
        />
        <div
          className="items-center justify-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p className="text-center lg:w-full pt-8 text-white text-[15px] lg:text-[24px] font-bold">
            {" "}
            {props.text}
          </p>
          <p className="text-center text-white/50 pt-5">{props.name}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Navbar */}
      <div className="bg-black h-16 flex justify-between">
        <img
          src={Logo}
          alt="Logo"
          className="p-3 cursor-pointer pt-4 ml-3 h-[80%] w-[22%] lg:w-[10%]"
        />
        <div className="flex space-x-6 p-4">
          <button
            onClick={() => navigate("/bot")}
            className="lg:pt-4 pt-2 mr-5 bg-inherit text-white font-light"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/bot")}
            className="bg-inherit w-[131px] h-[49px] hidden lg:block rounded-full border-2 border-indigo-800 text-white font-light"
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Header */}
      <div className="relative pb-4 pt-32 w-screen lg:h-[500px] h-screen bg-black flex flex-col justify-center  items-center space-y-10">
        <div>
          <h1 className="lg:leading-[90px] leading-[50px] h-full text-center text-transparent max-h-full lg:text-[74px] text-[35px] bg-clip-text bg-gradient-to-r from-[#FFFFFF]/20 via-[#FA77FF] to-[#6454FF]">
            Empowering Minds, <br /> Enhancing Lives.
          </h1>
        </div>
        <div>
          <button
            onClick={() => navigate("/bot")}
            className="hover:bg-white hover:text-black hover:border-0 bg-inherit w-[131px] h-[49px] lg:hidden rounded-full border-2 border-white/40 text-white font-light"
          >
            Get Started
          </button>
        </div>

        <div className="lg:hidden animate-bounce pt-32 inset-x-0 bottom-0 pb-6">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab sx={{ backgroundColor: "black", border: "1px solid black" }}>
              <BsArrowDown
                className="fill-gray-500"
                style={{ width: "20px", height: "40px" }}
              />
            </Fab>
          </Box>
        </div>
      </div>
      {/* Header 2 */}
      <div className="bg-[#F5F5F7] pb-[100px] space-y-20">
        <div>
          <p className="pt-16 text-center text-black h-[141px] text-[85px]">
            Dr.SAAM
          </p>
        </div>
        <div>
          <p className="text-center text-black/50  text-[20px]">
            The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
              Simulated AI Assistant Medic.
            </span>{" "}
            <br /> for your total well being
          </p>
        </div>
      </div>
      {/* Features */}
      <span className="mt-20">
        <p className="text-center pt-14 text-[18px]">What DR.SAAM Offers</p>
        <p className="text-center text-[24px] p-14 bg-clip-text text-transparent bg-gradient-to-r from-[#F600FF] to-[#1800FF]">
          We offer a suit of features just for you
        </p>
      </span>
      <div className="lg:hidden p-2 px-4">
        {checkup && (
          <div className="flex space-x-10 items-center justify-center ">
            <div
              className="rounded-full bg-black/10 w-10 h-10 p-[6px]"
              onClick={CheckupToFriend}
            >
              {" "}
              <IoIosArrowBack
                className="fill-black/50"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <Feature feature="Checkup" img={Checkup} />
            <div className="rounded-full bg-black/10 w-10 h-10 p-[8px]">
              {" "}
              <IoIosArrowForward
                onClick={CheckupToJournal}
                className="fill-black/50"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        )}

        {journal && (
          <div className="flex space-x-10 items-center justify-center">
            <div
              className="rounded-full bg-black/10 w-10 h-10 p-[6px]"
              onClick={JournalToCheckup}
            >
              {" "}
              <IoIosArrowBack
                className="fill-black/50"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <Feature feature="Journal" img={Journal} />
            <div
              className="rounded-full bg-black/10 w-10 h-10 p-[8px]"
              onClick={JournalToFriend}
            >
              {" "}
              <IoIosArrowForward
                className="fill-black/50"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        )}

        {myFriend && (
          <div className="flex space-x-10 items-center justify-center">
            <div
              className="rounded-full bg-black/10 w-10 h-10 p-[6px]"
              onClick={FriendToJournal}
            >
              {" "}
              <IoIosArrowBack
                className="fill-black/50"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <Feature feature="MyFriend" img={Friend} />
            <div
              className="rounded-full bg-black/10 w-10 h-10 p-[8px]"
              onClick={FriendToCheckup}
            >
              {" "}
              <IoIosArrowForward
                className="fill-black/50"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:block align-center ">
        <div className="flex justify-around">
          <Feature feature="Checkup" img={Checkup} />
          <Feature feature="Journal" img={Journal} />
          <Feature feature="MyFriend" img={Friend} />
        </div>
      </div>
      {/* <div className="lg:block hidden lg:relative">
        <div className="justify-between space-x-80">
          {" "}
          
          <div className="pl-[320px]">
            {" "}
            <Features title="Checkup" img={Checkup} />
          </div>
        </div>
      </div>
      <div className="lg:block hidden lg:relative mt-96">
        <div className="justify-between space-x-80">
          {" "}
          <div>
            {" "}
            <Features title="Journal" img={Journal} />
          </div>
          <div className="pl-[320px]">
            {" "}
            <Features title="MyFriend" img={Friend} />
          </div>
        </div>
      </div> */}
      {/* Quotes */}
      {haqq && (
        <div className="relative lg:pt-24 flex  justify-center items-center">
          <Quotes
            text="Take care of your mind and soul, it's the only place you have to live"
            name="~ Ibrahim Abdulhaqq"
          />
          <div className="absolute flex space-x-64 md:space-x-80  py-[200px] lg:px-[250px] lg:py-[220px]">
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[6.5px] lg:mr-[600px]"
              onClick={HaqqToAde}
            >
              {" "}
              <IoIosArrowBack
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[8px] lg:ml:[600px]"
              onClick={HaqqToKay}
            >
              {" "}
              <IoIosArrowForward
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        </div>
      )}

      {kay && (
        <div className="relative lg:pt-24 flex justify-center items-center">
          <Quotes
            text="It's totally okay not to be okay"
            name="~ Eze Kelechi Stephanie"
          />
          <div className="absolute flex space-x-64 md:space-x-80 px-[120px] py-[200px] lg:px-[250px] lg:py-[220px]">
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[6.5px] lg:mr-[600px]"
              onClick={KayToHaqq}
            >
              {" "}
              <IoIosArrowBack
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[8px] lg:ml:[600px]"
              onClick={KayToSteph}
            >
              {" "}
              <IoIosArrowForward
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        </div>
      )}
      {steph && (
        <div className="relative lg:pt-24 flex justify-center items-center">
          <Quotes
            text="Your mind is a garden, your thoughts are the seeds. Plant positivity and reap happiness."
            name="~ Bakare Oluwakorede"
          />
          <div className="absolute flex space-x-64 md:space-x-80 px-[120px] py-[200px] lg:px-[250px] lg:py-[220px]">
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[6.5px] lg:mr-[600px]"
              onClick={StephToKay}
            >
              {" "}
              <IoIosArrowBack
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[8px] lg:ml:[600px]"
              onClick={StephToAde}
            >
              {" "}
              <IoIosArrowForward
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        </div>
      )}

      {ade && (
        <div className="relative lg:pt-24 flex justify-center items-center">
          <Quotes
            text="Mental health is just as important as physical health."
            name="~ Omodehin Adeola"
          />
          <div className="absolute flex space-x-64 md:space-x-80 px-[120px] py-[200px] lg:px-[250px] lg:py-[220px]">
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[6.5px] lg:mr-[600px]"
              onClick={AdeToSteph}
            >
              {" "}
              <IoIosArrowBack
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div
              className="rounded-full  bg-white/50 w-10 h-10 p-[8px] lg:ml:[600px]"
              onClick={AdeToHaqq}
            >
              {" "}
              <IoIosArrowForward
                className="fill-white/30"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        </div>
      )}
      {/* Privacy */}
      <div className="lg:space-x-64 w-full pt-32 lg:flex-row lg:items-start flex flex-col items-center justify-center">
        <div className="items-center lg:items-start lg:flex-start justify-center self-center">
          <img src={Lock} alt="lock" className="w-[133.33px] h-[175px]" />
        </div>
        <div className="items-center justify-center self-center pt-10 ">
          <p className="font-semibold items-center text-center lg:text-left text-[24px]">
            Truly Private and Secure
          </p>
          <p className="text-center leading-6 lg:text-left px-4 text-[#7C7C7C] text-[12px] w-[350px] pt-5">
            Your privacy and security are top priorities while you engage with
            Dr.SAAM. Our platform is designed to keep all user information and
            MyFriend sessions confidential and secure, ensuring that you have a
            private and safe experience.
          </p>
        </div>
      </div>

      <div>
        {/* Question */}
        <div className="relative flex justify-center items-center">
          <div className="mt-[680px] absolute lg:h-[318px] h-[454px] items-center align-center justify-center w-screen bg-gradient-to-r from-black/80 via-black/70 to-black">
            <p className="text-white font-bold text-center text-[20px] px-[100px] lg:px-0  pt-16">
              Have a question? Reach out to us
            </p>
          </div>

          <div className="absolute shadow-2xl flex justify-center items-center align-center mt-[900px] w-[80%] lg:w-[1040px] h-[416px] lg:h-[191px] bg-white rounded-md">
            <div className="flex flex-col lg:flex-row lg:space-x-80 space-y-10 items-center justify-center">
              <a href="mailto:info.omari.ai@gmail.com">
                <div className="justify-center items-center align-center">
                  <MdEmail
                    className="fill-[#848484] ml-2"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <p className="text-[#3A3A3A] mt-2 text-[18px] text-center">
                    E-mail
                  </p>
                </div>
              </a>
              <a href="https://twitter.com/omariAI_hq">
                <div className="justify-center lg:pb-3 items-center align-center">
                  <IoLogoTwitter
                    className="fill-[#848484] ml-2"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <p className="text-[#3A3A3A] mt-2 text-[18px] text-center">
                    Twitter
                  </p>
                </div>
              </a>

              <a href="https://www.instagram.com/omariai_hq/">
                <div className="justify-center lg:pb-3 items-center align-center">
                  <AiFillInstagram
                    className="fill-[#848484] ml-6"
                    style={{ width: "35px", height: "35px" }}
                  />
                  <p className="text-[#3A3A3A] mt-2 text-[18px] text-center">
                    Instagram
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* Footer */}
        </div>
      </div>
      <div className="pb-10 justify-center items-center align-center">
        <div className="pt-[700px] justify-center items-center align-center">
          <div className="flex justify-center items-center align-center">
            {" "}
            <p className="font-semibold text-center">A product of Omari-AI</p>
            <img src={Omari} alt="feature" width="40px" height="40px" />
          </div>
          <p className="text-center text-[12px] pt-3">
            Copyright © 2023 Dr.SAAM from Omari-AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
