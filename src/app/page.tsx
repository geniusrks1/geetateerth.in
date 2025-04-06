"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomsSection from "@/components/RoomsSection";
import SightseeingSection from "@/components/SightseeingSection";
import TransportSection from "@/components/TransportSection";
import ActionButtons from "@/components/ActionButtons";
import MapSection from "@/components/MapSection";
import SacredPlaces from "@/components/SacredPlaces";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <RoomsSection />
       <SacredPlaces/>
        <SightseeingSection />
        <TransportSection />
        <MapSection />
        <ActionButtons /> 
      </main>
      <Footer />
    </div>
  );
};

export default Home;
