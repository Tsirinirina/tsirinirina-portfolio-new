/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";
import "../styles/color.css";
import "../styles/border.css";
import "../styles/spacing.css";
import "../styles/flexbox.css";
import "../styles/shadow.css";
import "../styles/fonts.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Tsirinirina Patrick RAJAONARISON| Porfolio",
  description: "New Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/inconsolata-2"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/source-code-pro"
          rel="stylesheet"
        />

        <link
          href="https://fonts.cdnfonts.com/css/lexend-deca"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet" />

        <link href="https://fonts.cdnfonts.com/css/gabarito" rel="stylesheet" />
      </head>
      <body className={``}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
