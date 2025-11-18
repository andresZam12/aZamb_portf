"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../Lang/LanguageProvider";

type Language = "es" | "en";

const translations: Record<
  Language,
  {
    title: string;
    additionals: string;
    viewCode: string;
    prev: string;
    next: string;
    projects: Record<string, { name: string; description: string }>;
    extras: Record<string, { name: string; description: string }>;
  }
> = {
  es: {
    title: "MIS PROYECTOS",
    additionals: "Más proyectos...",
    viewCode: "Ver código",
    prev: "← Sobre mí",
    next: "Experiencia →",
    projects: {
      elliotIA: {
        name: "Elliot IA",
        description: "Asesor de ventas de productos con inteligencia artificial para automatización similar a un agente artificial con manejo de nodos y proximas simulacióndes de avatars interactivos en proceso... desarrollado en node.js, Python, react.",
      },
      int3d: {
        name: "INT3D-Realidad",
        description: "Juego de niveles en esquema de puntuación acumulado con énfasis en la creación de componentes enemigos desarrollados con inteligencia artificial cuyas capacidades convergen en la interacción y entretenimiendo del usuarios, este se desarrolló en Unity3D, C# y C++.",
      },
      portfolio: {
        name: "Portafolio profesional",
        description: "Elaboración de portafolio enfocado en mi proceso de trabajo con enfoque responsive para una mejor contratación de mis servicios y presentación personal. Proyecto Frontend personal desarrollado en Next.js, Tailwind CSS y TypeScript .",
      }
    },
    extras: {
      academic: {
        name: "Tarjetas de presentación Frontend",
        description: "Desarrollo de tarjetas de presentación con APIS de maps para ubicación y sistemade presentación elaborado con tecnologías Frontend, next.js, Tailwind CSS y TypeScript."
      },
      events: {
        name: "App Móvil de Eventos",
        description: "Aplicación para organización de eventos locales relizado con Flutter, Dart y Firebase en proceso de desarrollo..."
      },
      discord: {
        name: "Bot de Discord",
        description: "Bot para gestión de comunidades gaming en desarrollo."
      }
    }
  },
  en: {
    title: "MY PROJECTS",
    additionals: "More projects...",
    viewCode: "View code",
    prev: "← About me",
    next: "Experience →",
    projects: {
      elliotIA: {
        name: "Elliot AI",
        description: "Sales advisor for products with artificial intelligence for automation similar to an artificial agent with node management and upcoming interactive avatar simulations in progress... developed in node.js, Python, react",
      },
      int3d: {
        name: "INT3D-Reality",
        description: "A level-based game with a cumulative scoring system, emphasizing the creation of AI-powered enemy components whose capabilities converge on user interaction and entertainment. It was developed in Unity3D, C#, and C++.",
      },
      portfolio: {
        name: "Professional Portfolio",
        description: "Portfolio development focused on my work process with a responsive design for improved service contracts and personal presentation. Personal Frontend project developed in Next.js, Tailwind CSS, and TypeScript.",
      }
    },
    extras: {
      academic: {
        name: "Frontend Business Cards",
        description: "Development of business cards with Maps APIs for location and presentation system developed with Frontend technologies, next.js, Tailwind CSS and TypeScript."
      },
      events: {
        name: "Events Mobile App",
        description: "Application for organizing local events, built with Flutter, Dart, and Firebase, currently under development..."
      },
      discord: {
        name: "Discord Bot",
        description: "Bot for gaming community management in development."
      }
    }
  }
};


const projects = [
  { key: "elliotIA" as const, image: "/eliot2.png", repo: "https://github.com/andresZam12/elliot-ia" },
  { key: "int3d" as const, image: "/Zom.jpeg", repo: "https://github.com/andresZam12/Juego_py_final.git" },
  { key: "portfolio" as const, image: "/portfolio.jpg", repo: "https://github.com/andresZam12/aZamb_portf" },
];

const extraKeys = ["academic", "events", "discord"] as const;

export default function ProjectsPage() {
  const { lang } = useLang();
  const t = translations[lang];
  const [isDark, setIsDark] = useState(false);

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

  const bgGradient = isDark
    ? "bg-[linear-gradient(to_right,#1a1a1a_0%,#1a1a1a_33.34%,#2d2d2d_33.34%,#2d2d2d_66.67%,#404040_66.67%,#404040_100%)]"
    : "bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <span aria-hidden className={`absolute inset-0 -z-10 ${bgGradient}`} />

      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 md:mb-12">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <section className="lg:col-span-9 space-y-6 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6">
            {projects.map((p, index) => (
              <article
                key={p.key}
                className="bg-black/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 border-2 border-black hover:ring-yellow-400/50 transition-all group animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video relative rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 group-hover:shadow-xl transition-all">
                  <Image
                    src={p.image}
                    alt={t.projects[p.key].name}
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 md:mb-4">
                  {t.projects[p.key].name}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-white/90 text-justify">
                  {t.projects[p.key].description}
                </p>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 text-white/80 hover:text-yellow-400 transition-colors text-base md:text-lg font-medium"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:w-7 md:h-7">
                    <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
                  </svg>
                  <span>{t.viewCode}</span>
                </a>
              </article>
            ))}
          </section>

          <aside className="lg:col-span-3 mt-8 lg:mt-0 animate-fade-in opacity-0" style={{ animationDelay: "600ms" }}>
            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 md:mb-8">
              {t.additionals}
            </h2>
            <div className="bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 space-y-4 md:space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 border-2 border-black">
              {extraKeys.map((key) => (
                <div
                  key={key}
                  className="p-4 md:p-6 bg-white/5 hover:bg-white/10 rounded-lg md:rounded-xl transition-all group cursor-pointer"
                >
                  <h3 className="text-base md:text-lg font-bold text-yellow-400 mb-1 md:mb-2">
                    {t.extras[key].name}
                  </h3>
                  <p className="text-base md:text-lg text-white/80 group-hover:text-white transition-colors text-justify">
                    {t.extras[key].description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
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