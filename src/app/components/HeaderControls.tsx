"use client";
import { useLang } from "../providers/LanguageProvider";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dict = {
  en: { cv: "CV", language: "Language", es: "Spanish", en: "English" },
  es: { cv: "CV", language: "Idioma",   es: "Español", en: "Inglés"  },
};

const navLinks = [
  { href: "/",            es: "Inicio",      en: "Home"       },
  { href: "/about",       es: "Acerca de mí", en: "About me"  },
  { href: "/projects",    es: "Proyectos",   en: "Projects"   },
  { href: "/experience",  es: "Experiencia", en: "Experience" },
  { href: "/references",  es: "Referencias", en: "References" },
  { href: "/contacts",    es: "Contactos",   en: "Contacts"   },
];

const btnBase =
  "inline-flex items-center gap-1 md:gap-2 rounded-full border border-white/20 px-3 py-2 md:px-4 md:py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all";

export default function HeaderControls() {
  const { lang, setLang } = useLang();
  const t = dict[lang];
  const pathname = usePathname();

  const [isDark, setIsDark]         = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (menuOpen && !t.closest('[data-menu="main"]')) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [menuOpen]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (langMenuOpen && !t.closest('[data-menu="lang"]')) setLangMenuOpen(false);
    };
    if (langMenuOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [langMenuOpen]);

  useEffect(() => {
    const onTheme = (e: CustomEvent) => {
      const d = e?.detail;
      if (typeof d === "string") {
        setIsDark(d === "dark");
        document.documentElement.classList.toggle("dark", d === "dark");
      } else {
        setIsDark(localStorage.getItem("theme") === "dark");
      }
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
        document.documentElement.classList.toggle("dark", e.newValue === "dark");
      }
    };
    window.addEventListener("theme-change", onTheme as EventListener);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("theme-change", onTheme as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    try { window.dispatchEvent(new CustomEvent("theme-change", { detail: next ? "dark" : "light" })); } catch { }
  };

  const dropdownClass =
    "absolute right-0 mt-2 rounded-2xl ring-1 ring-white/15 shadow-2xl overflow-hidden backdrop-blur-md " +
    (isDark ? "bg-black/90" : "bg-[#2a1f18]/95");

  const itemClass =
    "block w-full text-left px-5 py-3 text-sm transition-colors hover:bg-white/10 text-white/80 hover:text-white";

  return (
    <div className="fixed top-2 right-2 md:top-4 md:right-5 z-50 flex items-center gap-1.5 md:gap-2">

      {/* Tema */}
      <button onClick={toggleTheme} className={btnBase} title={isDark ? "Light mode" : "Dark mode"}>
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
        <span className="hidden sm:inline text-xs">{isDark ? "Dark" : "Light"}</span>
      </button>

      {/* CV */}
      <a href="/CVAnd.pdf" target="_blank" rel="noopener noreferrer" className={btnBase}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span className="text-xs">{t.cv}</span>
      </a>

      {/* Idioma */}
      <div className="relative" data-menu="lang">
        <button onClick={() => setLangMenuOpen(v => !v)} className={btnBase}>
          <span className="text-sm">🌎</span>
          <span className="hidden sm:inline text-xs">{t.language}</span>
        </button>
        {langMenuOpen && (
          <div className={`${dropdownClass} w-36 animate-slide-down`}>
            <button onClick={() => { setLang("es"); setLangMenuOpen(false); }} className={`${itemClass} ${lang === "es" ? "text-yellow-400 font-semibold" : ""}`}>{t.es}</button>
            <button onClick={() => { setLang("en"); setLangMenuOpen(false); }} className={`${itemClass} ${lang === "en" ? "text-yellow-400 font-semibold" : ""}`}>{t.en}</button>
          </div>
        )}
      </div>

      {/* Hamburguesa */}
      <div className="relative" data-menu="main">
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="inline-flex flex-col items-center justify-center gap-[5px] w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          aria-expanded={menuOpen}
          aria-label="Abrir menú principal"
        >
          <span className={`block w-[18px] h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[18px] h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-[18px] h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {menuOpen && (
          <div className={`menu-dropdown ${dropdownClass} w-52 animate-slide-down`}>
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${itemClass} flex items-center justify-between animate-fade-in opacity-0`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className={isActive ? "text-yellow-400 font-semibold" : ""}>
                    {lang === "es" ? link.es : link.en}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
