/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	extend: {
      colors: {
        primary: '#64278C', // Color 1 (dark purple)
        secondary: '#4d3967', // Color 2 (dark gray)
        accent: "#8cbee7",  // Color 3 (green)
        warning: '#b0671d',  // Color 4 (orange)
        danger: '#bf1719'   // Color 5 (red)
      }
    },
     fontFamily: {
      display: ["Pacifico", "cursive"],
    },

	},
	plugins: [],
}
