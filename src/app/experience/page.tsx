"use client";
import { useState } from "react";
import Link from "next/link";


export default function ExperienciaPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-stone-100 relative overflow-hidden">
      {/* Fondo en 3 franjas */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
      />

      {/* Etiqueta superior */}
      <header className="max-w-7xl mx-auto px-5 pt-6">
        <span className="inline-block rounded-full bg-[#8b5e3c]/90 px-4 py-1 text-xs font-semibold ring-1 ring-black/20">
          EXPERIENCIA
        </span>
      </header>

      {/* Hamburger fijo */}
      <nav aria-label="menú" className="fixed top-4 right-5 z-40">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Despliega el menú de opciones"
          className="grid place-items-center w-10 h-10 rounded-full bg-[#80491f] text-white shadow-lg ring-1 ring-black hover:brightness-110 active:scale-95 transition"
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

      <main className="max-w-7xl mx-auto px-5 pb-24">
        <section className="mt-6 grid grid-cols-12 gap-6 items-start">
          {/* IZQUIERDA: Introducción + habilidades + CV */}
          <aside className="col-span-12 md:col-span-4">
            <div className="rounded-3xl bg-[#3b2a23]/85 ring-1 ring-black shadow-xl p-5 md:p-6">
              <p className="leading-relaxed">
                Mi recorrido académico y profesional me ha permitido fortalecer competencias en desarrollo de software,
                liderazgo y gestión de procesos, integrando habilidades técnicas con experiencia en trabajo en equipo y orientación al cliente.
              </p>

              <h2 className="mt-5 text-2xl font-bold text-amber-300">Habilidades laborales</h2>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm/relaxed">
                <li>Competencia en desarrollo de software</li>
                <li>Liderazgo y trabajo en equipo</li>
                <li>Comunicación efectiva y orientación al cliente</li>
                <li>Análisis operativo y optimización de procesos</li>
                <li>Integración de tecnología en entornos laborales</li>
                <li>Diseño y desarrollo de software</li>
              </ul>

              {/* Botón descargar CV */}
              <div className="mt-6 flex items-center gap-3">
                <span aria-hidden className="h-6 w-1 rounded-full bg-white/40" />
                <a
                  href="/cv-andres-zambrano.pdf"
                  className="relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-stone-100 text-stone-900 ring-1 ring-black/10 shadow-[0_6px_0_rgba(0,0,0,0.25)] hover:bg-white active:translate-y-0.5 active:shadow-[0_4px_0_rgba(0,0,0,0.35)]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M5 21h14a2 2 0 002-2v-2H3v2a2 2 0 002 2z" />
                  </svg>
                  Descargar CV (pdf)
                </a>
              </div>
            </div>

            <p className="mt-4 text-center text-xs opacity-85">Conoce más descargando mi CV</p>
          </aside>

          {/* CENTRO: Académica */}
          <section className="col-span-12 md:col-span-4">
            <div className="rounded-3xl bg-stone-50/95 text-stone-900 ring-1 ring-black/20 shadow-xl p-5">
              <h3 className="text-2xl font-extrabold text-[#3b2a23]">Académica</h3>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm/relaxed">
                <li>Bachiller Académico – Institución Educativa San Juan Bosco (Pasto, Nariño)</li>
                <li>Curso en Contabilidad Básica, Estándares Internacionales – Universidad Mariana</li>
                <li>Curso Técnico en Contaduría Pública – Comfamiliar de Nariño</li>
                <li>Programa Software Talento Tech – MinTIC (nivel intermedio en programación y desarrollo de software)</li>
                <li>Ingeniería de Software – Universidad Cooperativa de Colombia (60% en curso)</li>
              </ul>
            </div>
          </section>

          {/* DERECHA: Laboral y profesional */}
          <section className="col-span-12 md:col-span-4">
            <div className="rounded-3xl bg-stone-50/95 text-stone-900 ring-1 ring-black/20 shadow-xl p-5">
              <h3 className="text-2xl font-extrabold text-[#3b2a23]">Laboral y profesional</h3>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm/relaxed">
                <li>
                  Responsable de Atención al Cliente – Chicken Lico (2024): Gestión de clientes, resolución de reclamos,
                  manejo de inventarios y facturación, logrando mantener altos niveles de satisfacción y fidelización.
                </li>
                <li>
                  Vendedor y Cajero Administrador – Mundial de Mangueras (2020–2023): Administración de ventas, coordinación de
                  personal y cumplimiento de metas comerciales. Implementación de procesos que optimizaron la eficiencia del equipo.
                </li>
                <li>
                  Supervisor de Ventas – Mario Fernando Bolaños (2019–2020): Liderazgo de equipo, control de indicadores de desempeño
                  y desarrollo de estrategias comerciales orientadas al cumplimiento de objetivos de productividad.
                </li>
              </ul>
            </div>
          </section>
        </section>
      </main>

      {/* Flechas fijas inferior derecha */}
      <nav className="fixed bottom-6 right-6 z-40 flex gap-2">
        <Link
          href="/projects"
          className="grid place-items-center w-10 h-10 rounded-full bg-amber-950 hover:bg-amber-900 ring-1 ring-black shadow"
        >
          <span className="sr-only">Retroceder</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </Link>
        <Link
          href="/references"
          className="grid place-items-center w-10 h-10 rounded-full bg-amber-950 hover:bg-amber-900 ring-1 ring-black shadow"
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
