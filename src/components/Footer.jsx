import React from "react";
import logo from "../assets/technova-logo.jpg";

// ✅ Import social icons from react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* ✅ Logo and name */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="TechNova Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="font-semibold text-lg">TechNova 2025</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#events" className="hover:text-cyan-300">Events</a>
          <a href="#schedule" className="hover:text-cyan-300">Schedule</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
          <a href="#sponsors" className="hover:text-cyan-300">Sponsors</a>
        </div>

        {/* ✅ Social Media Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-cyan-300">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan-300">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-cyan-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} TechNova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
