import {
  Inconsolata,
  Roboto,
  Lato,
  Lexend_Deca,
  Source_Code_Pro,
  Space_Mono,
  Gabarito,
} from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const inconsolate = localFont({
//   src: "./../fonts/Inconsolata-Regular.ttf",
//   variable: "--font-inconsolate",
//   weight: "200 300 400 700",
// });

export const space_mono = localFont({
  src: "./../fonts/SpaceMono-Regular.ttf",
  variable: "--font-spance-mono",
  weight: "400 700",
});

export const inconsolate = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
  variable: "--font-inconsolate",
});

// export const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700"],
//   display: "swap",
// });

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

// export const space_mono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["800"],
});
