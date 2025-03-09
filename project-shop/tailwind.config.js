/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugin: {
    container: false,
  },
  theme: {
    extend: {
      maxWidth: {
        1480: "1480px",
      },

      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },

      width: {
        130: "130px",
        categories: "calc((100% - 120px)/ 4)",
      },

      backgroundColor: {
        gray: "rgb(235, 235, 233)",
      },

      fontSize: {
        "15px": "0.9375rem",
      },
      colors: {
        caption: "#8A8A8A",
      },
      borderColor: {
        LightGray: "#8A8A8A",
      },
    },
  },
  plugins: [],
};
