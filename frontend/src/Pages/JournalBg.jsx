import React from 'react'
import Journal from './Journal'
// import { useNavigate } from "react-router-dom";

const JournalBg = () => {
    // const navigate = useNavigate();

  return (
    <span className="relative bg-[#3A3A3A66]/40 w-screen h-screen flex flex-col"
      >
        <Journal />
    </span>
  )
}

export default JournalBg