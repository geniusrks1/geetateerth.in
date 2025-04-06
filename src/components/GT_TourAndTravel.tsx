// components/GT_TourAndTravel.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Ayodhya Pilgrimage Tour",
    duration: "3 Days / 2 Nights",
    price: "₹11,990 per person",
    description: "Explore the birthplace of Lord Rama with guided temple visits and aarti ceremonies.",
    highlights: [
      "Ram Janmabhoomi Darshan",
      "Hanuman Garhi Visit",
      "Saryu Aarti",
      "Kanak Bhawan Tour",
    ],
    imageUrl: "/images/ramjanmbhoomi.jpg",
  
  },
  {
    id: 2,
    title: "Ayodhya-Kashi-Prayagraj Pilgrimage",
    duration: "5 Days / 4 Nights",
    price: "₹36,100 per person",
    description: "Sacred journey through the divine triangle of Ayodhya, Varanasi, and Prayagraj.",
    highlights: [
      "Ram Mandir & Ghats",
      "Kashi Vishwanath Temple",
      "Ganga Aarti",
      "Triveni Sangam Snan",
    ],
    imageUrl: "/images/ayodhyakashiprayagraj.png",
    
  },
  {
    id: 3,
    title: "Kashi Spiritual Sojourn",
    duration: "3 Days / 2 Nights",
    price: "₹8,000 per person",
    description: "Sacred temples, spiritual ghats, and the eternal Ganga await in Kashi.",
    highlights: [
      "Morning Ganga boat ride",
      "Kashi Vishwanath Darshan",
      "Evening Ganga Aarti",
      "Sarnath Visit",
    ],
    imageUrl: "/images/kashivishwanath.jpg",
    
  },
  {
    id: 4,
    title: "Prayagraj Sangam Experience",
    duration: "2 Days / 1 Night",
    price: "₹5,000 per person",
    description: "Take a holy dip in the Triveni Sangam and visit revered landmarks.",
    highlights: [
      "Sangam Snan",
      "Anand Bhavan",
      "Allahabad Fort",
      "Kumbh Mela Area",
    ],
    imageUrl: "/images/Prayagraj.webp",
  },
  {
    id: 5,
    title: "Vrindavan Krishna Leela Tour",
    duration: "2 Days / 1 Night",
    price: "₹6,500 per person",
    description: "Explore the land of Lord Krishna with guided visits to temples and rasleela spots.",
    highlights: [
      "Banke Bihari Temple",
      "Prem Mandir Light Show",
      "ISKCON Vrindavan",
      "Yamuna Aarti",
    ],
    imageUrl: "/images/vrindavan.jpeg",
  },
  {
    id: 6,
    title: "Gaya Pind Daan & Pilgrimage Tour",
    duration: "2 Days / 1 Night",
    price: "₹7,200 per person",
    description: "Perform sacred Pind Daan rituals and visit important spiritual sites in Gaya.",
    highlights: [
      "Pind Daan at Vishnupad Temple",
      "Phalgu River Rituals",
      "Akshayavat Tree",
      "Bodh Gaya Optional Visit",
    ],
    imageUrl: "/images/gaya.jpg",
  },
];

const GT_TourAndTravel: React.FC = () => {
  const router = useRouter();

  const handleMoreInfo = () => {
    router.push("/tourandtravels");
  };

  return (
    <section
      id="tourpackages"
      className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-yellow-50 to-orange-100"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-900 mb-3">
          🛕 GT Tour and Travel Packages
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Dive into sacred experiences across India’s most spiritual destinations. Affordable, guided, and spiritually uplifting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transform transition hover:scale-105 overflow-hidden"
          >
            

            {/* Tour Image */}
            <Image
              src={tour.imageUrl}
              alt={tour.title}
              width={500}
              height={280}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-orange-800 mb-2">
                {tour.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Duration:</strong> {tour.duration} |{" "}
                <strong>Price:</strong> {tour.price}
              </p>
              <p className="text-gray-700 mb-4">{tour.description}</p>

              {/* Highlights */}
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                {tour.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex flex-col gap-3 mt-4">
              <a
    href="tel:7007814974"
    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-center"
  >
    📞 Book Now
  </a>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
      <button
                  onClick={handleMoreInfo}
                  className="w-full border border-orange-600 text-orange-600 hover:bg-orange-100 py-2 px-4 rounded-lg"
                >
                  More Info
                </button>

        <p className="text-lg text-gray-700 mb-4">
          Can't find your ideal package? We offer custom spiritual tours.
        </p>
        <Link
          href="#contact"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg shadow-md"
        >
          Contact Us for Custom Tour
        </Link>
      </div>
    </section>
  );
};

export default GT_TourAndTravel;
