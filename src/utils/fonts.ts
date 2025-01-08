import {
  Inconsolata,
  Roboto,
  Lato,
  Lexend_Deca,
  Source_Code_Pro,
  Space_Mono,
  Gabarito,
} from "next/font/google";

export const inconsolate = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  display: "swap",
});

export const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  display: "swap",
});

export const source_code = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
});

export const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["800"],
});
