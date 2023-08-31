'use client'

import { Header } from './components/header'
import { Carousel } from './components/carousel'
import Image from 'next/image'

import place from './place.jpg'

export default function Home() {
  return (
    <div>
      <section id='home'>
        <div className='z-50 w-full absolute'>
          <Header />
        </div>
        <Carousel />
      </section>
      <section id='about'>
        <div className='h-screen flex gap-6'>
          <div className='flex-1 flex items-center justify-end'>
            <Image src={place} alt='Fábrica da Adeel' className='w-3/4' />
          </div>
          <div className='flex-1 flex flex-col items-start justify-center gap-10'>
            <div className='text-red-700 font-serif text-5xl border-b-4 py-1 pr-8 border-yellow-400/30'>
              SOBRE A ADEEL
            </div>
            <div className='text-lg w-3/4 flex flex-col gap-8'>
              <div className='flex gap-3 flex-col'>
                <p className='font-bold'>
                  Qualidade, Sabor e Praticidade guiam a Adeel em sua
                  trajetória!
                </p>
                <p>
                  Sempre oferecendo aos seus clientes cortes diferenciados e
                  produtos industrializados.
                </p>
                <p>
                  Com o rigoroso controle de todo o processo e com novos
                  equipamentos para industrialização.
                </p>
                <p>
                  A Adeel se destaca por oferecer o que existe de melhor em
                  carne suína e seus derivados.
                </p>
              </div>
              <div>
                <button className='bg-yellow-400 rounded py-3 px-5 text-red-700 transition-colors duration-500 font-bold hover:bg-red-700 hover:text-yellow-400 leading-none'>
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='products'
        className='h-screen flex justify-center items-center text-5xl text-red-700 font-serif'
      >
        <h1>Produtos</h1>
      </section>
      <section
        id='where'
        className='h-screen flex justify-center items-center text-5xl text-red-700 font-serif'
      >
        <h1>Onde Achar</h1>
      </section>
      <section
        id='news'
        className='h-screen flex justify-center items-center text-5xl text-red-700 font-serif'
      >
        <h1>Notícias</h1>
      </section>
      <footer className='h-32 border-t border-gray-400 border-dashed flex justify-center items-center text-3xl'>
        <h1>Rodapé</h1>
      </footer>
    </div>
  )
}
