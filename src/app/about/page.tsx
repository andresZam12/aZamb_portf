"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../Lang/LanguageProvider";

const TECHNOLOGIES = [
  "MySQL",
  "MongoDB",
  "SQLite",
  "SQL Server",
  "PostgreSQL",
  "Java",
  "Python",
  "Django",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Docker",
  "GitHub",
];

// Diccionario de traducciones
const translations = {
  es: {
    title: "Conóceme",
    description1:
      "Soy un estudiante de Ingeniería de Software apasionado por el desarrollo FullStack y con gran interés en la ciberseguridad y el pentesting. Mi motivación principal es crear soluciones digitales que no solo funcionen, sino que también sean seguras, escalables y útiles para las personas.",
    description2:
      "Soy un gran líder de proyectos con buena experiencia, enfocado en el trabajo en equipo responsable y pulido, tengo habilidades en la solución rápida de problemas con buen fundamento práctico.",
    technologies: "Tecnologías",
    personalSkills: "Habilidades personales",
    languages: "Idiomas",
    achievements: "Reconocimientos",
    prev: "← Inicio",
    next: "Proyectos →",
    skills: {
      communication: "Comunicación clara y asertiva",
      problemSolving: "Resolución de problemas",
      teamwork: "Trabajo en equipo y liderazgo",
    },
    langs: {
      spanish: "Español (nativo)",
      english: "Inglés (intermedio)",
    },
    achievementsList: {
      projects: "Participación en proyectos de aprendizaje nacional con enfoque en desarrollo de software.",
      science: "Ganador de concurso Ciencia e Investigación COMUNA-UCC 2024.",
      sports: "Deportista reconocido de alto rendimiento en Nariño-Colombia.",
      academic: "Galardonado académicamente en matemáticas (IEM San Juan Bosco 2018–2019).",
    },
  },
  en: {
    title: "About Me",
    description1:
      "I am a Software Engineering student passionate about FullStack development with great interest in cybersecurity and pentesting. My main motivation is to create digital solutions that not only work but are also secure, scalable, and useful for people.",
    description2:
      "I am a great project leader with good experience, focused on responsible and polished teamwork, I have skills in quick problem solving with good practical foundation.",
    technologies: "Technologies",
    personalSkills: "Personal Skills",
    languages: "Languages",
    achievements: "Achievements",
    prev: "← Home",
    next: "Projects →",
    skills: {
      communication: "Clear and assertive communication",
      problemSolving: "Problem solving",
      teamwork: "Teamwork and leadership",
    },
    langs: {
      spanish: "Spanish (native)",
      english: "English (intermediate)",
    },
    achievementsList: {
      projects: "Participation in national learning projects focused on software development.",
      science: "Winner of the COMUNA-UCC 2024 Science and Research competition.",
      sports: "Recognized high-performance athlete in Nariño-Colombia.",
      academic: "Academically awarded in mathematics (IEM San Juan Bosco 2018–2019).",
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
      {/* Fondo de 3 franjas */}
      <span aria-hidden className={`absolute inset-0 -z-10 ${bgGradient}`} />

      {/* Contenido principal */}
      <main className="container mx-auto px-6 pt-24 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-12">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Panel de contenido */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in opacity-0 [animation-delay:200ms]">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-8 text-white shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-justify">{t.description1}</p>
              <p className="text-lg md:text-xl leading-relaxed text-justify">{t.description2}</p>

              {/* Tecnologías */}
              <section className="mt-8">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                  {t.technologies}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {TECHNOLOGIES.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full text-sm md:text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Habilidades e Idiomas */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <section>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                    {t.personalSkills}
                  </h3>
                  <ul className="space-y-2 text-base md:text-lg">
                    <li>• {t.skills.communication}</li>
                    <li>• {t.skills.problemSolving}</li>
                    <li>• {t.skills.teamwork}</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                    {t.languages}
                  </h3>
                  <ul className="space-y-2 text-base md:text-lg">
                    <li>• {t.langs.spanish}</li>
                    <li>• {t.langs.english}</li>
                  </ul>
                </section>
              </div>

              {/* Reconocimientos */}
              <section className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                  {t.achievements}
                </h3>
                <ul className="space-y-3 text-base md:text-lg">
                  <li>• {t.achievementsList.projects}</li>
                  <li>• {t.achievementsList.science}</li>
                  <li>• {t.achievementsList.sports}</li>
                  <li>• {t.achievementsList.academic}</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Imagen */}
          <aside className="lg:col-span-4 animate-fade-in opacity-0 [animation-delay:400ms]">
            <div className="sticky top-24">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-md ring-1 ring-white/20 shadow-xl">
                <div className="w-full h-full flex items-center justify-center text-white/50 text-xl">
                  [Tu imagen aquí]
                </div>
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