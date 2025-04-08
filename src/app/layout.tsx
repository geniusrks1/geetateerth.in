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
  title: "Book AC Rooms Near Ram Mandir | Geeta Teerth Guest House & Sacred Tours, Ayodhya",
  description:
    "Stay at Geeta Teerth Guest House near Ram Janmabhoomi, Ayodhya. Affordable AC rooms, family-friendly stay, spiritual ambiance, and pilgrimage packages to Kashi, Prayagraj, Vrindavan, Gaya. Airport pickup available. Jai Shree Ram!",
  keywords:
    "Geeta Teerth Guest House, Ayodhya stay, AC rooms in Ayodhya, book room near Ram Mandir, sacred guest house Ayodhya, Kashi tour package, Varanasi spiritual tour, Prayagraj pilgrimage, Vrindavan Krishna tour, Gaya Vishnupad temple, Jai Shree Ram stay, Ayodhya temple rooms, spiritual stay near Ram Mandir, budget hotels Ayodhya, Ayodhya darshan trip, religious stay Uttar Pradesh",
  robots: "index, follow",
  metadataBase: new URL("https://www.geetateerth.in"),
  alternates: {
    canonical: "https://www.geetateerth.in",
  },
  openGraph: {
    title: "Book Sacred Stay in Ayodhya | Geeta Teerth Guest House & Pilgrimage Tours",
    description:
      "Comfortable AC rooms near Ram Mandir at Geeta Teerth Guest House, Ayodhya. Explore spiritual tour packages to Kashi, Prayagraj, Vrindavan, and Gaya. Ideal for families and pilgrims.",
    url: "https://www.geetateerth.in",
    siteName: "Geeta Teerth Guest House",
    images: [
      {
        url: "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
        width: 1200,
        height: 630,
        alt: "Geeta Teerth Guest House near Ram Janmabhoomi Ayodhya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geeta Teerth Guest House – Sacred Stay Near Ram Mandir, Ayodhya",
    description:
      "Affordable rooms near Shri Ram Janmabhoomi with spiritual tour packages to Varanasi, Prayagraj, Gaya & Vrindavan. Perfect for religious travelers. Book now!",
    images: [
      "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.geetateerthguesthouse.com#localbusiness",
      "name": "Geeta Teerth Guest House & Tours",
      "description": "Affordable AC rooms near Shri Ram Janmabhoomi in Ayodhya and sacred tour packages to Kashi, Varanasi, Prayagraj, Vrindavan, and Gaya.",
      "image": "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
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
        "latitude": 26.757655,
        "longitude": 82.128452
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioned Rooms", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Parking Available", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Couple Friendly Rooms", "value": true }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GT Tour and Travel Packages",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Trip", "name": "Ayodhya Pilgrimage Tour", "description": "Explore sacred sites in Ayodhya including Shri Ram Janmabhoomi and Hanuman Garhi." }},
          { "@type": "Offer", "itemOffered": { "@type": "Trip", "name": "Kashi - Varanasi Tour", "description": "Spiritual journey to Kashi Vishwanath Temple and Ganga Aarti experience in Varanasi." }},
          { "@type": "Offer", "itemOffered": { "@type": "Trip", "name": "Prayagraj Pilgrimage Tour", "description": "Visit the Triveni Sangam, Anand Bhavan, and Akshaya Vat in Prayagraj." }},
          { "@type": "Offer", "itemOffered": { "@type": "Trip", "name": "Vrindavan Spiritual Tour", "description": "Explore the temples of Lord Krishna and the divine aura of Vrindavan." }},
          { "@type": "Offer", "itemOffered": { "@type": "Trip", "name": "Gaya - Bodh Gaya Tour", "description": "Visit the Vishnupad Temple and Mahabodhi Temple in Gaya." }}
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
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Wonderful stay with a divine atmosphere. Just walking distance from Ram Mandir!"
        },
        {
          "@type": "Review",
          "author": "Sneha Patel",
          "datePublished": "2024-12-10",
          "reviewRating": { "@type": "Rating", "ratingValue": "4.7", "bestRating": "5" },
          "reviewBody": "Rooms were clean and the staff was polite. Also loved the spiritual tour options!"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/people/Geeta-Teerth-Guest-House-Ayodhya/61573535986367/",
        "https://www.instagram.com/geetateerth",
        "https://www.google.com/maps?q=26.757655,82.128452"
      ]
    },
    {
      "@type": "Hotel",
      "@id": "https://www.geetateerth.in#rooms",
      "name": "Geeta Teerth Guest House",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "3",
        "bestRating": "5"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lucknow Highway near RTO Office Transport Nagar",
        "addressLocality": "Ayodhya",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "224123",
        "addressCountry": "IN"
      },
      "telephone": "+91-7007814974",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Couple Friendly", "value": true }
      ]
    },
    {
      "@type": "Place",
      "@id": "https://www.geetateerth.in#place",
      "name": "Geeta Teerth Guest House",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.757655,
        "longitude": 82.128452
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lucknow Highway near RTO Office Transport Nagar",
        "addressLocality": "Ayodhya",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "224123",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.geetateerth.in#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Geeta Teerth Guest House couple friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer couple-friendly rooms for married and unmarried couples."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free Wi-Fi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, free Wi-Fi is available in all rooms and common areas."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with train or flight bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We assist with hotel bookings, train, bus, and flight ticket bookings."
          }
        },
        {
          "@type": "Question",
          "name": "Are there OYO-style rooms in Ayodhya available here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide affordable OYO-style rooms in Ayodhya and Faizabad."
          }
        }
      ]
    },

    {
      "@type": "Organization",
      "@id": "https://www.geetateerth.in#organization",
      "name": "Geeta Teerth Guest House",
      "url": "https://www.geetateerth.in",
      "logo": "https://www.geetateerth.in/images/geetateerth.webp",
      "sameAs": [
        "https://www.facebook.com/people/Geeta-Teerth-Guest-House-Ayodhya/61573535986367/",
        "https://www.instagram.com/geetateerth"
      ]
    }
    


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
        <link rel="icon" href="/images/geetateerth.webp" type="image/png" />
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
