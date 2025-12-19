import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Schedule from "./Pages/Schedule";
import Feedback from "./Pages/Feedback";
import Admin from "./Pages/Admin";

// BaseURL: https://agami-interview-backend.onrender.com

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="schedule" element={<Schedule/>} />
        <Route path="feedback" element={<Feedback/>} />
        <Route path="admin" element={<Admin/>} />
      </Routes>
    </>
  );
};

export default App;
