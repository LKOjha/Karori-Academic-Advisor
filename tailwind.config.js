export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // ← important
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
      keyframes: {
        customBounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-25%)" },
          "60%": { transform: "translateY(-15%)" },
        },
      },
      animation: {
        // Run bounce in 8s (5s bouncing + ~3s pause)
        "custom-bounce": "customBounce 8s infinite",
      },
    },
  },
  plugins: [],
};

