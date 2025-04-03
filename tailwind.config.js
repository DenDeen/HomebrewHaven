/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#181A1B', // Very dark, slightly cool gray
        primary: '#1F2122', // Dark surface color, slightly lighter than background
        secondary: { // Our main "action" color
          DEFAULT: '#C43C3C', // Deep Red
          dark: '#A62B2B',  // Darker shade
        },
        accent: {
          DEFAULT: '#E6A317', // Gold/Amber
          dark: '#B88213',   // Darker gold
        },
        text: {
          DEFAULT: '#EAEAEA', // Primary text - Off-white
          muted: '#A0A0A0',   // Muted/secondary text - Light gray
          inverted: '#181A1B', // Text for light backgrounds (if any)
        },
        border: '#3A3D3F',    // Subtle border color
        success: '#22C55E',   // Green
        danger: '#EF4444',    // Red
        warning: '#F59E0B',   // Amber/Orange (different from accent)
        info: '#3B82F6',     // Blue
        neutral: '#6B7280',  // Gray
        beige: '#EBE6CE',    // Very light gray
      },
      fontFamily: {
        display: ['CinzelDecorative-Regular', 'serif'],
        body: ['Lato-Regular', 'sans-serif'],
        'body-bold': ['Lato-Bold', 'sans-serif'],
        'display-bold': ['CinzelDecorative-Bold', 'serif'],
        bilbo: ['Bilbo', 'serif'],
        norse: ['Norse', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}