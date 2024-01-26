/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "custom-75px": "75px",
      },
      padding: {
        auto: "auto",
      },
      fontSize: {
        "custom-42px": "42px",
      },
      colors: {
        "custom-grey": "#D9D9D9",
        "custom-border-color": "#847E84",
        "custom-green-color": "#007E46",
        "custom-purple-color-bold": "#6A6BCF",
        "custom-purple-border-color": "#BDBEEB",
        "custom-text-purple-color": "#4144B8",
        "custom-navbar-black-color": "#343434",
      },
      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
        "custom-10px": "10px",
        "custom-18px": "18px",
        "custom-50px": "50px",
        "custom-70px": "70px",
        "custom-75px": "75px",
        "custom-23rem": "368px",
      },
      borderRadius: {
        "custom-radius-10px": "10px",
        "custom-radius-20px": "20px",
        "custom-radius-28px": "28px",
      },
    },
  },
  plugins: [],
};
