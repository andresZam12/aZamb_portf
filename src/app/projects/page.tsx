"use client";
import { useState } from "react";
import Link from "next/link";


export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Datos de muestra; reemplaza por tus proyectos reales
  const projects = [
    {
      name: "Elliot IA",
      description:
        "Asesor de ventas de paquetes académicos con IA para UCC; esquema automatizado con buena viabilidad para ser escalable.",
      image: "/images/elliot.jpg",
      repo: "#",
    },
    {
      name: "INIT-3D-circular",
      description:
        "Juego en curso con Unity 3D + React, enfoque en aprendizaje de matemáticas vía juegos serios.",
      image: "/images/init-3d.jpg",
      repo: "#",
    },
    {
      name: "Portafolio profesional",
      description:
        "Sitio de portafolio personal con enfoque reusable en front con Tailwind/Next.js y contratación de servicios.",
      image: "/images/portfolio.jpg",
      repo: "#",
    },
    {
      name: "Proyecto en curso",
      description:
        "Phasellus sit amet lobortis eros. Etiam vehicula eget interdum quis eros.",
      image: "/images/proyecto.jpg",
      repo: "#",
    },
  ];

  const extras = [
    { name: "Frame 1", repo: "#" },
    { name: "Frame 2", repo: "#" },
    { name: "Frame 3", repo: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#3b2a23] text-stone-100">
      <header className="max-w-7xl mx-auto px-5 pt-6">
        <span className="inline-block rounded-full bg-[#8b5e3c]/90 px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
          MIS PROYECTOS MÁS RELEVANTES
        </span>
      </header>

      <main className="relative max-w-7xl mx-auto px-5 pb-12">
        {/* Botón hamburger flotante */}
        <nav aria-label="menú" className="fixed top-4 right-5 z-40">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Despliega el menú de opciones del inicio"
            className="grid place-items-center w-10 h-10 rounded-full bg-[#8b5e3c] text-white shadow-lg ring-1 ring-black/20 hover:brightness-110 active:scale-95 transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {menuOpen && (
            <div className="mt-2 w-56 rounded-2xl bg-[#3b2a23] p-2 shadow-2xl ring-1 ring-black/20">
              {[
                { label: "Inicio", href: "/" },
                { label: "Acerca de mí", href: "/about" },
                { label: "Proyectos", href: "/projects" },
                { label: "Experiencia", href: "/experience" },
                { label: "Referencias", href: "/references" },
                { label: "Contactos", href: "/contacts" },

              ].map((i) => (
                <Link key={i.href} href={i.href} className="block px-3 py-2 rounded-xl hover:bg-white/10 text-sm">
                  {i.label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* GRID PRINCIPAL: tarjetas + sidebar */}
        <section className="mt-6 grid grid-cols-12 gap-6">
          {/* Tarjetas */}
          <section className="col-span-12 lg:col-span-9">
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {projects.map((p) => (
                <li key={p.name} className="group">
                  <article className="rounded-3xl bg-[#3b2a23]/80 ring-1 ring-black/20 shadow-xl p-4 h-full">
                    <figure className="h-28 rounded-xl bg-white/10 ring-1 ring-white/10 overflow-hidden grid place-items-center">
                      {/* Placeholder de imagen; si usas next/image, reemplaza este bloque */}
                      <img src={p.image} alt="" className="hidden" />
                      <span className="text-stone-300/80 text-xs">Imagenes...</span>
                    </figure>
                    <h3 className="mt-3 font-semibold text-amber-300">Name: {p.name}</h3>
                    <p className="text-sm leading-relaxed mt-1">Description: {p.description}</p>
                  </article>

                  {/* Icono GitHub debajo de la tarjeta */}
                  <a href={p.repo} target="_blank" rel="noreferrer" className="mt-3 grid place-items-center">
                    <span className="sr-only">Ver repositorio de {p.name}</span>
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 hover:opacity-100 transition">
                      <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.54 0-.27-.01-1.14-.02-2.07-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.74 1.12 2.94 0 4.21-2.58 5.14-5.03 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .3.2.65.76.54 4.35-1.45 7.5-5.57 7.5-10.43C23.01 5.24 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Sidebar de adicionales */}
          <aside className="col-span-12 lg:col-span-3">
            <h2>
              <span className="inline-block rounded-full bg-[#8b5e3c]/90 px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
                Adicionales
              </span>
            </h2>

            <ul className="mt-4 space-y-3">
              {extras.map((x) => (
                <li key={x.name} className="flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-2">
                  <figure className="w-12 h-10 rounded-lg bg-white/10 ring-1 ring-white/10" />
                  <div className="flex-1 text-sm">
                    <p className="opacity-90">{x.name}</p>
                    <p className="text-xs opacity-70">Proyecto adicional</p>
                  </div>
                  <a href={x.repo} target="_blank" rel="noreferrer" className="grid place-items-center">
                    <span className="sr-only">Ver repositorio de {x.name}</span>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 hover:opacity-100 transition">
                      <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.54 0-.27-.01-1.14-.02-2.07-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.74 1.12 2.94 0 4.21-2.58 5.14-5.03 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .3.2.65.76.54 4.35-1.45 7.5-5.57 7.5-10.43C23.01 5.24 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Flechas navegación (fijas) */}
        <nav className="fixed bottom-6 right-6 z-40 flex gap-2">
          <Link
            href="/about"
            className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow"
          >
            <span className="sr-only">Retroceder</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </Link>
          <Link
            href="/experience"
            className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow"
          >
            <span className="sr-only">Continuar</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </Link>
        </nav>
      </main>
    </div>
  );
}
