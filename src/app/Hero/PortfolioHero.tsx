"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Lang = "es" | "en";

const t = {
  es: {
    hello: "¡Hola!",
    iAm: "soy",
    name: "Andrés Zambrano",
    studentIn: "Estudiante en",
    degree: "INGENIERÍA DE SOFTWARE",
    aspire: "aspirante a",
    role: "desarrollador FULLSTACK",
    p1: "Soy un entusiasta de la tecnología con gran interés en crear soluciones innovadoras que combinen desarrollo web moderno y seguridad informática.",
    p2: "Me motiva aprender continuamente, enfrentar retos y aportar valor en cada proyecto, con la visión de crecer como profesional integral en el mundo del software y la ciberseguridad.",
    p3: "Te doy paso a explorar mi proceso de aprendizaje, conocerme e interactuar en mi portafolio.",
    p4: "¡Saludos!",
    nav: { home:"INICIO", about:"ACERCA DE MI", projects:"MIS PROYECTOS", exp:"EXPERIENCIA", refs:"REFERENCIAS", contacts:"CONTACTOS" },
    motto: "“si lo puedes imaginar, lo podemos hacer”",
    cv: "↓ CV",
    themeLabel: (dark:boolean)=> dark?"Dark":"Light",
    langBtn: "Idioma",
    langs: { es: "Español", en: "Inglés" }
  },
  en: {
    hello: "Hello!",
    iAm: "I'm",
    name: "Andrés Zambrano",
    studentIn: "Student in",
    degree: "SOFTWARE ENGINEERING",
    aspire: "aspiring",
    role: "FULLSTACK developer",
    p1: "I'm a technology enthusiast focused on building innovative, secure and scalable web solutions.",
    p2: "I'm motivated by continuous learning, facing challenges, and adding value in every project, aiming to grow as a software and cybersecurity professional.",
    p3: "Feel free to explore my learning journey and interact with my portfolio.",
    p4: "Cheers!",
    nav: { home:"HOME", about:"ABOUT", projects:"PROJECTS", exp:"EXPERIENCE", refs:"REFERENCES", contacts:"CONTACTS" },
    motto: "“if you can imagine it, we can build it”",
    cv: "↓ Resume",
    themeLabel: (dark:boolean)=> dark?"Dark":"Light",
    langBtn: "Language",
    langs: { es: "Spanish", en: "English" }
  }
} as const;

export default function PortfolioHero() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>("es");
  const [openLang, setOpenLang] = useState(false);

  useEffect(() => {
    const persistedTheme = localStorage.getItem("theme") === "dark";
    setIsDark(persistedTheme);
    document.documentElement.classList.toggle("dark", persistedTheme);

    const persistedLang = (localStorage.getItem("lang") as Lang) || "es";
    setLang(persistedLang);
    document.documentElement.lang = persistedLang;
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    setOpenLang(false);
  };

  const i = t[lang];

  return (
    <div className="min-h-screen w-full text-stone-100 relative overflow-hidden">
      {/* FONDO: 3 franjas café (light) / 3 franjas gris/negro (dark) */}
      <span
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]
          dark:bg-[linear-gradient(to_right,#0b0b0b_0%,#0b0b0b_33.34%,#232323_33.34%,#232323_66.67%,#3a3a3a_66.67%,#3a3a3a_100%)]
        "
      />

      {/* BOTONES FIJOS (arriba-derecha) */}
      <div className="fixed top-4 right-5 z-50 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label={`Cambiar a modo ${i.themeLabel(!isDark)}`}
          className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm md:text-base font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
        >
          <span className="inline-block size-2 rounded-full bg-amber-400" />
          {i.themeLabel(isDark)}
        </button>

        <a
          href="/cv-andres-zambrano.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm md:text-base font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
        >
          {i.cv}
        </a>

        <div className="relative">
          <button
            onClick={() => setOpenLang((v) => !v)}
            aria-expanded={openLang}
            aria-haspopup="menu"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm md:text-base font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
          >
            🌐 {i.langBtn}
          </button>
          {openLang && (
            <ul role="menu" className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#3b2a23] text-stone-100 ring-1 ring-black/20 shadow-2xl overflow-hidden">
              <li>
                <button onClick={() => changeLang("es")} role="menuitem" className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm">
                  {i.langs.es}
                </button>
              </li>
              <li>
                <button onClick={() => changeLang("en")} role="menuitem" className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm">
                  {i.langs.en}
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* GRID PRINCIPAL */}
      <main className="mx-auto max-w-screen grid grid-cols-1 lg:grid-cols-12 min-h-screen relative">
        {/* Columna izquierda */}
        <section className="lg:col-span-5 px-6 sm:px-10 py-10 lg:py-16">
          <header className="space-y-5">
            <h1 className="text-6xl md:text-7xl font-black leading-[1.05] drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
              {i.hello}
              <br />
              <span className="block">
                {i.iAm} <span className="text-amber-300">{i.name}</span>
              </span>
            </h1>

            <div className="space-y-3">
              <p className="text-base md:text-lg uppercase tracking-widest text-amber-200/90">{i.studentIn}</p>
              <h2 className="text-3xl md:text-3xl font-semibold -mt-1">{i.degree}</h2>

              <p className="mt-4 text-base md:text-lg uppercase tracking-widest text-amber-200/90">{i.aspire}</p>
              <h3 className="text-3xl md:text-3xl font-semibold -mt-1">{i.role}</h3>
            </div>
          </header>

          <article className="mt-10 space-y-5 text-justify text-stone-100/95 leading-relaxed text-base md:text-lg">
            <p>{i.p1}</p>
            <p>{i.p2}</p>
            <p>{i.p3}</p>
            <p>{i.p4}</p>
          </article>
        </section>

        {/* Columna derecha: marco/imagen */}
        <aside className="lg:col-span-7 px-6 sm:px-10 py-10 lg:py-16 relative">
          <figure className="ml-auto mt-10 w-full max-w-xl aspect-[4/3] rounded-2xl bg-gradient-to-br from-stone-50 to-stone-200 dark:from-neutral-900 dark:to-neutral-800 shadow-2xl ring-1 ring-black/10 dark:ring-white/5 grid place-items-center p-8 relative overflow-hidden">
            <span className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 0 L50 40 L100 0" fill="none" stroke="currentColor" strokeWidth="0.6" />
                <path d="M0 100 L50 60 L100 100" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </span>
            <span className="text-stone-300 text-sm">[ Tu imagen aquí ]</span>
          </figure>
        </aside>

        {/* Cinta de botones inferiores */}
        <footer className="lg:col-span-12 px-6 sm:px-10 py-8">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { label: i.nav.home, href: "/" },
              { label: i.nav.about, href: "/about" },
              { label: i.nav.projects, href: "/projects" },
              { label: i.nav.exp, href: "/experience" },
              { label: i.nav.refs, href: "/references" },
              { label: i.nav.contacts, href: "/contacts" },
            ].map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold bg-stone-100 text-stone-900 hover:bg-white shadow-[0_6px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-[0_4px_0_rgba(0,0,0,0.35)] ring-1 ring-black/10 dark:bg-neutral-900 dark:text-stone-100 dark:ring-white/10 dark:hover:bg-black/80"
              >
                {b.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-center italic text-sm md:text-base">{i.motto}</p>
        </footer>
      </main>
    </div>
  );
}
