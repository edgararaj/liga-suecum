import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liga Sueca UMinho',
  description: 'Liga Sueca UMinho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-white dark:bg-slate-900">
        {children}
      </body>
    </html>
  )
}
