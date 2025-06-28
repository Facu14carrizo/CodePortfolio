/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316', // Main orange
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        },
        accent: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444', // Complementary red-orange
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D'
        },
        terracotta: {
          50: '#FDF4F3',
          100: '#FCE8E6',
          200: '#F9D5D1',
          300: '#F4B5AD',
          400: '#ED8B7F',
          500: '#E36B5C', // Terracotta main
          600: '#D04A3A',
          700: '#B23A2D',
          800: '#933129',
          900: '#7A2E28'
        },
        burnt: {
          50: '#FDF6F0',
          100: '#FBEEE1',
          200: '#F6D5BE',
          300: '#F0B896',
          400: '#E8956B',
          500: '#D97548', // Burnt orange
          600: '#C85A2C',
          700: '#A64622',
          800: '#853A20',
          900: '#6D311F'
        },
        warm: {
          50: '#FEFCFB',
          100: '#FDF8F6',
          200: '#F9F1EC',
          300: '#F3E8E0',
          400: '#EBDDD2',
          500: '#E1D0C4', // Warm neutral
          600: '#D4BFB0',
          700: '#C4A999',
          800: '#A08B7A',
          900: '#7D6B5D'
        },
        dark: {
          50: '#F8F6F4',
          100: '#F0EBE7',
          200: '#E0D5CE',
          300: '#CFBEB4',
          400: '#B8A394',
          500: '#9B8471',
          600: '#7D6B5D',
          700: '#5D4E44',
          800: '#3D342E',
          900: '#1F1B18' // Dark with warm undertones
        }
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'wave': 'wave 8s ease-in-out infinite',
        'morph': 'morph 10s ease-in-out infinite',
        'particle-flow': 'particle-flow 20s linear infinite',
        'typing': 'typing 4s steps(40) infinite',
        'blink': 'blink 1s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(217, 117, 72, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(217, 117, 72, 0.8)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-shimmer': {
          '0%': {
            'background-position': '-200% center'
          },
          '100%': {
            'background-position': '200% center'
          }
        },
        'text-glow': {
          '0%': {
            'text-shadow': '0 0 10px rgba(217, 117, 72, 0.5), 0 0 20px rgba(217, 117, 72, 0.3), 0 0 30px rgba(217, 117, 72, 0.1)'
          },
          '100%': {
            'text-shadow': '0 0 20px rgba(217, 117, 72, 0.8), 0 0 30px rgba(217, 117, 72, 0.6), 0 0 40px rgba(217, 117, 72, 0.4)'
          }
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(20px) translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateX(0) translateY(-40px) rotate(0deg)' },
          '75%': { transform: 'translateX(-20px) translateY(-20px) rotate(-5deg)' }
        },
        morph: {
          '0%, 100%': { 
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': { 
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': { 
            'border-radius': '50% 60% 30% 60% / 30% 60% 70% 40%',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': { 
            'border-radius': '60% 40% 60% 30% / 70% 30% 60% 40%',
            transform: 'rotate(270deg) scale(1.05)'
          }
        },
        'particle-flow': {
          '0%': { transform: 'translateX(-100vw) translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(-100px) rotate(360deg)', opacity: '0' }
        },
        typing: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};