import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Stations from "./Stations";

function App() {
  return (
    <div className="App">
      <div></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations" element={<Stations />} />
      </Routes>
    </div>
  );
}

export default App;
