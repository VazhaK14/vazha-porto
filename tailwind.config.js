/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        bold: "3px 4px 1px rgba(0, 0, 0, 1)",
        bolder: "8px 10px 1px rgba(0, 0, 0, 1)",
        button: "5px 6px 1px rgba(0, 0, 0, 1)",
        boldDark: "3px 4px 1px rgba(255,255,255, 1)",
        bolderDark: "8px 10px 1px rgba(255,255,255, 1)",
        buttonDark: "5px 6px 1px rgba(255,255,255, 1)",
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "sans-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
        public: ["Public Sans", "sans-serif"],
        lexend: ["Lexend Mega", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        neublue: "#7DF9FF ",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-motion"),
    require("tailwind-hamburgers"),
    require("@material-tailwind/react/utils/withMT"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "16px",
          },
          "&::-webkit-scrollbar-track": {
            background: "lightyellow",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "violet",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  darkMode: "class",
};
