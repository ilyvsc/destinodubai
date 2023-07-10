/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#1c64f2",
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        silver: "#D4DEFF",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      backgroundColor: [
        "hover",
        "focus",
        "active",
        "odd",
        "dark",
        "dark:hover",
        "dark:focus",
        "dark:active",
        "dark:odd",
      ],
      textColor: [
        "focus-within",
        "hover",
        "active",
        "dark",
        "dark:focus-within",
        "dark:hover",
        "dark:active",
      ],
      placeholderColor: ["focus", "dark", "dark:focus"],
      borderColor: ["focus", "hover", "dark", "dark:focus", "dark:hover"],
      divideColor: ["dark"],
    },
  },
  plugins: [],
}
