/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgba(255, 255, 255, 0.8)',
            h1: {
              color: 'rgba(255, 255, 255, 0.9)',
            },
            h2: {
              color: 'rgba(255, 255, 255, 0.9)',
            },
            h3: {
              color: 'rgba(255, 255, 255, 0.9)',
            },
            strong: {
              color: 'rgba(255, 255, 255, 0.9)',
            },
            a: {
              color: '#3A7BD5',
              '&:hover': {
                color: '#2563eb',
              },
            },
            code: {
              color: 'rgba(255, 255, 255, 0.8)',
            },
            blockquote: {
              color: 'rgba(255, 255, 255, 0.8)',
            },
            ul: {
              color: 'rgba(255, 255, 255, 0.8)',
            },
            li: {
              color: 'rgba(255, 255, 255, 0.8)',
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}