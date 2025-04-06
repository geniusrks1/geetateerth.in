"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const TourAndTravelsPage: React.FC = () => {
  const packages = [
    {
      title: "Ayodhya Pilgrimage Tour",
      duration: "3 Days / 2 Nights",
      price: "₹11,990",
      highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Saryu Aarti", "Kanak Bhawan"],
      imageUrl: "/images/ramjanmbhoomi.jpg",
    },
    {
      title: "Kashi Spiritual Sojourn",
      duration: "3 Days / 2 Nights",
      price: "₹8,000",
      highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath Visit"],
      imageUrl: "/images/kashivishwanath.jpg",
    },
    {
      title: "Prayagraj Sangam Experience",
      duration: "2 Days / 1 Night",
      price: "₹5,000",
      highlights: ["Sangam Snan", "Anand Bhavan", "Allahabad Fort"],
      imageUrl: "/images/Prayagraj.webp",
    },
    {
      title: "Vrindavan Krishna Leela Tour",
      duration: "2 Days / 1 Night",
      price: "₹6,500",
      highlights: ["Banke Bihari Temple", "Prem Mandir", "Yamuna Aarti"],
      imageUrl: "/images/vrindavan.jpeg",
    },
    {
      title: "Gaya Pind Daan Rituals",
      duration: "2 Days / 1 Night",
      price: "₹7,200",
      highlights: ["Vishnupad Temple", "Phalgu River", "Bodh Gaya (Optional)"],
      imageUrl: "/images/gaya.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen py-12 px-6 lg:px-24">
      <h1 className="text-4xl text-center font-extrabold text-orange-900 mb-10">🛕 GT Tour and Travel Packages</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((tour, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition transform hover:scale-105"
          >
            <Image
              src={tour.imageUrl}
              alt={tour.title}
              width={500}
              height={280}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-orange-800 mb-2">{tour.title}</h2>
              <p className="text-sm text-gray-600 mb-3"><strong>Duration:</strong> {tour.duration} | <strong>Price:</strong> {tour.price}</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {tour.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a
  href="https://wa.me/917007814974"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 w-full rounded-md text-center block"
>
  💬 Enquire Now
</a>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
  <p className="text-lg text-gray-700 mb-4">
    Can't find your ideal package? We offer custom religious tours.
  </p>
  <a
    href="tel:7007814974"
    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg"
  >
    Contact Us for Custom Package
  </a>

  <div className="mt-6">
    <Link
      href="/"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg"
    >
      ⬅️ Back to Home
    </Link>
  </div>
</div>



    </div>
  );
};

export default TourAndTravelsPage;
