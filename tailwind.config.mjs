import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "surface": {
                    "50": "#fcfcfc",
                    "100": "#eceff2",
                    "200": "#d4dbe3",
                    "300": "#aebdcb",
                    "400": "#8298ae",
                    "500": "#627c95",
                    "600": "#4e647b",
                    "700": "#405164",
                    "800": "#2e2e33",
                    "900": "#131316",
                    "950": "#0E0E0E"
                }
            },
            fontFamily: {
                sans: ['Raleway', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                base: {
                    "primary": "#71659B",
                    "secondary": "#EFDF4D",
                    "accent": "#EFDF4D",
                    "neutral": "#1f252d",
                    "base-100": "#1f252d",
                    "base-content": "#161b21",
                    "info": "#67e8f9",
                    "success": "#4ade80",
                    "warning": "#f59e0b",
                    "error": "#dc2626"
                }
            }
        ],
        base: false,
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root" // The element that receives theme color CSS variables
    },
    darkMode: ["class"]
};
