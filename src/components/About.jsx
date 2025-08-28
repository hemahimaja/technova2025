import React from "react";
import technovaLogo from "../assets/technova-logo.jpg"; // ✅ correct path

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6">
        
        {/* ✅ Left: Logo Image with vertical divider */}
        <div className="flex justify-center p-6 md:border-r-4 md:border-gray-500">
          <img
            src={technovaLogo}
            alt="TechNova Logo"
            className="w-72 h-72 object-contain rounded-xl border-4 border-cyan-400 shadow-lg"
          />
        </div>

        {/* ✅ Right: Text Info */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">About TechNova 2025</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            TechNova 2025 is a national-level technical symposium bringing
            together bright minds to showcase innovation, creativity, and
            problem-solving skills.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Join us for hackathons, paper presentations, quizzes, and more as we
            explore the future of technology and innovation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
