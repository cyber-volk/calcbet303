import './globals.css'

export const metadata = {
  title: 'Calculator App',
  description: 'Advanced calculator application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
