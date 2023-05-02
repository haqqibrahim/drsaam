import React from "react";
// import { useNavigate } from "react-router-dom";
import mixpanel from "mixpanel-browser";
// Define the GetStarted component using an arrow function
const GetStarted = () => {
  mixpanel.init("9260992a007ae334bd303457fa0eda2d", {
    debug: true,
    ignore_dnt: true,
  });

  // Declare a variable 'navigate' using the 'useNavigate' hook from the 'react-router-dom' library
//   const navigate = useNavigate();

  // Define a function to handle the click event on the login button
//   const handleLoginClick = () => {
//     // Use the 'navigate' function to go to the '/login' URL
//     mixpanel.track("Get started - Login");
//     navigate("/login");
//   };

  // Define a function to handle the click event on the sign up button
//   const handleSignUpClick = () => {
//     // Use the 'navigate' function to go to the '/signup' URL
//     mixpanel.track("Get started - Signup");
//     navigate("/signup");
//   };

  // Return JSX code that defines the layout and content of the GetStarted component
  return (
    <div className="w-full h-screen flex">
      <div className="relative flex flex-col m-auto">
        <p className="text-center text-[#3A3A3A] text-[24px] font-semibold leading-9">
          Saam + WhatsApp!
        </p>
        <p className="pt-[10px] text-center text-[14px] leading-7 font-nomral text-[#3A3A3A] mx-auto w-[350px] h-[84px]">
          Hey, i'm SAAM. Your journey towards better mental health begins here.
        </p>
        <div className="flex flex-col gap-2.5 pt-[30px] w-[350px]">
          <button
            // onClick={handleLoginClick}
            className="w-[90%] mx-auto h-[53px] disabled text-white bg-[#3A3A3A] rounded-full "
          >
           Coming Soon...
          </button>
          {/* <button
            onClick={handleSignUpClick}
            className="w-[90%] mx-auto h-[53px] text-[#3A3A3A] bg-[#EEEEEE] rounded-full "
          >
            Sign up
          </button> */}
        </div>
      </div>
    </div>
  );
};

// Export the GetStarted component so it can be used in other parts of the application
export default GetStarted;
