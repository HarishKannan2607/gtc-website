import React from "react";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import RobosoccerLoader from "./components/RobosoccerLoader";
import RobotRace from "./components/RoboRace";
import CarRace from "./components/CarRace";

const App = () => {
  return (
    <div>
      <Navbar />
      <Events />
    </div>
  );
};

export default App;
