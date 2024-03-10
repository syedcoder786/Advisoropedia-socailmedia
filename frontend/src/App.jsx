import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Dashoboard from "./screens/Dashoboard";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   console.log("app");
  // }, []);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button> */}

      {/* <SignUp /> */}
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashoboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
