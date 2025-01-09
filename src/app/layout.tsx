/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/color.css";
import "../styles/border.css";
import "../styles/spacing.css";
import "../styles/flexbox.css";
import "../styles/shadow.css";
import { ThemeProvider } from "next-themes";
import { geistMono, geistSans } from "@/utils/fonts";

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
