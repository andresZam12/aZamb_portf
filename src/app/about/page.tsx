"use client";
import { useState } from "react";
import Link from "next/link";

/**
 * Página: Conóceme / About
 * - Fondo en un solo tono (#3b2a23), coherente con el resto del sitio.
 * - Imagen a la derecha, centrada; cuadro de información más ancho.
 * - Título principal color amarillo (amber-300).
 * - Botón de menú fijo arriba-derecha; flechas de navegación fijas abajo-derecha.
 * - Estructura semántica: header/main/section/aside/article/nav.
 */

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#3b2a23] text-stone-100">
      {/* Etiqueta superior */}
      <header className="max-w-6xl mx-auto px-5 pt-6">
        <span className="inline-block rounded-full bg-[#3b2a23]/70 backdrop-blur px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
          ACERCA DE MI
        </span>
      </header>

      {/* Contenido */}
      <main className="max-w-6xl mx-auto px-5 pb-24">
        {/* GRID PRINCIPAL */}
        <section className="mt-4 grid grid-cols-12 gap-6 items-start">
          {/* COLUMNA DERECHA: Imagen */}
          <aside className="order-last md:order-last col-span-12 md:col-span-4 relative">
            <figure className="relative mx-auto w-full h-[460px] md:h-[520px] overflow-hidden rounded-3xl ring-1 ring-black/20 shadow-2xl">
              {/* capa oscura para que el texto del centro resalte si se usa foto clara */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />

              {/* Placeholder de imagen; reemplazar por <Image/> o <img/> real */}
              <div className="absolute inset-0 grid place-items-center bg-stone-900/30">
                <span className="text-stone-200/70 text-sm">Coloca tu imagen aquí</span>
              </div>
            </figure>

            {/* Botón hamburger fijo */}
            <nav aria-label="menú" className="fixed top-4 right-5 z-40">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-label="Despliega el menú de opciones del inicio"
                className="grid place-items-center w-10 h-10 rounded-full bg-[#8b5e3c] text-white shadow-lg ring-1 ring-black/20 hover:brightness-110 active:scale-95 transition"
              >
                <span className="sr-only">Abrir menú</span>
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

              {/* Mini menú */}
              {menuOpen && (
                <div className="mt-2 w-56 rounded-2xl bg-[#3b2a23] p-2 shadow-2xl ring-1 ring-black/20">
                  {[
                    { label: "Inicio", href: "/" },
                    { label: "Proyectos", href: "/projects" },
                    { label: "Contacto", href: "/contacts" },
                  ].map((i) => (
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
            </nav>
          </aside>

          {/* COLUMNA IZQUIERDA: contenido */}
          <article className="order-first md:order-first col-span-12 md:col-span-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300 drop-shadow-[0_2px_0_rgba(0,0,0,0.15)]">
              Conóceme
            </h1>

            {/* Bloque central con texto sobre un panel */}
            <div className="mt-6 grid grid-cols-12 gap-6">
              {/* Sidebar de rótulos */}
              <aside className="hidden lg:block col-span-2 space-y-6 pt-1 font-semibold text-[#3b2a23]">
                <p className="opacity-90">Tecnologías</p>
                <p className="opacity-90">Habilidades personales</p>
                <p className="opacity-90">Idiomas</p>
                <p className="opacity-90">Reconocimientos</p>
              </aside>

              {/* Panel principal */}
              <section className="col-span-12 lg:col-span-10">
                <div className="rounded-3xl bg-[#3b2a23]/85 text-stone-100 ring-1 ring-black/20 shadow-xl p-5 md:p-7">
                  <p className="leading-relaxed">
                    Soy un estudiante de Ingeniería de Software apasionado por el desarrollo FullStack y con gran interés en la ciberseguridad y el pentesting. Mi motivación principal es crear soluciones digitales que no solo funcionen, sino que también sean seguras, escalables y útiles para las personas.
                  </p>

                  <p className="leading-relaxed mt-4">
                    Soy un gran líder de proyectos con buena experiencia, enfocado en el trabajo en equipo responsable y pulido, tengo habilidades en la solución rápida de problemas con buen fundamento práctico. Me adapto muy bien a varios entornos de trabajo por mi seriedad, humildad y responsabilidad en el fin de tener una comunicación clara y asertiva.
                  </p>

                  {/* Tecnologías */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-amber-300">Tecnologías</h2>
                    <ul className="mt-3 flex flex-wrap gap-3">
                      {[
                        "MySQL",
                        "Python",
                        "Java",
                        "JS",
                        "TS",
                        "React",
                        "Node",
                        "Tailwind",
                      ].map((t) => (
                        <li
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/10 text-sm"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Habilidades, Idiomas */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-amber-300">Habilidades personales</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-sm/relaxed">
                        <li>Comunicación clara y asertiva</li>
                        <li>Resolución de problemas</li>
                        <li>Trabajo en equipo y liderazgo</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-amber-300">Idiomas</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-sm/relaxed">
                        <li>Español (nativo)</li>
                        <li>Inglés (intermedio)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Reconocimientos */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-amber-300">Reconocimientos</h3>
                    <ul className="mt-2 space-y-1 text-sm/relaxed">
                      <li>
                        Participación en proyectos de aprendizaje nacional con enfoque en
                        desarrollo de software.
                      </li>
                      <li>Ganador de concurso &quot;Ciencia e Investigación COMUNA-UCC 2024&quot;.</li>
                      <li>Deportista reconocido de alto rendimiento en Nariño-Colombia.</li>
                      <li>
                        Galardonado académicamente por logros en matemáticas (IEM San Juan
                        Bosco 2018–2019).
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </section>
      </main>

      {/* Controles fijos de navegación inferior derecha */}
      <nav className="fixed bottom-6 right-6 z-40 flex gap-2">
        <Link
          href="/"
          className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow"
        >
          <span className="sr-only">Retroceder</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rotate-180"
          >
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>

        <Link
          href="/projects"
          className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow"
        >
          <span className="sr-only">Continuar</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
