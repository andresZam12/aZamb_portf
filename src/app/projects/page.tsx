"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "../Lang/LanguageProvider";

// Actualizar el tipo Language y translations
type Language = 'es' | 'en';

const translations: Record<Language, {
  darkMode: string;
  lightMode: string;
  language: string;
  title: string;
  additionals: string;
  additionalProject: string;
  viewCode: string;
  menu: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    references: string;
    contacts: string;
  };
  prev: string;
  next: string;
  projects: {
    elliotIA: {
      name: string;
      description: string;
    };
    int3d: {
      name: string;
      description: string;
    };
    portfolio: {
      name: string;
      description: string;
    };
  };
  extras: {
    academic: {
      name: string;
      description: string;
    };
    events: {
      name: string;
      description: string;
    };
    discord: {
      name: string;
      description: string;
    };
  };
}> = {
  es: {
    darkMode: "🌙 Modo Oscuro",
    lightMode: "☀ Modo Claro",
    language: "🌐 EN",
    title: "MIS PROYECTOS MÁS RELEVANTES",
    additionals: "Adicionales",
    additionalProject: "Proyecto adicional",
    viewCode: "Ver código",
    menu: {
      home: "Inicio",
      about: "Acerca de mí",
      projects: "Proyectos",
      experience: "Experiencia",
      references: "Referencias",
      contacts: "Contactos",
    },
    prev: "← Sobre mí",
    next: "Experiencia →",
    projects: {
      elliotIA: {
        name: "Elliot IA",
        description: "Asesor de ventas de productos electrodomésticos con inteligencia artificial para automatización y una buena estadística para ser vendido.",
      },
      int3d: {
        name: "INT3D-circular",
        description: "Juego en Unity3D, enfocado en el ciclo del agua, nace en colaboración con docentes especialistas de áreas afines, para el aprendizaje de las matemáticas a través de los juegos.",
      },
      portfolio: {
        name: "Portafolio profesional",
        description: "Elaboración de portafolio enfocado en mi proceso de trabajo con enfoque responsive para una mejor contratación de mis servicios y presentación personal.",
      }
    },
    extras: {
      academic: {
        name: "Sistema de Gestión Académica",
        description: "Desarrollo de backend para gestión escolar"
      },
      events: {
        name: "App Móvil de Eventos",
        description: "Aplicación para organización de eventos locales"
      },
      discord: {
        name: "Bot de Discord",
        description: "Bot para gestión de comunidades gaming"
      }
    }
  },
  en: {
    darkMode: "🌙 Dark Mode",
    lightMode: "☀ Light Mode",
    language: "🌐 ES",
    title: "MY MOST RELEVANT PROJECTS",
    additionals: "Additional",
    additionalProject: "Additional project",
    viewCode: "View code",
    menu: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      experience: "Experience",
      references: "References",
      contacts: "Contacts",
    },
    prev: "← About me",
    next: "Experience →",
    projects: {
      elliotIA: {
        name: "Elliot AI",
        description: "AI-powered sales advisor for home appliances with automation and excellent sales statistics.",
      },
      int3d: {
        name: "INT3D-circular",
        description: "Unity3D game focused on the water cycle, created in collaboration with subject matter experts, for learning mathematics through games.",
      },
      portfolio: {
        name: "Professional Portfolio",
        description: "Development of a responsive portfolio focused on my work process for better service contracting and personal presentation.",
      }
    },
    extras: {
      academic: {
        name: "Academic Management System",
        description: "Backend development for school management"
      },
      events: {
        name: "Events Mobile App",
        description: "Application for local events organization"
      },
      discord: {
        name: "Discord Bot",
        description: "Bot for gaming community management"
      }
    }
  }
};

// Actualizar el array de proyectos para usar las traducciones
const projectKeys = ['elliotIA', 'int3d', 'portfolio'] as const;
const projects: { key: typeof projectKeys[number]; image: string; repo: string }[] = projectKeys.map(key => ({
  key,
  image: `/${key}.jpg`,
  repo: `https://github.com/yourusername/${key}`
}));

// Actualizar el array de extras para usar las traducciones
const extraKeys = ['academic', 'events', 'discord'] as const;

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];

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

  // Actualizar las clases comunes para mejor responsive
  const buttonClass = "px-4 py-2 md:px-6 md:py-3 bg-amber-950/90 hover:bg-amber-900 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg dark:bg-black dark:text-white dark:hover:bg-gray-800";
  const glassClass = "bg-black/20 backdrop-blur-md";
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

      {/* HeaderControls (tema/idioma/menu) se muestran globalmente desde el layout */}

      <main className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-24">
        {/* Título - Ajustado para móvil */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12">
          {t.title}
        </h1>

        {/* Grid de proyectos - Mejorado para móvil */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <section className="lg:col-span-9 space-y-6 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6">
            {projects.map((p) => (
              <article
                key={p.key}
                className={`${glassClass} rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-xl ring-1 ring-white/20 hover:ring-yellow-400/50 transition-all group`}
              >
                <div className="aspect-video relative rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 group-hover:shadow-xl transition-all">
                  <Image
                    src={p.image}
                    alt={t.projects[p.key].name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 md:mb-4">
                  {t.projects[p.key].name}
                </h3>
                <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-white/90">
                  {t.projects[p.key].description}
                </p>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 text-white/80 hover:text-yellow-400 transition-colors text-sm md:text-lg font-medium"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="md:w-7 md:h-7"
                  >
                    <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
                  </svg>
                  <span>{t.viewCode}</span>
                </a>
              </article>
            ))}
          </section>

          {/* Sidebar - Mejorado para móvil */}
          <aside className="lg:col-span-3 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
              {t.additionals}
            </h2>
            <div className={`${glassClass} rounded-xl md:rounded-2xl p-4 md:p-6 space-y-4 md:space-y-6`}>
              {extraKeys.map((key) => (
                <div
                  key={key}
                  className="p-4 md:p-6 bg-white/5 hover:bg-white/10 rounded-lg md:rounded-xl transition-all group cursor-pointer"
                >
                  <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-1 md:mb-2">
                    {t.extras[key].name}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">
                    {t.extras[key].description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* Navegación - Mejorada para móvil */}
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