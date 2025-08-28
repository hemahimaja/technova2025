import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src="/technova-logo.jpg" alt="logo" className="h-10" />
          <span className="font-bold text-lg text-white">TechNova 2025</span>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#events" className="hover:text-white">Sub-Events</a>
          <a href="#schedule" className="hover:text-white">Schedule</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-white"><FaFacebook /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} TechNova 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
