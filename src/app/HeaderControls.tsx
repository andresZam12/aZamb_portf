"use client";
import { useEffect, useState } from "react";

type Lang = "es" | "en";

export default function HeaderControls() {
  // Tema
  const [isDark, setIsDark] = useState(false);

  // Idioma (simple, sin provider)
  const [lang, setLang] = useState<Lang>("es");
  const [openLang, setOpenLang] = useState(false);

  // Carga preferencia al montar
  useEffect(() => {
    // Tema
    const persistedTheme = localStorage.getItem("theme") === "dark";
    setIsDark(persistedTheme);
    document.documentElement.classList.toggle("dark", persistedTheme);

    // Idioma
    const persistedLang = (localStorage.getItem("lang") as Lang) || "es";
    setLang(persistedLang);
    document.documentElement.lang = persistedLang;
  }, []);

  // Toggle tema
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Cambiar idioma
  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    setOpenLang(false);
  };

  // Etiquetas mínimas sin i18n
  const labels = {
    theme: isDark ? "Dark" : "Light",
    cv: lang === "es" ? "↓ CV" : "↓ Resume",
    language: lang === "es" ? "Idioma" : "Language",
    es: "Español",
    en: "English",
  };

  return (
    <div className="fixed top-4 right-5 z-50 flex items-center gap-2">
      {/* Tema */}
      <button
        onClick={toggleTheme}
        aria-label={`Cambiar a modo ${isDark ? "Light" : "Dark"}`}
        className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        <span className="inline-block size-2 rounded-full bg-amber-400" />
        {labels.theme}
      </button>

      {/* CV */}
      <a
        href="/cv-andres-zambrano.pdf"
        className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        {labels.cv}
      </a>

      {/* Idioma */}
      <div className="relative">
        <button
          onClick={() => setOpenLang((v) => !v)}
          aria-expanded={openLang}
          aria-haspopup="menu"
          className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
        >
          🌐 {labels.language}
        </button>

        {openLang && (
          <ul
            role="menu"
            className="absolute right-0 mt-2 w-40 rounded-2xl bg-[#3b2a23] text-stone-100 ring-1 ring-black/20 shadow-2xl overflow-hidden"
          >
            <li>
              <button
                role="menuitem"
                onClick={() => changeLang("es")}
                className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm"
              >
                {labels.es}
              </button>
            </li>
            <li>
              <button
                role="menuitem"
                onClick={() => changeLang("en")}
                className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm"
              >
                {labels.en}
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
