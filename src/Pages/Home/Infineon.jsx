
import { Home } from 'lucide-react';
import logo from '../../../public/img/logo.png';
import HomeSection from './HomeSection';
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaAngleRight, FaChevronLeft } from 'react-icons/fa'
import CooparetiveBrand from './CooparetiveBrand';
import CompanyProfile from './CompanyProfile';
import { motion } from 'framer-motion';
import img1 from '../../../public/img/products/product-1.png'
import img2 from '../../../public/img/products/product-2.png'
import img3 from '../../../public/img/products/product-3.png'
import img4 from '../../../public/img/products/product-4.png'
import img5 from '../../../public/img/products/product-5.png'
import img6 from '../../../public/img/products/product-6.png'
import img7 from '../../../public/img/products/product-7.png'
import img8 from '../../../public/img/products/product-8.png'


const products = [
    {
        name: 'Pharmaceuticals Machinery',
        image: img1,
    },
    {
        name: 'Plastics Machinery & Mould ',
        image: img2,
    },
    {
        name: 'Medical Equipment Machinery ',
        image: img3,
    },
    {
        name: 'Drinking Water Production Line ',
        image: img4,
    },
    {
        name: 'Packaging, Labelling & Printing',
        image: img5,
    },
    {
        name: 'Warehouse Equipment ',
        image: img6,
    },
    {
        name: 'Cleanroom and HVAC System ',
        image: img7,
    },
    {
        name: 'Others Machinery & Equipment',
        image: img8,
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

const Infineon = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(3);

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth >= 1024) {
                setVisible(3); // lg
            } else if (window.innerWidth >= 768) {
                setVisible(2); // md
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
                </div>
                <CooparetiveBrand />
                <CompanyProfile />

            </div>

        </div>
    );
};

export default Infineon;