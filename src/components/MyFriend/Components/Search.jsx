import React from "react";

import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <div className="pt-1 mt-3 flex w-full h-12 p-1 bg-[#ADB5BD]">
      <ImSearch
        className="fill-gray-800 p-1 mt-1"
        style={{ width: "30px", height: "30px" }}
      />
      <input
        type="text"
        placeholder="search..."
        className="w-full text-white font-light bg-[#ADB5BD] p-2"
      />
    </div>
  );
};

export default Search;
