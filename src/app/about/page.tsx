"use client";
import { useState, useEffect } from "react";
import { useLang } from "../Lang/LanguageProvider";
import Link from "next/link";


// Diccionario de traducciones
const translations = {
  es: {
    darkMode: "🌙 Modo Oscuro",
    lightMode: "☀ Modo Claro",
    language: "🌐 EN",
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
  },
  en: {
    darkMode: "🌙 Dark Mode",
    lightMode: "☀ Light Mode",
    language: "🌐 ES",
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
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];

  const [isDark, setIsDark] = useState(false);
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

  // Actualizar las clases de los elementos semitransparentes
  const navigationButtonClass = `px-6 py-3 bg-amber-950/90 hover:bg-amber-900 rounded-full text-white font-medium text-lg transition-all shadow-lg`;
  const navClass = isDark
    ? `px-6 py-3 rounded-full text-white font-medium text-lg transition-all shadow-lg bg-black hover:bg-gray-800`
    : navigationButtonClass;

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

      {/* HeaderControls (tema/idioma/menu) se muestran globalmente desde el layout */}

      {/* Contenido principal con fondo más oscuro */}
      <main className="container mx-auto px-6 pt-24 pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-12">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Panel de contenido con fondo más oscuro */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-8 text-white shadow-xl">
              <p className="text-xl leading-relaxed mb-6">
                {t.description1}
              </p>

              <p className="text-xl leading-relaxed">
                {t.description2}
              </p>

              {/* Tecnologías */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                  {t.technologies}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {(
                    isDark
                      ? [
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
                        ]
                      : [
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
                        ]
                  ).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 rounded-full text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Habilidades e Idiomas */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {t.personalSkills}
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Comunicación clara y asertiva</li>
                    <li>• Resolución de problemas</li>
                    <li>• Trabajo en equipo y liderazgo</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {t.languages}
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Español (nativo)</li>
                    <li>• Inglés (intermedio)</li>
                  </ul>
                </div>
              </div>

              {/* Reconocimientos */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {t.achievements}
                </h3>
                <ul className="space-y-3 text-lg">
                  <li>
                    • Participación en proyectos de aprendizaje nacional con
                    enfoque en desarrollo de software.
                  </li>
                  <li>• Ganador de concurso Ciencia e Investigación COMUNA-UCC 2024.</li>
                  <li>• Deportista reconocido de alto rendimiento en Nariño-Colombia.</li>
                  <li>• Galardonado académicamente en matemáticas (IEM San Juan Bosco 2018–2019).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Imagen con fondo más oscuro */}
          <aside className="lg:col-span-4">
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

      {/* Navegación fija con botones más visibles */}
      <nav className="fixed bottom-8 right-8 z-40 flex gap-4">
        <Link href="/" className={navClass}>
          {t.prev}
        </Link>
        <Link href="/projects" className={navClass}>
          {t.next}
        </Link>
      </nav>
    </div>
  );
}