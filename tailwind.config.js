// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // placeholder brand primary
        accent: "#F59E0B", // CTA accent
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"
        }
      },
      spacing: {
        "4": "1rem",
        "8": "2rem",
        "12": "3rem",
        "16": "4rem"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: []
};
