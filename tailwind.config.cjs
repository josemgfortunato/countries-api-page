/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightTheme: {
        background: "hsl(0, 0%, 98%)",
        input: "hsl(0, 0%, 52%)",
        elements: "hsl(0, 0%, 100%)",
        color: "hsl(200, 15%, 8%)",
      },
      darkTheme: {
        background: "hsl(207, 26%, 17%)",
        input: "hsl(0, 0%, 52%)",
        elements: "hsl(209, 23%, 22%)",
        color: "hsl(0, 0%, 100%)",
      },
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 640px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }

      lg: "1536px",
      // => @media (min-width: 1536px) { ... }

    },
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
