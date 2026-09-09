import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E6007F',
          yellow: '#FFDA00',
          orange: '#FF9900',
          magenta: '#A30A7B',
        },
        // Dark "navy" surfaces used across the site.
        navy: '#0B1221',
        'navy-light': '#131B2F',
        'navy-dark': '#080D18',
        'navy-deep': '#050810',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
