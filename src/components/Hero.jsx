import React, { useEffect, useState } from "react";
import "./Hero.css";
import logo from "../assets/technova-logo.jpg";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Show text + logo after 7s
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video (plays once) */}
      {!videoEnded && (
        <video
          src="/videos/event-bg.mp4"
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={() => setVideoEnded(true)} // hide video after it finishes
        ></video>
      )}

      {/* Overlay (dark for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Foreground Content (appears after 7s, stays forever) */}
      {showContent && (
        <div className="hero-container">
          <div className="hero-content">
            {/* Logo */}
            <img src={logo} alt="TechNova Logo" className="hero-logo" />

            {/* Text */}
            <div className="hero-text">
              <h1 className="hero-title">Welcome to TechNova 2025</h1>
              <p className="hero-tagline">Ignite • Innovate • Inspire</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
