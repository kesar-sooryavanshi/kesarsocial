/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Custom color palette — deep obsidian theme with cyan accents
      colors: {
        obsidian: {
          950: '#04060a',
          900: '#080c12',
          800: '#0d1218',
          700: '#141c26',
          600: '#1c2736',
        },
        cyber: {
          400: '#22d3ee',   // cyan-400 — primary accent
          500: '#06b6d4',   // cyan-500
          600: '#0891b2',
          300: '#67e8f9',
        },
        ember: {
          400: '#f97316',   // orange accent for warnings / CTAs
          500: '#ea580c',
        },
      },
      fontFamily: {
        // Distinctive font pair: Space Grotesk + JetBrains Mono
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(34,211,238,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(34,211,238,0.7), 0 0 50px rgba(34,211,238,0.3)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
