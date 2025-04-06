"use client";

import React from "react";

const sightseeing = [
  "Ram Janam Bhoomi Campus",
  "Bharatkund",
  "Surajkund",
  "Ram Ki Paidi",
  "Mani Parvat",
  "Guptarghat",
  "Bade Hanumanji Darshan",
  "Patthar Cutting Karyashala",
];

const SightseeingSection: React.FC = () => {
  return (
    <section  id="services" className="px-4 py-10 bg-[#FFF9E5] border-t-4 border-orange-300">
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-6">
        🌄 Ayodhya Sightseeing Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* E-Rickshaw Option */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <img
            src="/images/eriksha.jpg"
            alt="E-Rickshaw"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-orange-700 mb-2">🛺 E-Rickshaw Ride</h3>
          <p className="text-gray-700 mb-2">For a peaceful & traditional ride through Ayodhya streets.</p>
          <p className="text-lg text-green-800 font-semibold mb-4">₹1500/trip</p>
          <p className="text-sm text-gray-600 italic">Starts from Ram Mandir and covers:</p>
          <ul className="list-decimal ml-6 mt-2 text-blue-700 text-sm space-y-1">
            {sightseeing.map((place, index) => (
              <li key={`rickshaw-${index}`}>{place}</li>
            ))}
          </ul>
        </div>

        {/* Ertiga Car Option */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <img
            src="/images/ertiga.webp"
            alt="Ertiga"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-orange-700 mb-2">🚗 Ertiga (7-Seater)</h3>
          <p className="text-gray-700 mb-2">Comfortable ride with family across all sacred landmarks.</p>
          <p className="text-lg text-green-800 font-semibold mb-4">₹3100/trip</p>
          <p className="text-sm text-gray-600 italic">Starts from Ram Mandir and covers:</p>
          <ul className="list-decimal ml-6 mt-2 text-blue-700 text-sm space-y-1">
            {sightseeing.map((place, index) => (
              <li key={`ertiga-${index}`}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SightseeingSection;
