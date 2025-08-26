export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dbeeff",
          500: "#2563eb",
          600: "#1d4ed8",
          900: "#0b1f4d",
        },
      },
    },
  },
  plugins: [],
};

