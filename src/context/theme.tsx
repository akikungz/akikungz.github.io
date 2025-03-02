"use client";
import Loading from "@/components/Loading";
import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextProps['theme']>("dark");
  const [loading, setLoading] = useState(true);

  const handleTheme = (theme: ThemeContextProps['theme']) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as ThemeContextProps['theme'];
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    if (localTheme) {
      setTheme(localTheme);
    } else {
      handleTheme(media.matches ? "dark" : "light");
    }

    setLoading(false);

    media.addEventListener("change", (e) => {
      console.log(e);
      setTheme(e.matches ? "dark" : "light");
    });

    return () => media.removeEventListener("change", () => { });
  }, []);

  if (loading) return (
    <html>
      <body className="bg-[#0f0f0f]">
        <Loading />
      </body>
    </html>
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html {...(theme === "dark" ? { className: "dark" } : {})}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
}