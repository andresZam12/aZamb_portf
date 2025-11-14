"use client";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  type Language = keyof typeof translations;
  const [lang, setLang] = useState<Language>("es");
  const t = translations[lang];

  // Actualizar las clases de los elementos semitransparentes
  const glassClass = "bg-white/15 hover:bg-white/20 backdrop-blur-md";
  const buttonClass = `px-6 py-3 ${glassClass} rounded-full text-white font-medium text-lg transition-all`;
  const navigationButtonClass = `px-6 py-3 bg-amber-950/90 hover:bg-amber-900 rounded-full text-white font-medium text-lg transition-all shadow-lg`;

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

      {/* Botones superiores */}
      <div className="fixed top-0 right-0 z-50 p-6 flex gap-4">
        <button onClick={() => setIsDark(!isDark)} className={buttonClass}>
          {isDark ? t.lightMode : t.darkMode}
        </button>

        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className={buttonClass}
        >
          {t.language}
        </button>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={buttonClass}
        >
          <span className="sr-only">Menú</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Menú desplegable con fondo más oscuro */}
        {menuOpen && (
          <div className="absolute top-20 right-6 w-64 rounded-2xl bg-black/30 backdrop-blur-md p-3 shadow-2xl ring-1 ring-white/20">
            {[
              { label: "INICIO", href: "/" },
              { label: "SOBRE MÍ", href: "/about" },
              { label: "PROYECTOS", href: "/projects" },
              { label: "EXPERIENCIA", href: "/experience" },
              { label: "REFERENCIAS", href: "/references" },
              { label: "CONTACTOS", href: "/contacts" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-xl hover:bg-white/10 text-white text-lg font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

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
                  <li>• Ganador de concurso "Ciencia e Investigación COMUNA-UCC 2024".</li>
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
        <Link href="/" className={navigationButtonClass}>
          {t.prev}
        </Link>
        <Link href="/projects" className={navigationButtonClass}>
          {t.next}
        </Link>
      </nav>
    </div>
  );
}