import "./App.css";

import { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Contexts
import { AuthContext } from "./context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

// Pages
import Info from "./Pages/Info";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Login2 from "./Pages/Login2";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPasswordMessage from "./Pages/ResetPasswordMessage";
import ResetPassword from "./Pages/ResetPassword";
import ResetDone from "./Pages/ResetDone";
import Signup from "./Pages/Signup";
import EmailVerification from "./Pages/EmailVerification";
import SignupProfile from "./Pages/SignupProfile";
import Preloader from "./Pages/Preloader";
import Saam from "./Pages/Saam";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Review from "./Pages/Review";
import Journal from "./Pages/JournalBg";
import JournalNew from "./Pages/JournalNew";
import JournalPreview from "./Pages/JournalPreview";
import JournalEdit from "./Pages/JournalEdit";
import Profile from "./Pages/Profile";
import GetStarted from "./Pages/GetStarted";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Welcome" />;
    }
    return children;
  };
  const [loggedInDate, setLoggedInDate] = useState(null);
  useEffect(() => {
    const storedDate = localStorage.getItem("loggedInDate");
    console.log(storedDate);
    if (storedDate) {
      setLoggedInDate(new Date(storedDate));
      console.log(storedDate);
      console.log(loggedInDate);
    }
  }, []);

  useEffect(() => {
    console.log("Ok okok");
    let timer;
    if (loggedInDate) {
      const now = new Date();
      const timeElapsed = now - loggedInDate;
      const timeRemaining = 24 * 60 * 60 * 1000 - timeElapsed; // 24 hours = 24 * 60 * 60 * 1000 ms
      if (timeRemaining > 0) {
        timer = setTimeout(() => {
          localStorage.removeItem("loggedInDate");
          setLoggedInDate(null);
          console.log("You out");
          signOut(auth);
          // Log the user out or show a message that they've been automatically logged out
        }, timeRemaining);
      } else {
        localStorage.removeItem("loggedInDate");
        setLoggedInDate(null);
        console.log("Outtssss");
        signOut(auth);
        // Log the user out or show a message that they've been automatically logged out
      }
    }
    return () => clearTimeout(timer);
  }, [loggedInDate]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Info />}></Route>
        <Route exact path="/getstarted" element={<GetStarted />}></Route>
        <Route exact path="/Welcome" element={<Welcome />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/login2" element={<Login2 />}></Route>
        <Route
          exact
          path="/forgetpassword"
          element={<ForgetPassword />}
        ></Route>
        <Route
          exact
          path="/resetpasswordmessage"
          element={<ResetPasswordMessage />}
        ></Route>
        <Route exact path="/resetpassword" element={<ResetPassword />}></Route>
        <Route exact path="/resetdone" element={<ResetDone />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route
          exact
          path="/emailverification"
          element={<EmailVerification />}
        ></Route>
        <Route exact path="/signup-profile" element={<SignupProfile />}></Route>
        <Route exact path="/preloader" element={<Preloader />}></Route>
        <Route
          exact
          path="/saam"
          element={
            <ProtectedRoute>
              <Saam />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/journal"
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/journalnew"
          element={
            <ProtectedRoute>
              <JournalNew />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/journalpreview"
          element={
            <ProtectedRoute>
              <JournalPreview />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/journaledit"
          element={
            <ProtectedRoute>
              <JournalEdit />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
