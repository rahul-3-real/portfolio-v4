/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1280px",
        "2xl": "1280px",
      },
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      colors: {
        dark: "var(--dark)",
        darkAlt: "var(--dark-alt)",
        light: "var(--light)",
        lightAlt: "var(--light-alt)",
        gray: "var(--gray)",
      },
    },
  },
  plugins: [],
};
