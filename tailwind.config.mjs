/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#EFDF4d",
					"secondary": "#71659B",
					"accent": "#EFDF4D",
					"neutral": "#141418",
					"base-100": "#141418",
					"info": "#67e8f9",
					"success": "#4ade80",
					"warning": "#f59e0b",
					"error": "#dc2626",
				},
				dark: {
					"primary": "#EFDF4d",
					"secondary": "#71659B",
					"accent": "#EFDF4D",
					"neutral": "#141418",
					"base-100": "#141418",
					"info": "#67e8f9",
					"success": "#4ade80",
					"warning": "#f59e0b",
					"error": "#dc2626",
				},
			}
		],
		darkTheme: "dark",
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
}
