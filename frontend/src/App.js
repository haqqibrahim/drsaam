import "./App.css";

import { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

// Contexts
// import { AuthContext } from "./context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

// Pages
import Info from "./Pages/Info";
import Welcome from "./Pages/Welcome"
import Login from "./Pages/Login"
import Login2 from "./Pages/Login2"
import ForgetPassword from "./Pages/ForgetPassword"
import ResetPasswordMessage from "./Pages/ResetPasswordMessage"
import ResetPassword from "./Pages/ResetPassword"
import ResetDone from "./Pages/ResetDone"
import Signup from "./Pages/Signup"
import EmailVerification from "./Pages/EmailVerification"
import SignupProfile from "./Pages/SignupProfile"
import Preloader from "./Pages/Preloader"
function App() {
  
  // const { currentUser } = useContext(AuthContext);
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/Welcome" />;
  //   }
  //   return children;
  // };
  const [loggedInDate, setLoggedInDate] = useState(null);
  useEffect(() => {
    const storedDate = localStorage.getItem("loggedInDate");
    console.log(storedDate)
    if (storedDate) {
      setLoggedInDate(new Date(storedDate));
      console.log(storedDate)
      console.log(loggedInDate)
    }
  }, []);

  useEffect(() => {
    console.log("Ok okok")
    let timer;
    if (loggedInDate) {
      const now = new Date();
      const timeElapsed = now - loggedInDate;
      const timeRemaining = 24 *60 * 60 * 1000 - timeElapsed; // 24 hours = 24 * 60 * 60 * 1000 ms
      if (timeRemaining > 0) {
        timer = setTimeout(() => {
          localStorage.removeItem('loggedInDate');
          setLoggedInDate(null);
          console.log("You out")
          signOut(auth)
          // Log the user out or show a message that they've been automatically logged out
        }, timeRemaining);
      } else {
        localStorage.removeItem('loggedInDate');
        setLoggedInDate(null);
        console.log("Outtssss")
        signOut(auth)
        // Log the user out or show a message that they've been automatically logged out
      }
    }
    return () => clearTimeout(timer);
  }, [loggedInDate]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Info />}></Route>
       <Route exact path="/Welcome" element={<Welcome />}></Route>
       <Route exact path="/login" element={<Login />}></Route>
       <Route exact path="/login2" element={<Login2 />}></Route>
       <Route exact path="/forgetpassword" element={<ForgetPassword />}></Route>
       <Route exact path="/resetpasswordmessage" element={<ResetPasswordMessage />}></Route>
        <Route exact path="/resetpassword" element={<ResetPassword />}></Route>
        <Route exact path="/resetdone" element={<ResetDone />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/emailverification" element={<EmailVerification />}></Route>
        <Route exact path="/signup-profile" element={<SignupProfile />}></Route>
        <Route exact path="/preloader" element={<Preloader />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
