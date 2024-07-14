import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidebar': 'rgba(255, 255, 255, 0.1) 0px 4px 12px',
      },
      backgroundImage: {
        'exp-card': 'linear-gradient(to right, rgba(23, 23, 23, 1), rgb(15, 12, 41, 0.2))',
      },
    },
  },
  plugins: [],
}
export default config
