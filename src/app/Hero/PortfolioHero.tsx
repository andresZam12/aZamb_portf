"use client";

import { useState, useEffect } from "react";
import { useLang } from "../Lang/LanguageProvider";
import Link from "next/link";

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
      greeting: "Hola!",
      im: "Soy",
      name: "Andrés Zambrano",
      studentIn: "ESTUDIANTE EN",
      degree: "INGENIERÍA DE SOFTWARE",
      aspiring: "ASPIRANTE A",
      role: "Desarrollador FULLSTACK",
      description1:
        "Soy un estudiante de Ingeniería de Software apasionado por el desarrollo FullStack y con gran interés en la ciberseguridad y el streaming. Mi motivación principal es crear soluciones innovadoras que combinen desarrollo web moderno y seguridad informática.",
      description2:
        "Me motiva aprender continuamente, enfrentar retos y aportar valor en cada proyecto, con la visión de crecer como profesional integral en el mundo del software y la ciberseguridad.",
      description3:
        "Te doy paso a explorar mi proceso de aprendizaje, conocerme e interactuar en mi portafolio, saludos.",
    },
    motto: "Si lo puedes imaginar, lo podemos hacer",
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
      greeting: "Hello!",
      im: "I'm",
      name: "Andrés Zambrano",
      studentIn: "STUDENT IN",
      degree: "SOFTWARE ENGINEERING",
      aspiring: "ASPIRING",
      role: "FULLSTACK Developer",
      description1:
        "I'm a Software Engineering student passionate about FullStack development with great interest in cybersecurity and streaming. My main motivation is to create innovative solutions that combine modern web development and computer security.",
      description2:
        "I'm motivated by continuous learning, facing challenges, and adding value in every project, aiming to grow as a comprehensive professional in the software and cybersecurity world.",
      description3:
        "Feel free to explore my learning process, get to know me and interact with my portfolio, greetings.",
    },
    motto: "If you can imagine it, we can build it",
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
      {/* Fondo de 3 franjas */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 ${
          isDark
            ? "bg-[linear-gradient(to_right,#1a1a1a_0%,#1a1a1a_33.34%,#2d2d2d_33.34%,#2d2d2d_66.67%,#404040_66.67%,#404040_100%)]"
            : "bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
        }`}
      />

      {/* Navegación principal - Responsive */}
      <nav className="fixed top-20 left-0 right-0 z-40 overflow-x-auto">
        <div className="flex justify-start md:justify-center gap-2 px-4 min-w-max mx-auto">
          {Object.entries(t.navigation).map(([key, value]) => (
            <Link
              key={key}
              href={`/${key === "home" ? "" : key}`}
              className="px-3 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-white font-semibold text-sm md:text-lg tracking-wide transition-all whitespace-nowrap"
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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t.hero.greeting}
              <br />
              {t.hero.im}{" "}
              <span className="text-yellow-400">{t.hero.name}</span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-yellow-400">{t.hero.studentIn}</p>
              <p className="text-3xl md:text-4xl font-bold">{t.hero.degree}</p>
              <p className="text-2xl md:text-3xl text-yellow-400">{t.hero.aspiring}</p>
              <p className="text-3xl md:text-4xl font-bold">{t.hero.role}</p>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-justify">{t.hero.description1}</p>
              <p className="text-justify">{t.hero.description2}</p>
              <p className="text-justify">{t.hero.description3}</p>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative aspect-square w-full max-w-3xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl">
              <div className="size-full rounded-3xl border-2 border-yellow-400/20 flex items-center justify-center text-xl md:text-2xl text-yellow-400/50">
                [Tu imagen aquí]
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Frase motivacional */}
      <footer className="text-center py-8">
        <p className="text-lg md:text-xl lg:text-2xl italic font-medium text-white/90">
          {t.motto}
        </p>
      </footer>
    </div>
  );
}