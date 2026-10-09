import { Geologica, Golos_Text, IBM_Plex_Mono } from "next/font/google";

export const displayFont = Geologica({
  subsets: ["latin", "latin-ext", "cyrillic"],
  axes: ["SHRP"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

export const monoFont = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
