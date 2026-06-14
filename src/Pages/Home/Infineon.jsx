
import HomeSection from './HomeSection';
import React, { useEffect, useState, useMemo, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaAngleRight, FaChevronLeft } from 'react-icons/fa'
import CooparetiveBrand from './CooparetiveBrand';
import CompanyProfile from './CompanyProfile';
import { motion } from 'framer-motion';

import img6 from '../../../public/img/products/product-6.png'
import img7 from '../../../public/img/products/product-7.png'
import img8 from '../../../public/img/products/product-8.png'
import img9 from '../../../public/img/products/product-9.png'
import img10 from '../../../public/img/products/product-10.png'


const products = [

    {
        id: 1,
        title: 'Drinking Water Production Machineries ',
        image: img6,
    },
    {
        id: 2,
        title: 'Packaging, Printing & Labelling Machineries ',
        image: img7,
    },
    {
        id: 3,
        title: 'Cleanroom and HVAC System',
        image: img8,
    },
    {
        id: 4,
        title: 'Warehouse Equipments',
        image: img9,
    },
    {
        id: 5,
        title: 'Others Machineries & Equipments',
        image: img10,
    }
]

const Infineon = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(3)
    const [transition, setTransition] = useState(true)
    const trackRef = useRef(null)

    const slides = useMemo(() => products, [])
    const extendedSlides = useMemo(
        () => [
            ...slides.slice(-visible),
            ...slides,
            ...slides.slice(0, visible),
        ],
        [slides, visible]
    )

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth >= 1024) {
                setVisible(3)
            } else if (window.innerWidth >= 768) {
                setVisible(2)
            } else {
                setVisible(1)
            }
        }

        updateVisible()

        window.addEventListener('resize', updateVisible)

        return () => window.removeEventListener('resize', updateVisible)
    }, [])

    useEffect(() => {
        setCurrentIndex(visible)
    }, [visible])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [visible])

    useEffect(() => {
        if (currentIndex === slides.length + visible) {
            setTimeout(() => {
                setTransition(false)
                setCurrentIndex(visible)
            }, 300)
            setTimeout(() => {
                setTransition(true)
            }, 350)
        }
    }, [currentIndex, slides.length, visible])

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => prev - 1)
    }

    const translateX = -(currentIndex * (100 / visible))

    const handleTransitionEnd = () => {
        if (currentIndex >= visible + slides.length) {
            setTransition(false)
            setCurrentIndex(visible)
            requestAnimationFrame(() => {
                trackRef.current?.offsetWidth
                setTransition(true)
            })
        }

        if (currentIndex < visible) {
            setTransition(false)
            setCurrentIndex(visible + slides.length - 1)
            requestAnimationFrame(() => {
                trackRef.current?.offsetWidth
                setTransition(true)
            })
        }
    }

    return (
        <div className="  " id='about'>
            <div className="max-w-6xl mx-auto md:px-0 px-3 my-10">

                {/* Top Header */}
                {/* Header */}
                <div className="flex items-center justify-center mb-10">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#EAF4FF] to-[#D6E9FF] px-6 py-3 w-[250px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="md:text-[30px] text-2xl text-[#2d2d2d]">
                            About Us
                        </h2>
                    </div>


                    {/* <p className="text-sm md:block hidden text-gray-700">
                        Current position: Home &gt; About Us
                    </p> */}
                </div>


                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Content */}
                    <div className="lg:w-[75%] w-full text-[15px] leading-8 text-[#2f2f2f]">



                        <motion.p
                            interval={{ duration: 0.95, delay: 0.55 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 0.95, delay: 0.55 }}

                            className="mb-8">


                            “M/S. Infineon Engineering Solutions” is operating as an Indenting & Trading Company in Bangladesh since 2009. “M/S. Infineon Engineering Solutions” is formed with a view to supporting and assisting to our valued customer in the industrial sector promptly from both principal and local end. Our team consist of experienced as well as professional sales and service engineer who have long proven track record in the industrial sector.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 0.95, delay: 0.55 }}
                            className="mb-8">
                            Over the years, M/S. Infineon Engineering Solutions has built a strong reputation for delivering reliable engineering solutions, quality products, and exceptional customer support. By maintaining close collaboration with internationally recognized manufacturers and technology partners, we ensure that our clients receive innovative, cost-effective, and sustainable solutions tailored to their specific industrial requirements. Our commitment to excellence, technical expertise, and customer satisfaction has enabled us to establish long-term relationships with organizations across various industries in Bangladesh.

                        </motion.p>


                    </div>

                    {/* Right Image */}
                    <div className="lg:w-[25%] mb-4 lg:mb-0 w-full flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                            alt="Building"
                            className="w-full max-w-[260px] h-[260px] object-cover"
                        />
                    </div>
                </div>
                <div>
                    <section className="lg:pt-10 pt-4 pb-3 border-t-4 border-gray-100">



                        <div className="flex items-center-safe mt-2 gap-8">
                            {/* Left Arrow */}
                            <button
                                onClick={handleNext}
                                aria-label="Previous product"
                                className="w-6 flex-shrink-0 flex items-center justify-center bg-transparent border-none cursor-pointer"
                            >
                                <FaChevronLeft size={28} className="hover:text-blue-900 text-gray-300" strokeWidth={2.5} />
                            </button>

                            {/* Carousel Track */}
                            <div className="flex-1 overflow-hidden">
                                <div
                                    ref={trackRef}
                                    className="flex"
                                    onTransitionEnd={handleTransitionEnd}
                                    style={{
                                        transform: `translateX(${translateX}%)`,
                                        transition: transition ? 'transform 300ms ease-in-out' : 'none',
                                    }}
                                >
                                    {extendedSlides.map((product, i) => (
                                        <div
                                            key={`${product.id}-${i}`}
                                            className="flex-shrink-0 w-full text-center gap-2 flex flex-col justify-center items-center px-4"
                                            style={{ width: `${100 / visible}%` }}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-gray-100 object-contain p-4 rounded-sm transition-transform duration-300"
                                            />
                                            <p className="text-sm mx-2 mt-8 hover:underline hover:text-orange-400 text-gray-600 leading-tight line-clamp-2 cursor-pointer">
                                                {product.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* Right Arrow */}
                            <button
                                onClick={handlePrev}
                                aria-label="Next product"
                                className="w-6 flex-shrink-0 flex items-center justify-center bg-transparent border-none cursor-pointer"
                            >
                                <FaChevronLeft size={28} className="hover:text-blue-900 text-gray-300  rotate-180" strokeWidth={2.5} />
                            </button>
                        </div>
                    </section>
                </div>
                <CooparetiveBrand />
                <CompanyProfile />

            </div>

        </div>
    );
};

export default Infineon;