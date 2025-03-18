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
        glowText: {
          '0%': { textShadow: '0 0 5px #ff7f50' },
          '25%': { textShadow: '0 0 10px #ff4500' },
          '50%': { textShadow: '0 0 15px #ffa07a' },
          '75%': { textShadow: '0 0 10px #ff4500' },
          '100%': { textShadow: '0 0 5px #ff7f50' },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        glow: 'glow 3s infinite linear', // Adjust timing as needed
        glowText: 'glowText 1.5s infinite ease-in-out',
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
}

//=====================================================
