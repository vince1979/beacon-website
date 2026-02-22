import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':       '#0A0D14',
        'bg-surface':    '#0E1420',
        'bg-card':       '#141C2B',
        'bg-elevated':   '#1A2336',
        'bg-hover':      '#1E293B',
        'border-subtle': 'rgba(255,255,255,0.07)',
        'border-default':'rgba(255,255,255,0.10)',
        'border-strong': 'rgba(255,255,255,0.16)',
        'primary':       '#7C5CFF',
        'primary-light': '#9B7DFF',
        'primary-dark':  '#5B3DE8',
        'success':       '#2DD4BF',
        'warning':       '#F59E0B',
        'danger':        '#F87171',
        'text-primary':  '#F0F2F8',
        'text-secondary':'#8899BB',
        'text-muted':    '#4A5568',
      },
      fontFamily: {
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'card':      '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
        'card-hover':'0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset',
        'surface':   '0 2px 8px rgba(0,0,0,0.3)',
        'glow':      '0 0 40px rgba(124,92,255,0.4), 0 0 80px rgba(124,92,255,0.15)',
        'glow-sm':   '0 0 20px rgba(124,92,255,0.3)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at 20% 60%, rgba(124,92,255,0.10) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(45,212,191,0.06) 0%, transparent 50%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 6s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
