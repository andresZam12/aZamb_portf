"use client";
import { useEffect, useState } from "react";
import { useLang } from "../Lang/LanguageProvider";
import Link from "next/link";

type Language = "es" | "en";

interface Translations {
  title: string;
  darkMode: string;
  lightMode: string;
  languageBtn: string;
  menu: Record<string, string>;
  prev: string;
  next: string;
  motto: string;
  formLabel: string;
  placeholderEmail: string;
  submitBtn: string;
  contactMethodsTitle: string;
  sendEmailTitle: string;
  thankYou: string;
}

const translations: Record<Language, Translations> = {
  es: {
    title: "Contactos",
    darkMode: "🌙",
    lightMode: "☀️",
    languageBtn: "ES/EN",
    menu: {
      home: "Inicio",
      about: "Acerca de mí",
      projects: "Proyectos",
      experience: "Experiencia",
      references: "Referencias",
      contacts: "Contactos",
    },
    prev: "← Referencias",
    next: "Inicio →",
    motto: "si lo puedes imaginar, lo podemos hacer",
    formLabel: "Déjame tu contacto y me comunicaré contigo",
    placeholderEmail: "Tu correo electrónico",
    submitBtn: "Enviar",
    contactMethodsTitle: "Métodos de Contacto",
    sendEmailTitle: "Envía tu correo",
    thankYou: "¡Gracias! Me comunicaré pronto.",
  },
  en: {
    title: "Contacts",
    darkMode: "🌙",
    lightMode: "☀️",
    languageBtn: "EN/ES",
    menu: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      experience: "Experience",
      references: "References",
      contacts: "Contacts",
    },
    prev: "← References",
    next: "Home →",
    motto: "If you can imagine it, we can do it",
    formLabel: "Leave me your contact and I will get back to you",
    placeholderEmail: "Your email address",
    submitBtn: "Submit",
    contactMethodsTitle: "Contact Methods",
    sendEmailTitle: "Send your email",
    thankYou: "Thank you! I'll be in touch.",
  },
};

export default function ContactosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];

  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const buttonClass = "px-3 py-2 md:px-5 md:py-3 bg-amber-950/95 hover:bg-amber-900 rounded-full text-white font-medium text-sm md:text-base transition-all shadow-lg dark:bg-black dark:text-white dark:hover:bg-gray-800";
  const glassClass = "bg-black/25 backdrop-blur-md";
  const navClass = isDark
    ? "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-black hover:bg-gray-800"
    : "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-amber-950/90 hover:bg-amber-900";

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo en 3 franjas: cambia según tema */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 ${
          isDark
            ? "bg-[linear-gradient(to_right,#1a1a1a_0%,#1a1a1a_33.34%,#2d2d2d_33.34%,#2d2d2d_66.67%,#404040_66.67%,#404040_100%)]"
            : "bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
        }`}
      />

      {/* HeaderControls (tema/idioma/menu) se muestran globalmente desde el layout */}

      {/* Etiqueta superior */}
      <header className="max-w-6xl mx-auto px-5 pt-20 md:pt-24">
        <span className="inline-block rounded-full bg-[#8b5e3c]/90 px-4 py-1 text-xs font-semibold ring-1 ring-black/20 text-white">
          {t.title.toUpperCase()}
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8 md:py-12 pb-40">
        <section className="grid grid-cols-12 gap-6 md:gap-8">
          {/* COLUMNA IZQUIERDA: métodos de contacto */}
          <aside className="col-span-12 md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.contactMethodsTitle}</h2>
            <ul className="space-y-4 md:space-y-6">
              {/* Gmail */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-white/10 ring-1 ring-white/15">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-red-400"
                  >
                    <path d="M12 13.5L2 6.75V18a2 2 0 002 2h16a2 2 0 002-2V6.75L12 13.5z" />
                    <path
                      d="M22 6V6a2 2 0 00-2-2H4a2 2 0 00-2 2v.75L12 13.5 22 6.75V6z"
                      className="fill-red-500"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:andresze2001@gmail.com"
                  className="text-base md:text-lg font-semibold text-white hover:text-amber-300 transition"
                >
                  andresze2001@gmail.com
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-white/10 ring-1 ring-white/15">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-green-400"
                  >
                    <path d="M20 11.5A8.5 8.5 0 115.4 18.6L4 22l3.5-1.4A8.5 8.5 0 1120 11.5z" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/57317799202"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-lg font-semibold text-white hover:text-amber-300 transition"
                >
                  317799202
                </a>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-white/10 ring-1 ring-white/15">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-sky-400"
                  >
                    <path d="M6 6a2 2 0 11-4 0 2 2 0 014 0zM4 9h4v11H4zM14 9h4a4 4 0 014 4v7h-4v-6a2 2 0 00-2-2h-2v8h-4V9h4z" />
                  </svg>
                </span>
                <a
                  href="https://www.linkedin.com/in/andres_z8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-lg font-semibold text-white hover:text-amber-300 transition"
                >
                  andres_z8
                </a>
              </li>

              {/* GitHub */}
              <li className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-white/10 ring-1 ring-white/15">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.54 0-.27-.01-1.14-.02-2.07-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.74 1.12 2.94 0 4.21-2.58 5.14-5.03 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .3.2.65.76.54 4.35-1.45 7.5-5.57 7.5-10.43C23.01 5.24 18.27.5 12 .5z" />
                  </svg>
                </span>
                <a
                  href="https://github.com/andres_z8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-lg font-semibold text-white hover:text-amber-300 transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </aside>

          {/* COLUMNA DERECHA: Formulario de contacto */}
          <section className="col-span-12 md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.sendEmailTitle}</h2>
            <form
              onSubmit={handleEmailSubmit}
              className={`${glassClass} rounded-3xl ring-1 ring-white/10 shadow-xl p-5 md:p-6 space-y-4`}
            >
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholderEmail}
                  required
                  className="w-full px-4 py-3 md:py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-amber-400 focus:outline-none transition"
                />
              </div>
              <button
                type="submit"
                className={`w-full ${buttonClass}`}
              >
                {t.submitBtn}
              </button>
              {submitted && (
                <p className="text-green-400 text-sm text-center">
                  {t.thankYou}
                </p>
              )}
            </form>
            <p className="mt-4 text-center text-xs md:text-sm text-white/70">
              {t.formLabel}
            </p>
          </section>
        </section>

        {/* IMAGEN CENTRADA */}
        <section className="col-span-12 mt-12 md:mt-16 flex justify-center">
          <img
            src="/anto.jpg"
            alt="Andrés Zambo"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl ring-2 ring-white/20"
          />
        </section>

        {/* Lema centrado debajo de la imagen */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-xl md:text-2xl italic text-white/80 px-5">
            &quot;{t.motto}&quot;
          </p>
        </div>
      </main>

      {/* Navegación inferior - responsive con etiquetas */}
      <nav className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex gap-2 md:gap-4">
        <Link href="/references" className={navClass}>
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">{t.prev}</span>
        </Link>
        <Link href="/" className={navClass}>
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">{t.next}</span>
        </Link>
      </nav>
    </div>
  );
}
