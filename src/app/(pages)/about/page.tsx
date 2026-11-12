"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../../providers/LanguageProvider";
import AnimatedBackground from "../../components/AnimatedBackground";

const LANGUAGES = [
  { flag: "🇨🇴", es: "Español", en: "Spanish", levelEs: "Lengua materna",                  levelEn: "Mother tongue",                       badgeEs: "Nativo", badgeEn: "Native" },
  { flag: "🇺🇸", es: "Inglés",  en: "English", levelEs: "B2 en curso · English Adventure", levelEn: "B2 in progress · English Adventure", badgeEs: "B2",     badgeEn: "B2" },
];

const TECH_CATEGORIES = [
  { es: "Datos e IA",                       en: "Data & AI",                     items: ["Python", "PySpark", "Prophet", "Claude API", "AI Agents", "ML Kit"] },
  { es: "Análisis y sistemas empresariales", en: "Analytics & business systems", items: ["Power BI", "Excel", "Siigo", "Microsoft Dynamics"] },
  { es: "Backend",                          en: "Backend",                       items: ["Java", "Spring Boot", "Node.js", "Django", "REST APIs"] },
  { es: "Frontend y móvil",                 en: "Frontend & mobile",             items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Flutter", "Dart"] },
  { es: "Bases de datos",                   en: "Databases",                     items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"] },
  { es: "DevOps y prácticas",               en: "DevOps & practices",            items: ["Git", "GitHub Projects", "Docker", "Vercel", "Scrum", "Clean Architecture"] },
];

// Diccionario de traducciones
const translations = {
  es: {
    title: "CONÓCEME",
    description1:
      "Soy estudiante de último semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me apasionan el Big Data, los modelos predictivos, el machine learning y la minería de datos, y mi enfoque es llevarlos a productos reales: aplicaciones que integran IA, datos abiertos y APIs gubernamentales para resolver problemas concretos.",
    description2:
      "Como freelance construí y opero Zabio, un SaaS de agentes de IA para negocios que ya factura con clientes reales, del que soy líder y único desarrollador. También he liderado equipos ágiles: como Product Owner de un equipo de 4 en el concurso Datos al Ecosistema 2026 del Ministerio TIC obtuvimos el puesto 8 a nivel nacional (91/100), y como líder técnico de VeriFarmac gestioné el producto en GitHub Projects y desarrollé su capa de inteligencia artificial.",
    description3:
      "Antes del software trabajé cinco años en ventas, administración y supervisión, donde analicé datos con Power BI y Excel y administré sistemas empresariales como Siigo y Microsoft Dynamics. Esa experiencia, junto con mi formación contable, me da una visión de negocio que llevo a cada producto que construyo.",
    technologies: "Tecnologías",
    personalSkills: "Habilidades profesionales",
    languages: "Idiomas",
    achievements: "Reconocimientos",
    prev: "← Inicio",
    next: "Proyectos →",
    skills: [
      "Liderazgo de equipos ágiles como Product Owner y líder técnico (Scrum, GitHub Projects)",
      "Visión de negocio: formación contable y experiencia en ventas y administración",
      "Comunicación técnica con clientes y equipos no técnicos",
      "Aprendizaje autónomo y rápida adopción de nuevas tecnologías",
    ],
    achievementsList: [
      "Puesto 8 a nivel nacional (91/100) en el concurso Datos al Ecosistema 2026 del Ministerio TIC.",
      "Ganador del concurso de Ciencia e Investigación COMUNA-UCC 2024.",
      "Deportista de alto rendimiento reconocido en Nariño, Colombia.",
    ],
  },
  en: {
    title: "ABOUT ME",
    description1:
      "I'm a final-semester Software Engineering student at Universidad Cooperativa de Colombia. I'm passionate about Big Data, predictive models, machine learning and data mining, and my focus is turning them into real products: applications that combine AI, open data and government APIs to solve concrete problems.",
    description2:
      "As a freelancer I built and run Zabio, an AI-agent SaaS for businesses already generating revenue with real clients, where I am the lead and sole developer. I have also led agile teams: as Product Owner of a team of 4 in the Ministry of ICT's Datos al Ecosistema 2026 competition we ranked 8th nationwide (91/100), and as tech lead of VeriFarmac I managed the product in GitHub Projects and built its artificial intelligence layer.",
    description3:
      "Before software, I spent five years in sales, administration and supervision, where I analyzed data with Power BI and Excel and administered business systems such as Siigo and Microsoft Dynamics. That experience, together with my accounting training, gives me a business perspective I bring to every product I build.",
    technologies: "Technologies",
    personalSkills: "Professional Skills",
    languages: "Languages",
    achievements: "Achievements",
    prev: "← Home",
    next: "Projects →",
    skills: [
      "Leading agile teams as Product Owner and tech lead (Scrum, GitHub Projects)",
      "Business perspective: accounting training and sales & administration experience",
      "Technical communication with clients and non-technical teams",
      "Self-driven learning and fast adoption of new technologies",
    ],
    achievementsList: [
      "8th place nationwide (91/100) in the Ministry of ICT's Datos al Ecosistema 2026 competition.",
      "Winner of the COMUNA-UCC 2024 Science and Research competition.",
      "Recognized high-performance athlete in Nariño, Colombia.",
    ],
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

  const navClass = `px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg btn-float ring-1 ring-white/20 ${
    isDark ? "bg-black hover:bg-gray-800" : "bg-amber-950/90 hover:bg-amber-900"
  }`;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado con partículas flotantes */}
      <AnimatedBackground isDark={isDark} />

      {/* Contenido principal */}
      <main className="container mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 title-shadow mb-12">
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
                    {t.skills.map((s, i) => (
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
                            {lang === "es" ? l.badgeEs : l.badgeEn}
                          </span>
                        </div>
                        <p className="text-sm text-white/60">
                          {lang === "es" ? l.levelEs : l.levelEn}
                        </p>
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
                  {t.achievementsList.map((a, i) => (
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
                  src="/isof.jpeg"
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