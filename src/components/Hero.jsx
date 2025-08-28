import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        video.pause(); // freeze at last frame
        setShowContent(true); // show content forever
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/event-bg.mp4"
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Foreground Content */}
      {showContent && (
        <div className="hero-container">
          <div className="hero-content">
            <img src="/technova-logo.jpg" alt="TechNova Logo" className="hero-logo" />
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
