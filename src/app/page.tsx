'use client'

import { Header } from './components/header'
import { Carousel } from './components/carousel'

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
        <h1>Sobre</h1>
      </section>
      <section id='products'>
        <h1>Produtos</h1>
      </section>
      <section id='where'>onde achar</section>
      <section id='news'>Notícias</section>
    </div>
  )
}
