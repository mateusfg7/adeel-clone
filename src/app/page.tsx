'use client'

import { Header } from './components/header'
import { Carousel } from './components/carousel'

export default function Home() {
  return (
    <div>
      <section>
        <div className='z-50 w-full absolute'>
          <Header />
        </div>
        <Carousel />
      </section>
    </div>
  )
}
