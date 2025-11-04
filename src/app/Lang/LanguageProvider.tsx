"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<Ctx | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const persisted = (localStorage.getItem("lang") as Lang) || "es";
    setLangState(persisted);
    document.documentElement.lang = persisted;

    const onStorage = (e: StorageEvent) => {
      if (e.key === "lang") {
        const v = (e.newValue as Lang) || "es";
        setLangState(v);
        document.documentElement.lang = v;
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LanguageProvider/>");
  return ctx;
}
