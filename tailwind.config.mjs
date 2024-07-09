const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundColor: {
                navbar: colors.blue[900],
                "navbar-hover": colors.blue[950],
            },
            textColor: {
                navbar: colors.white,
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
