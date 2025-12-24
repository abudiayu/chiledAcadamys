<<<<<<< HEAD
import React from 'react'
import Banner from './Components/Banner/Banner'
import Catagory from './Components/Catagory/Catagory'
import Footer from './Components/Footer/Footer'
import Row from './Components/Row/Row'
function App() {
  return (
    <div>

      <Banner/>
      <Catagory/> 
      <Row/>
      <Footer/>
    </div>
  )
}

export default App
=======
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
>>>>>>> 90890e7a3327a480e8299b274f0ef185c702b944
