import React, { useState } from "react";

import { BsChatLeftQuote, BsUiChecks } from "react-icons/bs";



const UserProfile = () => {
  const [prof, setProf] = useState(false);

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
            <span className="text-slate-300">Recent Checkup</span>
            <div className="divide-y divide-slate-700 ">
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
                    <span className="text-white">Response: Money</span>
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
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[80%] pt-1 pb-1 pr-1">
                      Rate how your day has been so far, i would like to di that
                      ubunthe way thins go is not funn at all like, whiye so
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-slate-700 pt-4">
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
                    <span className="text-white">Response: Money</span>
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
                    <span className="text-slate-300 text-sm max-w-[100%] max-h-[80%] pt-1 pb-1 pr-1">
                      Rate how your day has been so far, i would like to di that
                      ubunthe way thins go is not funn at all like, whiye so
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-slate-700 pt-4">
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
                    <span className="text-white">Response: Money</span>
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
            </div>
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
