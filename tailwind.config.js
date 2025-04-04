
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it covers all JSX files
    "./src/assets/components/**/*.{js,jsx}", // Ensures Tailwind scans this folder
  ],
  theme: {
    extend: {
      
      fontFamily: {
        reem: ['"Reem Kufi"', "sans-serif"],
        mouse: ['"Mouse Memoirs"', "Gill Sans", "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
        noto: ['"Noto Sans"', "sans-serif"],
        crushed: ['"Crushed Alt"', "sans-serif"],
      },
      colors: {
        brown: {
          100: "#f3e5d8",
          200: "#e1c9b0",
          300: "#c8a888",
          400: "#a87c5f",
          500: "#A52A2A",
          600: "#91522b",
          700: "#8B4513",
          800: "#5c3317",
          900: "#3d2314", 
        },
      },
    },
  },
  variants: {},
  plugins: [],
};


