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


      {/* <div
        className="lg:w-2/3 w-full h-[320px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-2xl  bg-cover bg-center bg-no-repeat
        lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_90%,100%_100%,0_100%)]
        "
        style={{
          backgroundImage: `url(${bannerImage})`,

        }}
      >
        <div className='p-5 relative h-full'>
          <h1 className='font-semibold md:text-xl text-sm text-[#ffffff] mr-2 text-justify  italic'>
            “INFINEON ENGINEERING SOLUTIONS” is dedicated to providing complete solution on Pharmaceuticals, Plastics, and others Industries in Bangladesh since 2009. It's formed with a view to supporting and assisting to our valued customer in the industrial sector promptly from both principal and local end. Our team consist of experienced as well as professional sales and service engineer who have long proven track record in the industrial sector. </h1>
          <p className='absolute bottom-4 right-4 text-right font-semibold text-[#ffffff] md:text-xl text-sm  italic'>We provide a complete engineering & business solution,
            <br /> on pharmaceuticals & plastics industries</p>
        </div>
      </div> */}
      <div className=' w-full'>
        <div className='relative overflow-hidden  h-[75vh] rounded-2xl -z-10'>
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



