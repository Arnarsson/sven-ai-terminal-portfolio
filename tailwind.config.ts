import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Terminal Color Scheme (Preserved from current CSS)
        terminal: {
          green: '#00ff41',
          'dark-bg': '#0a0a0a',
          'terminal-bg': '#000000',
          text: '#ffffff',
          'secondary-text': '#cccccc',
          border: '#333333',
          hover: '#1a1a1a',
        },
        // Theme Variations
        matrix: {
          primary: '#00ff41',
          bg: '#000000',
          terminal: '#000000',
        },
        retro: {
          primary: '#ff6b35',
          bg: '#1a1a1a',
          terminal: '#2a2a2a',
        },
        cyber: {
          primary: '#00ffff',
          bg: '#0a0a0a',
          terminal: '#111111',
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        'terminal': '0 0 30px rgba(0, 255, 65, 0.3)',
        'chat': '0 0 20px rgba(0, 255, 65, 0.2)',
        'glow': '0 0 10px currentColor',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'fadeIn': 'fadeIn 0.3s ease',
        'glitch': 'glitch 0.3s ease-in-out',
        'loading': 'loading 1.5s infinite',
        'typing': 'typing 2s steps(20, end)',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        loading: {
          '0%, 20%, 40%, 60%, 80%, 100%': { opacity: '0.3' },
          '10%, 30%, 50%, 70%, 90%': { opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config