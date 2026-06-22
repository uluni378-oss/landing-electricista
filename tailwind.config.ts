import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          primary: "#070B16",    // Deeper rich black/blue
          secondary: "#0E1528",  // Dark card background
          surface: "#1A243F",    // Elevated card background
          border: "#26355C",     // Premium border outline
        },
        accent: {
          DEFAULT: "#F97316",    // Bright Electric Orange
          light: "#FB923C",
          dark: "#EA580C",
        },
        text: {
          DEFAULT: "#F3F4F6",    // Crisp light text
          muted: "#9CA3AF",      // Muted gray
        },
        whatsapp: {
          DEFAULT: "#25D366",    // Official WhatsApp Green
          light: "#4ADE80",
          dark: "#16A34A",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
