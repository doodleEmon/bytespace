// app/fonts.ts
import localFont from 'next/font/local'

export const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash-display', // Optional: for use with Tailwind or CSS vars
})