import React from "react";
import { GiDeliveryDrone } from "react-icons/gi";
import "./RoboRace.css";

const RobotRace = () => {
  return (
    <div className="robot-race-container">
      {/* First Robot */}
      <div className="robot blue">
        <GiDeliveryDrone />
      </div>


      {/* Second Robot */}
      <div className="robot green">
        <GiDeliveryDrone />
      </div>
    </div>
  );
};

export default RobotRace;
