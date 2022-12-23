import { React, useState } from "react";
import Typewriter from "typewriter-effect";
import { useLogin } from "../../../hooks/useMyFriendLogin";
import "../../../App.css";

// logo
import Logo from "../../../assets/images/white-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    window.location.replace("http://localhost:3000/myfriend/dashboard");
  };
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-[#FA77FF] to-[#6454FF] container flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" />
        <p className="font-loader font-bold text-xl pt-10 text-white">
          <Typewriter
            options={{
              strings: ["Hey! I’m Dr.SAAM", "You’re Welcome to My Friend!"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="w-full text-base font-loader text-center p-10 text-gray-100 pt-4">
          Remember our conversations are private & anonymous. Provide your
          details to get logged in
        </p>
        <div className="lg:pt-8">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-600 text-center font-loader text-lg font-semibold">
                {error}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="lg:w-96 border-transparent rounded-md h-8 bg-[#C683E8] p-5"
              />

              <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-md border-transparent h-8 bg-[#C683E8] p-5"
              />
            </div>
            <button
              disabled={isLoading}
              className="mt-10 ml-10 md:ml-44 lg:ml-44 text-center text-white font-loader lg:w-1/2 w-5/6 h-10 rounded-md bg-white"
            >
              <div>
                <p className="text-[#6454FF]">Sign in</p>
              </div>
            </button>
          </form>
        </div>

        <a href="/signup">
          <p className="w-full text-base font-loader text-center text-gray-100 pt-4">
            Not yet a member? Create an account now!
          </p>
        </a>
      </div>
      );
    </div>
  );
};

export default Login;
