"use client";
import { useEffect, useState } from "react";
import { useLang } from "../../providers/LanguageProvider";
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground";

type Language = "es" | "en";

const WORK_EXPERIENCE = [
  {
    role:    { es: "Atención al Cliente",           en: "Customer Service"          },
    company: "Chicken Lilo",
    year:    "2024",
    desc:    { es: "Gestión de clientes y resolución de reclamos en entorno de alta rotación.",
               en: "Customer management and claims resolution in a high-turnover environment." },
  },
  {
    role:    { es: "Vendedor y Cajero Administrador", en: "Salesperson & Cashier Admin" },
    company: "Mundial de Mangueras",
    year:    "2020–2023",
    desc:    { es: "Administración de ventas y coordinación de personal.",
               en: "Sales administration and staff coordination." },
  },
  {
    role:    { es: "Supervisor de Ventas",           en: "Sales Supervisor"           },
    company: "Surimportaciones SAS",
    year:    "2019–2020",
    desc:    { es: "Liderazgo de equipo y control de indicadores de desempeño.",
               en: "Team leadership and performance indicators management." },
  },
];

const translations: Record<Language, {
  title: string;
  academicTitle: string;
  laboralTitle: string;
  laboralIntro: string;
  downloadCV: string;
  prev: string;
  next: string;
  academic: string[];
}> = {
  es: {
    title: "EXPERIENCIA",
    academicTitle: "Formación académica",
    laboralTitle: "Experiencia laboral",
    laboralIntro:
      "Mi experiencia previa al software — en atención al cliente, administración de ventas y supervisión de equipos — me formó en comunicación directa, resolución de problemas bajo presión y trato con personas. Habilidades que aplico hoy en el trabajo con equipos de desarrollo y en la relación con usuarios finales.",
    downloadCV: "Descargar CV completo",
    prev: "← Proyectos",
    next: "Referencias →",
    academic: [
      "Ingeniería de Software — Universidad Cooperativa de Colombia (7º de 8 semestres · 87% completado)",
      "Talento Tech — MinTIC (Desarrollo de software, nivel intermedio)",
      "Bachiller Académico — Institución Educativa San Juan Bosco, Pasto, Nariño",
      "Contabilidad Básica y Estándares Internacionales — Universidad Mariana",
      "Técnico en Contaduría Pública — Comfamiliar de Nariño",
    ],
  },
  en: {
    title: "EXPERIENCE",
    academicTitle: "Academic Background",
    laboralTitle: "Work Experience",
    laboralIntro:
      "My pre-software work experience — in customer service, sales administration, and team supervision — built my skills in direct communication, problem-solving under pressure, and people management. Skills I apply today when working with development teams and end users.",
    downloadCV: "Download Full CV",
    prev: "← Projects",
    next: "References →",
    academic: [
      "Software Engineering — Universidad Cooperativa de Colombia (7th of 8 semesters · 87% complete)",
      "Talento Tech — MinTIC (Software development, intermediate level)",
      "High School Diploma — Institución Educativa San Juan Bosco, Pasto, Nariño",
      "Basic Accounting & International Standards — Universidad Mariana",
      "Technical Degree in Public Accounting — Comfamiliar de Nariño",
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

  const navClass = `px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg ${
    isDark ? "bg-black hover:bg-gray-800" : "bg-amber-950/90 hover:bg-amber-900"
  }`;

  const cardClass = "bg-black/20 backdrop-blur-md rounded-2xl ring-1 ring-white/15 border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 md:p-8";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-10">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* BLOQUE 1 — Formación académica */}
          <section className={`${cardClass} animate-fade-in opacity-0`} style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              {t.academicTitle}
            </h2>
            <ul className="space-y-4">
              {t.academic.map((item, i) => {
                const [title, ...rest] = item.split(" — ");
                const subtitle = rest.join(" — ");
                return (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-white leading-snug">{title}</p>
                      {subtitle && (
                        <p className="text-sm text-white/60 mt-0.5">{subtitle}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* BLOQUE 2 — Experiencia laboral */}
          <section className={`${cardClass} animate-fade-in opacity-0`} style={{ animationDelay: "250ms" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
              {t.laboralTitle}
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 text-justify">
              {t.laboralIntro}
            </p>

            <div className="space-y-4">
              {WORK_EXPERIENCE.map((job, i) => (
                <div
                  key={i}
                  className="bg-white/5 hover:bg-white/8 rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm md:text-base font-bold text-yellow-300 leading-snug">
                      {job.role[lang]}
                    </p>
                    <span className="text-xs text-white/50 shrink-0 mt-0.5">{job.year}</span>
                  </div>
                  <p className="text-xs md:text-sm text-white/55 mb-1">{job.company}</p>
                  <p className="text-sm text-white/80">{job.desc[lang]}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA — Descargar CV */}
        <div className="mt-14 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
          <a
            href="/CVAnd.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl text-base md:text-lg transition-all shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M12 15l-4-4M12 15l4-4" />
              <path d="M5 21h14a2 2 0 002-2v-2H3v2a2 2 0 002 2z" />
            </svg>
            {t.downloadCV}
          </a>
        </div>
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
