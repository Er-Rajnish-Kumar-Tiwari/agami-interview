import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rajnish from "./Pages/Rajnish";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Rajnish />} />
      </Routes>
  );
};

export default App;
