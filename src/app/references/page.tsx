"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Lang = "es" | "en";

type MenuItem = {
  label: string;
  href: string;
};

type Translations = {
  title: string;
  prevLabel: string;
  nextLabel: string;
  menu: MenuItem[];
  emailLabel: string;
  cityLabel: string;
  dark: string;
  light: string;
  langBtn: string;
};

const tDict: Record<Lang, Translations> = {
  es: {
    title: "Referencias",
    prevLabel: "← Proyectos",
    nextLabel: "Contactos →",
    menu: [
      { label: "Inicio", href: "/" },
      { label: "Acerca de mí", href: "/about" },
      { label: "Proyectos", href: "/projects" },
      { label: "Experiencia", href: "/experience" },
      { label: "Referencias", href: "/references" },
      { label: "Contactos", href: "/contacts" },
    ],
    emailLabel: "CORREO",
    cityLabel: "CIUDAD",
    dark: "🌙",
    light: "☀️",
    langBtn: "ES/EN",
  },
  en: {
    title: "References",
    prevLabel: "← Projects",
    nextLabel: "Contacts →",
    menu: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Experience", href: "/experience" },
      { label: "References", href: "/references" },
      { label: "Contacts", href: "/contacts" },
    ],
    emailLabel: "EMAIL",
    cityLabel: "CITY",
    dark: "🌙",
    light: "☀️",
    langBtn: "EN/ES",
  },
};

export default function ReferencesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>("es");
  const t = tDict[lang];

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const refs = [
    {
      name: "Paola Burgos",
      gender: "f",
      text:
        "Andrés se ha destacado como un estudiante comprometido, con gran capacidad analítica y disposición para el aprendizaje continuo. Su interés por el desarrollo de software y la ciberseguridad lo proyecta como un futuro profesional integral.",
      email: "paolaburgoquiroz@gmail.com",
      city: "Pasto",
    },
    {
      name: "Paola Bárcenas",
      gender: "m",
      text:
        "Demuestra responsabilidad, ética laboral y un alto nivel de compromiso en cada tarea. Su capacidad para trabajar bajo presión y mantener la calidad lo convierte en un colaborador confiable.",
      email: "pabocaneras12@gmail.com",
      city: "Pasto",
    },
    {
      name: "Mario Botina",
      gender: "m",
      text:
        "Es una persona íntegra, proactiva y con gran capacidad de trabajo en equipo. Su actitud positiva y habilidades interpersonales generan un ambiente de confianza y colaboración.",
      email: "mario_b86@gmail.com",
      city: "Cali",
    },
  ];

  return (
    <div className="min-h-screen text-stone-100 relative overflow-hidden bg-3franjas-light">
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
      />

      {/* Etiqueta superior */}
      <header className="max-w-6xl mx-auto px-5 pt-6">
        <span className="inline-block rounded-full bg-[#8b5e3c]/90 px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
          {t.title}
        </span>
      </header>

      {/* Controles fijos (tema, idioma, menú) */}
      <nav
        aria-label="controles"
        className="fixed top-4 right-5 z-50 flex items-center gap-3"
      >
        <button
          onClick={() => setIsDark((v) => !v)}
          aria-label="Alternar tema"
          className="grid place-items-center w-10 h-10 rounded-full bg-amber-950 text-white shadow-lg ring-1 ring-black hover:brightness-110 active:scale-95 transition"
        >
          {isDark ? t.light : t.dark}
        </button>

        <button
          onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
          aria-label="Cambiar idioma"
          className="grid place-items-center w-10 h-10 rounded-full bg-stone-100 text-stone-900 shadow ring-1 ring-black/10 hover:brightness-105 active:scale-95 transition"
        >
          {t.langBtn}
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Despliega el menú de opciones"
            className="grid place-items-center w-10 h-10 rounded-full bg-amber-950 text-white shadow-lg ring-1 ring-black hover:brightness-110 active:scale-95 transition"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {menuOpen && (
            <div className="mt-2 w-56 rounded-2xl bg-[#3b2a23] p-2 shadow-2xl ring-1 ring-black">
              {t.menu.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="block px-3 py-2 rounded-xl hover:bg-white/10 text-sm"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 pb-24">
        <section className="mt-4 grid grid-cols-12 gap-6 items-start">
          {/* IMAGEN IZQUIERDA */}
          <aside className="col-span-12 md:col-span-5">
            <figure className="relative mx-auto w-full max-w-xl aspect-square overflow-hidden rounded-[48%] ring-2 ring-black/20 shadow-2xl bg-white/10 grid place-items-center">
              <span className="text-stone-200/80 text-sm">Imagen...</span>
            </figure>
          </aside>

          {/* PANEL DE REFERENCIAS */}
          <section className="col-span-12 md:col-span-7">
            <div className="rounded-3xl bg-[#3b2a23]/85 ring-1 ring-black/20 shadow-xl p-5 md:p-7">
              <ul className="space-y-5">
                {refs.map((r) => (
                  <li key={r.name} className="grid grid-cols-[auto,1fr] gap-3">
                    <span className="mt-1 inline-grid w-8 h-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
                      {r.gender === "f" ? (
                        <span
                          role="img"
                          aria-label="mujer"
                          className="text-xl"
                        >
                          👩
                        </span>
                      ) : (
                        <span
                          role="img"
                          aria-label="hombre"
                          className="text-xl"
                        >
                          👨
                        </span>
                      )}
                    </span>
                    <p className="text-sm leading-relaxed">
                      {r.text}
                      <br />
                      <span className="block text-xs mt-1 opacity-90">
                        {t.emailLabel}:{" "}
                        <a className="underline" href={`mailto:${r.email}`}>
                          {r.email}
                        </a>{" "}
                        | {t.cityLabel}: {r.city}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </main>

      {/* Flechas fijas inferior derecha con etiquetas */}
      <nav className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <Link
          href="/projects"
          className="group relative flex items-center gap-3 rounded-full bg-amber-950 hover:bg-amber-900 px-3 py-2 text-white shadow"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rotate-180"
          >
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
          <span className="hidden sm:inline text-sm font-medium">
            {t.prevLabel}
          </span>
        </Link>
        <Link
          href="/contacts"
          className="group relative flex items-center gap-3 rounded-full bg-amber-950 hover:bg-amber-900 px-3 py-2 text-white shadow"
        >
          <span className="hidden sm:inline text-sm font-medium">
            {t.nextLabel}
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
