"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Language = "es" | "en";

interface Translations {
  title: string;
  skillsTitle: string;
  academicTitle: string;
  laboralTitle: string;
  downloadCV: string;
  caption: string;
  prev: string;
  next: string;
  menu: Record<string, string>;
  darkMode: string;
  lightMode: string;
  languageBtn: string;
}

const translations: Record<Language, Translations> = {
  es: {
    title: "Experiencia",
    skillsTitle: "Habilidades laborales",
    academicTitle: "Académica",
    laboralTitle: "Laboral y profesional",
    downloadCV: "Descargar CV (pdf)",
    caption: "Conoce más descargando mi CV",
    prev: "← Proyectos",
    next: "Referencias →",
    menu: {
      home: "Inicio",
      about: "Acerca de mí",
      projects: "Proyectos",
      experience: "Experiencia",
      references: "Referencias",
      contacts: "Contactos",
    },
    darkMode: "🌙",
    lightMode: "☀️",
    languageBtn: "ES/EN",
  },
  en: {
    title: "Experience",
    skillsTitle: "Work Skills",
    academicTitle: "Academic",
    laboralTitle: "Work and Professional",
    downloadCV: "Download CV (pdf)",
    caption: "Learn more by downloading my CV",
    prev: "← Projects",
    next: "References →",
    menu: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      experience: "Experience",
      references: "References",
      contacts: "Contacts",
    },
    darkMode: "🌙",
    lightMode: "☀️",
    languageBtn: "EN/ES",
  },
};

export default function ExperienciaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Language>("es");
  const t = translations[lang];

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const buttonClass = "px-3 py-2 md:px-5 md:py-3 bg-amber-950/95 hover:bg-amber-900 rounded-full text-white font-medium text-sm md:text-base transition-all shadow-lg";
  const glassClass = "bg-black/25 backdrop-blur-md";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo de 3 franjas: cambia según tema */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 ${
          isDark
            ? "bg-[linear-gradient(to_right,#1a1a1a_0%,#1a1a1a_33.34%,#2d2d2d_33.34%,#2d2d2d_66.67%,#404040_66.67%,#404040_100%)]"
            : "bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
        }`}
      />

      {/* Botones superiores (tema / idioma / menú) */}
      <div className="fixed top-3 right-3 z-50 p-2 md:p-4 flex items-center gap-2 md:gap-3">
        <button onClick={() => setIsDark(!isDark)} className={buttonClass} aria-label="Alternar tema">
          {isDark ? t.lightMode : t.darkMode}
        </button>

        <button onClick={() => setLang(lang === "es" ? "en" : "es")} className={buttonClass} aria-label="Cambiar idioma">
          {lang.toUpperCase()}
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`${buttonClass} md:hidden`}
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-12 w-48 md:w-64 rounded-2xl bg-black/30 backdrop-blur-md p-2 shadow-2xl ring-1 ring-white/10">
              {Object.entries(t.menu).map(([key, label]) => (
                <Link
                  key={key}
                  href={`/${key === "home" ? "" : key}`}
                  className="block px-4 py-3 rounded-xl hover:bg-white/10 text-white text-sm font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-5 pt-20 md:pt-24 pb-24">
        <header className="mb-6 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">{t.title}</h1>
        </header>

        <section className="grid grid-cols-12 gap-6 items-start">
          {/* IZQUIERDA: Introducción + habilidades + CV */}
          <aside className="col-span-12 md:col-span-4">
            <div className={`${glassClass} rounded-3xl ring-1 ring-white/10 shadow-xl p-5 md:p-6`}
            >
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Mi recorrido académico y profesional me ha permitido fortalecer competencias en desarrollo de software,
                liderazgo y gestión de procesos, integrando habilidades técnicas con experiencia en trabajo en equipo y orientación al cliente.
              </p>

              <h2 className="mt-6 text-xl md:text-2xl font-bold text-amber-300">{t.skillsTitle}</h2>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm md:text-base text-white/90">
                <li>Competencia en desarrollo de software</li>
                <li>Liderazgo y trabajo en equipo</li>
                <li>Comunicación efectiva y orientación al cliente</li>
                <li>Análisis operativo y optimización de procesos</li>
                <li>Integración de tecnología en entornos laborales</li>
                <li>Diseño y desarrollo de software</li>
              </ul>

              {/* Botón descargar CV */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="/cv-andres-zambrano.pdf"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-base font-semibold bg-stone-100 text-stone-900 ring-1 ring-black/10 shadow hover:bg-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M5 21h14a2 2 0 002-2v-2H3v2a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">{t.downloadCV}</span>
                  <span className="sm:hidden">CV</span>
                </a>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/70">{t.caption}</p>
          </aside>

          {/* CENTRO: Académica */}
          <section className="col-span-12 md:col-span-4">
            <div className={`${glassClass} rounded-3xl ring-1 ring-white/10 shadow-xl p-5`}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">{t.academicTitle}</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm md:text-base text-white/90">
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
            <div className={`${glassClass} rounded-3xl ring-1 ring-white/10 shadow-xl p-5`}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">{t.laboralTitle}</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm md:text-base text-white/90">
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

      {/* Navegación inferior - responsive y con etiquetas */}
      <nav className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex gap-2 md:gap-4">
        <Link href="/projects" className={buttonClass}>
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">{t.prev}</span>
        </Link>
        <Link href="/references" className={buttonClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.next}</span>
        </Link>
      </nav>
    </div>
  );
}