import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Preloader from "./components/Preloeade/Preloader";
import WelcomeOne from "./components/Welcome-1/WelcomeOne";
import WelcomeTwo from "./components/Welcome-2/WelcomeTwo";
import WelcomeThree from "./components/Welcome-3/WelcomeThree";
import Login from "./components/Login-Page/Login";
import Signup from "./components/Signup-Page/Signup";
// import HomeOne from "./components/Home-1/HomeOne";
import HomeTwo from "./components/Home-2/HomeTwo";
import CheckUp from "./components/DailyCheckUp/CheckUp";
import Journal from "./components/Journal/Journal";

// import Register from "./components/MyFriend/Pages/Register";
import SignIn from "./components/MyFriend/Pages/Login";
import Home from "./components/MyFriend/Pages/Home";
import Chat from "./components/MyFriend/Components/Chat";
import UserProfile from "./components/MyFriend/Components/UserProfile";
import MyFriendList from "./components/MyFriend/Components/MyFriendList";
import MyFriendProfile from "./components/MyFriend/Components/MyFriendProfile";
import Bio from "./components/MyFriend/Pages/Bio";
import { AuthContext } from "./context/AuthContext";
import Coin from "./components/Pages/Coin";
import Info from "./components/Info/Info";
import Bot from "./Saam/Pages/Bot";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
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
        <Route exact path="/bot" element={<Bot />}></Route>
        <Route exact path="/loader" element={<Preloader />}></Route>
        <Route exact path="/welcome-1" element={<WelcomeOne />}></Route>
        <Route exact path="/welcome-2" element={<WelcomeTwo />}></Route>
        <Route exact path="/welcome-3" element={<WelcomeThree />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>

        <Route
          exact
          path="/home-1"
          element={
            <ProtectedRoute>
              <HomeTwo />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/checkup"
          element={
            <ProtectedRoute>
              <CheckUp />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/coin"
          element={
            <ProtectedRoute>
              <Coin />
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
          path="/myfriendlist"
          element={
            <ProtectedRoute>
              <MyFriendList />
            </ProtectedRoute>
          }
        ></Route>
        {/* <Route exact path="/myfriend/register" element={<Register />}></Route> */}
        <Route exact path="/myfriend" element={<SignIn />}></Route>
        <Route exact path="/myfriend/home" element={<Home />}></Route>
        <Route exact path="/myfriend/chat" element={<Chat />}></Route>
        <Route exact path="/chat" element={<Chat />}></Route>
        <Route exact path="/myfriend/bio" element={<Bio />}></Route>
        <Route exact path="/user-profile" element={<UserProfile />}></Route>
        <Route
          exact
          path="/myfriendprofile"
          element={<MyFriendProfile />}
        ></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
