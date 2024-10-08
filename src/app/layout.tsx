/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bomb Wiki',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
