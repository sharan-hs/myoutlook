/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--primary-text-color)",
        "primary-bg": "var(--primary-bg-color)",
      },
    },
  },
  plugins: [],
};
