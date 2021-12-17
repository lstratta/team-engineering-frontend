import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Trainee from "./components/Trainee";
import NavBar from "./components/NavBar";
import EditProfile from "./components/EditProfile";

function App() {

  const SERVER_URL = 'http://localhost:5757/'
  const JSON_SERVER_URL = 'http://localhost:3000/'

  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path='/graduate/:id' element={<Trainee  serverURL={SERVER_URL}/>}  />
        <Route path='/graduate/:id/edit' element={<EditProfile />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;