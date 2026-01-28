import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import AOSInit from '@/components/aos-init'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nem Sothea | Portfolio',
  description: 'Senior iOS Software Engineer & Team Leader Mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
