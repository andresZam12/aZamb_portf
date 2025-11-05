
export type Lang = "es" | "en";


export const messages = {
  es: {
    hello: "Hola",
    // añade aquí más claves si las necesitas:
    // iAm: "soy",
    // degree: "INGENIERÍA DE SOFTWARE",
  },
  en: {
    hello: "Hello",
    // iAm: "I'm",
    // degree: "SOFTWARE ENGINEERING",
  },
} as const satisfies Record<Lang, Record<string, string>>;

/** Union de claves válidas a partir del diccionario */
export type MessageKey =
  | keyof (typeof messages)["es"]
  | keyof (typeof messages)["en"];

/**
 * Traductor simple.
 * - No usa `any`
 * - Devuelve la clave si no existe traducción
 */
export function t(lang: Lang, key: MessageKey): string {
  const dict = messages[lang];
  // El cast mantiene el tipado estricto sin recurrir a `any`
  return (dict as Record<string, string>)[key] ?? key;
}
