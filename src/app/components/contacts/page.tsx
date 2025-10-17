"use client";
import { useState } from "react";
import Link from "next/link";

/**
 * Página: Contactos
 * - Paleta coherente (#3b2a23 base, #8b5e3c acentos, ámbar para detalles).
 * - Lista de métodos de contacto con icono + enlace a la izquierda.
 * - Tarjeta con imagen personal a la derecha.
 * - Botón hamburger fijo arriba-derecha; flechas fijas abajo-derecha (volver / inicio).
 */

export default function ContactosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-stone-100 relative overflow-hidden">
      {/* Fondo en 3 franjas, igual a la pantalla principal */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
      />
      {/* Barra vertical decorativa al centro */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 md:w-1.5 bg-black/25 rounded-full -z-0"
      />

      {/* Etiqueta superior */}
      <header className="max-w-6xl mx-auto px-5 pt-6">
        <span className="inline-block rounded-full bg-[#8b5e3c]/90 px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
          CONTACTOS
        </span>
      </header>

      {/* Botón hamburger fijo */}
      <nav aria-label="menú" className="fixed top-4 right-5 z-40">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Despliega el menú de opciones"
          className="grid place-items-center w-10 h-10 rounded-full bg-[#8b5e3c] text-white shadow-lg ring-1 ring-black/20 hover:brightness-110 active:scale-95 transition"
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
          <div className="mt-2 w-56 rounded-2xl bg-[#3b2a23] p-2 shadow-2xl ring-1 ring-black/20">
            {[
                    { label: "Inicio", href: "/" },
                    { label: "Sobre mi", href: "/about" },
                    { label: "Proyectos", href: "/projects" },
                    { label: "Experiencia", href: "/experience" },
                    { label: "Referencias", href: "/references" },
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

      <main className="max-w-6xl mx-auto px-5 pb-24">
        <section className="mt-6 grid grid-cols-12 gap-8 items-start">
          {/* COLUMNA IZQUIERDA: métodos de contacto */}
          <aside className="col-span-12 md:col-span-6">
            <ul className="space-y-6">
              {/* Gmail */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-md bg-white/10 ring-1 ring-white/15">
                  {/* ícono Gmail */}
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-red-400"
                  >
                    <path d="M12 13.5L2 6.75V18a2 2 0 002 2h16a2 2 0 002-2V6.75L12 13.5z" />
                    <path
                      d="M22 6V6a2 2 0 00-2-2H4a2 2 0 00-2 2v.75L12 13.5 22 6.75V6z"
                      className="fill-red-500"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:andresze2001@gmail.com"
                  className="text-lg font-semibold hover:underline"
                >
                  andresze2001@gmail.com
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-md bg-white/10 ring-1 ring-white/15">
                  {/* ícono WhatsApp */}
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-green-400"
                  >
                    <path d="M20 11.5A8.5 8.5 0 115.4 18.6L4 22l3.5-1.4A8.5 8.5 0 1120 11.5z" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/57317799202"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold hover:underline"
                >
                  317799202
                </a>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-md bg-white/10 ring-1 ring-white/15">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-sky-400"
                  >
                    <path d="M6 6a2 2 0 11-4 0 2 2 0 014 0zM4 9h4v11H4zM14 9h4a4 4 0 014 4v7h-4v-6a2 2 0 00-2-2h-2v8h-4V9h4z" />
                  </svg>
                </span>
                <a
                  href="https://www.linkedin.com/in/andres_z8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold hover:underline"
                >
                  andres_z8
                </a>
              </li>

              {/* GitHub */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-md bg-white/10 ring-1 ring-white/15">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.54 0-.27-.01-1.14-.02-2.07-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.74 1.12 2.94 0 4.21-2.58 5.14-5.03 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .3.2.65.76.54 4.35-1.45 7.5-5.57 7.5-10.43C23.01 5.24 18.27.5 12 .5z" />
                  </svg>
                </span>
                <a
                  href="https://github.com/andres_z8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>

            {/* Lema */}
            <p className="mt-10 italic text-center text-sm opacity-90">
              “si lo puedes imaginar, lo podemos hacer”
            </p>
          </aside>

          {/* COLUMNA DERECHA: imagen personal en tarjeta */}
          <section className="col-span-12 md:col-span-6">
            <div className="mx-auto max-w-md p-5 rounded-[28px] bg-white/90 text-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/10 bg-stone-200 grid place-items-center">
                {/* Reemplazar por <Image/> real */}
                <span className="text-stone-600 text-sm">Imagen personal</span>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Flechas fijas inferior derecha */}
      <nav className="fixed bottom-6 right-6 z-40 flex gap-2">
        <Link
          href="/references" // ← inglés para coincidir con /references
          className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow"
        >
          <span className="sr-only">Retroceder</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>
        <Link
          href="/"
          className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow"
        >
          <span className="sr-only">Volver al inicio</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
