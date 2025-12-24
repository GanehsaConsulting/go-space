"use client"

import { useRef } from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export const WhyUs = () => {
  const scrollRef = useRef(null);

  const data = [
    {
      title: "Strategic Location",
      description:
        "Our virtual offices are situated in prime locations in Jakarta Selatan, providing your business with a prestigious address.",
      icon: <SlLocationPin />,
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing plans that cater to businesses of all sizes.",
      icon: <SlLocationPin />,
    },
    {
      title: "Comprehensive Services",
      description:
        "From mail handling to call forwarding, our services support your business.",
      icon: <SlLocationPin />,
    },
    {
      title: "Flexible Solutions",
      description:
        "Customizable virtual office packages that scale with your growth.",
      icon: <SlLocationPin />,
    },
    {
      title: "Professional Support",
      description:
        "Dedicated support team ensuring smooth and hassle-free experience.",
      icon: <SlLocationPin />,
    },
    {
      title: "Professional Support",
      description:
        "Dedicated support team ensuring smooth and hassle-free experience.",
      icon: <SlLocationPin />,
    },
    {
      title: "Professional Support",
      description:
        "Dedicated support team ensuring smooth and hassle-free experience.",
      icon: <SlLocationPin />,
    },
    {
      title: "Professional Support",
      description:
        "Dedicated support team ensuring smooth and hassle-free experience.",
      icon: <SlLocationPin />,
    },
    {
      title: "Professional Support",
      description:
        "Dedicated support team ensuring smooth and hassle-free experience.",
      icon: <SlLocationPin />,
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-neutral-200/70 py-12">
      {/* HEADER */}
      <div className="px-6 md:px-24 flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-md">
            Discover why Go Space stands out as the premier virtual office
            provider.
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="bg-white text-neutral-500 hover:bg-neutral-900 hover:text-white rounded-full p-3 transition"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
          </button>

          <button
            onClick={scrollRight}
            className="bg-white text-neutral-500 hover:bg-neutral-900 hover:text-white rounded-full p-3 transition"
          >
            <MdKeyboardArrowRight className="text-3xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-24 overflow-x-auto scroll-smooth  scrollbar-hide hide-scrollbar    "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="snap-start min-w-60 h-80 bg-white hover:bg-neutral-800 p-5 rounded-2xl flex flex-col justify-between group transition duration-800 cursor-pointer drop-shadow-destructive"
          >
            <div className="bg-neutral-900 text-white group-hover:bg-white group-hover:text-neutral-900 w-fit p-3 rounded-full text-3xl transition">
              {item.icon}
            </div>

            <div className="group-hover:text-white">
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
