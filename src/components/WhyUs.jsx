"use client"

import { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { WhyUsData } from "../../public/data/WhyUsData";
import { bgMainDarkGradient, bgNeutralGradient } from "@/lib/reuseClass";

export const WhyUs = () => {
  const scrollRef = useRef(null);
  const data = WhyUsData;
 
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
    <section className="bg-neutral-200/70 dark:bg-linear-to-br dark:from-neutral-800 dark:to-neutral-900 py-12">
      {/* HEADER */}
      <div className="px-0 md:px-24 flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="px-8 sm:px-0" >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            Discover why Go Space stands out as the premier virtual office
            provider.
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="bg-white dark:bg-neutral-600 text-neutral-500 dark:text-white  hover:bg-neutral-900 hover:text-white rounded-full p-3 transition"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
          </button>

          <button
            onClick={scrollRight}
            className="bg-white dark:bg-neutral-600 text-neutral-500 dark:text-white  hover:bg-neutral-900 hover:text-white rounded-full p-3 transition"
          >
            <MdKeyboardArrowRight className="text-3xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-8 sm:px-24 overflow-x-auto scroll-smooth  scrollbar-hide hide-scrollbar    "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden snap-start min-w-60 h-80  p-5 rounded-2xl flex flex-col justify-between group transition duration-800 cursor-pointer drop-shadow-destructive ${bgMainDarkGradient}`}
          >

            <div className="bg-goYellow text-4xl aspect-square absolute z-50 -top-10 -right-10 rounded-full  blur-[80px] " >ashdkahs</div>

            <div className="asbolute z-70 bg-white text-neutral-900 dark:text-white group-hover:bg-white dark:bg-black group-hover:text-neutral-900 dark:group-hover:text-white w-fit p-3 rounded-full text-3xl transition group-hover:animate-pulse duration-300">
              {item.icon}
            </div>

            <div className="group-hover:text-white dark:group-hover:text-neutral-900">
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
