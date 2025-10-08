
"use client";
import { useEffect, useState } from "react";
/* ...resto del componente igual... */


/**
 * Pantalla de presentación para portafolio (Next.js + TailwindCSS)
 * - Layout principal con grid (2 columnas en desktop) y flex para alineaciones internas.
 * - Semántica HTML (header/main/nav/section/aside/footer).
 * - Fondo dividido en 3 franjas de color (escala de cafés) inspirado en la maqueta.
 * - Imagen/Avatar al lado derecho.
 * - Botones redondos inferiores que navegan a rutas del portafolio.
 * - Toggle Dark/Light con clase `dark` en <html> (Tailwind `darkMode: 'class'`).
 */

export default function PortfolioHero() {
  const [isDark, setIsDark] = useState(false);

  // preferencia de tema
  useEffect(() => {
    const persisted = localStorage.getItem("theme") === "dark";
    setIsDark(persisted);
    document.documentElement.classList.toggle("dark", persisted);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen text-stone-100 relative overflow-hidden">
      {/* Fondo en 3 franjas (escala de cafés) */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)] dark:bg-[linear-gradient(to_right,#0b0b0b_0%,#0b0b0b_33.34%,#232323_33.34%,#232323_66.67%,#3a3a3a_66.67%,#3a3a3a_100%)]"
      />

      {/* GRID PRINCIPAL */}
      <main
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 min-h-screen relative"
        aria-label="Pantalla principal del portafolio"
      >
        {/* COLUMNA IZQUIERDA (copy) */}
        <section className="lg:col-span-5 px-6 sm:px-10 py-10 lg:py-16">
          <header className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-black leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
              Hola!
              <br />
              <span className="block">
                soy <span className="text-amber-300">Andrés Zambrano</span>
              </span>
            </h1>
            <p className="text-sm uppercase tracking-widest text-amber-200/90">Estudiante en</p>
            <h2 className="text-xl font-semibold -mt-2">ingeniería de software</h2>
            <p className="mt-6 text-sm uppercase tracking-widest text-amber-200/90">aspirante a</p>
            <h3 className="text-xl font-semibold -mt-2">
              desarrollador <span className="uppercase">fullStack</span>
            </h3>
          </header>

          <article className="mt-8 space-y-4 text-stone-100/90 leading-relaxed">
            <p>
              Soy un entusiasta de la tecnología con gran interés en crear soluciones innovadoras que combinen
              desarrollo web moderno y seguridad informática.
            </p>
            <p>
              Me motiva aprender continuamente, enfrentar retos y aportar valor en cada proyecto, con la visión
              de crecer como profesional integral en el mundo del software y la ciberseguridad.
            </p>
            <p>
              Te doy paso a explorar mi proceso de aprendizaje, conocerme e interactuar en mi portafolio.
            </p>
            <p>¡Saludos!</p>
          </article>
        </section>

        {/* COLUMNA DERECHA (avatar + controles) */}
        <aside className="lg:col-span-7 px-6 sm:px-10 py-10 lg:py-16 relative">
          {/* Controles superiores */}
          <nav aria-label="controles" className="flex items-center justify-end gap-3">
            <span className="text-xs -mt-6 mr-auto hidden lg:block text-black/70 dark:text-white/60">
              modo Dark & Light
            </span>
            <span className="sr-only">modo {isDark ? "Dark" : "Light"}</span>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
            >
              <span className="inline-block size-2 rounded-full bg-amber-400" />
              {isDark ? "Dark" : "Light"}
            </button>
            <a
              href="/cv-andres-zambrano.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 dark:bg-black/30 backdrop-blur transition"
            >
              ↓ CV
            </a>
          </nav>

          {/* Tarjeta central que simula el marco de imagen del mock (alineada a la derecha) */}
          <figure
            className="ml-auto mt-10 w-full max-w-xl aspect-[4/3] rounded-2xl bg-gradient-to-br from-stone-50 to-stone-200 dark:from-neutral-900 dark:to-neutral-800 shadow-2xl ring-1 ring-black/10 dark:ring-white/5 grid place-items-center p-8 relative overflow-hidden"
          >
            {/* sobre líneas estilo "sobre" */}
            <span className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 0 L50 40 L100 0" fill="none" stroke="currentColor" strokeWidth="0.6" />
                <path d="M0 100 L50 60 L100 100" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </span>

            {/* Avatar ilustrado en SVG (sin imágenes externas) */}
            <svg role="img" aria-label="Avatar de Andrés" className="w-52 h-52 drop-shadow-md" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="62" className="fill-amber-300/20 dark:fill-stone-700/40" />
              <circle cx="64" cy="52" r="24" className="fill-stone-200 dark:fill-stone-400" />
              <rect x="38" y="74" width="52" height="38" rx="8" className="fill-amber-600 dark:fill-stone-600" />
              <path d="M40 56 a24 24 0 0 1 48 0 v4 a24 24 0 0 1 -48 0z" className="fill-stone-300 dark:fill-stone-500" />
              <path d="M48 44 q16 -16 32 0 q-2 -18 -16 -18 q-14 0 -16 18z" className="fill-stone-700 dark:fill-stone-800" />
              <circle cx="54" cy="58" r="2" className="fill-stone-800" />
              <circle cx="74" cy="58" r="2" className="fill-stone-800" />
              <path d="M52 66 q12 10 24 0" className="fill-none stroke-stone-800" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Texto guía dentro del marco */}
            <figcaption className="absolute top-3 left-4 text-xs text-stone-500 dark:hidden">
              imagen de perfil en escala de grises – portafolio Andrés
            </figcaption>
          </figure>
        </aside>

        {/* CINTA DE BOTONES REDONDOS */}
        <footer className="lg:col-span-12 px-6 sm:px-10 py-6 lg:py-10">
          <nav aria-label="secciones del portafolio" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { label: "INICIO", href: "/" },
              { label: "ACERCA DE MI", href: "/about" },
              { label: "MIS PROYECTOS", href: "/projects" },
              { label: "EXPERIENCIA", href: "/experiencia" },
              { label: "REFERENCIAS", href: "/referencias" },
              { label: "CONTACTOS", href: "/contactos" },
            ].map((b) => (
              <a
                key={b.href}
                href={b.href}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-stone-100 text-stone-900 hover:bg-white shadow-[0_6px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-[0_4px_0_rgba(0,0,0,0.35)] ring-1 ring-black/10 dark:bg-neutral-900 dark:text-stone-100 dark:ring-white/10 dark:hover:bg-black/80"
              >
                {b.label}
              </a>
            ))}
          </nav>

          {/* Lema */}
          <p className="mt-6 text-center italic text-sm opacity-80">“si lo puedes imaginar, lo podemos hacer”</p>
        </footer>
      </main>
    </div>
  );
}
