
// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        shadowShimmer: {
          '0%': { opacity: '0.5', transform: 'translateX(0%) translateY(0%) scaleY(0.5) skewX(6deg)' },
          '50%': { opacity: '0.8', transform: 'translateX(0%) translateY(%) scaleY(0.5) skewX(6deg)' },
          '100%': { opacity: '0.5', transform: 'translateX(0%) translateY(0%) scaleY(0.5) skewX(6deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        shadowShimmer: 'shadowShimmer 3s ease-in-out infinite',
      },
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
}

