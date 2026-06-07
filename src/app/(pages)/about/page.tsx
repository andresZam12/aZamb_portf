"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../../providers/LanguageProvider";
import AnimatedBackground from "../../components/AnimatedBackground";

const LANGUAGES = [
  { flag: "🇨🇴", es: "Español", en: "Spanish",  levelEs: "Nativo",                   levelEn: "Native",                       badge: "C2", pct: 100 },
  { flag: "🇺🇸", es: "Inglés",  en: "English",  levelEs: "Intermedio · B1 en curso",  levelEn: "Intermediate · B1 in progress", badge: "B1", pct: 55  },
];

const TECH_CATEGORIES = [
  { es: "Frontend",               en: "Frontend",       items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"] },
  { es: "Mobile",                 en: "Mobile",         items: ["Flutter", "Dart"] },
  { es: "Backend",                en: "Backend",        items: ["Java", "Spring Boot", "Python", "Django", "Node.js"] },
  { es: "Bases de datos",         en: "Databases",      items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQL Server"] },
  { es: "Data & IA",              en: "Data & AI",      items: ["PySpark", "Prophet", "Claude API", "ML Kit"] },
  { es: "DevOps & Herramientas",  en: "DevOps & Tools", items: ["Docker", "GitHub", "Supabase", "Firebase"] },
];

// Diccionario de traducciones
const translations = {
  es: {
    title: "CONÓCEME",
    description1:
      "Soy estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia (7º de 8 semestres · 87% completado), con enfoque en desarrollo FullStack y arquitecturas limpias. Me interesa especialmente la integración de IA en productos reales y el consumo de datos abiertos y APIs gubernamentales.",
    description2:
      "Trabajo bien en equipo y he liderado proyectos académicos y personales de principio a fin — desde el diseño hasta el despliegue. Aprendo rápido, me adapto a nuevas tecnologías y me tomo en serio las buenas prácticas.",
    description3:
      "Fuera del código soy músico, deportista, barbero, tatuador, editor — perfil que me da disciplina, creatividad y trato con personas, habilidades que llevo también al trabajo en equipo.",
      technologies: "Tecnologías",
    personalSkills: "Habilidades personales",
    languages: "Idiomas",
    achievements: "Reconocimientos",
    prev: "← Inicio",
    next: "Proyectos →",
    skills: {
      leadership: "Liderazgo de equipos en proyectos académicos y competencias nacionales",
      adaptation: "Adaptación rápida a nuevas tecnologías y entornos de trabajo",
      communication: "Comunicación técnica con clientes y equipos no técnicos",
    },
    achievementsList: {
      projects: "Participación en proyectos de aprendizaje nacional con enfoque en desarrollo de software.",
      science: "Ganador de concurso Ciencia e Investigación COMUNA-UCC 2024.",
      sports: "Deportista reconocido de alto rendimiento en Nariño-Colombia.",
    },
  },
  en: {
    title: "ABOUT ME",
    description1:
      "I'm a Software Engineering student at Universidad Cooperativa de Colombia (7th of 8 semesters · 87% complete), focused on FullStack development and clean architectures. I'm especially interested in integrating AI into real products and consuming open data and government APIs.",
    description2:
      "I work well in teams and have led academic and personal projects from start to finish — from design to deployment. I learn fast, adapt to new technologies, and take best practices seriously.",
    description3:
      "Outside of code I'm a musician, athlete, barber, tattooist, and editor — a profile that gives me discipline, creativity, and people skills, all of which I bring to team environments.",
    technologies: "Technologies",
    personalSkills: "Personal Skills",
    languages: "Languages",
    achievements: "Achievements",
    prev: "← Home",
    next: "Projects →",
    skills: {
      leadership: "Team leadership in academic projects and national competitions",
      adaptation: "Fast adaptation to new technologies and work environments",
      communication: "Technical communication with clients and non-technical teams",
    },
    achievementsList: {
      projects: "Participation in national learning projects focused on software development.",
      science: "Winner of the COMUNA-UCC 2024 Science and Research competition.",
      sports: "Recognized high-performance athlete in Nariño-Colombia.",
    },
  },
};

export default function AboutPage() {
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
      {/* Fondo animado con partículas flotantes */}
      <AnimatedBackground isDark={isDark} />

      {/* Contenido principal */}
      <main className="container mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Panel de contenido */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in opacity-0 [animation-delay:200ms]">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-black">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-justify">{t.description1}</p>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-justify">{t.description2}</p>
              <p className="text-lg md:text-xl leading-relaxed text-justify">{t.description3}</p>

              {/* Tecnologías */}
              <section className="mt-8">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6">
                  {t.technologies}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {TECH_CATEGORIES.map((cat) => (
                    <div key={cat.en}>
                      <p className="text-sm font-semibold text-yellow-300/80 mb-2 uppercase tracking-wider">
                        {lang === "es" ? cat.es : cat.en}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-white/10 hover:bg-yellow-400/20 hover:text-yellow-300 rounded-full text-sm transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Habilidades e Idiomas */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <section>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                    {t.personalSkills}
                  </h3>
                  <ul className="space-y-3 text-base md:text-lg">
                    {[t.skills.leadership, t.skills.adaptation, t.skills.communication].map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[9px] w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                    {t.languages}
                  </h3>
                  <div className="space-y-4">
                    {LANGUAGES.map((l) => (
                      <div key={l.en} className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-semibold">
                            {l.flag} {lang === "es" ? l.es : l.en}
                          </span>
                          <span className="text-xs font-bold px-2 py-0.5 bg-yellow-400/20 text-yellow-300 rounded-full">
                            {l.badge}
                          </span>
                        </div>
                        <p className="text-sm text-white/60 mb-2">
                          {lang === "es" ? l.levelEs : l.levelEn}
                        </p>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className="bg-yellow-400 h-1.5 rounded-full"
                            style={{ width: `${l.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Reconocimientos */}
              <section className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                  {t.achievements}
                </h3>
                <ul className="space-y-3 text-base md:text-lg">
                  {[t.achievementsList.projects, t.achievementsList.science, t.achievementsList.sports].map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-[9px] w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Imagen */}
          <aside className="lg:col-span-4 animate-fade-in opacity-0 [animation-delay:600ms]">
            <div className="sticky top-24">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-black">
                <img
                  src="/zambra.jpeg"
                  alt="Andrés Zambrano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Navegación fija */}
      <nav className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex gap-2 md:gap-4">
        <Link href="/" className={navClass}>
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">{t.prev}</span>
        </Link>
        <Link href="/projects" className={navClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.next}</span>
        </Link>
      </nav>
    </div>
  );
}