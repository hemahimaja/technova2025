import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import heroImage from "../assets/technova-logo.jpg";

const Hero = () => {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // Freeze video on last frame
    if (video) {
      video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = video.duration;
      });
    }

    // Show text + image after 7s
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/event-bg.mp4"
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Foreground Content */}
      {showContent && (
        <div className="hero-container fade-in">
          <div className="hero-content">
            {/* Left: Image */}
            <img src={heroImage} alt="TechNova Image" className="hero-image" />

            {/* Right: Text */}
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
