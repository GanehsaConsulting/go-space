"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";

export const HomeBanner = () => {
  return (
    <section className="p-4 font-nunito mb-12" >
      <div
        className="relative overflow-hidden w-full rounded-[40px]"
        style={{ height: "calc(100vh - 2rem)" }}
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
            className="object-cover brightness-60"
          />
        </motion.div>

        {/* logo */}
        <div className="w-25 h-19 sm:w-62.5 sm:h-17 z-10 absolute left-0 top-0 bg-white pt-2 ps-2 sm:pr-4 sm:pb-4 sm:rounded-out-lb-[40px] sm:rounded-br-[40px] rounded-out-lb-[30px] rounded-br-[30px] ">
          {" "}
          <div className="flex items-center gap-4 pe-3 bg-inherit sm:rounded-out-tr-[40px] rounded-out-tr-[30px]">
            {" "}
            <img
              src="/assets/go-logo.png"
              alt="go space logo"
              className="h-12"
            />{" "}
            <p className="sm:block hidden text-[11px] text-purple-800 font-semibold">
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
            <a href="">Home</a>
            <a href="">Rooms</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="w-62.5 h-17 z-10 bg-white hidden sm:absolute right-0 top-0 ps-3 pb-3 pt-2 rounded-bl-[40px] rounded-out-rb-[40px] sm:flex justify-end items-center">
          {" "}
          <div className="flex items-center bg-inherit rounded-out-tl-[40px] space-x-2 w-full">
            {" "}
            <Button className={"rounded-full py-6 text-[1rem]"}>
              connect with us
            </Button>{" "}
            <Button className={"rounded-full p-6"} size="icon">
              {" "}
              <IoMdMoon />{" "}
            </Button>{" "}
          </div>{" "}
        </div>
        
        {/* Banner Text */}
        <div className="absolute left-0 bottom-0 p-6 md:p-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h1 className="text-[2.5rem] md:text-[4rem] font-semibold text-white leading-tight">
                Work Better, Together.
              </h1>
              <p className="text-white/80 max-w-xl text-sm font-semibold mt-2">
                Go Space membantu bisnis tampil profesional dengan alamat kantor
                virtual strategis untuk legalitas, branding, dan operasional.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button className="bg-white/50 backdrop-blur-md text-neutral-900 rounded-full pe-1.5 py-5 space-x-2 hover:bg-white/70 transition-all group">
                <span>Explore Spaces</span>
                <span className="bg-black rounded-full p-2 text-white group-hover:scale-115  transition">
                  <GoArrowUpRight />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
