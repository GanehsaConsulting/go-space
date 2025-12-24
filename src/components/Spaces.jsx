"use client";

import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HeaderSection } from "./common/HeaderSection";

export const Spaces = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const spaces = [
    {
      title: "Master Bedroom",
      description:
        "We Do Master Bathroom Designing And Decoration And Luxury Bathroom Designing",
      capacity: 12,
      image: "/assets/banner-image-main.jpg",
    },
    {
      title: "Luxury Kitchen",
      description:
        "We Do All Types Of Modular Kitchen Designing And Decoration And Luxury Kitchen Designing",
      capacity: 12,
      image: "/assets/spaces/room-4-1.jpg",
    },
    {
      title: "Residential Interior",
      description:
        "We Do All Types Of Interior Designing, Decoration And Furnishing Of Bed Room, Living Room, Dinning Room.",
      capacity: 12,
      image: "/assets/spaces/room-2-2.jpg",
    },
  ];

  const getCardWidth = (index) => {
    // Jika tidak ada yang di-hover, card pertama (index 0) lebih lebar
    if (hoveredIndex === null) {
      return index === 0 ? "flex-[2]" : "flex-1";
    }
    // Jika ada yang di-hover, card yang di-hover menjadi lebih lebar
    return hoveredIndex === index ? "flex-[2]" : "flex-1";
  };

  return (
    <section className="margin bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <HeaderSection title={"Explore Spaces"} desc={"Go Space by Ganesha Consulting. Alamat bisnis strategis, kredibilitas naik, biaya operasional lebih hemat."} />

        {/* Cards Container */}
        <div className="flex gap-4 h-[500px]">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`${getCardWidth(
                index
              )} transition-all duration-500 ease-in-out relative rounded-3xl overflow-hidden group cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${space.image})` }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                {/* Top Badge */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    {space.title.split(" ")[0]}
                  </div>
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <GoArrowUpRight className="text-white text-xl" />
                  </button>
                </div>

                {/* Bottom Content */}
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {space.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">
                    {space.description}
                  </p>

                  {/* Capacity Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <IoEyeSharp className="text-white/80" />
                    <span className="text-sm text-white/80">
                      Capacity {space.capacity}
                    </span>
                  </div>

                  {/* Explore Button */}
                  <button className="flex items-center justify-between bg-white/80 backdrop-blur-md text-gray-900 ps-4 pe-2 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium w-full">
                    <div>Explore More</div>
                    <div className="bg-black text-white p-2 rounded-full">
                      <GoArrowUpRight className="text-lg" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;
