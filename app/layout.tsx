import type { Metadata } from 'next'
import Footer from "@/components/footer";
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
    <html lang="pt" className="h-full">
      <body className="min-h-screen h-full bg-white dark:bg-slate-900 flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
