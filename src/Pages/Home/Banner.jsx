import React, { useEffect, useMemo, useState } from 'react'
import bannerImage from '../../../public/img/banner-image.png'
import slideOne from '../../../public/img/slide-1.png'
import slideTwo from '../../../public/img/slide-2.png'
import slideThree from '../../../public/img/slide-3.png'
import slideFour from '../../../public/img/slide-4.png'
import slideFive from '../../../public/img/slide-5.png'
import slideSix from '../../../public/img/slide-6.png'
import slideSeven from '../../../public/img/slide-7.png'
import slideEight from '../../../public/img/slide-8.png'
import slideNine from '../../../public/img/slide-9.png'
import slideTen from '../../../public/img/slide-10.png'
import slideElevent from '../../../public/img/slide-11.png'
import slideTwelv from '../../../public/img/slide-12.png'
import slideThirteen from '../../../public/img/slide-13.png'
import slideFourteen from '../../../public/img/slide-14.png'


function Banner() {
  const slides = useMemo(
    () => [slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix, slideSeven, slideEight, slideNine, slideTen, slideElevent, slideTwelv, slideThirteen, slideFourteen],
    []
  )
  const extendedSlides = [...slides, slides[0]]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transition, setTransition] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentIndex === slides.length) {
      setTimeout(() => {
        setTransition(false)
        setCurrentIndex(0)
      }, 700)

      setTimeout(() => {
        setTransition(true)
      }, 750)
    }
  }, [currentIndex, slides.length])

  return (
    <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-center mt-4  relative'>



      <div className=' w-full'>
        <div className='relative overflow-hidden  lg:h-[75vh] md:h-[80vh] h-[50vh]   rounded-2xl lg:-z-10'>
          <div
            className='flex h-full '
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: transition
                ? 'transform 700ms ease-out'
                : 'none',
            }}
          >
            {extendedSlides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className='w-full flex-shrink-0 object-fill h-full '
              />
            ))}
          </div>
          <div className='absolute left-0 right-0 bottom-4 flex justify-center gap-2'>
            {slides.map((_, index) => (
              <button
                key={index}
                type='button'
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex % slides.length === index ? 'bg-white w-6' : 'bg-white/40'
                  }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Banner



