/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        "roognis-accent": "#00c4b4"
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(0,196,180,0.35), rgba(14,116,144,0.35))"
      },
      animation: {
        'gradient-move': 'gradientMove 8s ease infinite'
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: []
};
