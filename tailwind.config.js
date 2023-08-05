/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BRAND: {
          DEFAULT: "var(--BRAND)",
          SECONDARY: "var(--BRAND-SECONDARY)",
        },

        PRIMARY: "var(--PRIMARY)",
        SECONDARY: "var(--SECONDARY)",

        BGCOLOR: {
          DEFAULT: "var(--BGCOLOR-PRIMARY)",
          SECONDARY: "var(--BGCOLOR-SECONDARY)",
          TERTIARY: "var(--BGCOLOR-TERTIARY)",
        },

        BORDER: "var(--BORDER)",
      },
    },
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  plugins: [],
};
