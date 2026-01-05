"use client";

import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { HeaderSection } from "./common/HeaderSection";

const spaces = [
  {
    title: "Exclusive Office",
    description:
      "Ruang kantor premium dengan fasilitas lengkap dan desain modern. Memberikan kenyamanan sekaligus prestise untuk mendukung bisnis Anda.",
    capacity: 12,
    image: "/assets/banner-image-main.jpg",
    gallery: [
      "/assets/spaces/room-12-2.png",
      "/assets/banner-image.png",
      "/assets/spaces/room-12-3.png",
    ],
  },
  {
    title: "Private Office",
    description:
      "Nikmati privasi penuh di ruang kantor eksklusif untuk tim atau individu. Cocok untuk rapat penting, fokus kerja, atau kebutuhan harian tanpa distraksi.",
    capacity: 6,
    image: "/assets/spaces/room-6-3.png",
    gallery: [
      "/assets/spaces/room-6-1.jpg",
      "/assets/spaces/room-6-2.jpg",
      "/assets/spaces/room-6-3.png",
    ],
  },
  {
    title: "Smoking Office",
    description:
      "Ruang kerja khusus dengan area smoking-friendly. Tetap produktif sambil menikmati suasana santai tanpa mengganggu rekan kerja lainnya.",
    capacity: 6,
    image: "/assets/spaces/room-6s-2.png",
    gallery: [
      "/assets/spaces/room-6s-1.png",
      "/assets/spaces/room-6s-2.png",
      "/assets/spaces/room-6s-3.png",
    ],
  },
];

export const Spaces = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSpace, setActiveSpace] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardWidth = (index) => {
    if (isMobile) return "w-[280px] flex-shrink-0";

    if (hoveredIndex === null) {
      return index === 0 ? "flex-[2]" : "flex-1";
    }
    return hoveredIndex === index ? "flex-[2]" : "flex-1";
  };

  return (
    <section className=" px-0 sm:px-24 sm:py-12 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <HeaderSection
          title="Explore Spaces"
          desc="Go Space by Ganesha Consulting. Alamat bisnis strategis, kredibilitas naik, biaya operasional lebih hemat."
          className={"px-8 sm:px-0 pt-12 sm:py-0"}
        />

        {/* ===== CARDS ===== */}
        <div
          className="
            flex gap-4
            h-[420px] md:h-[500px]
            overflow-x-auto md:overflow-visible
            pb-4 md:pb-0 px-8 sm:px-0 hide-scrollbar
          "
        >
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`
                ${getCardWidth(index)}
                transition-all duration-500 ease-in-out
                relative rounded-3xl overflow-hidden group cursor-pointer
              `}
              onMouseEnter={
                !isMobile ? () => setHoveredIndex(index) : undefined
              }
              onMouseLeave={
                !isMobile ? () => setHoveredIndex(null) : undefined
              }
              onClick={() => isMobile && setActiveSpace(space)}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${space.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-5 md:p-6">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                    {space.title.split(" ")[0]}
                  </div>

                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <GoArrowUpRight className="text-white text-lg md:text-xl" />
                  </button>
                </div>

                {/* Bottom */}
                <div className="text-white">
                  <h3 className="text-xl md:text-3xl font-bold mb-2">
                    {space.title}
                  </h3>

                  <p className="text-white/90 text-xs md:text-sm mb-4 line-clamp-2">
                    {space.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <IoEyeSharp className="text-white/80" />
                    <span className="text-xs md:text-sm text-white/80">
                      Capacity {space.capacity}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSpace(space);
                    }}
                    className="
                      flex items-center justify-between
                      bg-white/80 backdrop-blur-md
                      text-gray-900 ps-4 pe-2 py-2
                      rounded-full hover:bg-gray-100
                      transition-colors font-medium w-full
                    "
                  >
                    <span>Explore More</span>
                    <span className="bg-black text-white p-2 rounded-full">
                      <GoArrowUpRight className="text-lg" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL GALLERY ===== */}
      {activeSpace && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveSpace(null)}
        >
          <div
            className="bg-white max-w-5xl w-full mx-4 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl md:text-2xl font-bold">
                {activeSpace.title}
              </h3>
              <button
                onClick={() => setActiveSpace(null)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            {/* Gallery */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
              {activeSpace.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
