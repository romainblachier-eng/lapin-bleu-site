import { useEffect, useState } from "react";

type Theme = "night" | "day";
const STORAGE_KEY = "lb-theme";

function readInitial(): Theme {
  if (typeof window === "undefined") return "night";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "day" || stored === "night") return stored;
  return "night";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "day") {
      root.setAttribute("data-theme", "day");
    } else {
      root.removeAttribute("data-theme");
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="lb-theme-toggle"
      aria-label={theme === "day" ? "Passer au thème nuit" : "Passer au thème jour"}
      onClick={() => setTheme((t) => (t === "day" ? "night" : "day"))}
    >
      {theme === "day" ? "Nuit" : "Jour"}
    </button>
  );
}
