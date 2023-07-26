import { Image } from 'next/image'

export function Box({ title, height, width, margin }) {
  return (
    <div className={`h-[${height}] w-[${width}] mx-[${margin}] p-8 bg-zinc-400 rounded-lg`}>
      <div className="border-b-2 border-zinc-900">
        <h1 className='text-zinc-900 text-3xl font-medium pb-2'>{title}</h1>
      </div>
      <div>
        
      </div>
    </div>
  )
}