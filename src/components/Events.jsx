import React, { useState } from "react";
import "./Events.css";
import RobotClashLoader from "./RobotClashLoader";
import RobosoccerLoader from "./RobosoccerLoader";
import RobotRace from "./RoboRace";
import CarRace from "./CarRace";

const Events = () => {
  const [loadingEvent, setLoadingEvent] = useState("");

  const handleClick = (event) => {
    setLoadingEvent(event);
    setTimeout(() => {
      window.location.href = "https://unstop.com/";
    }, 4000);
  };

  if (loadingEvent === "robowars") {
    return <RobotClashLoader />;
  }
  if (loadingEvent === "robosoccer") {
    return <RobosoccerLoader />;
  }
  if (loadingEvent === "RoboRace") {
    return <RobotRace />;
  }
  if (loadingEvent === "CarRace") {
    return <CarRace />;
  }

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1
          className="animate-text primary-text"
          style={{ fontSize: "3rem", margin: 0 }}
        >
          HACK THE PRESENT.
        </h1>
        <h1
          className="animate-text secondary-text"
          style={{ fontSize: "2rem", margin: 0 }}
        >
          BUILD THE FUTURE.
        </h1>
      </header>

      <div className="canvas">
        {/* Event 1 - Robowars */}
        <div className="container" onClick={() => handleClick("robowars")}>
          <div id="card" style={{ backgroundImage: "url(robowars.png)" }}>
            <div className="title">Robowars</div>
            <div className="subtitle">
              Battle for supremacy! Compete with robots in combat and showcase
              your engineering skills in an intense arena battle.
            </div>
          </div>
        </div>

        {/* Event 2 - RoboSoccer */}
        <div className="container" onClick={() => handleClick("robosoccer")}>
          <div id="card" style={{ backgroundImage: "url(/robosoccer.png)" }}>
            <div className="title">RoboSoccer</div>
            <div className="subtitle">
              Robots in action on the soccer field. Design and control robots to
              score goals in an electrifying soccer match.
            </div>
          </div>
        </div>

        {/* drone racing */}
        <div className="container" onClick={() => handleClick("RoboRace")}>
          <div id="card" style={{ backgroundImage: "url(/robot-drone.png)" }}>
            <div className="title">Drone Racing</div>
            <div className="subtitle">
              Race through obstacles to win! Navigate high-speed drones in a
              thrilling aerial race.
            </div>
          </div>
        </div>

        <div className="container">
          <div
            id="card"
            style={{ backgroundImage: "url(/robot-searching.png)" }}
          >
            <div className="title">Maze Dash</div>
            <div className="subtitle">
              Navigate through the maze autonomously. Test your robot's ability
              to find its way.
            </div>
          </div>
        </div>

        {/* Event 5 - RC Racing */}
        <div className="container" onClick={() => handleClick("CarRace")}>
          <div id="card" style={{ backgroundImage: "url(/robot-car.png)" }}>
            <div className="title">RC Racing</div>
            <div className="subtitle">
              Speed and precision in every race. Race remote-controlled cars and
              fine-tune your design for maximum performance.
            </div>
          </div>
        </div>

        {/* Event 6 - HackAIthon */}
        <div className="container">
          <div id="card" style={{ backgroundImage: "url(/robot-laptop.png)" }}>
            <div className="title">Hack-AI-thon</div>
            <div className="subtitle">
              AI tools to solve mini-project challenges. Innovate using AI
              technologies to develop solutions for real-world problems in just
              24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
