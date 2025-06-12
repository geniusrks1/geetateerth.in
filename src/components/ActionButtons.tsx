"use client";

import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

const ActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4">
      <a
        href="https://wa.me/7007814974?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20room"

        className=" text-black p-4 rounded-full shadow hover:bg-green-600 flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChatBubbleLeftIcon className="w-6 h-6  " /> 
      </a>
     
    </div>
  );
};

export default ActionButtons;