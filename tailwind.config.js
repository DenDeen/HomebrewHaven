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
          dark: '#A62B2B',  // Darker shade (if needed)
        },
        accent: { // Highlight color
          DEFAULT: '#E6A317', // Gold/Amber
          dark: '#B88213',   // Darker gold
        },
        text: {
          DEFAULT: '#EAEAEA', // Primary text - Off-white
          muted: '#A0A0A0',   // Muted/secondary text - Light gray
          inverted: '#181A1B', // Text for light backgrounds (if any)
        },
        border: '#3A3D3F',    // Subtle border color
        // Semantic colors (using Tailwind defaults adjusted slightly if needed)
        success: '#22C55E',   // Green
        danger: '#EF4444',    // Red
        warning: '#F59E0B',   // Amber/Orange (different from accent)
        info: '#3B82F6',     // Blue
        neutral: '#6B7280',  // Gray
        beige: '#EBE6CE',    // Very light gray
      },
      fontFamily: {
        // Define custom fonts (ensure they are loaded in your app!)
        display: ['CinzelDecorative-Regular', 'serif'], // Heading font (with fallback)
        body: ['Lato-Regular', 'sans-serif'], // Body font (with fallback)
        'body-bold': ['Lato-Bold', 'sans-serif'],
        'display-bold': ['CinzelDecorative-Bold', 'serif'],
        // Add other weights if needed (e.g., Lato-Light, CinzelDecorative-Black)
      },
      borderRadius: {
        'xl': '12px', // Slightly larger rounded corners
        '2xl': '16px',
      }
      // You can extend other properties like spacing, opacity, etc. here
    },
  },
  plugins: [],
}