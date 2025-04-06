"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-red-800 text-yellow-100 py-6 mt-10 shadow-inner border-t-4 border-yellow-400">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="flex justify-center items-center mb-2">
          <span className="text-2xl mr-2">🛕</span>
          <h2 className="text-xl font-bold tracking-wider">Geeta Teerth Guest House</h2>
        </div>
        <p className="text-sm italic mb-1">"In the heart of Ayodhya, where divinity meets hospitality."</p>
        <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved | Jai Shri Ram 🚩</p>
      </div>
    </footer>
  );
};

export default Footer;
