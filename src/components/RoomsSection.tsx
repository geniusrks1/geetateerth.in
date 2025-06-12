"use client";

import React, { useState } from "react";

const rooms = [
  { id: 1, type: "Single Room with Fan Only", person: 1, price: 400, max: 1 },
  { id: 2, type: "Single Room with Cooler", person: 1, price: 500, max: 1 },
  { id: 5, type: "Double Bed with Fan", person: 2, price: 600, max: 2 },
  { id: 3, type: "Double Room with Cooler", person: 2, price: 700, max: 2 },
  { id: 4, type: "Double Bed with AC", person: 2, price: 1000, max: 2 },
  { id: 6, type: "Triplet Bed with Cooler", person: 3, price: 1000, max: 1 },
  { id: 8, type: "Deluxe Room with AC", person: 4, price: 1800, max: 2 },
];

const RoomsSection: React.FC = () => {
  const [numPersons, setNumPersons] = useState(1);
  const [roomCounts, setRoomCounts] = useState<Record<number, number>>(
    Object.fromEntries(rooms.map((room) => [room.id, 0]))
  );

  const handleRoomCountChange = (roomId: number, count: number, max: number) => {
    const safeCount = Math.min(Math.max(0, count), max);
    setRoomCounts((prev) => ({
      ...prev,
      [roomId]: safeCount,
    }));
  };

  const totalIdealCapacity = rooms.reduce(
    (acc, room) => acc + room.person * (roomCounts[room.id] || 0),
    0
  );

  const extraPersons = Math.max(0, numPersons - totalIdealCapacity);
  const extraCharge = extraPersons * 200;

  const totalCost =
    rooms.reduce(
      (acc, room) => acc + room.price * (roomCounts[room.id] || 0),
      0
    ) + extraCharge;

  const handleBooking = () => {
    const selectedRooms = rooms.filter((room) => roomCounts[room.id] > 0);
    if (selectedRooms.length === 0) {
      alert("Please select at least one room to book.");
      return;
    }

    let summary = `Booking Summary:\nPersons: ${numPersons}\n`;

    selectedRooms.forEach((room) => {
      const count = roomCounts[room.id];
      summary += `Room Type: ${room.type} x ${count} = ₹${room.price * count}/night\n`;
    });

    if (extraPersons > 0) {
      summary += `Extra Persons: ${extraPersons} × ₹200 = ₹${extraCharge}\n`;
    }

    summary += `Total Price: ₹${totalCost}/night`;

    alert(summary);
  };

  return (
    <section id="rooms" className="mb-12 px-4 py-10 bg-[#FFF8E7]">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600 tracking-wide underline underline-offset-4 decoration-yellow-400">
       🚩 Our Rooms at Shri Ram Dham
      </h2>

      <ul className="max-w-4xl mx-auto space-y-4">
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
              <input
                type="number"
                min={0}
                max={room.max}
                value={roomCounts[room.id] || 0}
                onChange={(e) =>
                  handleRoomCountChange(
                    room.id,
                    parseInt(e.target.value) || 0,
                    room.max
                  )
                }
                className="w-24 border border-gray-300 rounded px-2 py-1"
              />
 <p className="w-24 text-center mt-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm border border-green-300">
  Available: {room.max} 
</p>



            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-center mt-8 text-gray-800">
        Additional guests can be accommodated at ₹200 per person
      </h3>

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md border border-yellow-200">
        <h3 className="text-2xl font-bold text-center text-orange-700 mb-6">
          Book Your Stay
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Number of Persons:</label>
            <input
              type="number"
              min={1}
              value={numPersons}
              onChange={(e) => setNumPersons(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="text-lg font-semibold text-gray-700">
            Estimated Total: ₹{totalCost}/night{" "}
            {extraPersons > 0 && (
              <span className="text-sm text-red-600">
                (Includes ₹{extraCharge} for {extraPersons} extra person
                {extraPersons > 1 && "s"})
              </span>
            )}
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Proceed to Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
