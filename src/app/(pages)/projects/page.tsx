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

type LinkKind = "demo" | "apk" | "backend" | "frontend" | "code";

type ProjectKey = "zabio" | "mintic" | "verifarmac" | "deplhoy" | "oir" | "misfinanzas";

type MainProject = {
  key: ProjectKey;
  images: [string, string];
  liveUrl?: string;
  links: { kind: LinkKind; url: string }[];
  stack: string[];
};

const MAIN_PROJECTS: MainProject[] = [
  {
    key: "zabio",
    images: ["/zabio1.webp", "/zabio2.webp"],
    liveUrl: "https://zabio.vercel.app/",
    links: [
      { kind: "demo", url: "https://zabio.vercel.app/" },
      { kind: "backend", url: "https://github.com/andresZam12/Zolution_back" },
      { kind: "frontend", url: "https://github.com/andresZam12/Zolution_front" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL (RLS)", "SQLAlchemy", "Claude · GPT-4o · Gemini", "Tool Calling", "WhatsApp Cloud API", "Google Calendar API", "Next.js", "Docker"],
  },
  {
    key: "mintic",
    images: ["/mintic1.webp", "/mintic2.webp"],
    liveUrl: "https://economia-empleo.vercel.app/",
    links: [
      { kind: "demo", url: "https://economia-empleo.vercel.app/" },
      { kind: "code", url: "https://github.com/andresZam12/proyectoMINTIC" },
    ],
    stack: ["Python", "PySpark", "PostgreSQL", "Prophet", "Power BI", "Docker", "Next.js"],
  },
  {
    key: "verifarmac",
    images: ["/verifarmac1.webp", "/verifarmac2.webp"],
    links: [
      { kind: "apk", url: "https://github.com/andresZam12/proyecto_Verifarmac/releases/download/v1.0.0/app-release.apk" },
      { kind: "code", url: "https://github.com/andresZam12/proyecto_Verifarmac" },
    ],
    stack: ["Flutter", "Dart", "Supabase", "Claude API", "ML Kit", "Google Maps", "Clean Architecture"],
  },
  {
    key: "deplhoy",
    images: ["/deplhoy1.webp", "/deplhoy2.webp"],
    liveUrl: "https://deplhoy-news.vercel.app/",
    links: [
      { kind: "demo", url: "https://deplhoy-news.vercel.app/" },
      { kind: "code", url: "https://github.com/andresZam12/Pull-IA-front" },
    ],
    stack: ["Next.js", "TypeScript", "Gemini", "Prisma", "Supabase", "NextAuth", "Resend", "Upstash Redis", "GitHub Actions"],
  },
  {
    key: "oir",
    images: ["/oir1.webp", "/oir2.webp"],
    liveUrl: "https://oir-app.vercel.app/",
    links: [
      { kind: "demo", url: "https://oir-app.vercel.app/" },
      { kind: "backend", url: "https://github.com/andresZam12/O.IRback" },
      { kind: "frontend", url: "https://github.com/andresZam12/O.IRfront" },
    ],
    stack: ["Python", "FastAPI", "librosa", "Celery", "Redis", "Gemini", "Supabase", "Next.js", "yt-dlp"],
  },
  {
    key: "misfinanzas",
    images: ["/misfinanzas1.webp", "/misfinanzas2.webp"],
    liveUrl: "https://misfinanzas-jade.vercel.app/login",
    links: [
      { kind: "demo", url: "https://misfinanzas-jade.vercel.app/login" },
      { kind: "code", url: "https://github.com/andresZam12/mis_finanzas" },
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Angular", "REST API", "Layered Architecture"],
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
    live: string;
    linkLabels: Record<LinkKind, string>;
    projects: Record<ProjectKey, { name: string; role?: string; description: string }>;
    others: Record<string, { name: string; description: string }>;
  }
> = {
  es: {
    title: "MIS PROYECTOS",
    otherProjects: "Otros proyectos",
    viewCode: "Ver código",
    prev: "← Sobre mí",
    next: "Experiencia →",
    live: "En producción",
    linkLabels: { demo: "Ver demo", apk: "Descargar APK", backend: "Backend", frontend: "Frontend", code: "Ver código" },
    projects: {
      zabio: {
        name: "Zabio — Agentes de IA para negocios",
        role: "Freelance · Líder y único desarrollador · En producción con clientes de pago",
        description:
          "Plataforma SaaS multi-tenant que permite a personas y negocios sin conocimientos técnicos crear agentes de IA personalizados que atienden clientes por WhatsApp y agendan citas automáticamente en Google Calendar. Backend asíncrono en FastAPI con aislamiento por organización mediante Row-Level Security en PostgreSQL, una capa multi-proveedor de LLMs (Claude, GPT-4o y Gemini) con prompt caching, y agentes con tool calling que consultan disponibilidad y reservan citas.",
      },
      deplhoy: {
        name: "Deplhoy — Noticiero tech con IA",
        role: "Líder y único desarrollador · Producto propio",
        description:
          "Noticiero automatizado para programadores y profesionales de tecnología. Un pipeline programado recolecta noticias de más de 12 fuentes globales (HackerNews, TechCrunch, arXiv, blogs de OpenAI y Anthropic), las clasifica por relevancia con Gemini (programación, ingeniería, IA y empleabilidad), las resume con trazabilidad de fuentes y envía un boletín semanal con doble opt-in. Lo concebí como canal de crecimiento: construye una base de profesionales tech a quienes presentar nuevos proyectos y servicios.",
      },
      oir: {
        name: "O.IR — Acordes y letras con IA",
        role: "Líder y único desarrollador",
        description:
          "Plataforma web para músicos que detecta con IA los acordes y la letra de cualquier canción a partir de una URL de YouTube, un archivo de audio o una grabación de micrófono. Procesa el audio en segundo plano con Celery y Redis, analiza la armonía con librosa y ofrece reproducción sincronizada, puntaje de dificultad, transposición y exportación a PDF.",
      },
      verifarmac: {
        name: "VeriFarmac — Verificador de Medicamentos",
        role: "Líder técnico y desarrollador de IA · equipo de 2",
        description:
          "App móvil desarrollada en Flutter y Dart que verifica la autenticidad de medicamentos combinando escaneo de código de barras, OCR, análisis visual con IA y la API pública del INVIMA en un score de confianza. Gestioné el producto en GitHub Projects y desarrollé la capa de IA: ML Kit en el dispositivo y Claude API para analizar el empaque.",
      },
      mintic: {
        name: "Dashboard Predictivo Mercado Laboral — MinTIC 2026",
        role: "Líder y Product Owner · equipo de 4 · Puesto 8 nacional (91/100)",
        description:
          "Plataforma de analítica predictiva del mercado laboral colombiano para el concurso nacional Datos al Ecosistema 2026, donde obtuvimos el puesto 8 del país. Pipeline ETL en PySpark con datos del DANE, SENA y MinTrabajo, proyecciones de empleo con Prophet y visualización en Power BI y Next.js. Propuse la idea y dirigí al equipo por sprints.",
      },
      misfinanzas: {
        name: "MisFinanzas — Gestión Financiera Personal",
        role: "Desarrollo individual · full-stack",
        description:
          "Aplicación web para registrar ingresos, gastos, ahorros y deudas con reportes por categoría, diseñada a partir de mi formación contable. API REST en Spring Boot con arquitectura por capas y PostgreSQL; frontend en Angular.",
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
    live: "Live",
    linkLabels: { demo: "View demo", apk: "Download APK", backend: "Backend", frontend: "Frontend", code: "View code" },
    projects: {
      zabio: {
        name: "Zabio — AI Agents for Businesses",
        role: "Freelance · Lead and sole developer · Live with paying clients",
        description:
          "Multi-tenant SaaS platform that lets individuals and businesses with no technical background create custom AI agents that serve customers on WhatsApp and book appointments automatically in Google Calendar. Async FastAPI backend with per-organization isolation through PostgreSQL Row-Level Security, a multi-provider LLM layer (Claude, GPT-4o and Gemini) with prompt caching, and tool-calling agents that check availability and book appointments.",
      },
      deplhoy: {
        name: "Deplhoy — AI-Powered Tech News",
        role: "Lead and sole developer · Own product",
        description:
          "Automated news service for developers and tech professionals. A scheduled pipeline collects news from 12+ global sources (HackerNews, TechCrunch, arXiv, OpenAI and Anthropic blogs), ranks it by relevance with Gemini (programming, engineering, AI and employability), summarizes it with source traceability and sends a weekly double opt-in newsletter. I designed it as a growth channel: it builds a base of tech professionals to whom I can present new projects and services.",
      },
      oir: {
        name: "O.IR — AI Chords & Lyrics",
        role: "Lead and sole developer",
        description:
          "Web platform for musicians that uses AI to detect the chords and lyrics of any song from a YouTube URL, an audio file or a microphone recording. Audio is processed in the background with Celery and Redis, harmony is analyzed with librosa, and it offers synced playback, a difficulty score, transposition and PDF export.",
      },
      verifarmac: {
        name: "VeriFarmac — Medication Verifier",
        role: "Tech lead & AI developer · team of 2",
        description:
          "Mobile app built with Flutter and Dart that verifies medication authenticity by combining barcode scanning, OCR, AI visual analysis and the INVIMA public API into a trust score. I managed the product in GitHub Projects and built the AI layer: on-device ML Kit and Claude API for packaging analysis.",
      },
      mintic: {
        name: "Predictive Labor Market Dashboard — MinTIC 2026",
        role: "Lead & Product Owner · team of 4 · 8th nationwide (91/100)",
        description:
          "Predictive analytics platform for the Colombian labor market, built for the national Datos al Ecosistema 2026 competition, where we ranked 8th in the country. PySpark ETL pipeline with DANE, SENA and Ministry of Labor data, employment forecasts with Prophet and visualization in Power BI and Next.js. I came up with the idea and led the team through sprints.",
      },
      misfinanzas: {
        name: "MisFinanzas — Personal Finance Manager",
        role: "Solo developer · full-stack",
        description:
          "Web app to track income, expenses, savings and debts with category-based reports, designed from my accounting background. Spring Boot REST API with a layered architecture and PostgreSQL; Angular frontend.",
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
  const [slideIndex, setSlideIndex] = useState<Record<string, number>>({});

  const prevSlide = (key: string) =>
    setSlideIndex((prev) => ({ ...prev, [key]: (prev[key] ?? 0) === 0 ? 1 : 0 }));
  const nextSlide = (key: string) =>
    setSlideIndex((prev) => ({ ...prev, [key]: (prev[key] ?? 0) === 1 ? 0 : 1 }));

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

  const navClass = `px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg btn-float ring-1 ring-white/20 ${
    isDark ? "bg-black hover:bg-gray-800" : "bg-amber-950/90 hover:bg-amber-900"
  }`;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />

      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 title-shadow mb-8 md:mb-12">
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
              {/* Portada: slider de imágenes */}
              <div className="aspect-video relative rounded-xl md:rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-yellow-400/20 transition-all bg-white/5">
                <Image
                  src={p.images[slideIndex[p.key] ?? 0]}
                  alt={`${t.projects[p.key].name} ${(slideIndex[p.key] ?? 0) + 1}`}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-opacity duration-300"
                />

                {/* En producción */}
                <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-semibold text-green-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {t.live}
                </span>

                {/* Flechas */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(p.key); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white text-lg leading-none transition-all"
                  aria-label={lang === "es" ? "Imagen anterior" : "Previous image"}
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(p.key); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white text-lg leading-none transition-all"
                  aria-label={lang === "es" ? "Imagen siguiente" : "Next image"}
                >
                  ›
                </button>

                {/* Puntos */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {p.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setSlideIndex((prev) => ({ ...prev, [p.key]: i })); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${(slideIndex[p.key] ?? 0) === i ? "bg-yellow-400 scale-125" : "bg-white/40"}`}
                      aria-label={`${lang === "es" ? "Imagen" : "Image"} ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-base md:text-lg font-bold text-yellow-400 mb-1 leading-snug">
                {t.projects[p.key].name}
              </h3>
              {t.projects[p.key].role ? (
                <p className="text-xs md:text-sm font-semibold text-white/60 mb-3">
                  {t.projects[p.key].role}
                </p>
              ) : (
                <div className="mb-2" />
              )}

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
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-auto">
                {p.links.map((l) =>
                  l.kind === "demo" || l.kind === "apk" ? (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/15 hover:bg-yellow-400/25 text-yellow-300 rounded-lg text-sm font-medium transition-all"
                    >
                      {t.linkLabels[l.kind]}
                    </a>
                  ) : (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors text-sm font-medium"
                    >
                      <GithubIcon />
                      {t.linkLabels[l.kind]}
                    </a>
                  )
                )}
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
