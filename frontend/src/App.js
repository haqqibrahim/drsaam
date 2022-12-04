import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Welcome from "./components/Welcome-Page/Welcome";
import Signup from "./components/Signup-Page/Signup";
import Login from "./components/Login-Page/Login";
import SafeSpace from "./components/Safe-Space-Page/SafeSpace";
import {useAuthContext} from "./hooks/useAuthContext"

function App() {
  const { user } = useAuthContext()

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/safespace" />}></Route>
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/safespace" />}></Route>
        <Route exact path="/safespace" element={user ? <SafeSpace /> : <Navigate to="/login" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
