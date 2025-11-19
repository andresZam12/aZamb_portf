"use client";
import { useEffect, useState } from "react";
import { useLang } from "../../providers/LanguageProvider";
import Link from "next/link";

type Language = "es" | "en";

const translations: Record<Language, {
  title: string;
  skillsTitle: string;
  academicTitle: string;
  laboralTitle: string;
  downloadCV: string;
  caption: string;
  prev: string;
  next: string;
  skills: string[];
  academic: string[];
  laboral: string[];
}> = {
  es: {
    title: "EXPERIENCIA",
    skillsTitle: "Habilidades laborales",
    academicTitle: "Académica",
    laboralTitle: "Laboral y profesional",
    downloadCV: "Descargar CV (pdf)",
    caption: "Conoce más descargando mi CV",
    prev: "← Proyectos",
    next: "Referencias →",
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
      "Responsable de Atención al Cliente – Chicken Lilo (2024): Gestión de clientes, resolución de reclamos, manejo de inventarios y facturación.",
      "Vendedor y Cajero Administrador – Mundial de Mangueras (2020–2023): Administración de ventas, coordinación de personal y cumplimiento de metas comerciales.",
      "Supervisor de Ventas – Surimportaciones SAS (2019–2020): Liderazgo de equipo y control de indicadores de desempeño.",
    ],
  },
  en: {
    title: "EXPERIENCE",
    skillsTitle: "Work Skills",
    academicTitle: "Academic",
    laboralTitle: "Work and Professional",
    downloadCV: "Download CV (pdf)",
    caption: "Learn more by downloading my CV",
    prev: "← Projects",
    next: "References →",
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
      "Customer Service Responsible – Chicken Lilo (2024): Customer management, claims resolution, inventory and billing handling.",
      "Salesperson and Cashier Administrator – Mundial de Mangueras (2020–2023): Sales administration, staff coordination and meeting commercial goals.",
      "Sales Supervisor – Surimportaciones SAS (2019–2020): Team leadership and performance indicators control.",
    ],
  },
};

export default function ExperienciaPage() {
  const { lang } = useLang();
  const t = translations[lang];
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();

    const handleThemeChange = () => updateTheme();
    const handleStorage = (e: StorageEvent) => e.key === "theme" && updateTheme();

    window.addEventListener("theme-change", handleThemeChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const bgGradient = isDark
    ? "bg-[linear-gradient(to_right,#1a1a1a_0%,#1a1a1a_33.34%,#2d2d2d_33.34%,#2d2d2d_66.67%,#404040_66.67%,#404040_100%)]"
    : "bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]";

  const navClass = isDark
    ? "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-black hover:bg-gray-800"
    : "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-amber-950/90 hover:bg-amber-900";

  const cardClass = "bg-black/25 backdrop-blur-md rounded-3xl ring-1 ring-white/10 border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 md:p-8 lg:p-10 h-full";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <span aria-hidden className={`absolute inset-0 -z-10 ${bgGradient}`} />

      <main className="max-w-7xl mx-auto px-5 pt-20 md:pt-24 pb-24">
        <header className="mb-6 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">{t.title}</h1>
        </header>

        <section className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <aside className="col-span-12 md:col-span-4 animate-fade-in" style={{ animationDelay: "0ms" }}>
            <div className={`${cardClass} flex flex-col`}>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose text-white/90 text-justify">
                Mi recorrido académico y profesional me ha permitido fortalecer competencias en desarrollo de software,
                liderazgo y gestión de procesos, integrando habilidades técnicas con experiencia en trabajo en equipo y orientación al cliente.
              </p>

              <h2 className="mt-6 md:mt-8 text-2xl md:text-3xl font-bold text-yellow-400">{t.skillsTitle}</h2>
              <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 list-disc list-inside text-sm md:text-base lg:text-lg text-white/90">
                {t.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>

              {/* Botón descargar CV */}
              <div className="mt-auto pt-6 md:pt-8 flex items-center gap-3">
                <a
                  href="/CVAnd.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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

            <p className="mt-4 text-center text-sm md:text-base text-white/80">{t.caption}</p>
          </aside>

          <section className="col-span-12 md:col-span-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className={cardClass}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-400">{t.academicTitle}</h3>
              <ul className="mt-4 md:mt-6 list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg text-white/90 leading-relaxed md:leading-loose">
                {t.academic.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="col-span-12 md:col-span-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className={cardClass}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-400">{t.laboralTitle}</h3>
              <ul className="mt-4 md:mt-6 list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg text-white/90 leading-relaxed md:leading-loose">
                {t.laboral.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </main>

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