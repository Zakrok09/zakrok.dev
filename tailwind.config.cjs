/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
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
					"base-100": "#f3f4f6",
					"info": "#67e8f9",
					"success": "#4ade80",
					"warning": "#f59e0b",
					"error": "#dc2626",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
