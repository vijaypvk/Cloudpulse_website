/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // animation: {
      //   scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      //   ripple: 'ripple 4s infinite',
      // },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        // ripple: {
        //   '0%': {
        //     transform: 'translate(-50%, -50%) scale(0.8)',
        //     opacity: '0.5',
        //   },
        //   '100%': {
        //     transform: 'translate(-50%, -50%) scale(2.5)',
        //     opacity: '0',
        //   },
        // },
      },
    },
  },
  plugins: [],
}
