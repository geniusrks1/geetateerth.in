"use client";

import React from "react";
import { PhoneCall, User, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#FFF8E7] py-10 px-4 sm:px-8 lg:px-16 border-t-4 border-yellow-400"
    >
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-400">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 border-b-2 border-yellow-300 pb-2 flex items-center gap-2">
          🛕 Contact Information
        </h2>

        {/* Manager Section */}
        <div className="space-y-4 text-base sm:text-lg text-red-900 mb-6">
          <div className="flex items-start sm:items-center space-x-3 flex-wrap">
            <User className="text-orange-600 shrink-0 mt-1 sm:mt-0" />
            <p>
              <span className="font-semibold">Managed by:</span>{" "}
              Rohit Kumar
            </p>
          </div>
          <div className="flex items-start sm:items-center space-x-3 flex-wrap">
            <PhoneCall className="text-orange-600 shrink-0 mt-1 sm:mt-0" />
            <p>
              <span className="font-semibold">Phone:</span>
              <a
                href="tel:7007814974"
                className="underline hover:text-orange-700 ml-1 block sm:inline"
              >
                7007814974
              </a>
              <a
                href="tel:9454399517"
                className="underline hover:text-orange-700 ml-1 block sm:inline"
              >
                9454399517
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start sm:items-center space-x-3 text-base sm:text-lg text-red-900 mb-6 flex-wrap">
          <Mail className="text-orange-600 shrink-0 mt-1 sm:mt-0" />
          <p>
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:info@geetateerth.in"
              className="underline hover:text-orange-700 ml-1 block sm:inline"
            >
              info@geetateerth.in
            </a>
          </p>
        </div>

        {/* Founder Section */}
        <div className="space-y-4 text-base sm:text-lg text-red-900">
          <div className="flex items-start sm:items-center space-x-3 flex-wrap">
            <User className="text-orange-600 shrink-0 mt-1 sm:mt-0" />
            <p>
              <span className="font-semibold">Founder:</span>{" "}
              Ram Tirth
            </p>
          </div>
          <div className="flex items-start sm:items-center space-x-3 flex-wrap">
            <PhoneCall className="text-orange-600 shrink-0 mt-1 sm:mt-0" />
            <p>
              <span className="font-semibold">Phone:</span>
              <a
                href="tel:7275323478"
                className="underline hover:text-orange-700 ml-1 block sm:inline"
              >
                7275323478
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
