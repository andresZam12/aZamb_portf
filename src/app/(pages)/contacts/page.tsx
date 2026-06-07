"use client";
import { useEffect, useState } from "react";
import { useLang } from "../../providers/LanguageProvider";
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground";
import emailjs from "@emailjs/browser";

type Language = "es" | "en";

const CONTACT_METHODS = [
  {
    label: "andresze2001@gmail.com",
    href: "mailto:andresze2001@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
        <path fill="#EA4335" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
      </svg>
    ),
  },
  {
    label: "Andrés Zambrano",
    href: "https://www.linkedin.com/in/andres_z8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
        <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "andresZam12",
    href: "https://github.com/andresZam12",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
        <path fill="white" d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.54 0-.27-.01-1.14-.02-2.07-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.74 1.12 2.94 0 4.21-2.58 5.14-5.03 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .3.2.65.76.54 4.35-1.45 7.5-5.57 7.5-10.43C23.01 5.24 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "317*****02",
    href: "https://wa.me/573177199202",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
        <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const translations: Record<Language, {
  title: string;
  subtitle: string;
  contactMethodsTitle: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderSubject: string;
  placeholderMessage: string;
  submitBtn: string;
  thankYou: string;
  sending: string;
  errorMessage: string;
  prev: string;
  next: string;
}> = {
  es: {
    title: "HABLEMOS...",
    subtitle: "¿Tienes un proyecto, una oportunidad o simplemente quieres conectar? Escríbeme por cualquiera de estos medios.",
    contactMethodsTitle: "Métodos de contacto",
    placeholderName: "Tu nombre",
    placeholderEmail: "Tu correo electrónico",
    placeholderSubject: "Asunto",
    placeholderMessage: "Tu mensaje",
    submitBtn: "Enviar mensaje",
    thankYou: "¡Gracias! Me comunicaré pronto.",
    sending: "Enviando...",
    errorMessage: "Error al enviar. Intenta de nuevo.",
    prev: "← Referencias",
    next: "Inicio →",
  },
  en: {
    title: "Let's Talk",
    subtitle: "Do you have a project, an opportunity, or just want to connect? Reach out through any of these channels.",
    contactMethodsTitle: "Contact methods",
    placeholderName: "Your name",
    placeholderEmail: "Your email address",
    placeholderSubject: "Subject",
    placeholderMessage: "Your message",
    submitBtn: "Send message",
    thankYou: "Thank you! I'll be in touch.",
    sending: "Sending...",
    errorMessage: "Error sending. Try again.",
    prev: "← References",
    next: "Home →",
  },
};

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 transition text-sm md:text-base";

export default function ContactosPage() {
  const { lang } = useLang();
  const t = translations[lang];

  const [isDark, setIsDark] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const onThemeChange = () => update();
    const onStorage = (e: StorageEvent) => { if (e.key === "theme") update(); };
    window.addEventListener("theme-change", onThemeChange as EventListener);
    window.addEventListener("storage", onStorage as EventListener);
    return () => {
      window.removeEventListener("theme-change", onThemeChange as EventListener);
      window.removeEventListener("storage", onStorage as EventListener);
    };
  }, []);

  const navClass = isDark
    ? "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-black hover:bg-gray-800"
    : "px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all shadow-lg bg-amber-950/90 hover:bg-amber-900";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !asunto.trim() || !mensaje.trim()) return;

    setSending(true);
    setError(false);

    const tiempo = new Date().toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { nombre, email, asunto, mensaje, tiempo },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
      setNombre(""); setEmail(""); setAsunto(""); setMensaje("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Error al enviar correo:", err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-32">

        {/* Encabezado */}
        <div className="mb-10 md:mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0ms" }}>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
            {t.title}
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* COLUMNA 1 — Métodos de contacto */}
          <aside className="animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/15 p-5 h-full">
              <h2 className="text-base md:text-lg font-bold text-yellow-400 mb-5">
                {t.contactMethodsTitle}
              </h2>
              <ul className="space-y-3">
                {CONTACT_METHODS.map((m) => (
                  <li key={m.href}>
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/40 transition-all group"
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 shrink-0">
                        {m.icon}
                      </span>
                      <span className="text-sm text-white/80 group-hover:text-yellow-300 transition-colors font-medium truncate">
                        {m.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* COLUMNA 2 — Foto */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            {/* TODO: reemplazar con foto profesional */}
            <img
              src="/anz.jpeg"
              alt="Andrés Zambrano"
              className="w-full rounded-2xl object-cover object-top shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 border-2 border-black aspect-[3/4]"
            />
          </div>

          {/* COLUMNA 3 — Formulario */}
          <section className="animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-black/20 backdrop-blur-md rounded-2xl border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/15 p-5 md:p-6 flex flex-col gap-4 h-full"
            >
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder={t.placeholderName}
                required
                className={inputClass}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholderEmail}
                required
                className={inputClass}
              />
              <input
                type="text"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                placeholder={t.placeholderSubject}
                required
                className={inputClass}
              />
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder={t.placeholderMessage}
                rows={6}
                required
                className={`${inputClass} resize-none flex-1`}
              />
              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 rounded-xl font-bold text-base transition-all ${
                  sending
                    ? "bg-yellow-400/50 text-black/50 cursor-not-allowed"
                    : "bg-yellow-400 hover:bg-yellow-300 text-black shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/60 hover:scale-[1.02]"
                }`}
              >
                {sending ? t.sending : t.submitBtn}
              </button>
              {submitted && (
                <p className="text-green-400 text-sm text-center font-semibold">{t.thankYou}</p>
              )}
              {error && (
                <p className="text-red-400 text-sm text-center font-semibold">{t.errorMessage}</p>
              )}
            </form>
          </section>

        </div>
      </main>

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
