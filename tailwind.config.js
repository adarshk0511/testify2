/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


//=====================================
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #ff7f50, 0 0 10px #ff7f50' },
          '25%': { boxShadow: '0 0 15px #ff4500, 0 0 10px #ff4500' },
          '50%': { boxShadow: '0 0 20px #ffa07a, 0 0 10px #ffa07a' },
          '75%': { boxShadow: '0 0 15px #ff4500, 0 0 10px #ff4500' },
          '100%': { boxShadow: '0 0 10px #ff7f50, 0 0 10px #ff7f50' },
        },
      },
      animation: {
        glow: 'glow 3s infinite linear', // Adjust timing as needed
      },
    },
  },
  plugins: [],
}