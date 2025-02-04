import React from "react";
import { Bot, Zap } from "lucide-react";
import "./RobotClashLoader.css";

const RobotClashLoader = () => {
  return (
    <div className="flex justify-center items-center h-full w-full p-4 overflow-hidden z-50">
      <div className="relative flex items-center w-48">
        <Bot className="w-24 h-24 text-blue-500 animate-[clash-left_1s_infinite]" />
        <Zap className="w-16 h-16 text-yellow-500 opacity-0 animate-[thunder_1s_infinite]" />
        <Bot
          className="w-24 h-24 text-red-500 animate-[clash-right_1s_infinite]"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
      <style>
        {`
          @keyframes clash-left {
            0% { transform: translateX(-2rem); }
            50% { transform: translateX(0); }
            100% { transform: translateX(-2rem); }
          }

          @keyframes clash-right {
            0% { transform: translateX(2rem) scaleX(-1); }
            50% { transform: translateX(0) scaleX(-1); }
            100% { transform: translateX(2rem) scaleX(-1); }
          }

          @keyframes thunder {
            0%, 100% { opacity: 0; transform: scale(0.8); translateX: 20px }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  );
};

export default RobotClashLoader;
