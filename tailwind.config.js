/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#182350',
          50: '#EEF1F8',
          100: '#D7DCEC',
          200: '#AFB9D9',
          300: '#8796C5',
          400: '#5F73B2',
          500: '#3D4D8C',
          600: '#293569',
          700: '#1F294E', // near-default, slightly lighter than DEFAULT
          800: '#182350', // DEFAULT
          900: '#0E1531',
          950: '#080B1B',
        },
        sky: {
          DEFAULT: '#AFD2FA',
          50: '#F5FAFF',
          100: '#E8F2FE',
          200: '#D3E6FC',
          300: '#AFD2FA', // DEFAULT
          400: '#86B9F2',
          500: '#5C9CE6',
          600: '#3D7DCB',
          700: '#2D60A0',
          800: '#234876',
          900: '#1A3656',
        },
        paper: {
          DEFAULT: '#FEFAEF',
          50: '#FFFFFF',
          100: '#FEFAEF', // DEFAULT
          200: '#FBF3DC',
          300: '#F6E9C2',
        },
        brass: {
          DEFAULT: '#B9915E',
          50: '#F7F0E6',
          100: '#EEDFC6',
          200: '#DEC093',
          300: '#CDA470',
          400: '#B9915E', // DEFAULT
          500: '#9C7649',
          600: '#7D5E3A',
          700: '#5F472C',
          800: '#41301E',
          900: '#241A10',
        },
      },
      fontFamily: {
        display: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        widish: '0.08em',
        widest: '0.22em',
      },
      maxWidth: {
        site: '1280px',
        prose: '640px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '22px',
        '2xl': '28px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(24, 35, 80, 0.04), 0 8px 24px -12px rgba(24, 35, 80, 0.12)',
        'card-hover': '0 2px 4px rgba(24, 35, 80, 0.06), 0 20px 40px -16px rgba(24, 35, 80, 0.20)',
        glow: '0 0 0 1px rgba(175, 210, 250, 0.4), 0 8px 32px -8px rgba(175, 210, 250, 0.5)',
        'inner-line': 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'tick': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'draw': {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 32s linear infinite',
        'tick': 'tick 2.4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        snap: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};
