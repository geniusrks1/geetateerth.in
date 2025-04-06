"use client";

import React from "react";

const rooms = [
  { id: 1, type: "Single Room with Fan Only", person: "for 1 person", price: "₹400/night" },
  { id: 2, type: "Single Room with Cooler", person: "for 1 person", price: "₹500/night" },
  { id: 5, type: "Double Bed with Fan", person: "for 2 persons", price: "₹600/night" },
  { id: 3, type: "Double Room with Cooler", person: "for 2 persons", price: "₹800/night" },
  { id: 4, type: "Double Bed with AC", person: "for 2 persons", price: "₹1000/night" },
  { id: 6, type: "Triplet Bed with Cooler", person: "for 3 persons", price: "₹1500/night" },
  { id: 8, type: "Deluxe Room with AC", person: "for 4 persons", price: "₹2000/night" },
];

const RoomsSection: React.FC = () => {
  return (
    <section id="rooms"  className="mb-12 px-4 py-10 bg-[#FFF8E7]">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600 tracking-wide underline underline-offset-4 decoration-yellow-400">
        🚩 Our Rooms at Shri Ram Dham
      </h2>
      <ul className="max-w-4xl mx-auto space-y-4">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="flex flex-col lg:flex-row lg:items-center bg-white border border-yellow-200 px-4 py-4 rounded-xl shadow-lg shadow-orange-100 hover:shadow-orange-200 transition duration-300 space-y-2 lg:space-y-0 lg:space-x-4"
          >
            <span className="text-base font-semibold text-red-800 lg:w-1/2">{room.type}</span>
            <span className="text-sm text-gray-700 lg:w-1/4 lg:text-center">{room.person}</span>
            <span className="text-sm text-orange-600 font-bold lg:w-1/4 lg:text-right">{room.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomsSection;
