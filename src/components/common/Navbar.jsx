"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { HiOutlineMenuAlt3, HiHome, HiOfficeBuilding } from "react-icons/hi";
import { MdSunny, MdMiscellaneousServices } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";

// UI
import { Button } from "../ui/button";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* ================= DESKTOP NAVBAR ================= */}
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50
                       w-[95%] max-w-2xl rounded-full ps-1 pe-1 py-1"
          >
            <div className="flex items-center justify-center gap-2">
              {/* Logo */}
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/20 px-4 py-2 rounded-full shadow-2xl">
                <img
                  src="/assets/go-logo.png"
                  alt="Go Space"
                  className="h-7"
                />
              </div>

              {/* Menu */}
              <div className="py-1 ps-5 pe-1 rounded-full bg-white/70 backdrop-blur-sm border border-black/20 shadow-2xl flex items-center gap-5">
                <div className="flex items-center gap-9 text-[15px] font-medium text-neutral-800">
                  <a href="#" className="hover:text-purple-700 duration-300">
                    Home
                  </a>
                  <a href="#spaces" className="hover:text-purple-700 duration-300">
                    Spaces
                  </a>
                  <a href="#services" className="hover:text-purple-700 duration-300">
                    Services
                  </a>
                </div>

                <Button
                  size="icon"
                  className="rounded-full bg-neutral-200/70 text-neutral-900 text-xl"
                >
                  <MdSunny />
                </Button>

                <Button size="icon" className="rounded-full md:hidden">
                  <HiOutlineMenuAlt3 />
                </Button>
              </div>

              <Button className="bg-white/70 backdrop-blur-md text-neutral-900 rounded-full pe-3 py-5 border border-black/20 shadow-2xl">
                <span>Contact</span>
                <GoArrowUpRight />
              </Button>
            </div>
          </motion.nav>

          {/* ================= MOBILE NAVBAR (ICON ONLY - BOTTOM) ================= */}
          <motion.nav
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
                       w-[90%] max-w-sm rounded-full
                       bg-white/80 backdrop-blur-md
                       border border-black/20 shadow-2xl px-6 py-3"
          >
            <div className="flex items-center justify-between text-xl text-neutral-700">
              <a
                href="#"
                className="p-3 rounded-full hover:bg-neutral-200/60 transition"
              >
                <HiHome />
              </a>

              <a
                href="#spaces"
                className="p-3 rounded-full hover:bg-neutral-200/60 transition"
              >
                <HiOfficeBuilding />
              </a>

              <a
                href="#services"
                className="p-3 rounded-full hover:bg-neutral-200/60 transition"
              >
                <MdMiscellaneousServices />
              </a>

              <a
                href="#contact"
                className="p-3 rounded-full bg-neutral-900 text-white shadow-lg"
              >
                <RiContactsFill />
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
