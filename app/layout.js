import './globals.css'

export const metadata = {
  metadataBase: new URL('https://rsacc.pro'),
  title: 'RSACC - Rwanda Society of Anesthesia and Critical Care',
  description: 'Rwanda Society of Anesthesia and Critical Care - Committed to Excellence in Patient Care',
  applicationName: 'RSACC',
  openGraph: {
    title: 'RSACC - Rwanda Society of Anesthesia and Critical Care',
    description: 'Rwanda Society of Anesthesia and Critical Care - Committed to Excellence in Patient Care',
    siteName: 'RSACC',
    type: 'website',
    locale: 'en_RW',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
