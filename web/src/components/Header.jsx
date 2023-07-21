import { AlignJustify, LogOut } from 'lucide-react'

export function Header () {
  return (
    <header className='h-20 bg-sky-700'>
      <button className='bg-none border-none'>
        <AlignJustify/>
      </button>
      <span>Bem vindo, rheineck!</span>
      <button className='bg-none border-none'>
        <LogOut />
      </button>
    </header>
  )
}