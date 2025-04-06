"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const guestHouseCoords: [number, number] = [26.757771, 82.128427];

const LocationMap = () => {
  interface IconDefaultWithGetIconUrl extends L.Icon.Default {
    _getIconUrl?: () => string;
  }

  useEffect(() => {
    delete (L.Icon.Default.prototype as IconDefaultWithGetIconUrl)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="px-4 py-8 bg-[#FFF9E5] border-t-4 border-orange-300">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-800 mb-2">
        🗺️ Our Location – Geeta Teerth Guest House
      </h2>
      <p className="text-center text-md sm:text-lg text-gray-700 mb-4">
        📍 Lucknow Highway, Opposite Kaushalpuri Colony, near RTO Office, Ayodhya
      </p>
      <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-orange-300">
        <MapContainer
          center={guestHouseCoords}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={guestHouseCoords}>
            <Popup>
              <div className="text-orange-800 font-semibold text-sm">
                🏨 Geeta Teerth Guest House<br />
                Lucknow Highway, Opp. Kaushalpuri Colony<br />
                Near RTO Office, Ayodhya<br />
                <a
                  href="https://www.google.com/maps?q=26.757771,82.128427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMap;
