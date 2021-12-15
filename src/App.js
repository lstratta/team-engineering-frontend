import React from "react";
import Trainee from "./components/Trainee";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <h1>MAIN APP</h1>
      <Trainee />
    </div>
  );
}

export default App;