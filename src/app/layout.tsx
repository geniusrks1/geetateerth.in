import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Geeta Teerth Guest House & Tours | AC Rooms & Pilgrimage Packages in Ayodhya",
  description:
    "Stay at Geeta Teerth Guest House in Ayodhya — affordable AC rooms near Shri Ram Janmabhoomi. Explore pilgrimage tour packages for Kashi, Varanasi, Prayagraj, Vrindavan, Gaya & more. Jai Shree Ram!",
  keywords:
    "Geeta Teerth Guest House, Ayodhya stay, AC rooms in Ayodhya, Ayodhya tour packages, Ayodhya travel, Kashi tour, Varanasi guest house, Prayagraj trip, Vrindavan travel, Gaya pilgrimage, Jai Shree Ram, Booking.com Ayodhya, Airbnb Ayodhya, affordable stay in Ayodhya, religious travel Ayodhya, sacred places near Ram Mandir",
  robots: "index, follow",
  openGraph: {
    title: "Geeta Teerth Guest House & Tours | AC Rooms & Pilgrimage Packages in Ayodhya",
    description:
      "Comfortable AC rooms near Shri Ram Janmabhoomi at Geeta Teerth Guest House. Also explore sacred tours to Kashi, Varanasi, Prayagraj, Vrindavan, and Gaya.",
    url: "https://www.geetateerthguesthouse.com",
    siteName: "Geeta Teerth Guest House",
    images: [
      {
        url: "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
        width: 1200,
        height: 630,
        alt: "Geeta Teerth Guest House in Ayodhya near Ram Janmabhoomi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geeta Teerth Guest House & Tours | Ayodhya Stay & Pilgrimage Packages",
    description:
      "Book your stay at Geeta Teerth Guest House near Shri Ram Mandir. Discover spiritual tour packages for Ayodhya, Kashi, Varanasi, Prayagraj, Vrindavan & Gaya. Jai Shree Ram!",
    images: [
      "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Geeta Teerth Guest House & Tours",
  "description":
    "Affordable AC rooms near Shri Ram Janmabhoomi in Ayodhya and sacred tour packages to Kashi, Varanasi, Prayagraj, Vrindavan, and Gaya.",
  "image":
    "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
  "url": "https://www.geetateerthguesthouse.com",
  "telephone": "+91-7007814974",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lucknow Highway near Rto Office Transport Nagar",
    "addressLocality": "Ayodhya",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "224123",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.757771,
    "longitude": 82.128427
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air Conditioned Rooms",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking Available",
      "value": true
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GT Tour and Travel Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Trip",
          "name": "Ayodhya Pilgrimage Tour",
          "description":
            "Explore sacred sites in Ayodhya including Shri Ram Janmabhoomi and Hanuman Garhi."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Trip",
          "name": "Kashi - Varanasi Tour",
          "description":
            "Spiritual journey to Kashi Vishwanath Temple and Ganga Aarti experience in Varanasi."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Trip",
          "name": "Prayagraj Pilgrimage Tour",
          "description":
            "Visit the Triveni Sangam, Anand Bhavan, and Akshaya Vat in Prayagraj."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Trip",
          "name": "Vrindavan Spiritual Tour",
          "description":
            "Explore the temples of Lord Krishna and the divine aura of Vrindavan."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Trip",
          "name": "Gaya - Bodh Gaya Tour",
          "description":
            "Visit the Vishnupad Temple and Mahabodhi Temple in Gaya."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "146"
  },
  "review": [
    {
      "@type": "Review",
      "author": "Ravi Shankar",
      "datePublished": "2024-11-01",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Wonderful stay with a divine atmosphere. Just walking distance from Ram Mandir!"
    },
    {
      "@type": "Review",
      "author": "Sneha Patel",
      "datePublished": "2024-12-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.7",
        "bestRating": "5"
      },
      "reviewBody": "Rooms were clean and the staff was polite. Also loved the spiritual tour options!"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/people/Geeta-Teerth-Guest-House-Ayodhya/61573535986367/",
    "https://www.instagram.com/geetateerth",
    "https://www.google.com/maps?q=26.757771,82.128427"
  ]
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        <main className="font-normal">{children}</main>
      </body>
    </html>
  );
}
