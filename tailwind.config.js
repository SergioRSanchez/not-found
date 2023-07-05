/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-outfit)',
      },
      colors: {
        gray1: '#D6D6F2',
        gray2: '#E2E2F5',
        purple: '#BF7BFB',
        'blue-light': '#212187',
        blue: '#151557',
        'blue-dark': '#000013',
      },
    },
  },
  plugins: [],
}
