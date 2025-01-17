import type { Metadata } from "next";

import { Poppins } from 'next/font/google';
import "./globals.css";




const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});



export const metadata: Metadata = {
  title: "Geeta Teerth Guest House | Affordable Stay in Ayodhya",
  description: "Book affordable rooms at Geeta Teerth Guest House, located near Shri Ram Bhoomi in Ayodhya. Available on Airbnb, Booking.com, and more.",
  keywords: "Geeta Teerth Guest House, Ayodhya stay, Airbnb Ayodhya, Booking.com Ayodhya, TripAdvisor guest house, affordable rooms in Ayodhya",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  openGraph: {
    title: "Geeta Teerth Guest House | Affordable Stay in Ayodhya",
    description: "Book your stay at Geeta Teerth Guest House, listed on justdial.com, Booking.com, and easemytrip. Comfort and affordability near Shri Ram Bhoomi.",
    url: "https://www.geetateerthguesthouse.com",
    siteName: "Geeta Teerth Guest House",
    images: [
      {
        url: "https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg",
        width: 1200,
        height: 630,
        alt: "Geeta Teerth Guest House in Ayodhya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geeta Teerth Guest House | Affordable Stay in Ayodhya",
    description: "Comfortable and affordable rooms near Shri Ram Bhoomi in Ayodhya. Available on Airbnb, Booking.com, and TripAdvisor.",
    images: ["https://images.jdmagicbox.com/v2/comp/ayodhya/k3/9999p5278.5278.250106133046.r5k3/catalogue/atc6ujlwewcngs2-hi6q1fkbau.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
    <body className={poppins.className}>
        
            <main className='font-normal'>
           
              {children}
             
            </main>
        
      </body>
    </html>
  );
}
