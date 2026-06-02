/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          grey: '#7a7480',      // Your signature channel grey
          light: '#fcfbfc',     // Off-white background for depth
          dark: '#1e1b21',      // Soft off-black for text readability
          amazon: '#ff9900',    // Amazon branding for high-click monetization
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ultra-clean minimalist text
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
