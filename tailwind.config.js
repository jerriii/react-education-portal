/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#D9D9D9",
        "custom-border-color": "#847E84",
        "custom-green-color": "#007E46",
      },
      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
        "custom-50px": "50px",
        "custom-10px": "10px",
        "custom-23rem": "368px",
        "custom-18px": "18px",
        "custom-75px": "75px",
      },
      borderRadius: {
        "custom-radius-10px": "10px",
        "custom-radius-20px": "20px",
      },
    },
  },
  plugins: [],
};
