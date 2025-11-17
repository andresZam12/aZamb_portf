import type { Metadata } from "next";
import "./globals.css";
import ThemeClient from "./ThemeClient";
import { LanguageProvider } from "./Lang/LanguageProvider";
import HeaderControls from "./HeaderControls";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Aplica el tema global dark/light desde localStorage en TODAS las páginas */}
        <ThemeClient />
        {/* Proveedor global de idioma + controles en cabecera (tema/idioma/cv) */}
        <LanguageProvider>
          <HeaderControls />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
