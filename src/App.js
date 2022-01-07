import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Trainee from "./components/Trainee";
import NavBar from "./components/NavBar";
import EditProfile from "./components/EditProfile";
import TalentSpotlight from "./components/industry-partner/TalentSpotlight";

function App() {

  const SERVER_URL = 'http://localhost:5757/'
  const JSON_SERVER_URL = 'http://localhost:3000/'

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/graduate/:_id' element={<Trainee  serverURL={SERVER_URL}/>}  />
        <Route path='/graduate/:_id/edit' element={<EditProfile serverURL={SERVER_URL} />} />
        <Route exact path="/industry-partner/TalentSpotlight" element={<TalentSpotlight serverURL={JSON_SERVER_URL} />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;