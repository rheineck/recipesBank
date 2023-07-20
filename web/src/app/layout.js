import './globals.css'
import { AlignJustify, LogOut } from 'lucide-react'

export const metadata = {
  title: 'Recipes Bank',
  description: 'Keep safe your recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-white h-full'>
        <header className='h-20 bg-sky-700'>
          <button className='bg-none border-none'>
            <AlignJustify/>
          </button>
          <span>Bem vindo, rheineck!</span>
          <button className='bg-none border-none'>
            <LogOut />
          </button>
        </header>
        {children}
        <footer className='h-20 mb-0 bg-sky-700 font-roboto-400'>
          <span>2023 - Recipe Bank</span>
          <span>Feito por Raphael Gilioli Heineck</span>
        </footer>
      </body>
    </html>
  )
}
