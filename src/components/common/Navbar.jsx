"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCurrencyDollar, BsQuestionLg } from "react-icons/bs";
import { HiHome, HiMoon, HiOfficeBuilding } from "react-icons/hi";
import { MdSunny } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { VscListFlat } from "react-icons/vsc";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [showDesktop, setShowDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!isMobile) {
        setShowDesktop(window.scrollY > 120);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <AnimatePresence>
      {/* ================= DESKTOP NAVBAR ================= */}
      {showDesktop && !isMobile && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="z-9999 hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50
                     w-[95%] max-w-2xl rounded-full ps-1 pe-1 py-1"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 bg-white/70 dark:bg-neutral-700/50 backdrop-blur-sm border border-black/20 dark:border-white/20  px-4 py-2 rounded-full shadow-2xl">
              <img
                src="/assets/go-logo.png"
                alt="Go Space"
                className="h-7 dark:brightness-1000"
              />
            </div>

            <div className="py-1 ps-5 pe-1 rounded-full bg-white/70 dark:bg-neutral-700/50 backdrop-blur-sm border border-black/20 dark:border-white/20 shadow-2xl flex items-center gap-5">
              <div className="flex items-center gap-9 text-[15px] font-medium text-neutral-800 dark:text-white">
                <a href="/#">Home</a>
                <a href="/#spaces">Spaces</a>
                <a href="/#pricing">Pricing</a>
                <a href="/#faq">Faq</a>
              </div>

              <Button
                onClick={() =>
                  setTheme(!theme || theme === "light" ? "dark" : "light")
                }
                size="icon"
                className="rounded-full bg-main text-white dark:bg-main dark:text-white hover:text-white dark:hover:bg-neutral-600 text-xl"
              >
                {theme === "dark" ? <HiMoon /> : <MdSunny />}
              </Button>
            </div>

            <Link
              href={
                "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
              }
              target="_blank"
            >
              <Button className="bg-white/70 dark:bg-neutral-700/50 text-neutral-900 dark:text-white backdrop-blur-md rounded-full pe-3 py-5 border-black/30 border shadow-2xl hover:bg-white/70 ">
                <span>Contact</span>
                <GoArrowUpRight />
              </Button>
            </Link>
          </div>
        </motion.nav>
      )}

      {/* ================= MOBILE ================= */}
      {isMobile && (
        <>
          {/* ===== Floating Menu ===== */}
          <AnimatePresence>
            {openMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="fixed bottom-24 right-3
                           bg-white/90 backdrop-blur-lg
                           border border-black/20 dark:border-white/20 shadow-xl
                           rounded-2xl px-3 py-3 space-y-2 z-9999"
              >
                <Button
                  onClick={() =>
                    setTheme(!theme || theme === "light" ? "dark" : "light")
                  }
                  
                  className="w-full flex justify-between bg-main dark:bg-neutral-900 dark:text-white z-100"
                >
                  Mode {theme === "dark" ? <HiMoon /> : <MdSunny />}
                </Button>

                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                >
                  <Button variant="ghost" className="text-neutral-900 w-full rounded-full flex justify-between">
                    Contact <GoArrowUpRight />
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ===== Bottom Navbar ===== */}
          <motion.nav
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40
                       w-[92%] max-w-sm
                       bg-white/85 dark:bg-neutral-800/60 backdrop-blur-lg
                       border border-black/30 dark:border-white/40 shadow-2xl
                       rounded-full px-2 py-2"
          >
            <div className="flex items-center justify-between ">
              <NavIcon href="#" icon={<HiHome />} />
              <NavIcon href="#spaces" icon={<HiOfficeBuilding />} />
              <NavIcon href="#pricing" icon={<BsCurrencyDollar />} />
              <NavIcon href="#faq" icon={<BsQuestionLg />} />

              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="w-11 h-11 flex items-center justify-center rounded-full text-xl
                           text-neutral-700 hover:bg-neutral-200/60 dark:text-white transition"
              >
                <VscListFlat />
              </button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

const NavIcon = ({ href, icon }) => (
  <a
    href={href}
    className="w-11 h-11 flex items-center justify-center rounded-full
               text-neutral-700 text-xl hover:bg-neutral-800 hover:text-white dark:text-white transition dark:hover:bg-white/80 dark:hover:text-neutral-900"
  >
    {icon}
  </a>
);
