import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/auth/authfront/login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
  );
}
export default App;
