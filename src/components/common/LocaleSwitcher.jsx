"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { FiChevronDown } from "react-icons/fi";
import { Link, usePathname } from "@/i18n/routing";

const locales = [
  {
    code: "id",
    label: "Indonesia",
    shortLabel: "ID",
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
  },
];
const scrollPositionKey = "go-space-locale-switch-scroll-y";

export const LocaleSwitcher = () => {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const switcherRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const currentLocale =
    locales.find((locale) => locale.code === activeLocale) ?? locales[0];

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const savedScrollY = window.sessionStorage.getItem(scrollPositionKey);
    if (!savedScrollY) return;

    window.sessionStorage.removeItem(scrollPositionKey);

    requestAnimationFrame(() => {
      window.scrollTo(0, Number(savedScrollY));
    });
  }, [activeLocale]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!switcherRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const saveScrollPosition = () => {
    window.sessionStorage.setItem(scrollPositionKey, String(window.scrollY));
    setOpen(false);
  };

  return (
    <div ref={switcherRef} className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex h-10 w-full items-center justify-between gap-2 rounded-full px-3 text-sm font-bold text-neutral-800 transition hover:bg-neutral-900/10 dark:text-white dark:hover:bg-neutral-600 md:w-auto"
      >
        <span className="flex items-center gap-2">
          <FlagIcon code={currentLocale.code} />
          <span>{currentLocale.shortLabel}</span>
        </span>
        <FiChevronDown
          className={`transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-9999 mt-2 w-48 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-neutral-800/95">
          {locales.map((locale) => {
            const isActive = activeLocale === locale.code;

            return (
              <Link
                key={locale.code}
                href={`${pathname}${hash}`}
                locale={locale.code}
                scroll={false}
                onClick={saveScrollPosition}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-bold transition ${
                  isActive
                    ? "bg-main text-white"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
                }`}
              >
                <span className="flex items-center gap-3">
                  <FlagIcon code={locale.code} />
                  <span>{locale.label}</span>
                </span>
                <span className="text-xs uppercase opacity-70">
                  {locale.shortLabel}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const FlagIcon = ({ code }) => {
  if (code === "id") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-4 w-6 overflow-hidden rounded-[4px] border border-black/10 shadow-sm dark:border-white/30"
      >
        <span className="flex-1">
          <span className="block h-1/2 bg-red-600" />
          <span className="block h-1/2 bg-white" />
        </span>
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="relative inline-block h-4 w-6 overflow-hidden rounded-[4px] border border-black/10 bg-blue-800 shadow-sm dark:border-white/30"
    >
      <span className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-white" />
      <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-red-600" />
      <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-red-600" />
      <span className="absolute left-[-3px] top-px h-0.5 w-9 rotate-34 bg-white" />
      <span className="absolute bottom-px left-[-3px] h-0.5 w-9 rotate-[-34deg] bg-white" />
    </span>
  );
};
