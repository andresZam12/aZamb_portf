"use client";
import { useLang } from "./Lang/LanguageProvider";

import { useEffect, useState } from "react";
import Link from "next/link";

const dict = {
  en: {
    cv: "CV",
    language: "Language",
    es: "Spanish",
    en: "English"
  },
  es: {
    cv: "CV",
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
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Cerrar el menú hamburguesa cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('[aria-label="Abrir menú principal"]') && !target.closest('.menu-dropdown')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Cerrar el menú de idioma cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (langMenuOpen && !target.closest('.lang-menu-button') && !target.closest('.lang-menu-dropdown')) {
        setLangMenuOpen(false);
      }
    };

    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

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
    } catch {
      /* noop */
    }
  };

  return (
    <div className="fixed top-2 right-2 md:top-4 md:right-5 z-50 flex items-center gap-1.5 md:gap-3">
      {/* Tema */}
      <button
        onClick={toggleTheme}
        className="inline-flex items-center gap-1 md:gap-2 rounded-full border-2 border-black px-2 py-1.5 md:px-5 md:py-3 text-xs md:text-base font-semibold text-white bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        <span className="inline-block size-1.5 md:size-2 rounded-full bg-amber-700" />
        <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
      </button>

      {/* CV */}
      <a
        href="/CVAnd.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 md:gap-2 rounded-full border-2 border-black px-2 py-1.5 md:px-5 md:py-3 text-xs md:text-base font-semibold text-white bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        {t.cv}
        <svg width="12" height="12" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>

      {/* Idioma */}
      <div className="relative">
        <button
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          className="lang-menu-button list-none cursor-pointer inline-flex items-center gap-1 md:gap-2 rounded-full border-2 border-black px-2 py-1.5 md:px-5 md:py-3 text-xs md:text-base font-semibold text-white bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
        >
          <span className="text-sm md:text-base">🌎</span>
          <span className="hidden sm:inline">{t.language}</span>
        </button>
        {langMenuOpen && (
          <div className={`lang-menu-dropdown ${isDark ? 'absolute right-0 mt-2 w-36 md:w-52 rounded-2xl bg-black text-white ring-1 ring-white/20 shadow-2xl overflow-hidden' : 'absolute right-0 mt-2 w-36 md:w-52 rounded-2xl bg-[#3b2a23] text-white ring-1 ring-white/20 shadow-2xl overflow-hidden'}`}>
            <button onClick={() => { setLang("es"); setLangMenuOpen(false); }} className={`w-full text-left px-3 md:px-4 py-2 md:py-3 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-xs md:text-sm text-white`}>
              {t.es}
            </button>
            <button onClick={() => { setLang("en"); setLangMenuOpen(false); }} className={`w-full text-left px-3 md:px-4 py-2 md:py-3 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-xs md:text-sm text-white`}>
              {t.en}
            </button>
          </div>
        )}
      </div>

      {/* Botón hamburguesa - al final de los controles */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-black bg-white/10 dark:bg-black/30 text-xs md:text-base font-semibold text-white hover:bg-white/20 transition"
          aria-expanded={menuOpen}
          aria-label="Abrir menú principal"
        >
          <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {menuOpen && (
          <div className={`menu-dropdown ${isDark ? 'absolute right-0 mt-2 w-40 md:w-64 rounded-2xl bg-black text-white ring-1 ring-white/20 shadow-2xl overflow-hidden' : 'absolute right-0 mt-2 w-40 md:w-64 rounded-2xl bg-[#3b2a23] text-white ring-1 ring-white/20 shadow-2xl overflow-hidden'}`}>
            <Link href="/" className={`block px-3 md:px-4 py-2 md:py-3 text-xs md:text-base ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-white`}>{lang === 'es' ? 'Inicio' : 'Home'}</Link>
            <Link href="/about" className={`block px-3 md:px-4 py-2 md:py-3 text-xs md:text-base ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-white`}>{lang === 'es' ? 'Acerca de mí' : 'About me'}</Link>
            <Link href="/projects" className={`block px-3 md:px-4 py-2 md:py-3 text-xs md:text-base ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-white`}>{lang === 'es' ? 'Proyectos' : 'Projects'}</Link>
            <Link href="/experience" className={`block px-3 md:px-4 py-2 md:py-3 text-xs md:text-base ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-white`}>{lang === 'es' ? 'Experiencia' : 'Experience'}</Link>
            <Link href="/references" className={`block px-3 md:px-4 py-2 md:py-3 text-xs md:text-base ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-white`}>{lang === 'es' ? 'Referencias' : 'References'}</Link>
            <Link href="/contacts" className={`block px-3 md:px-4 py-2 md:py-3 text-xs md:text-base ${isDark ? 'hover:bg-gray-800' : 'hover:bg-white/10'} text-white`}>{lang === 'es' ? 'Contactos' : 'Contacts'}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
