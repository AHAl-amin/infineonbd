

import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaAngleRight, FaChevronLeft } from 'react-icons/fa'

/* ── Reusable Pill Label ── */
const Pill = ({ children }) => (
    <span className="inline-block bg-gradient-to-r from-lime-400 to-lime-300 rounded-full px-3 py-0.5 text-xs font-bold text-gray-800 mb-2">
        {children}
    </span>
)

const VISIBLE = 3

const products = [
    {
        name: 'Calibrating Machine',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&q=80',
    },
    {
        name: 'HZK-150® Automatic Calibrating Machine',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80',
    },
    {
        name: 'Pulse Vacuum Sterilizer',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&q=80',
    },
    {
        name: 'KGSX10 Liquid Filling & Capping Machine',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=300&q=80',
    },
    {
        name: 'Oil-Free Air Compressor',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=300&q=80',
    },
    {
        name: 'FGC-5090 Automatic Calibrating Machine',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=300&q=80',
    },
]

const newsItems = [
    'Rethinking the Future-New Business Models for Pharma',
    'Who Stands To Gain With FDA Approval Of OTC Lipitor?',
    "Pharma's Wild Ride In China",
    'China Strong Economic Growth & Healthcare Investments Generate Succa...',
    'The China Pharmaceutical Market',
    'Top Emerging Pharmaceutical Markets',
    '5 Stainless Steel BEC drive',
]

export default function Infineon() {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 3000)

        return () => clearInterval(interval)
    }, [currentIndex])

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= products.length - VISIBLE ? 0 : prev + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? products.length - VISIBLE : prev - 1
        )
    }

    const maxShift = products.length - VISIBLE
    const shiftIndex = Math.min(Math.max(currentIndex, 0), maxShift)
    const translateX = -(shiftIndex * (100 / VISIBLE))
    // const translateX = -(currentIndex * (100 / VISIBLE))

    return (
        <div className="font-sans  w-full mx-auto  text-gray-700 p-6">

            {/* ── ABOUT US ── */}
            <section className="">

                <div className="flex justify-between items-start flex-col-reverse lg:flex-row gap-6">
                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px]  text-[#2d2d2d]">
                            About us
                        </h2>
                    </div>

                </div>



                <p className="text-lg leading-relaxed text-gray-600 mb-3 mt-8">
                    <strong className="font-bold text-[#464646] text-justify">INFINEON</strong> is a company recognized for its expertise in pharmaceutical engineering solutions, specializing in end-to-end compliance with cGMP, WHO, USP, EP, and ChP standards. Leveraging extensive  project experience and strategic partnerships, we deliver turnkey pharmaceutical facilities and integrated systems worldwide. Our expertise spans process engineering, advanced equipment manufacturing, clean utilities, and validation services, supported by full lifecycle solutions from master planning and EPC (Engineering, Procurement, Construction) execution to GMP certification and after-sales support. Committed to operational excellence, we empower pharmaceutical manufacturers with scalable, regulation-ready infrastructure and long-term technical collaboration.
                </p>
                <img
                    src="https://res.cloudinary.com/dcpbtzues/image/upload/v1779513135/Screenshot_2026-05-23_111142_poc3zz.png"
                    alt="Pharmaceutical lab scientists in cleanroom"
                    className="w-full object-cover object-top rounded-sm block"
                />
            </section>

            {/* ── PRODUCTS ── */}
            <section className="lg:pt-10 pt-4 pb-3 border-t-4 border-gray-100">

                <div
                    className="bg-gradient-to-b my-10 from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                    }}
                >
                    <h2 className="text-[30px]  text-[#2d2d2d]">
                        Products
                    </h2>
                </div>

                <div className="flex items-center-safe mt-2 gap-8">
                    {/* Left Arrow */}
                    <button
                        onClick={handleNext}
                        aria-label="Previous product"
                        className="w-6 flex-shrink-0 flex items-center justify-center bg-transparent border-none cursor-pointer"
                    >
                        <FaChevronLeft size={48} className="text-lime-600" strokeWidth={2.5} />
                    </button>

                    {/* Carousel Track */}
                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(${translateX}%)` }}
                        >
                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0  text-center flex flex-col "
                                    style={{ width: `${100 / VISIBLE}%` }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={`w-48  h-44  shadow-[0_0_10px_rgba(0,0,0,0.3)] object-cover rounded-sm  bg-gray-100 ${i === currentIndex ? '' : ''
                                            }`}
                                    />
                                    <p className="text-xl mt-10 hover:underline hover:text-orange-400 text-gray-600 leading-tight  line-clamp-2 cursor-pointer">
                                        {product.name}
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
                        <FaChevronLeft size={48} className="text-lime-600  rotate-180" strokeWidth={2.5} />
                    </button>
                </div>
            </section>

            {/* ── NEWS & CONTACT ── */}
            <div className="grid grid-cols-2 mt-10 ">

                {/* News & Events */}
                <section className="p-3 border-r border-gray-200">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px]  text-[#2d2d2d]">
                            New & Events
                        </h2>
                    </div>
                    <ul className="mt-5 space-y-1.5 ">
                        {newsItems.map((item, i) => (
                            <li key={i} className="flex gap-1.5 items-start leading-tight mt-2">
                                <span className="text-lime-500 text-xl flex-shrink-0  font-bold"><FaAngleRight /></span>
                                <a
                                    href="#"
                                    className="text-xl line-clamp-1 border-b pb-1 border-gray-300 text-gray-600 hover:underline hover:text-orange-400 transition-colors leading-tight"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Contact Us */}
                <section className="p-3">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px]  text-[#2d2d2d]">
                            Contact us
                        </h2>
                    </div>

                    <div className=" gap-2.5 items-start mt-2 mb-3">
                        <img
                            src="https://res.cloudinary.com/dcpbtzues/image/upload/v1779517675/Screenshot_2026-05-23_122739_cf3l7l.png"
                            alt="Contact representative"
                            className="mt-4 rounded-xl border-3 border-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.3)] object-cover flex-shrink-0"
                        />
                        <div>
                            <p className="text-xl mt-4 font-bold text-[#76923c] leading-tight">
                                GMPMAX Solutions Corp.
                            </p>
                            <p className="text-[15px] text-gray-500 mt-0.5">Contact Representative</p>
                        </div>
                    </div>

                    <div className="text-[14px] text-gray-600 space-y-1 leading-relaxed">
                        <p>
                            <span className="font-bold text-[#76923c] ">Address:</span> 7/14, New Caoyang Science
                            Building, No. 333 North Muqing Rd, Shanghai
                        </p>
                        <p>
                            <span className="font-bold text-[#76923c] ">Tel:</span> 0086-21-52996290
                        </p>
                        <p>
                            <span className="font-bold text-[#76923c] ">E-mail:</span>{' '}
                            <a href="mailto:bd@gmpmax.com" className=" hover:underline">
                                bd@gmpmax.com
                            </a>
                        </p>
                        <p>
                            <span className="font-bold text-[#76923c] ">Web:</span>{' '}
                            <a href="#" className=" hover:underline">
                                www.infineonbd.com
                            </a>
                        </p>
                    </div>
                </section>

            </div>
        </div>
    )
}