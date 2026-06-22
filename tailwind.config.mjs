/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 通过 CSS 变量驱动，方便主题切换
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        },
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      maxWidth: {
        content: '72ch',
      },
      animation: {
        'aurora-1': 'aurora-float-1 22s ease-in-out infinite',
        'aurora-2': 'aurora-float-2 28s ease-in-out infinite',
        'aurora-3': 'aurora-float-3 34s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'aurora-float-1': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(8vw,-6vh) scale(1.15)' },
        },
        'aurora-float-2': {
          '0%,100%': { transform: 'translate(0,0) scale(1.1)' },
          '50%': { transform: 'translate(-10vw,8vh) scale(0.9)' },
        },
        'aurora-float-3': {
          '0%,100%': { transform: 'translate(0,0) scale(0.95)' },
          '50%': { transform: 'translate(6vw,10vh) scale(1.2)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient-x': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: 'rgb(var(--color-fg))',
            a: {
              color: 'rgb(var(--color-accent))',
              textDecoration: 'none',
              borderBottom: '1px solid rgb(var(--color-accent) / 0.4)',
              transition: 'border-color .2s',
            },
            'a:hover': { borderBottomColor: 'rgb(var(--color-accent))' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              background: 'rgb(var(--color-accent) / 0.12)',
              padding: '0.15em 0.4em',
              borderRadius: '0.35rem',
              fontSize: '0.9em',
              fontFamily: 'JetBrains Mono, monospace',
            },
            pre: {
              background: 'rgb(var(--color-bg) / 0.6) !important',
              border: '1px solid rgb(var(--color-border))',
              backdropFilter: 'blur(12px)',
            },
            blockquote: {
              borderLeftColor: 'rgb(var(--color-accent))',
              background: 'rgb(var(--color-accent) / 0.06)',
              borderRadius: '0 0.5rem 0.5rem 0',
              padding: '0.75rem 1.25rem',
              fontStyle: 'normal',
            },
            h1: { letterSpacing: '-0.02em' },
            h2: { letterSpacing: '-0.02em' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
