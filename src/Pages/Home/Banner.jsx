import React, { useEffect, useMemo, useState } from 'react'
import bannerImage from '../../../public/img/banner-image.png'
import slideOne from '../../../public/img/slide-01.png'
import slideTwo from '../../../public/img/slide-02.png'
import slideThree from '../../../public/img/slide-03.png'
import slideFour from '../../../public/img/slide-04.png'
import slideFive from '../../../public/img/slide-05.png'
import slideSix from '../../../public/img/slide-06.png'

function Banner() {
  const slides = useMemo(
    () => [slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix],
    []
  )
  const extendedSlides = [...slides, slides[0]]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transition, setTransition] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 2000)

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
    <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-center mt- relative'>


      <div
        className="lg:w-2/3 w-full h-[320px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-2xl  bg-cover bg-center bg-no-repeat
        lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_90%,100%_100%,0_100%)]
        "
        style={{
          backgroundImage: `url(${bannerImage})`,

        }}
      >
        <div className='p-5 relative h-full'>
          <h1 className='font-semibold md:text-xl text-sm text-[#ffffff]  italic'>
            INFINEON, dedicated to pharmaceutical industry, is one of the leading suppliers for pharmaceutical technology. Following the standard of cGMP, WHO, USP, EP, ChP, we provide most competent and optimum GMP solutions for customers around the world, our supply covers a range of complete production lines, advanced pharma engineering, high quality pharma equipment, consultancy services.</h1>
          <p className='absolute bottom-4 right-4 text-right font-semibold text-[#ffffff] md:text-xl text-sm  italic'>INFINEON, Provides Professional GMP Solutions.
            <br /> INFINEON, Maximizes Your GMP Compliance</p>
        </div>
      </div>
      <div className='lg:w-1/3 w-full'>
        <div className='relative overflow-hidden  h-[320px] abosolute lg:-left-5 -z-10'>
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
                className='w-full flex-shrink-0 object-cover h-full '
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



