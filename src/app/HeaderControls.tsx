"use client";
import { useLang } from "./Lang/LanguageProvider";
import { dict } from "@/i18n";
import { useEffect, useState } from "react";

export default function HeaderControls() {
  const { lang, setLang } = useLang();
  const t = dict[lang];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="fixed top-4 right-5 z-50 flex items-center gap-2">
      {/* Tema */}
      <button
        onClick={toggleTheme}
        className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        <span className="inline-block size-2 rounded-full bg-amber-400" />
        {isDark ? "Dark" : "Light"}
      </button>

      {/* CV */}
      <a
        href="/cv-andres-zambrano.pdf"
        className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
      >
        {t.cv}
      </a>

      {/* Idioma */}
      <div className="relative">
        <details className="group">
          <summary className="list-none cursor-pointer inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition">
            🌐 {t.language}
          </summary>
          <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-[#3b2a23] text-stone-100 ring-1 ring-black/20 shadow-2xl overflow-hidden">
            <button onClick={() => setLang("es")} className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm">
              {t.es}
            </button>
            <button onClick={() => setLang("en")} className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm">
              {t.en}
            </button>
          </div>
        </details>
      </div>
    </div>
  );
}
