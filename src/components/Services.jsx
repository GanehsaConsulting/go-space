import React from "react";
import { HeaderSection } from "./common/HeaderSection";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { Button } from "./ui/button";
import { bgNeutralGradient } from "@/lib/reuseClass";

const ServicesData = [
  {
    title: "Pendirian PT",
    imageSrc: "/assets/illustrations/pendirian-pt.svg",
  },
  {
    title: "Pendirian CV",
    imageSrc: "/assets/illustrations/pendirian-cv.svg",
  },
  {
    title: "Website Development",
    imageSrc: "/assets/illustrations/website.svg",
  },
];

export const Services = () => {
  return (
    <section className="margin">
      <HeaderSection
        title={"Our Services"}
        desc={
          "Go Space by Ganesha Consulting menyediakan layanan legalitas dan lainnya untuk mendukung bisnis Anda."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
        {ServicesData.map((service, index) => (
          <div
            className={`relative aspect-square  rounded-2xl hover:-translate-y-5 cursor-pointer group overflow-hidden mb-6 transition-all duration-500  ${bgNeutralGradient}`}
            key={index}
          >
            <div className="bg-white dark:bg-black rounded-out-tl-2xl pb-2 ps-2 rounded-bl-3xl right-0 top-0 absolute z-100">
              <div className="bg-inherit rounded-out-rb-2xl">
                {/* circle */}
                <div className="bg-neutral-200 dark:bg-neutral-700 dark:text-white text-neutral-900 p-2.5 text-2xl rounded-full dark:group-hover:bg-white dark:group-hover:text-neutral-900">
                  <FiArrowUpRight className="group-hover:animate-bounce" />
                </div>
              </div>
            </div>
            <div className="absolute right-0 left-0 top-0 bottom-0 z-50">
              <div className="flex justify-between items-center flex-col p-5">
                <Image
                  src={service.imageSrc}
                  width={250}
                  height={250}
                  alt="service 1"
                  className="rounded-lg mb-4 group-hover:scale-105 duration-300 group-hover:grayscale"
                />
                <h3 className="text-start text-xl font-semibold mb-2 ">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link
          href={
            "https://www.ganeshaconsulting.co.id"
          }
          target="_blank"
        >
          <Button className={"rounded-full py-6 px-2 ps-4 space-x-3"}>
            <div>Lihat Layanan Lainnya</div>
            <div className="bg-white dark:bg-neutral-900 dark:text-white text-neutral-900 p-2 rounded-full">
              <FiArrowUpRight className="text-lg" />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  );
};
