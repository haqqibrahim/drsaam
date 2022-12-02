import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome-Page/Welcome";
import Signup from "./components/Signup-Page/Signup";
import Login from "./components/Login-Page/Login";

function App() {
  return (
    <Router>
      {/* <>
        <Welcome />
      </> */}
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
