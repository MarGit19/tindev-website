/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',      // 16px on mobile
        sm: '1.5rem',         // 24px on 640px+
        md: '2rem',           // 32px on 768px+
        lg: '2rem',           // 32px on 1024px+
        xl: '2rem',           // 32px on 1280px+
        '2xl': '2rem',        // 32px on 1600px+
      },
      screens: {
        sm: '100%',           // Full width (with padding) on small
        md: '100%',           // Full width (with padding) on medium
        lg: '100%',           // Full width (with padding) on large
        xl: '1280px',         // Max 1280px on xl
        '2xl': '1600px',      // Max 1600px on 2xl+
      },
    },
    extend: {
      colors: {
        // Brand via CSS variables (alpha-capable)
        ink: "rgb(var(--ink) / <alpha-value>)",
        graphite: "rgb(var(--graphite) / <alpha-value>)",

        accent: {
          DEFAULT: "rgb(var(--accent-500) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
          500: "rgb(var(--accent-500) / <alpha-value>)",
          600: "rgb(var(--accent-600) / <alpha-value>)",
        },
        mint: {
          DEFAULT: "rgb(var(--mint-500) / <alpha-value>)",
          500: "rgb(var(--mint-500) / <alpha-value>)",
        },
        coral: {
          DEFAULT: "rgb(var(--coral-500) / <alpha-value>)",
          500: "rgb(var(--coral-500) / <alpha-value>)",
        },

        // Surfaces
        page: "rgb(var(--page) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",

        // Legacy named colors kept for compatibility
        "electric-blue": "#2979FF",
        "charcoal-gray": "#1F1F1F",
        "mint-green": "#2EE0AC",
        "light-gray": "#ECECEC",
        "slate-blue": "#4A5CFF",
        "vivid-coral": "#FF5A5F",
      },

      fontFamily: {
        // use next/font variables
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },

      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};