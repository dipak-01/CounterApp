/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-text":
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #caa256 100%)",
      },
      backgroundSize: {
        "300%": "300%",
      },
      keyframes: {
        animated_gradient_text: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        animated_gradient_text:
          "animated_gradient_text 12s ease-in-out infinite",
        "gradient-slow": "gradient-slow 5s ease infinite",
      },
    },
  },
  plugins: [],
};
