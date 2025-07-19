"use client";

import React from "react";

const rooms = [
  { id: 1, type: "Single Room with Fan/Cooler Only", person: 1, price: 300, max: 4 },
  { id: 2, type: "Double Bed with Fan", person: 2, price: 500, max: 3 },
  { id: 3, type: "Double Room with Cooler", person: 2, price: 700, max: 4 },
  { id: 4, type: "Double Bed with AC", person: 2, price: 1000, max: 4 },
  { id: 5, type: "Triplet Bed with Cooler", person: 3, price: 1000, max: 1 },
  { id: 6, type: "Deluxe Room with AC", person: 4, price: 1800, max: 2 },
];

const RoomsSection: React.FC = () => {
  return (
    <section id="rooms" className="mb-12 px-4 py-10 bg-[#FFF8E7]">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600 tracking-wide underline underline-offset-4 decoration-yellow-400">
        🚩 Our Rooms at Shri Ram Dham
      </h2>

      <ul className="max-w-4xl mx-auto mt-12 space-y-4">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="flex flex-col lg:flex-row lg:items-center bg-white border border-yellow-200 px-4 py-4 rounded-xl shadow-lg shadow-orange-100 hover:shadow-orange-200 transition duration-300 space-y-2 lg:space-y-0 lg:space-x-4"
          >
            <div className="lg:w-1/2 font-semibold text-red-800">{room.type}</div>
            <div className="lg:w-1/4 text-sm text-gray-700 lg:text-center">
              for {room.person} person{room.person > 1 && "s"}
            </div>
            <div className="lg:w-1/4 text-sm font-bold text-orange-600 lg:text-right">
              ₹{room.price}/night
            </div>
            <div className="w-full lg:w-auto mt-2 lg:mt-0">
              <p className="w-24 text-center bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm border border-green-300">
                Available: {room.max}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomsSection;
