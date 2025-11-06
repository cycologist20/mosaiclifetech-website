/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2A5B69',
        'accent': '#E89A3C',
        'light-bg': '#E0E0E0',
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      height: {
        '15': '3.75rem', // 60px
        '18': '4.5rem',  // 72px
        '48': '12rem',   // 192px (4x of h-12)
        '60': '15rem',   // 240px (4x of h-15)
        '72': '18rem',   // 288px (4x of h-18)
      },
    },
  },
  plugins: [],
};
