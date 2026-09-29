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

export const clashDisplayRegular = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash-display', // Optional: for use with Tailwind or CSS vars
})