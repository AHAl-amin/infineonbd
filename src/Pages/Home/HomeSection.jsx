

import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaAngleRight, FaChevronLeft } from 'react-icons/fa'

/* ── Reusable Pill Label ── */
const Pill = ({ children }) => (
    <span className="inline-block bg-gradient-to-r from-lime-400 to-lime-300 rounded-full px-3 py-0.5 text-xs font-bold text-gray-800 mb-2">
        {children}
    </span>
)




const products = [
    {
        name: 'Pharmaceuticals Machinery',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&q=80',
    },
    {
        name: 'Plastics Machinery & Mould ',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80',
    },
    {
        name: 'Medical Equipment Machinery ',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&q=80',
    },
    {
        name: 'Drinking Water Production Line ',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=300&q=80',
    },
    {
        name: 'Packaging, Labelling & Printing',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=300&q=80',
    },
    {
        name: 'Warehouse Equipment ',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=300&q=80',
    },
    {
        name: 'Cleanroom and HVAC System ',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=300&q=80',
    },
    {
        name: 'Others Machinery & Equipment',
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

export default function HomeSection() {


    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(3);

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth >= 1024) {
                setVisible(3); // lg
            } else if (window.innerWidth >= 768) {
                setVisible(3); // md
            } else {
                setVisible(1); // mobile
            }
        };

        updateVisible();

        window.addEventListener('resize', updateVisible);

        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= products.length - visible ? 0 : prev + 1
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [products.length, visible])

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= products.length - visible ? 0 : prev + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? products.length - visible : prev - 1
        )
    }

    const maxShift = products.length - visible
    const shiftIndex = Math.min(Math.max(currentIndex, 0), maxShift)
    const translateX = -(shiftIndex * (100 / visible))


    return (
        <div className="font-sans  w-full md:mx-auto  text-gray-700 ">


            <section className="">





                <p className="lg:text-lg sm:text-base text-sm leading-relaxed text-gray-600 py-8 roman text-justify ">
                    <strong className="font-bold text-[#464646] ">INFINEON</strong> is a company recognized for its expertise in pharmaceutical engineering solutions, specializing in end-to-end compliance with cGMP, WHO, USP, EP, and ChP standards. Leveraging extensive  project experience and strategic partnerships, we deliver turnkey pharmaceutical facilities and integrated systems worldwide. Our expertise spans process engineering, advanced equipment manufacturing, clean utilities, and validation services, supported by full lifecycle solutions from master planning and EPC (Engineering, Procurement, Construction) execution to GMP certification and after-sales support. Committed to operational excellence, we empower pharmaceutical manufacturers with scalable, regulation-ready infrastructure and long-term technical collaboration.
                </p>
                <img
                    src="https://res.cloudinary.com/dcpbtzues/image/upload/v1779513135/Screenshot_2026-05-23_111142_poc3zz.png"
                    alt="Pharmaceutical lab scientists in cleanroom"
                    className="w-full object-cover object-top rounded-sm block"
                />
            </section>

            {/* ── PRODUCTS ── */}
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
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(${translateX}%)` }}
                        >
                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0  text-center  flex flex-col justify-center items-center "
                                    style={{ width: `${100 / visible}%` }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={` shadow-[0_0_10px_rgba(0,0,0,0.3)] object-cover rounded-sm  bg-gray-100 ${i === currentIndex ? '' : ''
                                            }`}
                                    />
                                    <p className="text-sm mx-2 mt-8 hover:underline hover:text-orange-400 text-gray-600 leading-tight  line-clamp-2 cursor-pointer">
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
                        <FaChevronLeft size={28} className="hover:text-blue-900 text-gray-300  rotate-180" strokeWidth={2.5} />
                    </button>
                </div>
            </section>
            <section className="lg:pt-10 pt-4 pb-3 roman text-lg text-justify">
                <p>
                    Infineon has a very strong foothold and customer base in the Bangladesh. Our core focus is on pharmaceuticals, plastics, food and beverage industries productivity development & technical assistance. It’s our responsibility to provide better experiences to develop productivity for our valuable client. As a technical & trading partner, we encourage each other to grow up and innovate. As a company, we are always trying to share best experiences to plant roots in the communities. Our service and engagement platform is very strength, flexible, and skilled to meet the needs of their business. Even yours...
                </p>
            </section>


        </div>
    )
}