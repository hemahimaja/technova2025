import React from "react";
import "./Hero.css";
import logo from "../assets/technova-logo.jpg"; // your logo

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/event-bg.mp4"
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Foreground Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Left: Logo */}
          <img src={logo} alt="TechNova Logo" className="hero-logo" />

          {/* Right: Texts */}
          <div className="hero-text">
            <h1 className="hero-title">Welcome to TechNova 2025</h1>
            <p className="hero-tagline">Ignite • Innovate • Inspire</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
