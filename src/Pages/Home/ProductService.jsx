import React, { useState } from 'react'

const ProductService = () => {

    const products = [
        {
            id: 1,
            title: 'KCZP Ultrasonic Bottle Washing Machine',
            image: 'https://i.ibb.co.com/Qj8n1Dq/product-1.jpg',
        },
        {
            id: 2,
            title: 'KQCL Vertical Ultrasonic Washing Machine',
            image: 'https://i.ibb.co.com/3s6Kk5m/product-2.jpg',
        },
        {
            id: 3,
            title: 'Ultrasonic Rotary Washing Machine',
            image: 'https://i.ibb.co.com/0Fv6s5W/product-3.jpg',
        },
        {
            id: 4,
            title: 'DYG Series Large Volume Liquid Filling Machine',
            image: 'https://i.ibb.co.com/1vL1V9S/product-4.jpg',
        },
        {
            id: 5,
            title: 'KSZ Sterilizing & Drying Tunnel',
            image: 'https://i.ibb.co.com/Wf9d8yy/product-5.jpg',
        },
        {
            id: 6,
            title: 'Modular Clean Room',
            image: 'https://i.ibb.co.com/JzPjR4P/product-6.jpg',
        },
        {
            id: 7,
            title: 'KBG Antibiotic Vial Filling and Sealing Machine',
            image: 'https://i.ibb.co.com/fkP5sVn/product-7.jpg',
        },
        {
            id: 8,
            title: 'Auger Filling & Stoppering Machine',
            image: 'https://i.ibb.co.com/tHkR8Zm/product-8.jpg',
        },
        {
            id: 9,
            title: 'Antibiotic Vials Auger Filling Machine',
            image: 'https://i.ibb.co.com/4d6M2xP/product-9.jpg',
        },
        {
            id: 10,
            title: 'Clean Room Partitions and Ceilings',
            image: 'https://i.ibb.co.com/nC3dQ1P/product-10.jpg',
        },
        {
            id: 11,
            title: 'KGSX10 Liquid Filling & Capping Machine',
            image: 'https://i.ibb.co.com/4t5yK9h/product-11.jpg',
        },
        {
            id: 12,
            title: 'Panel Profile',
            image: 'https://i.ibb.co.com/0jP2rKX/product-12.jpg',
        },
        {
            id: 13,
            title: 'KGL120 Roller Capping Machine',
            image: 'https://i.ibb.co.com/F3m3T5Q/product-13.jpg',
        },
        {
            id: 14,
            title: 'VHP Sterilization Chamber',
            image: 'https://i.ibb.co.com/WcWm5ZL/product-14.jpg',
        },
        {
            id: 15,
            title: 'CRABS - Closed Restricted Access Barrier System',
            image: 'https://i.ibb.co.com/2nkM9Vy/product-15.jpg',
        },
        {
            id: 16,
            title: 'ORABS Open Restricted Access Barrier System',
            image: 'https://i.ibb.co.com/ZM0K2nB/product-16.jpg',
        },
    ]

    // PAGINATION
    const itemsPerPage = 16
    const totalPages = 8

    const [currentPage, setCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const currentProducts = products.slice(startIndex, endIndex)

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className=" min-h-screen p-6">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px]  text-[#2d2d2d]">
                            Product & Service
                        </h2>
                    </div>

                    <p className="text-sm text-gray-600">
                        Current position: Home &gt; Product & Service
                    </p>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-300 p-3 hover:shadow-md transition-all duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-[180px] object-cover hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            <h3 className="text-center text-[14px] text-[#444] mt-4 leading-6 min-h-[55px]">
                                {product.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex justify-center items-center gap-2 mt-12">

                    {/* PREV */}
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`w-6 h-6 border text-sm flex items-center justify-center ${currentPage === 1
                            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        &lt;
                    </button>

                    {/* PAGE NUMBERS */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-6 h-6 text-sm flex items-center justify-center border ${currentPage === page
                                ? 'bg-lime-600 text-white border-lime-600'
                                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* NEXT */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`w-6 h-6 border text-sm flex items-center justify-center ${currentPage === totalPages
                            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductService