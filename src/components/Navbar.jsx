import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        color: "white",
        backgroundColor: "hsla(0, 0%, 100%, 0.090)",
        backdropFilter: "blur(4px)",
        borderRadius: "0px 0px 20px 20px",
      }}
    >
      <div>
        <h1>GTC</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "16px",
        }}
      >
        <p
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "all",
            transitionDuration: "0.4s",
          }}
          className="links"
        >
          Home
        </p>
        <p
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "all",
            transitionDuration: "0.4s",
          }}
          className="links"
        >
          About Us
        </p>
        <p
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "all",
            transitionDuration: "0.4s",
          }}
          className="links"
        >
          Events
        </p>
        <p
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "all",
            transitionDuration: "0.4s",
          }}
          className="links"
        >
          Team
        </p>
      </div>
      <div>
        <button
          style={{
            padding: "15px 25px",
            borderRadius: "20px",
            border: "none",
            fontWeight: "bold",
          }}
          className="register-button"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
