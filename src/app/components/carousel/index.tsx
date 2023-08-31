'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'

export function Carousel() {
  const images = [image1, image2, image3, image4, image5]

  const [currImage, setCurrImage] = useState(4)

  function prevImage() {
    const prev = currImage - 1

    if (images[prev]) setCurrImage(prev)
    else setCurrImage(images.length - 1)
  }
  function nextImage() {
    const next = currImage + 1

    if (images[next]) setCurrImage(next)
    else setCurrImage(0)
  }

  return (
    <div className='relative h-screen'>
      <button
        onClick={prevImage}
        className='text-2xl duration-500 left-10 top-1/2 absolute transition-colors p-3 rounded-full text-red-600 bg-yellow-400 hover:text-yellow-400 hover:bg-red-600'
      >
        <CaretLeft weight='bold' />
      </button>
      <button
        onClick={nextImage}
        className='text-2xl right-10 duration-500 top-1/2 absolute transition-colors p-3 rounded-full text-red-600 bg-yellow-400 hover:text-yellow-400 hover:bg-red-600'
      >
        <CaretRight weight='bold' />
      </button>
      <Image
        src={images[currImage]}
        alt='Meat'
        className='w-full object-cover h-full'
      />
    </div>
  )
}
