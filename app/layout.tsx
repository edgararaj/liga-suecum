import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liga Sueca UMinho',
  description: 'made with love by NECC',
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
        <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 dark:bg-slate-800 dark:text-gray-300">
          © NECC 2001-2025 | Developed with 💖
        </footer>
      </body>
    </html>
  )
}
