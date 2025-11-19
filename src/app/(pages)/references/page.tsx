"use client";
import { useEffect, useState } from "react";
import { useLang } from "../../providers/LanguageProvider";
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground";

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
      es: "Andrés ha demostrado ser un estudiante altamente comprometido, con sólidas capacidades analíticas y una marcada disposición para el aprendizaje continuo. Su habilidad para adquirir nuevos conocimientos de manera ágil y aplicarlos eficazmente en contextos reales lo proyecta como un profesional integral con un futuro prometedor.",
      en: "Andrés has proven to be a highly committed student with strong analytical skills and a clear willingness for continuous learning. His ability to quickly acquire new knowledge and apply it effectively in real-world scenarios positions him as a well-rounded professional with a promising future.",
    },
    email: "paolaburgosquiroz@gmail.com",
    city: "Pasto",
  },
  {
    name: "Paola Bárcenas",
    gender: "f" as const,
    text: {
      es: "Demuestra responsabilidad, ética laboral y un elevado nivel de compromiso en cada actividad que realiza. Su capacidad para trabajar bajo presión, mantener estándares de calidad y adaptarse a nuevos retos la convierten en una colaboradora confiable y orientada a resultados.",
      en: "He consistently demonstrates responsibility, strong work ethics, and a high level of commitment in every task he undertakes. His ability to work under pressure, maintain quality standards, and adapt to new challenges makes him a reliable, results-oriented team member.",

    },
    email: "paobarcenas12@gmail.com",
    city: "Pasto",
  },
  {
    name: "Mario Botina",
    gender: "m" as const,
    text: {
      es: "Es una persona íntegra, proactiva y con una destacada capacidad para el trabajo en equipo. Su actitud positiva, liderazgo natural y habilidades interpersonales fortalecen los entornos colaborativos y aportan significativamente al logro de objetivos comunes.",
      en: "He is an integral, proactive person with a remarkable ability to work in a team. His positive attitude, natural leadership, and interpersonal skills strengthen collaborative environments and significantly contribute to achieving common goals.",
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
      {/* Fondo animado con partículas flotantes */}
      <AnimatedBackground isDark={isDark} />

      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 md:mb-12">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {references.map((ref, index) => (
            <article
              key={ref.name}
              className={`${glassClass} rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 border-2 border-black hover:ring-yellow-400/50 transition-all animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-2xl md:text-3xl">
                  {ref.gender === "f" ? "👩" : "👨"}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 md:mb-3">
                    {ref.name}
                  </h3>

                  <p className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose mb-4 md:mb-6 text-white/90 text-justify">
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
