"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { calculateOriginalPrice, formatToRupiah } from "@/lib/helpers";
import { HeaderSection } from "./common/HeaderSection";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { Badge } from "./ui/badge";
import { bgMainDarkGradient } from "@/lib/reuseClass";
import { ArrowButton } from "./common/ArrowButton";

const TABS = [
  { label: "Virtual Office", value: "virtual" },
  { label: "Ruang Meeting", value: "meeting" },
];

export const PriceList = ({ data }) => {
  const [activeTab, setActiveTab] = useState("virtual");
  const [expandedCards, setExpandedCards] = useState({});
  const badge = activeTab === "virtual" ? "1 Year" : "2 Hour";

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredData = data?.filter((plan) => {
    if (activeTab === "virtual") {
      return plan.type.toLowerCase().startsWith("virtual office");
    }
    if (activeTab === "meeting") {
      return plan.type.toLowerCase().startsWith("ruang meeting");
    }
    return true;
  });

  return (
    <section id="pricing" className="margin">
      <div className="max-w-7xl mx-auto">
        <HeaderSection
          title={"Price Plan"}
          desc={
            "Go Space adalah Virtual Office dengan harga affordable dengan lokasi strategis dan prestisius di jakarta selatan"
          }
        />

        {/* ===== TABS ===== */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-neutral-200 dark:bg-neutral-800 p-1.5 border border-neutral-900/30 dark:border-white/30">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => {
                    setActiveTab(tab.value);
                    setExpandedCards({});
                  }}
                  className={`
                    px-6 py-2 rounded-full text-sm font-semibold transition-all
                    ${
                      isActive
                        ? "bg-linear-to-tr from-main to-main/50 text-white dark:bg-white dark:text-black"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== ANIMATED GRID (CARD TIDAK DIUBAH) ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-6 items-start"
          >
            {filteredData?.map((plan, index) => {
              const originalPrice = calculateOriginalPrice(
                plan.price,
                plan.discount
              );
              const originalPriceFormatted = formatToRupiah(originalPrice);
              const priceFormatted = formatToRupiah(plan.price);
              const isExpanded = expandedCards[index];
              const hasMoreFeatures = plan.features.length > 4;

              return (
                <div
                  key={index}
                  className={`
    group relative isolate overflow-hidden
    sm:rounded-[37px] rounded-[26px] cursor-pointer
    duration-700 transition-colors
    ${bgMainDarkGradient}
  `}
                >
                  {/* GLOW - DI BELAKANG TEKS */}
                  <div className="absolute -z-10 -right-4 top-15 bg-goYellow text-goYellow text-6xl blur-[75px] opacity-70">
                    lorem <br /> ipsum
                  </div>

                  {/* Header with Type */}
                  {plan.highlight && (
                    <div className="absolute z-10 right-0 top-0 w-fit">
                      <div className="bg-white dark:bg-black dark:text-white group-hover:bg-white group-hover:text-neutral-900 text-neutral-900 px-4 py-2 rounded-tr-2xl rounded-bl-3xl sm:rounded-bl-4xl text-[12px] sm:text-lg font-semibold transition-colors rounded-out-tl-2xl sm:rounded-out-tl-3xl">
                        <div className="bg-inherit rounded-out-rb-4xl max-w-24 sm:max-w-2xl ">
                          {plan.type}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Pricing */}
                    <div className=" mt-6 mb-6 px-6 space-y-3">
                      <Badge
                        className={
                          "font-semibold bg-goYellow/30 border-goYellow text-neutral-800 px-4 py-1 group-hover:text-white dark:text-white group-hover:border-white group-hover:bg-white/10 dark:group-hover:bg-neutral-500 "
                        }
                      >
                        {badge}
                      </Badge>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500 line-through text-lg transition-colors">
                          {originalPriceFormatted}
                        </span>
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {plan.discount}%
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-white dark:text-white transition-colors dark:group-hover:text-neutral-900">
                        {priceFormatted}
                      </h2>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 px-6">
                      {plan.features.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <IoMdCheckmarkCircleOutline className="text-purple-900 group-hover:text-white dark:text-white/70 text-xl mt-0.5 shrink-0 transition-colors dark:group-hover:text-neutral-700" />
                          <span className="text-gray-700 group-hover:text-white dark:text-white/70 text-sm transition-colors font-semibold dark:group-hover:text-neutral-700">
                            {item.feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand */}
                    {hasMoreFeatures && (
                      <div
                        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-3 mt-3">
                          {plan.features.slice(4).map((item, i) => (
                            <li key={i + 4} className="flex items-start gap-3 ">
                              <IoMdCheckmarkCircleOutline className="text-purple-900 group-hover:text-white dark:text-white text-xl mt-0.5 shrink-0 transition-colors dark:group-hover:text-neutral-700" />
                              <span className="text-neutral-600 group-hover:text-white dark:text-white text-sm transition-colors dark:group-hover:text-neutral-700 font-semibold">
                                {item.feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Toggle */}
                    {hasMoreFeatures && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="px-6 mt-4 flex items-center gap-2 text-sm font-semibold text-neutral-600 group-hover:text-white dark:text-white transition-all duration-300 hover:gap-3 dark:group-hover:text-neutral-800 italic"
                      >
                        {isExpanded ? (
                          <>
                            See Less
                            <HiChevronUp className="text-lg transition-transform duration-300" />
                          </>
                        ) : (
                          <>
                            See More ({plan.features.length - 4} more features)
                            <HiChevronDown className="text-lg transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    )}

                    <div className="py-5 px-5">
                      <ArrowButton
                        label={"Book Now!"}
                        isAnchor={true}
                        path={plan.link}
                        variant="dark"
                        className={" w-full dark:bg-neutral-900"}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
