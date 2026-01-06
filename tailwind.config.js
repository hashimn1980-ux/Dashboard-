/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Gold from the logo
        "background-light": "#f4f4f5",
        "background-dark": "#09090b", // Obsidian Null
        "surface-dark": "#18181b", // Zinc 900
        "surface-light": "#ffffff",
        "border-dark": "#27272a", // Zinc 800
        "border-light": "#e4e4e7",
        "signal-emerald": "#10b981",
        "alert-amber": "#f59e0b",
        "critical-rose": "#f43f5e",
        "zinc-500": "#71717a",
        "zinc-400": "#a1a1aa",
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px", // Industrial look implies sharper corners usually, but we'll stick to tight radii
        sm: "2px",
        md: "4px",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(212, 175, 55, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.03) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
