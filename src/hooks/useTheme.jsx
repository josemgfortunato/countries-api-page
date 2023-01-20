import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    const previousTheme = theme === "light" ? "dark" : "light";
    root.classList.remove(previousTheme);
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
