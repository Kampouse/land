/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#AE40E6", // Color 1 (dark purple)
        secondary: "#4d3967", // Color 2 (dark gray)
        accent: "#8cbee7", // Color 3 (green)
        warning: "#b0671d", // Color 4 (orange)
        danger: "#F1232D", // Color 5 (red)
        fortext: "ff8c80",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.nightcafe.studio/jobs/T03JXPhTw4IpyN8feyEL/T03JXPhTw4IpyN8feyEL--1--9v6v3_6.9444x-real-esrgan-animevideo-v3.jpg?tr=w-1600,c-at_max')",
      },
    },
    fontFamily: {
      display: ["Pacifico", "cursive"],
    },
  },
  plugins: [],
};
