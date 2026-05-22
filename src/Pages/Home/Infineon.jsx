'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Infineon = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0)

    const products = [
        {
            name: 'Oil-Free Air Compressor',
            image: 'https://via.placeholder.com/200x150?text=Oil-Free+Compressor'
        },
        {
            name: 'Calibrating Machine',
            image: 'https://via.placeholder.com/200x150?text=Calibrating+Machine'
        },
        {
            name: 'FGC-5090 Automatic Calibrating Machine',
            image: 'https://via.placeholder.com/200x150?text=FGC-5090'
        },
        {
            name: 'Ozone Vacuum Sterilizer',
            image: 'https://via.placeholder.com/200x150?text=Sterilizer'
        }
    ]

    const newsItems = [
        'Outstanding the U-Link Next Business Model for Pharma',
        'Why Silence is Crucial With CBD Approved Drug Listing?',
        'Chemo Biology Corporate: Growth & Abundance Investments Generate Success',
        'Chance to launch Next pharmaceutical battery project',
        'The Other Pharmaceutical Market',
        'Top Enterprise Pharmaceutical Markets'
    ]

    const handlePrev = () => {
        setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* About Us Section */}
            <div className="w-full max-w-6xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <div className="inline-block bg-gradient-to-r from-lime-400 to-lime-300 px-4 py-1 rounded-full">
                        <h2 className="text-sm font-semibold text-gray-800">About us</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* About Text */}
                    <div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            <span className="font-bold">GMPMAX</span> is a company recognized for its expertise in pharmaceutical engineering solutions, specializing in sterilization compliance with cGMP, WHO, USP, EP and CAP standards. Leveraging extensive project experience and strategic partnerships, we deliver robust pharmaceutical facilities and integrated scenario worldwide. Our expertise spans process engineering, advanced equipment manufacturing, clean utilities, and GMP certification and after-sales support. Committed to operational excellence, we empower pharmaceutical manufacturers with scalable, high-performance infrastructure and comprehensive pharmaceutical infrastructure and competent team.
                        </p>
                    </div>

                    {/* About Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://via.placeholder.com/400x300?text=Lab+Scientists"
                            alt="Laboratory scientists working"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="w-full max-w-6xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <div className="inline-block bg-gradient-to-r from-lime-400 to-lime-300 px-4 py-1 rounded-full">
                        <h2 className="text-sm font-semibold text-gray-800">Products</h2>
                    </div>
                </div>

                <div className="relative flex items-center justify-center gap-6">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        variant="outline"
                        size="icon"
                        className="absolute -left-6 lg:left-0 z-10 rounded-full h-10 w-10"
                    >
                        <ChevronLeft className="h-6 w-6 text-lime-500" />
                    </button>

                    {/* Products Carousel */}
                    <div className="flex gap-4 overflow-x-auto px-4 py-4 justify-center w-full">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-48 p-4 text-center transition-all ${index === currentProductIndex ? 'ring-2 ring-lime-400' : ''
                                    }`}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-lg mb-3"
                                />
                                <h3 className="text-xs font-medium text-gray-700 line-clamp-2">
                                    {product.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        variant="outline"
                        size="icon"
                        className="absolute -right-6 lg:right-0 z-10 rounded-full h-10 w-10"
                    >
                        <ChevronRight className="h-6 w-6 text-lime-500" />
                    </button>
                </div>
            </div>

            {/* News & Events and Contact Us Section */}
            <div className="w-full max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* News & Events */}
                    <div>
                        <div className="mb-6">
                            <div className="inline-block bg-gradient-to-r from-lime-400 to-lime-300 px-4 py-1 rounded-full">
                                <h2 className="text-sm font-semibold text-gray-800">News & Events</h2>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {newsItems.map((item, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-lime-500 font-bold text-lg flex-shrink-0 mt-0.5">•</span>
                                    <a
                                        href="#"
                                        className="text-gray-700 text-sm hover:text-lime-600 transition-colors underline"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <div className="mb-6">
                            <div className="inline-block bg-gradient-to-r from-lime-400 to-lime-300 px-4 py-1 rounded-full">
                                <h2 className="text-sm font-semibold text-gray-800">Contact us</h2>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex gap-4 mb-6">
                                <img
                                    src="https://via.placeholder.com/80x80?text=Profile"
                                    alt="Contact person"
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-semibold text-gray-800 text-sm">GMPMAX Solutions Corp.</h3>
                                    <p className="text-xs text-gray-600">Contact Representative</p>
                                </div>
                            </div>

                            <div className="space-y-2 text-xs text-gray-700">
                                <div>
                                    <span className="font-semibold">Address:</span> 1 T.K. New Compound Science Building, No. 666 CheShan Road, Shanghai
                                </div>
                                <div>
                                    <span className="font-semibold">Tel:</span> 0086-21-52996290
                                </div>
                                <div>
                                    <span className="font-semibold">E-mail:</span>{' '}
                                    <a href="mailto:bd@gmpmax.com" className="text-lime-600 hover:underline">
                                        bd@gmpmax.com
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold">Web:</span>{' '}
                                    <a href="#" className="text-lime-600 hover:underline">
                                        www.gmpmax.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infineon
