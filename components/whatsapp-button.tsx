"use client";

import React from "react";

export function WhatsAppButton() {
  const phoneNumber = "918123387210";
  const defaultMessage = encodeURIComponent(
    "Hi BLUE Interiors! I would like to book a free design consultation for my home."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BLUE Interiors on WhatsApp"
        className="group relative flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* SVG WhatsApp Logo */}
        <svg
          className="w-6 h-6 fill-current flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.161 5.282-1.385c1.455.794 3.09 1.226 4.79 1.226 5.507 0 9.989-4.478 9.989-9.984 0-5.506-4.482-9.984-9.989-9.984zm0 18.281c-1.547 0-3.056-.411-4.375-1.19l-.313-.186-3.256.853.868-3.173-.205-.326c-.856-1.365-1.308-2.946-1.308-4.575 0-4.57 3.719-8.284 8.389-8.284 4.67 0 8.389 3.714 8.389 8.284 0 4.57-3.719 8.284-8.389 8.284zm4.597-6.22c-.252-.126-1.492-.736-1.723-.82-.231-.084-.399-.126-.567.126-.168.252-.651.82-.798.988-.147.168-.294.189-.546.063-.252-.126-1.065-.393-2.03-1.253-.751-.67-1.258-1.497-1.405-1.749-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.567-1.365-.777-1.869-.205-.491-.413-.424-.567-.432l-.483-.01c-.168 0-.441.063-.672.315-.231.252-.882.861-.882 2.101 0 1.239.903 2.436 1.029 2.604.126.168 1.777 2.713 4.304 3.803.601.26 1.07.415 1.436.531.603.191 1.152.164 1.586.1.484-.072 1.492-.609 1.702-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.189-.483-.315z" />
        </svg>

        <span className="text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
          Quick Chat
        </span>
      </a>
    </div>
  );
}
