import React from "react";
import { useTranslations } from "next-intl";
import { HeaderSection } from "./common/HeaderSection";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "@/i18n/routing";
import { bgMainDarkGradient } from "@/lib/reuseClass";
import { ArrowButton } from "./common/ArrowButton";
import { serviceAssets, serviceSlugs } from "@/lib/services";

const servicesData = serviceSlugs.map((slug) => ({
  slug,
  imageSrc: serviceAssets[slug].imageSrc,
}));

export const Services = () => {
  const t = useTranslations("services");
  const serviceTitles = t.raw("items");

  return (
    <section className="margin">
      <HeaderSection
        title={t("title")}
        desc={t("description")}
      />

      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-4 sm:gap-6 md:gap-7
      "
      >
        {servicesData.map((service, index) => (
          <Link
          key={index}
          href={`/service/${service.slug}`}
          className={`
    relative overflow-hidden
    rounded-2xl cursor-pointer group
    mb-6 transition-all duration-500
    ${bgMainDarkGradient}

    aspect-auto min-h-[250px] md:aspect-square
    md:hover:-translate-y-5
  `}
          >
            {/* glow (desktop only) */}
            <div
              className="
              absolute top-0
              bg-goYellow text-goYellow text-4xl
              blur-[60px]
              hidden md:block
            "
            >
              glow <br /> yellow
            </div>

            {/* arrow */}
            <div
              className="
              bg-white dark:bg-black
              rounded-out-tl-2xl pb-2 ps-2
              rounded-bl-3xl
              right-0 top-0 absolute z-100
            "
            >
              <div className="bg-inherit rounded-out-rb-2xl">
                <div
                  className="
                  bg-main text-white
                  p-2 md:p-2.5
                  text-lg
                  rounded-full
                  group-hover:bg-neutral-800
                  dark:bg-neutral-700
                  dark:group-hover:bg-white
                  dark:group-hover:text-neutral-900
                "
                >
                  <FiArrowUpRight className="md:group-hover:animate-bounce" />
                </div>
              </div>
            </div>

            {/* content */}
            <div className="absolute inset-0 z-50">
              <div
                className="
                flex flex-col items-center justify-between
                p-4 md:p-5 h-full
              "
              >
                <Image
                  src={service.imageSrc}
                  width={250}
                  height={250}
                  alt={serviceTitles[index]}
                  className="
                    rounded-lg mb-4
                    duration-300
                    group-hover:scale-105
                    group-hover:grayscale

                    w-[160px]
                    sm:w-[200px]
                    md:w-[250px]
                    h-auto
                  "
                />

                <h3
                  className="
                  text-base sm:text-lg md:text-xl
                  font-semibold mb-2
                  text-center md:text-start
                "
                >
                  {serviceTitles[index]}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center mt-5">
        <ArrowButton
          isAnchor
          label={t("more")}
          path="/service"
          target="_self"
          variant="dark"
        />
      </div>
    </section>
  );
};
