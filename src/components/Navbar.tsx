"use client";

import React from "react";


const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-lg">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        aria-label="Main Navigation"
      >
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/geetateerth.png" 
            alt="Geeta Teerth Guest House Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <h1 className="text-3xl font-extrabold tracking-wide">
            Geeta Teerth Guest House
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#rooms"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Rooms
          </a>
          <a
            href="#services"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Placeholder (To be added later) */}
      </nav>
    </header>
  );
};

export default Navbar;
