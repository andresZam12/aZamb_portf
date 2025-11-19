"use client";
import { useEffect } from "react";

export default function ThemeClient() {
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDark);

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        document.documentElement.classList.toggle("dark", e.newValue === "dark");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return null;
}
