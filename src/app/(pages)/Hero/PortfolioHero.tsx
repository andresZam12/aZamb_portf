"use client";

import { useState, useEffect } from "react";
import { useLang } from "../../providers/LanguageProvider";
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground";

// Diccionario de traducciones
const translations = {
  es: {
    navigation: {
      home: "INICIO",
      about: "SOBRE MÍ",
      projects: "PROYECTOS",
      experience: "EXPERIENCIA",
      references: "REFERENCIAS",
      contacts: "CONTACTOS",
    },
    hero: {
      greeting: "Hola,",
      im: "soy",
      name: "Andrés Zambrano",
      subtitle: "Desarrollador FullStack · Ingeniería de Software @ UCC",
      description:
        "Construyo aplicaciones web y móviles con Java, Flutter, React y Python. Integro modelos de IA y consumo de APIs gubernamentales, REST y GraphQL en flujos reales, con manejo de datasets y Big Data. Aplico metodologías ágiles, arquitecturas limpias y buenas prácticas para entregar software que resuelve problemas concretos.",
      ctaProjects: "Ver proyectos",
      ctaCV: "Descargar CV",
    },
  },
  en: {
    navigation: {
      home: "HOME",
      about: "ABOUT",
      projects: "PROJECTS",
      experience: "EXPERIENCE",
      references: "REFERENCES",
      contacts: "CONTACTS",
    },
    hero: {
      greeting: "Hi,",
      im: "I'm",
      name: "Andrés Zambrano",
      subtitle: "FullStack Developer · Software Engineering @ UCC",
      description:
        "I build web and mobile apps with Java, Flutter, React, and Python. I integrate AI models and consume government, REST, and GraphQL APIs in real flows, with dataset and Big Data handling. I apply agile methodologies, clean architectures, and best practices to deliver software that solves real problems.",
      ctaProjects: "View Projects",
      ctaCV: "Download CV",
    },
  },
};

export default function PortfolioHero() {
  const [isDark, setIsDark] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado con partículas */}
      <AnimatedBackground isDark={isDark} />

      {/* Navegación principal - Responsive */}
      <nav className="fixed top-20 left-0 right-0 z-40 overflow-x-auto">
        <div className="flex justify-start md:justify-center gap-2 px-4 min-w-max mx-auto  ">
          {Object.entries(t.navigation).map(([key, value]) => (
            <Link
              key={key}
              href={`/${key === "home" ? "" : key}`}
              className="px-3 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-sm text-white font-semibold text-sm md:text-lg tracking-wide transition-all whitespace-nowrap"
            >
              {value}
            </Link>
          ))}
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 md:px-6 pt-40 md:pt-48 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <div className="text-white space-y-8 animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t.hero.greeting} {t.hero.im}{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-amber-200 bg-clip-text text-transparent">{t.hero.name}</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-yellow-300 tracking-wide">
              {t.hero.subtitle}
            </p>

            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl transition-all text-base shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/60 hover:scale-105"
              >
                {t.hero.ctaProjects}
              </Link>
              <a
                href="/CVAnd.pdf"
                download
                className="px-6 py-3 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-bold rounded-xl transition-all text-base"
              >
                {t.hero.ctaCV}
              </a>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative aspect-square w-full max-w-3xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms]">
            <img
              src="/andres.jpeg"
              alt="Andrés Zambrano"
              className="w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-2 ring-white/20 border-2 border-black"
            />
          </div>
        </div>
      </main>

    </div>
  );
}