import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RSACC - Rwanda Society of Anesthesia and Critical Care',
  description: 'Rwanda Society of Anesthesia and Critical Care - Committed to Excellence in Patient Care',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}