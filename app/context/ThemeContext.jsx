"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext({ theme: "light", setTheme: () => {} });

const STORAGE_KEY = "acolyte-theme";

export function ThemeProvider({ children }) {
  /** User choice (mainly for home); persisted — not overwritten when subpages force light */
  const [preference, setPreference] = useState("light");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    const preferred =
      stored === "dark" || stored === "light" ? stored : "light";
    setPreference(preferred);
  }, []);

  const theme = useMemo(() => {
    if (!mounted) return "light";
    return isHomePage ? preference : "light";
  }, [mounted, isHomePage, preference]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, preference);
  }, [preference, mounted]);

  const setTheme = (value) => {
    if (value !== "dark" && value !== "light") return;
    setPreference(value);
  };
  const toggleTheme = () =>
    setPreference((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
