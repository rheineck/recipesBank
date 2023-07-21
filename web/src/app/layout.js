import './globals.css'

import { Header } from '../components/Header'

export const metadata = {
  title: 'Recipes Bank',
  description: 'Keep safe your recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-h-fit flex flex-col'>
        <Header />
        {children}
        <footer className='h-20 mb-0 bg-sky-700 font-roboto-400'>
          <div>
            <span>2023 - Recipe Bank</span>
            <span>Feito por Raphael Gilioli Heineck</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
