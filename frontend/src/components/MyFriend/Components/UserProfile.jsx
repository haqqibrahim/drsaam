import React, { useState, useContext, useEffect } from "react";

import { BsChatLeftQuote, BsUiChecks } from "react-icons/bs";
import { ChatContext } from "../../../context/ChatContext";

const UserProfile = () => {
  const { data } = useContext(ChatContext);
  const email = data.user?.email;
  const [prof, setProf] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [oneVal, setOneVal] = useState(false);
  const [twoVal, setTwoVal] = useState(false);
  const [threeVal, setThreeVal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://afternoon-gorge-68296.herokuapp.com/api/user/last_3_checkup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("error");
      } else {
        if (data.message === "No checkup data available for this user") {
         alert(data.message)
        } else {
          const { checkups } = data;
          setOneVal(checkups[0]);
          setTwoVal(checkups[1]);
          setThreeVal(checkups[2]);
        }
      }
    };

    return () => {
      getData();
    };
  }, [email]);

  const oneFunc = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
  };

  const twoFunc = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
  };

  const threeFunc = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
  };
  return (
    <div className="bg-[#0F1828] h-full w-full p-5 divide-y divide-slate-700">
      <div className="pb-5">
        <span className="text-white text-light">
          Daily Checkup & Assessment
        </span>
        <div className="flex flex-row pt-8 space-x-8">
          <div
            onClick={() => setProf(false)}
            className="w-[50px] h-[50px] p-1 rounded-lg border-2 border-gray-400 bg-[#375FFF]"
          >
            <BsUiChecks
              className="fill-white"
              style={{ width: "35px", height: "35px" }}
            />
          </div>
          <div
            onClick={() => setProf(true)}
            className="w-[50px] h-[50px] p-1 rounded-lg border-2 border-gray-400 bg-[#375FFF]"
          >
            <BsChatLeftQuote
              className="fill-white  mt-1"
              style={{ width: "35px", height: "35px" }}
            />
          </div>
        </div>
      </div>

      {!prof ? (
        <div className="pt-4">
          <span className="text-slate-300">Last 3 Checkup</span>

          <div className="mt-3 flex justify-between">
            <div onClick={oneFunc}>
              {" "}
              <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                <span className="text-white text-3xl">1</span>
              </div>
            </div>
            <div
              onClick={twoFunc}
              className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]"
            >
              <span className="text-white text-3xl">2</span>
            </div>
            <div
              onClick={threeFunc}
              className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]"
            >
              <span className="text-white text-3xl">3</span>
            </div>
          </div>

          {one && oneVal && (
            <div className="h-screen divide-y divide-slate-700 pt-4">
              <div className="mt-4  pb-2 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">A</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {oneVal["checkupA"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      How do you feel today?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">B</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {oneVal["checkupB"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      Why is that? Why do you think? What caused it?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">C</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {oneVal["checkupC"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      How often do you feel this way?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">D</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {oneVal["checkupD"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      Rate how your day has been so far
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      What is the biggest change since yesterday?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[80%] pt-1 pb-1 pr-1">
                      {oneVal["cause"]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      How do you think you can be assisted?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[100%] pt-1 pb-1 pr-1">
                      {oneVal["how"]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {two && twoVal && (
            <div className="h-screen divide-y divide-slate-700 pt-4">
              <div className="mt-4  pb-2 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">A</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {twoVal["checkupA"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      How do you feel today?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">B</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {twoVal["checkupB"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      Why is that? Why do you think? What caused it?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">C</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {twoVal["checkupC"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      How often do you feel this way?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">D</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {twoVal["checkupD"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      Rate how your day has been so far
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      What is the biggest change since yesterday?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[80%] pt-1 pb-1 pr-1">
                      {twoVal["cause"]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      How do you think you can be assisted?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[100%] pt-1 pb-1 pr-1">
                      {twoVal["how"]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {three && threeVal && (
            <div className="h-full divide-y divide-slate-700 pt-4">
              <div className="mt-4  pb-2 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">A</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {threeVal["checkupA"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      How do you feel today?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">B</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {threeVal["checkupB"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      Why is that? Why do you think? What caused it?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">C</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {threeVal["checkupC"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      How often do you feel this way?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">D</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">
                      Response: {threeVal["checkupD"]}
                    </span>
                    <span className="text-slate-300 text-sm">
                      Rate how your day has been so far
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      What is the biggest change since yesterday?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[80%] pt-1 pb-1 pr-1">
                      {threeVal["cause"]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      How do you think you can be assisted?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[100%] pt-1 pb-1 pr-1">
                      {threeVal["how"]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <div className="divide-y divide-slate-700 pt-4">
              <div className="mt-4  pb-2 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">A</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">Response: Tired</span>
                    <span className="text-slate-300 text-sm">
                      How do you feel today?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">B</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">Response: MoneValy</span>
                    <span className="text-slate-300 text-sm">
                      Why is that? Why do you think? What caused it?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">C</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">Response: Rarely</span>
                    <span className="text-slate-300 text-sm">
                      How often do you feel this way?
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="w-[50px] flex items-center justify-center h-[50px] rounded-lg border-2 border-gray-400 bg-[#375FFF]">
                    <span className="text-white text-3xl">D</span>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white">Response: Okay</span>
                    <span className="text-slate-300 text-sm">
                      Rate how your day has been so far
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      What is the biggest change since yesterday?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[80%] pt-1 pb-1 pr-1">
                      Rate how your day has been so far, i would like to di that
                      ubunthe way thins go is not funn at all like, whiye so
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-16 w-full  items-center justify-center">
                <div className="pt-2 items-center flex space-x-4">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-white text-sm">
                      How do you think you can be assisted?
                    </span>
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[100%] pt-1 pb-1 pr-1">
                      Rate how your day has been so far, i would like to di that
                      ubunthe way thins go is not funn at all like, whiye so
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      ) : (
        <div className="bg-[#0F1828] h-full w-full">
          <span className="text-white">Assessment</span>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
