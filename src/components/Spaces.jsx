"use client";

import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { HeaderSection } from "./common/HeaderSection";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowButton } from "./common/ArrowButton";
import SpaceGallery from "./modals/SpaceGallery";

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
    <section id="spaces" className=" px-0 sm:px-24 sm:py-12  relative">
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
              onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
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
                  <div className="bg-main/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
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

                  <ArrowButton
                    label={"Explore Spaces"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSpace(space);
                    }}
                    variant="basic"
                    className={"w-full dark:hover:bg-neutral-900 !important  "}
                  />

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SpaceGallery
      space={activeSpace}
      onClose={() => setActiveSpace(null)}
    />
    </section>
  );
};
