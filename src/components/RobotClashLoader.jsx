import React from "react";
import { Bot, Zap } from "lucide-react";
import "./RobotClashLoader.css";

const RobotClashLoader = () => {
  return (
    <div className="loader-container">
      <div className="relative flex items-center w-48">
        <Bot className="bot-left" />
        <Zap className="zap" />
        <Bot className="bot-right" />
      </div>
    </div>
  );
};

export default RobotClashLoader;
