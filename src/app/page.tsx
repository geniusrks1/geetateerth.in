"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomsSection from "@/components/RoomsSection";
import SightseeingSection from "@/components/SightseeingSection";
import TransportSection from "@/components/TransportSection";
import ActionButtons from "@/components/ActionButtons";
import ContactSection from "@/components/ContactSection";
import GT_TourAndTravel from "@/components/GT_TourAndTravel";

//import SacredPlaces from "@/components/SacredPlaces";


const MapSection = dynamic(() => import("@/components/MapSection"), { ssr: false });
 const SacredPlaces = dynamic(() => import("@/components/SacredPlaces"), { ssr: false });


const Home: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto py-8 px-4">
        <RoomsSection />
        <GT_TourAndTravel/>
        <SightseeingSection />
        <TransportSection />
        
        <ActionButtons /> 
        
        <SacredPlaces/>
        <MapSection />
        <ContactSection/>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default Home;
