import React from "react";
import Trainee from "./components/Trainee";
import NavBar from "./components/NavBar";
import EditProfile from "./components/EditProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Trainee />} />
        <Route path='EditProfile' element={<EditProfile />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;