import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Preloader from "./components/Preloeade/Preloader";
import WelcomeOne from "./components/Welcome-1/WelcomeOne";
import WelcomeTwo from "./components/Welcome-2/WelcomeTwo";
import WelcomeThree from "./components/Welcome-3/WelcomeThree";
import Login from "./components/Login-Page/Login";
import Signup from "./components/Signup-Page/Signup";
import HomeOne from "./components/Home-1/HomeOne";
import HomeTwo from "./components/Home-2/HomeTwo";
import CheckUp from "./components/DailyCheckUp/CheckUp";
function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Preloader />}></Route>
        <Route exact path="/welcome-1" element={<WelcomeOne />}></Route>
        <Route exact path="/welcome-2" element={<WelcomeTwo />}></Route>
        <Route exact path="/welcome-3" element={<WelcomeThree />}></Route>
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home-1" />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/home-1" />}
        ></Route>
        <Route
          exact
          path="/home-1"
          element={user ? <HomeOne /> : <Navigate to="/login" />}
        ></Route>
        <Route
          exact
          path="/home-2"
          element={user ? <HomeTwo /> : <Navigate to="/login" />}
        ></Route>
        <Route
          exact
          path="/checkup"
          element={user ? <CheckUp /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
