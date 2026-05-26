import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { FiArrowUpRight } from "react-icons/fi";

const IconAnimation = () => (
  <div className="relative w-5 h-5 overflow-hidden">
    <FiArrowUpRight
      className="
          absolute inset-0 text-lg
          transition-all duration-300 ease-out
          group-hover:-translate-y-2 group-hover:translate-x-2
          group-hover:opacity-0
        "
    />
    <FiArrowUpRight
      className="
          absolute inset-0 text-lg
          opacity-0 translate-y-2 -translate-x-2
          transition-all duration-300 ease-out
          group-hover:translate-y-0 group-hover:translate-x-0
          group-hover:opacity-100
        "
    />
  </div>
);

export const ArrowButton = ({
  label,
  isAnchor = false,
  path,
  target = "_blank",
  className = "",
  onClick,
  variant = "light",
  ...props
}) => {
  const variants = {
    light: {
      button: `
      bg-linear-to-br from-white to-neutral-300
      text-neutral-900
      hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]

      dark:from-neutral-900 dark:to-neutral-700
      dark:text-white
      dark:hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
    `,
      icon: `
      bg-neutral-900 text-white
      dark:bg-white dark:text-neutral-900
    `,
    },

    dark: {
      button: `
      bg-linear-to-br from-neutral-900 to-neutral-700
      text-white
      hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]

      dark:from-white dark:to-neutral-300
      dark:text-neutral-900
      dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
    `,
      icon: `
      bg-white text-neutral-900
      dark:bg-neutral-900 dark:text-white
    `,
    },
    basic: {
      button: `
      bg-linear-to-br from-white to-neutral-300
      text-neutral-900
      hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
    `,
      icon: `
      bg-neutral-900 text-white
    `,
    },
  };

  const baseStyle =
    "rounded-full py-5.5 pe-1 ps-4 space-x-3 group flex justify-between items-center transition-all duration-300";

  const buttonStyle = `${baseStyle} ${variants[variant].button} ${className}`;
  const iconStyle = `${variants[variant].icon} p-2 rounded-full transition`;

  if (isAnchor) {
    return (
      <Button asChild className={buttonStyle} {...props}>
        <Link
          href={path}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          <div>{label}</div>
          <div className={iconStyle}>
            <IconAnimation />
          </div>
        </Link>
      </Button>
    );
  }

  return (
    <Button onClick={onClick} className={buttonStyle} {...props}>
      <div>{label}</div>
      <div className={iconStyle}>
        <IconAnimation />
      </div>
    </Button>
  );
};
