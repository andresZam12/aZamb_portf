"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../providers/LanguageProvider";
import AnimatedBackground from "../../components/AnimatedBackground";

type Language = "es" | "en";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
  </svg>
);

const MAIN_PROJECTS = [
  {
    key: "verifarmac" as const,
    images: ["", ""] as [string, string], // reemplazar con rutas reales: ["/verifarmac-1.png", "/verifarmac-2.png"]
    repo: "https://github.com/andresZam12/proyecto_Verifarmac.git",
    secondUrl: "https://github.com/andresZam12/proyecto_Verifarmac/releases/download/v1.0.0/app-release.apk",
    secondLabel: { es: "Descargar APK", en: "Download APK" },
    stack: ["Flutter", "Dart", "Supabase", "Claude API", "ML Kit", "Google Maps", "Clean Architecture"],
  },
  {
    key: "mintic" as const,
    images: ["", ""] as [string, string], // reemplazar con rutas reales: ["/mintic-1.png", "/mintic-2.png"]
    repo: "https://github.com/andresZam12/proyectoMINTIC.git",
    secondUrl: "https://economia-empleo.vercel.app/",
    secondLabel: { es: "Ver demo", en: "View Demo" },
    stack: ["Python", "PySpark", "PostgreSQL", "Prophet", "Power BI", "Docker", "Next.js"],
  },
  {
    key: "misfinanzas" as const,
    images: ["", ""] as [string, string], // reemplazar con rutas reales: ["/misfinanzas-1.png", "/misfinanzas-2.png"]
    repo: "https://github.com/andresZam12/mis_finanzas.git",
    secondUrl: "https://misfinanzas-jade.vercel.app/login",
    secondLabel: { es: "Ver demo", en: "View Demo" },
    stack: ["Java", "Spring Boot", "PostgreSQL", "Angular", "REST API", "Clean Architecture"],
  },
];

const OTHER_PROJECTS = [
  { key: "elliotIA" as const,  image: "/eliot2.png",  repo: "https://github.com/andresZam12/elliot-ia" },
  { key: "int3d" as const,     image: "/Zom.jpeg",    repo: "https://github.com/andresZam12/Juego_py_final.git" },
  { key: "portfolio" as const, image: "/portt.jpeg",  repo: "https://github.com/andresZam12/aZamb_portf" },
];

const translations: Record<
  Language,
  {
    title: string;
    otherProjects: string;
    viewCode: string;
    prev: string;
    next: string;
    projects: Record<string, { name: string; description: string }>;
    others: Record<string, { name: string; description: string }>;
  }
> = {
  es: {
    title: "MIS PROYECTOS",
    otherProjects: "Otros proyectos",
    viewCode: "Ver código",
    prev: "← Sobre mí",
    next: "Experiencia →",
    projects: {
      verifarmac: {
        name: "VeriFarmac — Verificador de Medicamentos",
        description:
          "App móvil que permite a ciudadanos colombianos verificar la autenticidad de productos farmacéuticos mediante escaneo de código de barras, OCR, análisis visual con IA y consulta directa a la API pública de INVIMA. Genera un score de confianza combinado.",
      },
      mintic: {
        name: "Dashboard Predictivo Mercado Laboral — MinTIC 2026",
        description:
          "Plataforma de analítica predictiva del mercado laboral colombiano construida para el concurso nacional Datos al Ecosistema 2026. Integra datos de DANE, SENA y MinTrabajo con modelos predictivos y visualización interactiva en Power BI.",
      },
      misfinanzas: {
        name: "MisFinanzas — Gestión Financiera Personal",
        description:
          "Aplicación web para registro y seguimiento de ingresos, gastos, ahorros y deudas. Backend con Spring Boot y arquitectura por capas, frontend en Angular con reportes financieros por categoría.",
      },
    },
    others: {
      elliotIA: {
        name: "Elliot IA",
        description: "Agente de ventas con IA, manejo de nodos y simulación de avatars. Node.js, Python, React.",
      },
      int3d: {
        name: "INT3D-Realidad",
        description: "Juego por niveles con enemigos basados en IA. Unity3D, C#, C++.",
      },
      portfolio: {
        name: "Portafolio profesional",
        description: "Portafolio personal responsive. Next.js, Tailwind CSS, TypeScript.",
      },
    },
  },
  en: {
    title: "MY PROJECTS",
    otherProjects: "Other projects",
    viewCode: "View code",
    prev: "← About me",
    next: "Experience →",
    projects: {
      verifarmac: {
        name: "VeriFarmac — Medication Verifier",
        description:
          "Mobile app that allows Colombian citizens to verify the authenticity of pharmaceutical products through barcode scanning, OCR, AI visual analysis, and direct queries to the INVIMA public API. Generates a combined trust score.",
      },
      mintic: {
        name: "Predictive Labor Market Dashboard — MinTIC 2026",
        description:
          "Predictive analytics platform for the Colombian labor market built for the national competition Datos al Ecosistema 2026. Integrates DANE, SENA, and MinTrabajo data with predictive models and interactive Power BI visualizations.",
      },
      misfinanzas: {
        name: "MisFinanzas — Personal Finance Manager",
        description:
          "Web application for tracking income, expenses, savings, and debts. Spring Boot backend with layered architecture, Angular frontend with category-based financial reports.",
      },
    },
    others: {
      elliotIA: {
        name: "Elliot AI",
        description: "AI-powered sales agent with node management and avatar simulation. Node.js, Python, React.",
      },
      int3d: {
        name: "INT3D-Reality",
        description: "Level-based game with AI-powered enemies. Unity3D, C#, C++.",
      },
      portfolio: {
        name: "Professional Portfolio",
        description: "Responsive personal portfolio. Next.js, Tailwind CSS, TypeScript.",
      },
    },
  },
};

export default function ProjectsPage() {
  const { lang } = useLang();
  const t = translations[lang];
  const [isDark, setIsDark] = useState(false);
  const [slideIndex, setSlideIndex] = useState<Record<string, number>>({
    verifarmac: 0, mintic: 0, misfinanzas: 0,
  });

  const prevSlide = (key: string) =>
    setSlideIndex((prev) => ({ ...prev, [key]: prev[key] === 0 ? 1 : 0 }));
  const nextSlide = (key: string) =>
    setSlideIndex((prev) => ({ ...prev, [key]: prev[key] === 1 ? 0 : 1 }));

  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();

    const handleThemeChange = () => updateTheme();
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme") updateTheme();
    };

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />

      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 md:mb-12">
          {t.title}
        </h1>

        {/* Proyectos principales */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
          {MAIN_PROJECTS.map((p, index) => (
            <article
              key={p.key}
              className="flex flex-col bg-black/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 border-2 border-black hover:ring-yellow-400/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Slider de imágenes */}
              <div className="aspect-video relative rounded-xl md:rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-yellow-400/20 transition-all bg-white/5">
                {p.images[slideIndex[p.key]] ? (
                  <Image
                    src={p.images[slideIndex[p.key]]}
                    alt={`${t.projects[p.key].name} ${slideIndex[p.key] + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/25 text-sm select-none">imagen próximamente</span>
                  </div>
                )}

                {/* Flechas */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(p.key); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white text-lg leading-none transition-all"
                  aria-label="anterior"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(p.key); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white text-lg leading-none transition-all"
                  aria-label="siguiente"
                >
                  ›
                </button>

                {/* Puntos */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {p.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setSlideIndex((prev) => ({ ...prev, [p.key]: i })); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${slideIndex[p.key] === i ? "bg-yellow-400 scale-125" : "bg-white/40"}`}
                      aria-label={`imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-base md:text-lg font-bold text-yellow-400 mb-2 leading-snug">
                {t.projects[p.key].name}
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base leading-relaxed text-white/85 text-justify mb-4 flex-1">
                {t.projects[p.key].description}
              </p>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 hover:bg-yellow-400/20 hover:text-yellow-300 rounded-full text-xs transition-all duration-200 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors text-sm font-medium"
                >
                  <GithubIcon />
                  {t.viewCode}
                </a>
                <a
                  href={p.secondUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/15 hover:bg-yellow-400/25 text-yellow-300 rounded-lg text-sm font-medium transition-all"
                >
                  {p.secondLabel[lang]}
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Separador */}
        <div className="border-t border-white/10 mb-10" />

        {/* Otros proyectos */}
        <section className="animate-fade-in opacity-0" style={{ animationDelay: "600ms" }}>
          <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6">
            {t.otherProjects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {OTHER_PROJECTS.map((p) => (
              <div
                key={p.key}
                className="bg-black/20 backdrop-blur-md rounded-xl overflow-hidden text-white border border-white/10 hover:border-yellow-400/40 transition-all group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={t.others[p.key].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-yellow-400 mb-2">
                    {t.others[p.key].name}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-3">
                    {t.others[p.key].description}
                  </p>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white/55 hover:text-yellow-400 transition-colors font-medium"
                  >
                    <GithubIcon size={14} />
                    {t.viewCode}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex gap-2 md:gap-4">
        <Link href="/about" className={navClass}>
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">{t.prev}</span>
        </Link>
        <Link href="/experience" className={navClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.next}</span>
        </Link>
      </nav>
    </div>
  );
}
