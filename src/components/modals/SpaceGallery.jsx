"use client";

import { createPortal } from "react-dom";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function SpaceGallery({ space, onClose }) {
  if (!space || typeof window === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65  backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full mx-4 rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {space.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-200 hover:text-red-400 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Gallery */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
          {space.gallery.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-400"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 py-6">
          <Link
            href="https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
            target="_blank"
            className="bg-white/70 backdrop-blur-md rounded-full py-2 ps-4 pe-2 flex items-center justify-between w-full hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition"
          >
            <span className="font-semibold text-neutral-900">Book Now</span>
            <span className="bg-neutral-900 text-white rounded-full p-2">
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
