import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",

        // Design System: Envíos DosRuedas (docs/prototipos/DESIGN.md)
        'brand-blue': '#0950F6',
        'brand-blue-deep': '#052C87',
        'brand-navy': '#052C87',
        'brand-yellow': '#FFF12E',
        'brand-yellow-hover': '#FFF44A',
        'brand-canvas': '#F8FAFC',
        'brand-white': '#FFFFFF',
        'social-facebook': '#1877F2',
        'social-whatsapp': '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-anton)', 'Anton', 'sans-serif'],
        subheading: ['var(--font-bebas-neue)', '"Bebas Neue"', 'sans-serif'],
        mono: ['var(--font-geist-mono)', '"Geist Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px rgba(255, 241, 46, 0.40)',
        'glow-yellow-lg': '0 0 50px rgba(255, 241, 46, 0.55)',
        'glow-blue': '0 0 25px rgba(9, 80, 246, 0.30)',
        'glow-fb': '0 0 25px rgba(24, 119, 242, 0.50)',
        'glow-ig': '0 0 25px rgba(225, 48, 108, 0.50)',
        'glow-wa': '0 0 25px rgba(37, 211, 102, 0.50)',
        'antigravity-deep': '0 30px 60px -15px rgba(9, 80, 246, 0.35), 0 0 50px -10px rgba(255, 241, 46, 0.20)',
      },
      keyframes: {
        'logos-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'logos-scroll': 'logos-scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
