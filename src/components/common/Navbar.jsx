"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCurrencyDollar, BsQuestionLg } from "react-icons/bs";
import { HiHome, HiMoon, HiOfficeBuilding } from "react-icons/hi";
import { MdSunny } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { VscListFlat } from "react-icons/vsc";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { LocaleSwitcher } from "./LocaleSwitcher";

export const Navbar = () => {
  const nav = useTranslations("nav");
  const common = useTranslations("common");
  const pathname = usePathname();
  const [showDesktop, setShowDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const isHomePage = pathname === "/";
  const shouldShowDesktop = !isMobile && (!isHomePage || showDesktop);
  const baseNavLinkClass =
    "rounded-full px-3 py-2 text-neutral-800 dark:text-white transition-colors duration-500 hover:bg-main/10 hover:text-main dark:hover:bg-white/10 dark:hover:text-goYellow";
  const activeNavLinkClass =
    "rounded-full bg-main px-3 py-2 text-white shadow-sm dark:bg-white dark:text-neutral-900 transition-colors duration-500";
  const baseMobileMenuClass =
    "text-neutral-900 w-full rounded-full flex justify-between";
  const activeMobileMenuClass =
    "text-main bg-main/10 w-full rounded-full flex justify-between";

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ["home", "spaces", "pricing", "faq"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateDesktopVisibility = () => {
      if (window.innerWidth >= 768) {
        setShowDesktop(isHomePage ? window.scrollY > 120 : true);
      }
    };

    handleResize();
    updateDesktopVisibility();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", updateDesktopVisibility);
    window.addEventListener("scroll", updateDesktopVisibility);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateDesktopVisibility);
      window.removeEventListener("scroll", updateDesktopVisibility);
    };
  }, [isHomePage]);

  const isPageActive = (page) =>
    pathname === `/${page}` || pathname.startsWith(`/${page}/`);

  const getNavLinkClass = (item) => {
    if (["home", "spaces", "pricing", "faq"].includes(item)) {
      return isHomePage && activeSection === item
        ? activeNavLinkClass
        : baseNavLinkClass;
    }

    return isPageActive(item) ? activeNavLinkClass : baseNavLinkClass;
  };

  const getMobileMenuClass = (page) =>
    isPageActive(page) ? activeMobileMenuClass : baseMobileMenuClass;

  return (
    <AnimatePresence>
      {/* ================= DESKTOP NAVBAR ================= */}
      {shouldShowDesktop && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="z-9999 hidden md:block fixed top-4 left-1/2 -translate-x-1/2
                     w-fit max-w-[95%] rounded-full ps-1 pe-1 py-1"
        >
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/#home"
              className="flex h-12 w-fit shrink-0 items-center justify-center bg-white/80 dark:bg-neutral-700/70 backdrop-blur-sm border border-black/20 dark:border-white/20 px-4 py-2 rounded-full shadow-2xl"
              aria-label="Go Space Home"
            >
              <Image
                src="/assets/go-logo.png"
                alt="Go Space"
                width={128}
                height={48}
                className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
                priority
              />
            </Link>

            <div className="py-1 px-2 rounded-full bg-white/70 dark:bg-neutral-700/50 backdrop-blur-sm border border-black/20 dark:border-white/20 shadow-2xl flex items-center gap-1">
              <div className="flex items-center text-[15px] font-medium text-neutral-800 dark:text-white">
                <div className="space-x-1 text-[15px] font-medium">
                  <Link href="/#home" className={getNavLinkClass("home")}>
                    {nav("home")}
                  </Link>
                  <Link
                    href="/about"
                    className={getNavLinkClass("about")}
                  >
                    {nav("about")}
                  </Link>
                  <Link
                    href="/service"
                    className={getNavLinkClass("service")}
                  >
                    {nav("service")}
                  </Link>
                  <Link
                    href="/blog"
                    className={getNavLinkClass("blog")}
                  >
                    {nav("blog")}
                  </Link>
                </div>
              </div>

              <div className="shrink-0">
                <LocaleSwitcher />
              </div>

              <Button
                onClick={() =>
                  setTheme(!theme || theme === "light" ? "dark" : "light")
                }
                size="icon"
                className="shrink-0 rounded-full bg-main text-white dark:bg-main dark:text-white hover:text-white dark:hover:bg-neutral-600 text-xl"
              >
                {theme === "dark" ? <HiMoon /> : <MdSunny />}
              </Button>
            </div>

            <Button
              asChild
              className="shrink-0 bg-white/70 dark:bg-neutral-700/50 text-neutral-900 dark:text-white backdrop-blur-md rounded-full pe-3 py-5 border-black/30 border shadow-2xl hover:bg-white/70 "
            >
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{common("contact")}</span>
                <GoArrowUpRight />
              </Link>
            </Button>
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
                  {common("mode")} {theme === "dark" ? <HiMoon /> : <MdSunny />}
                </Button>

                <LocaleSwitcher />

                <Button
                  asChild
                  variant="ghost"
                  className={getMobileMenuClass("about")}
                >
                  <Link href="/about">
                    {nav("about")} <GoArrowUpRight />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className={getMobileMenuClass("service")}
                >
                  <Link href="/service">
                    {nav("service")} <GoArrowUpRight />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className={getMobileMenuClass("blog")}
                >
                  <Link href="/blog">
                    {nav("blog")} <GoArrowUpRight />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="text-neutral-900 w-full rounded-full flex justify-between"
                >
                  <Link
                    href={
                      "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {common("contact")} <GoArrowUpRight />
                  </Link>
                </Button>
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
              <NavIcon
                href="/#home"
                icon={<HiHome />}
                active={isHomePage && activeSection === "home"}
              />
              <NavIcon
                href="/#spaces"
                icon={<HiOfficeBuilding />}
                active={isHomePage && activeSection === "spaces"}
              />
              <NavIcon
                href="/#pricing"
                icon={<BsCurrencyDollar />}
                active={isHomePage && activeSection === "pricing"}
              />
              <NavIcon
                href="/#faq"
                icon={<BsQuestionLg />}
                active={isHomePage && activeSection === "faq"}
              />

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

const NavIcon = ({ href, icon, active }) => (
  <Link
    href={href}
    className={`
      w-11 h-11 flex items-center justify-center rounded-full text-xl transition
      ${
        active
          ? "bg-neutral-400/60 text-neutral-900 dark:bg-white dark:text-neutral-900"
          : "text-neutral-700 hover:bg-neutral-800 hover:text-white dark:text-white dark:hover:bg-white/80 dark:hover:text-neutral-900"
      }
    `}
  >
    {icon}
  </Link>
);