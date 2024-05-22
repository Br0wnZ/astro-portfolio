/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#ACB7C3",
        "light-primary": "#DEE4E7",
      },
      keyframes: {
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.1,
          },
          "100%": {
            opacity: 1,
          },
        },
        pop: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 1s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
        pop: "pop 0.6s ease-out",
      },
      borderRadius: {
        "custom-shape": "39% 61% 71% 29% / 38% 29% 71% 62%",
      },
      fontFamily: {
        paint: ["Finger Paint", "Georgia"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
