import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f1a',
        surface: '#0f1626',
        accent: {
          blue: '#1e3a8a',
          neon: '#ffd166',
          glow: '#eab308'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 209, 102, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config

