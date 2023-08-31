import Link, { LinkProps } from 'next/link'
import Image from 'next/image'

import adeelLogo from './logo.png'

export function Header() {
  const MenuItem = ({ title, ...props }: { title: string } & LinkProps) => {
    return (
      <li>
        <Link
          {...props}
          data-is-home={title === 'HOME'}
          className='block py-2 border-b-2 transition-colors duration-500 border-transparent hover:border-red-600 data-[is-home="true"]:font-bold data-[is-home="true"]:text-yellow-400 data-[is-home="true"]:border-yellow-400'
        >
          {title}
        </Link>
      </li>
    )
  }

  return (
    <header className='flex justify-between px-16 text-white bg-gradient-to-b from-black'>
      <div className='py-6'>
        <Image src={adeelLogo} alt='Adeel Alimentos' />
      </div>
      <div className='flex flex-col items-end gap-8'>
        <div className='flex items-start justify-center gap-6 px-12 py-3 text-red-700 bg-yellow-400 border-b-2 border-red-700 rounded-b-full border-x-2'>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>BELO HORIZONTE</span>
            <a
              href='#'
              className='font-black transition-colors hover:text-red-800'
            >
              (31) 3582-7790
            </a>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>PARÁ DE MINAS</span>
            <a
              href='#'
              className='font-black transition-colors hover:text-red-800'
            >
              (37) 3237-3100
            </a>
          </div>
        </div>
        <nav>
          <ul className='flex gap-5 text-lg'>
            <MenuItem href='#home' title='HOME' />
            <MenuItem href='#about' title='SOBRE A ADEEL' />
            <MenuItem href='#products' title='PRODUTOS' />
            <MenuItem href='#where' title='ONDE ENCONTRAR' />
            <MenuItem href='#news' title='NOTÍCIAS' />
          </ul>
        </nav>
      </div>
    </header>
  )
}
