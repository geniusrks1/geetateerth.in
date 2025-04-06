// components/TransportSection.tsx
"use client";

import React from "react";
import { PlaneTakeoff } from "lucide-react"; // Optional icon if you're using lucide
import Image from "next/image";

const TransportSection: React.FC = () => {
  return (
    <section className="mb-12 px-4 sm:px-8 py-10 bg-orange-50 rounded-xl shadow-md border border-yellow-300">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/ertiga.webp" // Replace with actual image path
            alt="Airport Transport Service"
            width={600}
            height={400}
            className="rounded-lg shadow-lg border border-orange-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-orange-900 mb-4 flex items-center gap-2">
            <PlaneTakeoff className="text-orange-700" />
            Airport Transport Service
          </h2>
          <p className="text-lg text-orange-800 mb-3">
            🚕 We offer a comfortable and reliable airport pickup service to our guest house.
          </p>
          <p className="text-lg font-semibold text-red-700">
            💰 Only ₹500 from Ayodhya Dham Airport!
          </p>
          <p className="text-sm text-orange-700 mt-2 italic">
            Available 24/7 — Book in advance for smooth pickup.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
