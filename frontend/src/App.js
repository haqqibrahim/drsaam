import "./App.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
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
import Bio from "./components/MyFriend/Pages/Bio"
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Preloader />}></Route>
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
