
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/auth/authfront/login.jsx";
import Banner from './Components/Banner/Banner'
import Catagory from './Components/Catagory/Catagory'
import Footer from './Components/Footer/Footer'
import Row from './Components/Row/Row'
import Signup from "./Components/loginPage/Signup.jsx"
function App() {
  return (
    <Routes>
      <Banner />
      <Catagory />
      <Row />
      <Footer />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signup" element={<Login />}/>
    </Routes>
  );
}
export default App;
