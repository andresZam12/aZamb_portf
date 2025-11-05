// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import ThemeClient from "./ThemeClient";
import HeaderControls from "./HeaderControls";            // <-- asegúrate del nombre exacto del archivo
import { LanguageProvider } from "./Lang/LanguageProvider"; // <-- carpeta 'lang' en minúscula

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio – Andrés Zambrano",
  description: "Portafolio profesional de Andrés Zambrano (FullStack).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Aplica el tema global dark/light desde localStorage al cargar */}
        <ThemeClient />

        {/* Idioma global y botones fijos (tema / CV / idioma) disponibles en TODAS las páginas */}
        <LanguageProvider>
          <HeaderControls />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
