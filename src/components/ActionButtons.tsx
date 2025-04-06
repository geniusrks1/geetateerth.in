"use client";

import React from "react";
import { PhoneIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

const ActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4">
      <a
        href="https://wa.me/7007814974?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20room"

        className="bg-green-500 text-white p-4 rounded-full shadow hover:bg-green-600 flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" /> WhatsApp
      </a>
      <a
        href="tel:+7007814974"
        className="bg-blue-500 text-white p-4 rounded-full shadow hover:bg-blue-600 flex items-center gap-2"
      >
        <PhoneIcon className="w-6 h-6" /> Call Us
      </a>
    </div>
  );
};

export default ActionButtons;