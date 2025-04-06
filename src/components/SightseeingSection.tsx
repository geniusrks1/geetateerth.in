"use client";

import React, { useState } from "react";

const sightseeing = [
  "Ram Janam Bhoomi Campus",
  "Bahratkund",
  "Surajkund",
  "Ram Ki Paidi",
  "Mani Parvat",
  "Guptarghat",
  "Bade Hanumanji Darshan",
  "Patthar Cutting Karyashala",
];

const SightseeingSection: React.FC = () => {
  // const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  // const handlePlaceClick = (place: string) => {
  //   setSelectedPlace(place);
  
  // };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Sightseeing Services</h2>
      <p className="text-gray-700 mb-4">Local Sightseeing in Ertiga (7-seater) - ₹3100/trip</p>
      <p className="text-gray-600">Start from Ram Mandir and visit:</p>
      <ul className="list-disc ml-6 mt-4">
        {sightseeing.map((place, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-600 hover:underline"
            // onClick={() => handlePlaceClick(place)}
          >
            {index + 1}. {place}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SightseeingSection;