"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children, defaultTheme = "light" }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return defaultTheme;

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : defaultTheme;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
