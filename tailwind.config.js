/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#fe5e29',
          gold: '#a79b58',
          dark: '#222222',
          gray: '#767676',
          lightgray: '#f7f8f9',
          border: '#e5e7eb',
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'serif'],
        kalguksu: ['NanumKalGugSu', 'cursive', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
