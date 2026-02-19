import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16BC00",
          dark: "#2B8F1E",
          light: "#1fd600",
        },
        secondary: {
          DEFAULT: "#414141",
          light: "#5a5a5a",
        },
        dark: {
          DEFAULT: "#2f353e",
          lighter: "#3a4149",
          card: "#353c46",
        },
        accent: "#2B8F1E",
        "text-muted": "#808080",
        "bg-light": "#f8f9fa",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #2f353e 0%, #1e2329 50%, #2f353e 100%)",
        "green-gradient":
          "linear-gradient(135deg, #16BC00 0%, #2B8F1E 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #2f353e 0%, #252b33 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(22, 188, 0, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(22, 188, 0, 0)" },
        },
      },
      boxShadow: {
        "green-glow": "0 0 20px rgba(22, 188, 0, 0.3)",
        "green-glow-lg": "0 0 40px rgba(22, 188, 0, 0.4)",
        card: "0 4px 24px rgba(0,0,0,0.12)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
