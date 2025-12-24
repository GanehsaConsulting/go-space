"use client";

import { useState } from "react";
import { calculateOriginalPrice, formatToRupiah } from "@/lib/helpers";
import { HeaderSection } from "./common/HeaderSection";
import { MdOutlineDiamond } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { Badge } from "./ui/badge";

export const PriceList = ({ data }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="margin bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <HeaderSection
          title={"Price Plan"}
          desc={
            "Go Space adalah Virtual Office dengan harga affordable dengan lokasi strategis dan prestisius di jakarta selatan"
          }
        />
        <div className={`grid md:grid-cols-2 gap-6`}>
          {data?.map((plan, index) => {
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
                key={`price-id-${index}`}
                className="group bg-neutral-200 hover:bg-neutral-800 rounded-[37px] transition-all duration-500 cursor-pointer relative"
              >
                {/* Header with Type and Diamond */}
                {plan.highlight && (
                  <div className="absolute right-0 top-0 w-fit">
                    <div className="bg-white group-hover:bg-white group-hover:text-neutral-900 text-neutral-900 px-4 py-2 rounded-tr-2xl rounded-bl-4xl text-lg font-semibold transition-colors rounded-out-tl-3xl">
                      <div className="bg-inherit rounded-out-rb-4xl">
                        {plan.type}
                      </div>
                    </div>
                  </div>
                )}

                {/* Pricing Section */}
                <div className="mt-6 mb-6 px-6 space-y-3">
                  <Badge className={"bg-purple-500/10 border-purple-900/70 text-purple-950 px-4 py-1 group-hover:text-white group-hover:border-white group-hover:bg-white/10 "}  >1 Year</Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 group-hover:text-gray-500 line-through text-lg transition-colors">
                      {originalPriceFormatted}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {plan.discount}%
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-white transition-colors">
                    {priceFormatted}
                  </h2>
                </div>

                <div>
                  {/* Features List */}
                  <ul className="space-y-3 px-6">
                    {plan.features.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <IoMdCheckmarkCircleOutline className="text-purple-900 group-hover:text-white text-xl mt-0.5 flex-shrink-0 transition-colors" />
                        <span className="text-gray-700 group-hover:text-white text-sm transition-colors font-semibold">
                          {item.feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Features with Smooth Animation */}
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
                          <li key={i + 4} className="flex items-start gap-3">
                            <IoMdCheckmarkCircleOutline className="text-purple-900 group-hover:text-white text-xl mt-0.5 flex-shrink-0 transition-colors" />
                            <span className="text-gray-700 group-hover:text-white text-sm transition-colors">
                              {item.feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* See More Button */}
                  {hasMoreFeatures && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="px-6 mt-4 flex items-center gap-2 text-sm font-semibold text-neutral-600 group-hover:text-white transition-all duration-300 hover:gap-3"
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

                  {/* Book Now Button */}
                  <a
                    href={plan.link}
                    target="_blank"
                    className="mt-6 mx-3 flex items-center justify-between bg-neutral-900 group-hover:bg-white/90 py-2 px-3 ps-6 rounded-full mb-4 tra3nsition-colors"
                  >
                    <div className="text-white group-hover:text-neutral-900 font-semibold">
                      Book Now
                    </div>
                    <div className="bg-white text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white p-2 rounded-full">
                      <GoArrowUpRight className="text-lg" />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
