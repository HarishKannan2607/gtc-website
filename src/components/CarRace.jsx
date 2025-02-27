import React from "react";
import { Car } from "lucide-react";
import { GiFinishLine } from "react-icons/gi";
import "./CarRace.css";

const CarRace = () => {
  return (
    <div className="car-race-container">
      {/* Race Track */}
      <div className="race-track">
        {/* Finish Line */}
        <div className="finish-line">
          <GiFinishLine />
        </div>

        {/* First Car */}
        <div className="car blue">
          <Car size={80} />
        </div>

        {/* Second Car */}
        <div className="car green">
          <Car size={80} />
        </div>
      </div>
    </div>
  );
};

export default CarRace;
