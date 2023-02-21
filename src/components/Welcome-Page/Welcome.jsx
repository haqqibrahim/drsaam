import { React } from "react";

// logo
import Logo from "../../assets/images/logo.png";

export default function Welcome() {
  return (
    <div className="container flex flex-col justify-center items-center pt-60">
      <img src={Logo} alt="logo" />
      <p className="font-loader font-bold text-xl pt-10">
        Hey! I’m <span className="text-[#6454FF]">Dr.SAAM</span>
      </p>
      <p className="text-base font-loader pt-4">
        I’m here to help you de-stress and be anxiety free
      </p>
      <button className="mt-10 text-center text-white font-loader w-2/3 h-10 rounded-md bg-gradient-to-r from-[#FA77FF] to-[#6454FF]">
        <a href="/signup">
          <div>
            <p>Proceed</p>
          </div>
        </a>
      </button>
    </div>
  );
}
