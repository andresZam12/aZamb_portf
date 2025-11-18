"use client";
import { useLang } from "./Lang/LanguageProvider";

import { useEffect, useState } from "react";
import Link from "next/link";

const dict = {
  en: {
    cv: "Resume",
    language: "Language",
    es: "Spanish",
    en: "English"
  },
  es: {
    cv: "Currículum",
    language: "Idioma",
    es: "Español",
    en: "Inglés"
  }
};

export default function HeaderControls() {
  const { lang, setLang } = useLang();
  const t = dict[lang];

  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const onThemeEvent = (e: CustomEvent) => {
      const detail = e?.detail;
      if (typeof detail === "string") {
        setIsDark(detail === "dark");
        document.documentElement.classList.toggle("dark", detail === "dark");
      } else {
        // fallback to localStorage
        setIsDark(localStorage.getItem("theme") === "dark");
      }
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
        document.documentElement.classList.toggle("dark", e.newValue === "dark");
      }
    };

    window.addEventListener("theme-change", onThemeEvent as EventListener);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("theme-change", onThemeEvent as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    // Notificar a otras partes de la app en la misma pestaña
    try {
      window.dispatchEvent(new CustomEvent("theme-change", { detail: next ? "dark" : "light" }));
    } catch (e) {
      /* noop */
    }
  };

  return (
    <div className="fixed top-4 right-5 z-50 flex items-center gap-3">
      {/* Tema */}
      <button
        onClick={toggleTheme}
        className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-5 py-3 text-base md:text-lg font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        <span className="inline-block size-2 rounded-full bg-amber-400" />
        {isDark ? "Dark" : "Light"}
      </button>

      {/* CV */}
      <a
        href="/cv-andres-zambrano.pdf"
        className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-5 py-3 text-base md:text-lg font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        {t.cv}
      </a>

      {/* Idioma */}
      <div className="relative">
        <details className="group">
          <summary className="list-none cursor-pointer inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-5 py-3 text-base md:text-lg font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition">
            🌐 {t.language}
          </summary>
            <div className={`${isDark ? 'absolute right-0 mt-2 w-44 md:w-52 rounded-2xl bg-black text-white ring-1 ring-black/20 shadow-2xl overflow-hidden' : 'absolute right-0 mt-2 w-44 md:w-52 rounded-2xl bg-[#3b2a23] text-stone-100 ring-1 ring-black/20 shadow-2xl overflow-hidden'}`}>
              <button onClick={() => setLang("es")} className={`w-full text-left px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'} text-sm`}>
                {t.es}
              </button>
              <button onClick={() => setLang("en")} className={`w-full text-left px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'} text-sm`}>
                {t.en}
              </button>
          </div>
        </details>
      </div>

      {/* Botón hamburguesa - al final de los controles */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-black/20 dark:border-white/10 bg-white/10 dark:bg-black/30 text-base md:text-lg font-semibold hover:bg-white/20 transition"
          aria-expanded={menuOpen}
          aria-label="Abrir menú principal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {menuOpen && (
          <div className={`${isDark ? 'absolute right-0 mt-12 w-48 md:w-64 rounded-2xl bg-black text-white ring-1 ring-black/20 shadow-2xl overflow-hidden' : 'absolute right-0 mt-12 w-48 md:w-64 rounded-2xl bg-[#3b2a23] text-stone-100 ring-1 ring-black/20 shadow-2xl overflow-hidden'}`}>
              <Link href="/" className={`block px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'}`}>{lang === 'es' ? 'Inicio' : 'Home'}</Link>
            <Link href="/about" className={`block px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'}`}>{lang === 'es' ? 'Acerca de mí' : 'About me'}</Link>
            <Link href="/projects" className={`block px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'}`}>{lang === 'es' ? 'Proyectos' : 'Projects'}</Link>
            <Link href="/experience" className={`block px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'}`}>{lang === 'es' ? 'Experiencia' : 'Experience'}</Link>
            <Link href="/references" className={`block px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'}`}>{lang === 'es' ? 'Referencias' : 'References'}</Link>
            <Link href="/contacts" className={`block px-4 py-3 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-white/10'}`}>{lang === 'es' ? 'Contactos' : 'Contacts'}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
