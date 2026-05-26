"use client";

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Button } from "./ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdMoon } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiMoon } from "react-icons/hi";
import { MdSunny } from "react-icons/md";
import { ArrowButton } from "./common/ArrowButton";
import { bgNeutralGradientReverse } from "@/lib/reuseClass";
import VOTour from "./modals/VOTour";

export const HomeBanner = () => {
  const { theme, setTheme } = useTheme();
  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenVideo(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="home" className="p-4 font-nunito mb-12">
      <div
        className="relative overflow-hidden w-full rounded-[40px]  h-[calc(100vh-7rem)]
    sm:h-[calc(100vh-2rem)]"
      >
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/banner-image-main.jpg"
            alt="Home Banner"
            fill
            className="object-cover brightness-60 dark:brightness-100"
          />
        </motion.div>

        {/* logo */}
        <div className="w-25 h-19 sm:w-62.5 sm:h-17 z-10 absolute left-0 top-0 bg-white dark:bg-black pt-2 ps-2 sm:pr-4 sm:pb-4 sm:rounded-out-lb-[40px] sm:rounded-br-[40px] rounded-out-lb-[30px] rounded-br-[30px] ">
          {" "}
          <div className="flex items-center gap-4 pe-3 bg-inherit sm:rounded-out-tr-[40px] rounded-out-tr-[30px]">
            {" "}
            <Image
              src="/assets/go-logo.png"
              alt="go space logo"
              width={100}
              height={48}
              className="h-12 w-auto dark:brightness-1000 "
            />{" "}
            <p className="dark:text-white sm:block hidden text-[11px] text-purple-800 font-semibold">
              {" "}
              Virtual Office <br /> By Ganesha Consulting{" "}
            </p>{" "}
          </div>{" "}
        </div>

        {/* Nav Link */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 right-0 top-0 bg-linear-to-b from-black/70 via-black/50 to-transparent z-5 py-5"
        >
          <div className="text-white font-semibold hidden sm:flex justify-center gap-6 md:gap-17 text-sm md:text-xl">
            <Link href="/#home">Home</Link>
            <Link href="/#spaces">Spaces</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#faq">Faq</Link>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="z-200 w-62.5 h-17 bg-white dark:bg-black hidden sm:absolute right-0 top-0 ps-3 pb-3 pt-2 rounded-bl-[40px] rounded-out-rb-[40px] sm:flex justify-end items-center">
          {" "}
          <div className="flex items-center bg-inherit rounded-out-tl-[40px] space-x-2 w-full">
            <Button
              asChild
              className={`rounded-full py-6 text-[1rem] ${bgNeutralGradientReverse} transition-colors duration-500 px-4 flex items-center space-x-2 `}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
              >
                connect with us
              </Link>
            </Button>
            <Button
              onClick={() =>
                setTheme(!theme || theme === "light" ? "dark" : "light")
              }
              size="icon"
              className={`rounded-full p-6 bg-neutral-800 text-white dark:bg-neutral-300 dark:text-neutral-900 text-xl ${bgNeutralGradientReverse} transition-colors duration-500 `}
            >
              {theme === "dark" ? <HiMoon /> : <MdSunny />}
            </Button>
          </div>{" "}
        </div>

        <div
          className="absolute left-0 right-0 bottom-0 h-[70%]
             hidden dark:block
             bg-linear-to-t from-white/90 dark:from-black via-white/30 dark:via-black/30 to-transparent"
        />

        {/* Banner Text */}
        <div className="absolute left-0 bottom-0 p-6 md:p-8 w-full z-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h1 className="text-[2.5rem] md:text-[4rem] font-semibold text-white  leading-tight ">
                Work Better, Together.
              </h1>
              <p className="text-white/80  max-w-xl text-sm font-semibold mt-2">
                Go Space membantu bisnis tampil profesional dengan alamat kantor
                virtual strategis untuk legalitas, branding, dan operasional.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="z-10"
            >
              <ArrowButton
                label={"Office Tour"}
                onClick={() => setOpenVideo(true)}
                variant={"basic"}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <VOTour open={openVideo} onClose={() => setOpenVideo(false)} />
    </section>
  );
};
