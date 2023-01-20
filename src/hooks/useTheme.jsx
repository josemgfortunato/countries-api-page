import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

  const [theme, setTheme] = useState(localStorage.getItem("theme") === "light" ? "dark" : "light");

  useEffect(() => {
    const root = window.document.documentElement;
    const removePreviousTheme = theme === "light" ? "dark" : "light"
    root.classList.remove(removePreviousTheme)
    root.classList.add(theme);
    localStorage.setItem("theme", theme)
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
