import { AlignJustify, LogOut } from 'lucide-react'

export function Header () {
  return (
    <header className='h-20 w-full bg-sky-700 px-52 p-6 flex items-center justify-between'>
      <div>
        <button className='bg-none border-none'>
          <AlignJustify className='h-5 w-5'/>
        </button>
        <span className='text-white text-xl pl-6'>Bem vindo, rheineck!</span>
      </div>
      <button className='bg-none border-none h-5 w-5'>
        <LogOut className='h-5 w-5'/>
      </button>
    </header>
  )
}