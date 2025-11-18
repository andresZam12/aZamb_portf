"use client";
import { useEffect, useState } from "react";
import { useLang } from "../Lang/LanguageProvider";
import Link from "next/link";

type Lang = "es" | "en";

const translations: Record<Lang, {
  title: string;
  prevLabel: string;
  nextLabel: string;
  emailLabel: string;
  cityLabel: string;
}> = {
  es: {
    title: "REFERENCIAS",
    prevLabel: "← Proyectos",
    nextLabel: "Contactos →",
    emailLabel: "CORREO",
    cityLabel: "CIUDAD",
  },
  en: {
    title: "REFERENCES",
    prevLabel: "← Projects",
    nextLabel: "Contacts →",
    emailLabel: "EMAIL",
    cityLabel: "CITY",
  },
};

const references = [
  {
    name: "Paola Burgos",
    gender: "f" as const,
    text: {
      es: "Andrés se ha destacado como un estudiante comprometido, con gran capacidad analítica y disposición para el aprendizaje continuo. Su interés por el desarrollo de software y la ciberseguridad lo proyecta como un futuro profesional integral.",
      en: "Andrés has stood out as a committed student, with great analytical skills and willingness for continuous learning. His interest in software development and cybersecurity projects him as a comprehensive future professional.",
    },
    email: "paolaburgoquiroz@gmail.com",
    city: "Pasto",
  },
  {
    name: "Paola Bárcenas",
    gender: "m" as const,
    text: {
      es: "Demuestra responsabilidad, ética laboral y un alto nivel de compromiso en cada tarea. Su capacidad para trabajar bajo presión y mantener la calidad lo convierte en un colaborador confiable.",
      en: "Demonstrates responsibility, work ethics and a high level of commitment in every task. His ability to work under pressure and maintain quality makes him a reliable collaborator.",
    },
    email: "pabocaneras12@gmail.com",
    city: "Pasto",
  },
  {
    name: "Mario Botina",
    gender: "m" as const,
    text: {
      es: "Es una persona íntegra, proactiva y con gran capacidad de trabajo en equipo. Su actitud positiva y habilidades interpersonales generan un ambiente de confianza y colaboración.",
      en: "He is an integral, proactive person with great teamwork skills. His positive attitude and interpersonal skills generate an environment of trust and collaboration.",
    },
    email: "mario_b86@gmail.com",
    city: "Cali",
  },
];

export default function ReferencesPage() {
  const { lang } = useLang();
  const t = translations[lang];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
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

  const glassClass = "bg-black/20 backdrop-blur-md";
  // ...
  const navClass = isDark
    ? "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-black hover:bg-gray-800"
    : "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-amber-950/90 hover:bg-amber-900";

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

      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-24">
        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12">
          {t.title}
        </h1>

        {/* Grid de referencias */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {references.map((ref) => (
            <article
              key={ref.name}
              className={`${glassClass} rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl ring-1 ring-white/20 hover:ring-yellow-400/50 transition-all`}
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Icono de género */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-2xl md:text-3xl">
                  {ref.gender === "f" ? "👩" : "👨"}
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 md:mb-3">
                    {ref.name}
                  </h3>

                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-white/90">
                    {ref.text[lang]}
                  </p>

                  {/* Datos de contacto */}
                  <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base text-white/80">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold">{t.emailLabel}:</span>
                      <a
                        href={`mailto:${ref.email}`}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors underline break-all"
                      >
                        {ref.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{t.cityLabel}:</span>
                      <span>{ref.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Navegación fija - Mejorada para móvil */}
      <nav className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex gap-2 md:gap-4">
        <Link href="/projects" className={navClass}>
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">{t.prevLabel}</span>
        </Link>
        <Link href="/contacts" className={navClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.nextLabel}</span>
        </Link>
      </nav>
    </div>
  );
}
