/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        memop: '#7D17BA',
        memob: '#4C69FB'
      },
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
      },
    },
  },
  plugins: [],
};
