"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-lg">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        aria-label="Main Navigation"
      >
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-4 p-1 rounded-full">
          <Image
            src="/images/geetateerth.png"
            alt="Geeta Teerth Guest House Logo"
            width={48}
            height={48}
            className="rounded-full shadow-lg bg-white"
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-white">
            Geeta Teerth
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#rooms"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Rooms
          </Link>
          <Link
            href="#tourpackages"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Tour Packages
          </Link>
          <Link
            href="#services"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link
            href="#rooms"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-300 transition-all duration-300"
          >
            Rooms
          </Link>
          <Link
            href="#tourpackages"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-300 transition-all duration-300"
          >
            Tour Packages
          </Link>
          <Link
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-300 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-300 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
