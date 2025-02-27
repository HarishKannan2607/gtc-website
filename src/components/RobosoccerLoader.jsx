import React from "react";
import { Bot, Volleyball } from "lucide-react";
import "./RobosoccerLoader.css";

const RobosoccerLoader = () => {
  return (
    <div className="loader-container">
      <div className="volleyball">
        <Volleyball size={80} className="text-white" />
      </div>

      {/* Bot (Chasing the ball) */}
      <div className="bot">
        <Bot size={96} className="text-red-500" />
      </div>
      <div className="bot1">
        <Bot size={96} className="text-red-500" />
      </div>
    </div>
  );
};

export default RobosoccerLoader;
