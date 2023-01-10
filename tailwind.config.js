module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        hybrida: {
          transparent: "transparent",
          current: "currentColor",
          rosalogo: "#ea78f4",
          lightblue: "#47a8ff",
          indigo: "#7252ff",
          fuchsia: "#d18bfd",
        },
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
