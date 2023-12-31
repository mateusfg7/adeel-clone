import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        serif: 'var(--font-noto-serif-telugu)',
      },
    },
  },
  plugins: [],
}
export default config
