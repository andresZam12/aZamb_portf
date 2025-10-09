"use client";
import { useState } from "react";

/**
 * Página: Referencias
 * - Paleta coherente (#3b2a23 base, #8b5e3c acentos, amber para detalles).
 * - Imagen visual grande a la izquierda (ellipse/circle). Placeholder reemplazable por <Image/>.
 * - Panel de testimonios a la derecha con avatares por sexo.
 * - Botón hamburger fijo arriba-derecha (no se superpone al layout) y flechas fijas abajo-derecha.
 */

export default function ReferencesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const refs = [
    {
      name: "Paola Burgos",
      gender: "f",
      text:
        "Andrés se ha destacado como un estudiante comprometido, con gran capacidad analítica y disposición para el aprendizaje continuo. Su interés por el desarrollo de software y la ciberseguridad lo proyecta como un futuro profesional integral.",
      email: "paolaburgosuioz@gmail.com",
      city: "Pasto",
    },
    {
      name: "Pablo Castañeda",
      gender: "m",
      text:
        "Demuestra responsabilidad, ética laboral y un alto nivel de compromiso en cada tarea. Su capacidad para trabajar bajo presión y mantener la calidad lo convierte en un colaborador confiable.",
      email: "pabocaneras12@gmail.com",
      city: "Pasto",
    },
    {
      name: "Mario Beltrán",
      gender: "m",
      text:
        "Es una persona íntegra, proactiva y con gran capacidad de trabajo en equipo. Su actitud positiva e habilidades interpersonales generan un ambiente de confianza y colaboración.",
      email: "mario_b86@gmail.com",
      city: "Cali",
    },
  ];

  return (
    <div className="min-h-screen bg-[#3b2a23] text-stone-100">
      {/* Etiqueta superior */}
      <header className="max-w-6xl mx-auto px-5 pt-6">
        <span className="inline-block rounded-full bg-[#3b2a23]/70 backdrop-blur px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
          REFERENCIAS
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
              { label: "Contacto", href: "/contactos" },
            ].map((i) => (
              <a key={i.href} href={i.href} className="block px-3 py-2 rounded-xl hover:bg-white/10 text-sm">
                {i.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-5 pb-24">
        <section className="mt-4 grid grid-cols-12 gap-6 items-start">
          {/* IMAGEN IZQUIERDA */}
          <aside className="col-span-12 md:col-span-5">
            <figure className="relative mx-auto w-full max-w-xl aspect-square overflow-hidden rounded-[48%] ring-2 ring-black/20 shadow-2xl bg-white/10 grid place-items-center">
              {/* Reemplaza esto por <Image/> con tu foto o ilustración */}
              <span className="text-stone-200/80 text-sm">Imagen visual del proyecto / referencia</span>
            </figure>
          </aside>

          {/* PANEL DE REFERENCIAS */}
          <section className="col-span-12 md:col-span-7">
            <div className="rounded-3xl bg-[#3b2a23]/85 ring-1 ring-black/20 shadow-xl p-5 md:p-7">
              <ul className="space-y-5">
                {refs.map((r) => (
                  <li key={r.name} className="grid grid-cols-[auto,1fr] gap-3">
                    {/* Avatar por sexo */}
                    <span className="mt-1 inline-grid size-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
                      {r.gender === "f" ? (
                        <span role="img" aria-label="mujer" className="text-xl">👩</span>
                      ) : (
                        <span role="img" aria-label="hombre" className="text-xl">👨</span>
                      )}
                    </span>
                    <p className="text-sm leading-relaxed">
                      {r.text}
                      <br />
                      <span className="block text-xs mt-1 opacity-90">
                        CORREO: <a className="underline" href={`mailto:${r.email}`}>{r.email}</a> | CIUDAD: {r.city}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </main>

      {/* Flechas fijas inferior derecha */}
      <nav className="fixed bottom-6 right-6 z-40 flex gap-2">
        <a href="/projects" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow">
          <span className="sr-only">Retroceder</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </a>
        <a href="/contactos" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 shadow">
          <span className="sr-only">Continuar</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </a>
      </nav>
    </div>
  );
}
