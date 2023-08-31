'use client'

import Link from 'next/link'
import { useState } from 'react'

import adeelLogo from './logo.png'
import Image from 'next/image'

export function Header() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('HOME')

  const MenuItem = ({ title }: { title: string }) => {
    return (
      <li>
        <Link
          href='/about'
          onClick={() => setSelectedMenuItem(title)}
          data-is-selected={selectedMenuItem === title}
          className='block py-2 border-b-2 transition-colors duration-500 border-transparent hover:border-red-600 data-[is-selected="true"]:font-bold data-[is-selected="true"]:text-yellow-400 data-[is-selected="true"]:border-yellow-400'
        >
          {title}
        </Link>
      </li>
    )
  }

  return (
    <header className='flex justify-between px-16 text-white bg-gradient-to-b from-black/50'>
      <div className='py-3'>
        <Image src={adeelLogo} alt='Adeel Alimentos' />
      </div>
      <div className='flex flex-col items-end gap-5'>
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
            <MenuItem title='HOME' />
            <MenuItem title='SOBRE A ADEEL' />
            <MenuItem title='PRODUTOS' />
            <MenuItem title='ONDE ENCONTRAR' />
            <MenuItem title='NOTÍCIAS' />
          </ul>
        </nav>
      </div>
    </header>
  )
}
