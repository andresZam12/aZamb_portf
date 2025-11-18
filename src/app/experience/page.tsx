"use client";
import { useEffect, useState } from "react";
import { useLang } from "../Lang/LanguageProvider";
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
  skills: string[];
  academic: string[];
  laboral: string[];
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
    skills: [
      "Competencia en desarrollo de software",
      "Liderazgo y trabajo en equipo",
      "Comunicación efectiva y orientación al cliente",
      "Análisis operativo y optimización de procesos",
      "Integración de tecnología en entornos laborales",
      "Diseño y desarrollo de software",
    ],
    academic: [
      "Bachiller Académico – Institución Educativa San Juan Bosco (Pasto, Nariño)",
      "Curso en Contabilidad Básica, Estándares Internacionales – Universidad Mariana",
      "Curso Técnico en Contaduría Pública – Comfamiliar de Nariño",
      "Programa Software Talento Tech – MinTIC (nivel intermedio en programación y desarrollo de software)",
      "Ingeniería de Software – Universidad Cooperativa de Colombia (60% en curso)",
    ],
    laboral: [
      "Responsable de Atención al Cliente – Chicken Lico (2024): Gestión de clientes, resolución de reclamos, manejo de inventarios y facturación.",
      "Vendedor y Cajero Administrador – Mundial de Mangueras (2020–2023): Administración de ventas, coordinación de personal y cumplimiento de metas comerciales.",
      "Supervisor de Ventas – Mario Fernando Bolaños (2019–2020): Liderazgo de equipo y control de indicadores de desempeño.",
    ],
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
    skills: [
      "Software development skills",
      "Leadership and teamwork",
      "Effective communication and customer orientation",
      "Operational analysis and process optimization",
      "Integration of technology in work environments",
      "Software design and development",
    ],
    academic: [
      "High School Diploma – Institución Educativa San Juan Bosco (Pasto, Nariño)",
      "Basic Accounting Course, International Standards – Universidad Mariana",
      "Technical Course in Public Accounting – Comfamiliar de Nariño",
      "Software Talent Tech Program – MinTIC (intermediate level in programming and software development)",
      "Software Engineering – Universidad Cooperativa de Colombia (60% in progress)",
    ],
    laboral: [
      "Customer Service Responsible – Chicken Lico (2024): Customer management, claims resolution, inventory and billing handling.",
      "Salesperson and Cashier Administrator – Mundial de Mangueras (2020–2023): Sales administration, staff coordination and meeting commercial goals.",
      "Sales Supervisor – Mario Fernando Bolaños (2019–2020): Team leadership and performance indicators control.",
    ],
  },
};

export default function ExperienciaPage() {
  // ...
  const { lang } = useLang();
  const t = translations[lang];

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();

    const onThemeChange = () => update();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") update();
    };

    window.addEventListener("theme-change", onThemeChange as EventListener);
    window.addEventListener("storage", onStorage as EventListener);
    return () => {
      window.removeEventListener("theme-change", onThemeChange as EventListener);
      window.removeEventListener("storage", onStorage as EventListener);
    };
  }, []);

  // ...
  const glassClass = "bg-black/25 backdrop-blur-md";
  const navClass = isDark
    ? "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-black hover:bg-gray-800"
    : "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-amber-950/90 hover:bg-amber-900";

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

      {/* HeaderControls (tema/idioma/menu) se muestran globalmente desde el layout */}

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
                {t.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
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
                {t.academic.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* DERECHA: Laboral y profesional */}
          <section className="col-span-12 md:col-span-4">
            <div className={`${glassClass} rounded-3xl ring-1 ring-white/10 shadow-xl p-5`}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">{t.laboralTitle}</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm md:text-base text-white/90">
                {t.laboral.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </main>

      {/* Navegación inferior - responsive y con etiquetas */}
      <nav className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex gap-2 md:gap-4">
        <Link href="/projects" className={navClass}>
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">{t.prev}</span>
        </Link>
        <Link href="/references" className={navClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.next}</span>
        </Link>
      </nav>
    </div>
  );
}