/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},	
	},
	daisyui: {
		themes: [
			{
				primary: {
					"primary": "#1f2937",
					"secondary": "#AB59F7",
					"accent": "#f3f759",
					"neutral": "#111827",
					"base-100": "#f3f4f6",
					"info": "#38bdf8",
					"success": "#a3e635",
					"warning": "#fb923c",
					"error": "#ef4444",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
