"use client";

import React from "react";

const rooms = [
  {id: 1, type: "Single Room with Fan Only", person: "for 1 person", price: "₹400/night" },
  { id: 2, type: "Single Room with Cooler", person: "for 1 person", price: "₹500/night" },
  { id: 5, type: "Double Bed with Fan", person: "for 2 persons", price: "₹600/night" },
  { id: 3, type: "Double Room with Cooler", person: "for 2 persons", price: "₹800/night" },
  { id: 4, type: "Double Bed with AC", person: "for 2 persons", price: "₹1000/night" },
  { id: 6, type: "Triplet Bed with Cooler", person: "for 3 persons", price: "₹1500/night" },
  { id: 8, type: "Deluxe Room with AC", person: "for 4 persons", price: "₹2000/night" },
];

const RoomsSection: React.FC = () => {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Rooms
      </h2>
      <ul className="max-w-3xl mx-auto space-y-2">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="flex items-center justify-between bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm"
          >
            <span className="w-1/2 text-left text-gray-800">{room.type}</span>
            <span className="w-1/4 text-center text-gray-600">{room.person}</span>
            <span className="w-1/4 text-right text-gray-900 font-semibold">{room.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomsSection;
