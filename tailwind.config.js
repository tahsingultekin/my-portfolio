/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    screens: {
      md1200: { max: "1200px" },
      md1020: { max: "1020px" },
      min900: { max: "900px" },
      min750: { max: "750px" },
      min650: { max: "650px" },
      min600: { max: "600px" },
      min550: { max: "550px" },
      min500: { max: "500px" },
      min460: { max: "460px" },
      min400: { max: "400px" },
    },
  },
  plugins: [],
};
