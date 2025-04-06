"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>© {new Date().getFullYear()} Geeta Teerth Guest House</p>
    </footer>
  );
};

export default Footer;