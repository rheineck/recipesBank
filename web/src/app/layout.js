import './globals.css'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Recipes Bank',
  description: 'Keep safe your recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-screen h-screen bg-white flex flex-col'>
        <Header />
        <main className='h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
