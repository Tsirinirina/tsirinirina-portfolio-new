"use client";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import style from "./theme-switcher.module.css";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={style.switch}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <LuMoon size={24} /> : <LuSun size={24} />}
    </div>
  );
};
