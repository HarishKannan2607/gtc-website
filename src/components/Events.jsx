import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1 className="animate-text primary-text">HACK THE PRESENT.</h1>
        <h1 className="animate-text secondary-text">BUILD THE FUTURE.</h1>

        <style>{`
        .header {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          padding: 10px;
          z-index: 1;
        }

        .animate-text {
          margin: 0;
          font-family: "Clash Grotesk", sans-serif;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUpIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .primary-text {
          font-size: 80px;
          animation-delay: 0.2s;
        }

        .secondary-text {
          font-size: 32px;
          color: hsla(0, 0%, 100%, 0.732);
          animation-delay: 0.8s;
        }

        @keyframes fadeUpIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .primary-text {
            font-size: 48px;
          }
          
          .secondary-text {
            font-size: 24px;
          }
        }
      `}</style>
      </header>

      <div className="canvas">
        {/* Event 1 - Robowars */}
        <div className="container">
          <div id="card" style={{ backgroundImage: "url(robowars.png)" }}>
            <div className="title">Robowars</div>
            <div className="subtitle">
              Battle for supremacy! Compete with robots in combat and showcase
              your engineering skills in an intense arena battle.
            </div>
          </div>
        </div>

        {/* Event 2 - Robo Soccer */}
        <div className="container">
          <div id="card" style={{ backgroundImage: "url(/robosoccer.png)" }}>
            <div className="title">RoboSoccer</div>
            <div className="subtitle">
              Robots in action on the soccer field. Design and control robots to
              score goals in an electrifying soccer match.
            </div>
          </div>
        </div>

        {/* Event 3 - Drone Racing */}
        <div className="container">
          <div id="card" style={{ backgroundImage: "url(/robot-drone.png)" }}>
            <div className="title">Drone Racing</div>
            <div className="subtitle">
              Race through obstacles to win! Navigate high-speed drones in a
              thrilling aerial race against the clock.
            </div>
          </div>
        </div>

        {/* Event 4 - Maze Dash */}
        <div className="container">
          <div id="card" style={{ backgroundImage: "url(/robot-flag.png)" }}>
            <div className="title">Maze Dash</div>
            <div className="subtitle">
              Navigate through the maze autonomously. Test your robot's ability
              to find its way through complex mazes in real-time.
            </div>
          </div>
        </div>

        {/* Event 5 - RC Racing */}
        <div className="container">
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

        {/* Event 7 - Capture the Flag */}
        <div className="container">
          <div
            id="card"
            style={{ backgroundImage: "url(/robot-searching.png)" }}
          >
            <div className="title">Capture the Flag</div>
            <div className="subtitle">
              Solve puzzles and claim the flag! Use problem-solving skills and
              teamwork to capture the flag in this cybersecurity-based event.
            </div>
          </div>
        </div>

        {/* Event 8 - CAD/Robot Design */}
        <div className="container">
          <div
            id="card"
            style={{ backgroundImage: "url(/cad-robot-design.jpg)" }}
          >
            <div className="title">CAD/Robot Design</div>
            <div className="subtitle">
              Design and prototype your robot virtually. Use CAD software to
              create detailed designs and bring your robot ideas to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
