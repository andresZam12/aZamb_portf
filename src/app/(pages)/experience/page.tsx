"use client";
import { useEffect, useState } from "react";
import { useLang } from "../../providers/LanguageProvider";
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground";

type Language = "es" | "en";

const WORK_EXPERIENCE = [
  {
    role:    { es: "Atención al Cliente",            en: "Customer Service Representative" },
    company: "Chicken Lilo · Pasto",
    year:    "2024",
    desc:    { es: "Análisis de ventas y rendimiento de productos con Power BI y Excel; reportes para la administración y capacitación de personal nuevo.",
               en: "Analyzed sales and product performance with Power BI and Excel; built management reports and trained new staff." },
  },
  {
    role:    { es: "Administrador de Punto de Venta", en: "Store Manager" },
    company: "Mundial de Mangueras y Correas de Nariño · Pasto",
    year:    "2020–2023",
    desc:    { es: "Gestión de ventas, caja, inventario y personal con control en Excel; amplié la cartera de clientes y supervisé locales en Cali.",
               en: "Managed sales, cash, inventory and staff with Excel-based controls; grew the client base and supervised stores in Cali." },
  },
  {
    role:    { es: "Supervisor de Ventas",            en: "Sales Supervisor" },
    company: "Surimportaciones SAS · Cali",
    year:    "2019–2020",
    desc:    { es: "Administré, configuré y di mantenimiento a Siigo y Microsoft Dynamics; trasladado por desempeño para liderar los equipos de ventas y contabilidad.",
               en: "Administered, configured and maintained Siigo and Microsoft Dynamics; transferred on merit to lead the sales and accounting teams." },
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
  proTitle: string;
  pro: { role: string; company: string; period: string; points: string[]; cta: string };
}> = {
  es: {
    title: "EXPERIENCIA",
    proTitle: "Experiencia profesional",
    pro: {
      role: "Desarrollador Freelance · Líder y único desarrollador",
      company: "Zabio — SaaS de agentes de IA para negocios",
      period: "Actualmente",
      points: [
        "Diseñé, construí y opero en producción una plataforma que ya factura con clientes reales: negocios sin conocimientos técnicos crean agentes de IA que atienden por WhatsApp y agendan citas en Google Calendar.",
        "Backend asíncrono en FastAPI con PostgreSQL y Row-Level Security para aislar los datos de cada organización; migraciones con Alembic, pruebas con pytest y despliegue en Docker.",
        "Capa multi-proveedor de LLMs (Claude, GPT-4o y Gemini) con prompt caching y agentes con tool calling que consultan disponibilidad y reservan citas.",
      ],
      cta: "Ver plataforma",
    },
    academicTitle: "Formación académica",
    laboralTitle: "Experiencia laboral previa",
    laboralIntro:
      "Antes de dedicarme al desarrollo ya usaba la tecnología como herramienta de trabajo: analicé datos con Power BI y Excel y administré sistemas empresariales como Siigo y Microsoft Dynamics. De esos años traigo liderazgo de equipos, visión de negocio y trato directo con clientes.",
    downloadCV: "Descargar CV completo",
    prev: "← Proyectos",
    next: "Contactos →",
    academic: [
      "Ingeniería de Software — Universidad Cooperativa de Colombia · Último semestre",
      "Talento Tech: Desarrollo de Software — Ministerio TIC de Colombia · Nivel intermedio",
      "Contabilidad Básica y Estándares Internacionales — Universidad Mariana · Curso",
      "Inglés B2 — English Adventure · En curso",
    ],
  },
  en: {
    title: "EXPERIENCE",
    proTitle: "Professional Experience",
    pro: {
      role: "Freelance Developer · Lead and sole developer",
      company: "Zabio — AI-Agent SaaS for Businesses",
      period: "Present",
      points: [
        "Designed, built and run in production a platform already generating revenue with real clients: non-technical businesses create AI agents that serve customers on WhatsApp and book appointments in Google Calendar.",
        "Async FastAPI backend with PostgreSQL Row-Level Security to isolate each organization's data; Alembic migrations, pytest test suite and Docker deployment.",
        "Multi-provider LLM layer (Claude, GPT-4o and Gemini) with prompt caching and tool-calling agents that check availability and book appointments.",
      ],
      cta: "View platform",
    },
    academicTitle: "Academic Background",
    laboralTitle: "Previous Work Experience",
    laboralIntro:
      "Before moving into development I was already using technology as a work tool: I analyzed data with Power BI and Excel and administered business systems such as Siigo and Microsoft Dynamics. From those years I bring team leadership, business perspective and direct client experience.",
    downloadCV: "Download Full CV",
    prev: "← Projects",
    next: "Contacts →",
    academic: [
      "B.Sc. Software Engineering — Universidad Cooperativa de Colombia · Final semester",
      "Talento Tech: Software Development — Colombian Ministry of ICT · Intermediate level",
      "Basic Accounting & International Standards — Universidad Mariana · Course",
      "English B2 — English Adventure · In progress",
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

  const navClass = `px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg btn-float ring-1 ring-white/20 ${
    isDark ? "bg-black hover:bg-gray-800" : "bg-amber-950/90 hover:bg-amber-900"
  }`;

  const cardClass = "bg-black/20 backdrop-blur-md rounded-2xl ring-1 ring-white/15 border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 md:p-8";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 title-shadow mb-10">
          {t.title}
        </h1>

        {/* BLOQUE 0 — Experiencia profesional */}
        <section className={`${cardClass} mb-8 animate-fade-in opacity-0`} style={{ animationDelay: "0ms" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">{t.proTitle}</h2>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <p className="text-lg md:text-xl font-bold text-white leading-snug">{t.pro.company}</p>
              <p className="text-sm md:text-base text-yellow-300/90 font-semibold mt-1">{t.pro.role}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-green-400/15 text-green-300 text-xs font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t.pro.period}
            </span>
          </div>
          <ul className="space-y-2.5 mb-6">
            {t.pro.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm md:text-base text-white/85 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://zabio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl text-sm btn-float"
            >
              {t.pro.cta} ↗
            </a>
            <a href="https://github.com/andresZam12/Zolution_back" target="_blank" rel="noreferrer" className="text-sm font-medium text-white/70 hover:text-yellow-400">
              Backend ↗
            </a>
            <a href="https://github.com/andresZam12/Zolution_front" target="_blank" rel="noreferrer" className="text-sm font-medium text-white/70 hover:text-yellow-400">
              Frontend ↗
            </a>
          </div>
        </section>

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
            href={lang === "es" ? "/CV_Andres_Zambrano_ES.pdf" : "/CV_Andres_Zambrano_EN.pdf"}
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl text-base md:text-lg btn-float"
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
        <Link href="/contacts" className={navClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.next}</span>
        </Link>
      </nav>
    </div>
  );
}
