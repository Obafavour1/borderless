import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blues:{
          100:'#FAFAFA',
          200:'#8A75EB',
          300:'#5F44EC',
          400:'#100E24',
          500:'#110F23',
          600:'#2E3539'
        },
        oranges:{
          100:'#FED449'
        },
        reds:{
          100:'#B62619'
        },
        blacks:{
          100:'#6C747D',
          200:'#2E3539'
        },
        greens:{
          100:'#D9ECD8',
          200:'#48934D'
        },
        yellows:{
          100:'#FEE9A4',
          150:'#F9D050',
          200:'#826400'
        }
      },
      backgroundImage:{
        headerbg:"url(/sendheaderbg.svg)"
      }
    },
  },
  plugins: [],
} satisfies Config;
