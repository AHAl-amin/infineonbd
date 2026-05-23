import React, { useState } from 'react'
import img1 from '../../../public/img/products/product-1.png'
import img2 from '../../../public/img/products/product-2.png'
import img3 from '../../../public/img/products/product-3.png'
import img4 from '../../../public/img/products/product-4.png'
import img5 from '../../../public/img/products/product-5.png'
import img6 from '../../../public/img/products/product-6.png'
import img7 from '../../../public/img/products/product-7.png'
import img8 from '../../../public/img/products/product-8.png'
import img9 from '../../../public/img/products/product-9.png'
import img10 from '../../../public/img/products/product-10.png'
import img11 from '../../../public/img/products/product-11.png'
import img12 from '../../../public/img/products/product-12.png'
import img13 from '../../../public/img/products/product-13.png'
import img14 from '../../../public/img/products/product-14.png'
import img15 from '../../../public/img/products/product-15.png'
import img16 from '../../../public/img/products/product-16.png'


const ProductService = () => {

    const products = [
        {
            id: 1,
            title: 'KCZP Ultrasonic Bottle Washing Machine',
            image: img1,
        },
        {
            id: 2,
            title: 'KQCL Vertical Ultrasonic Washing Machine',
            image: img2,
        },
        {
            id: 3,
            title: 'Ultrasonic Rotary Washing Machine',
            image: img3,
        },
        {
            id: 4,
            title: 'DYG Series Large Volume Liquid Filling Machine',
            image: img4,
        },
        {
            id: 5,
            title: 'KSZ Sterilizing & Drying Tunnel',
            image: img5,
        },
        {
            id: 6,
            title: 'Modular Clean Room',
            image: img6,
        },
        {
            id: 7,
            title: 'KBG Antibiotic Vial Filling and Sealing Machine',
            image: img7,
        },
        {
            id: 8,
            title: 'Auger Filling & Stoppering Machine',
            image: img8,
        },
        {
            id: 9,
            title: 'Antibiotic Vials Auger Filling Machine',
            image: img9,
        },
        {
            id: 10,
            title: 'Clean Room Partitions and Ceilings',
            image: img10,
        },
        {
            id: 11,
            title: 'KGSX10 Liquid Filling & Capping Machine',
            image: img11,
        },
        {
            id: 12,
            title: 'Panel Profile',
            image: img12,
        },
        {
            id: 13,
            title: 'KGL120 Roller Capping Machine',
            image: img13,
        },
        {
            id: 14,
            title: 'VHP Sterilization Chamber',
            image: img14,
        },
        {
            id: 15,
            title: 'CRABS - Closed Restricted Access Barrier System',
            image: img15,
        },
        {
            id: 16,
            title: 'ORABS Open Restricted Access Barrier System',
            image: img16,
        },
    ]

    // PAGINATION
    const itemsPerPage = 12
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
        <div className=" min-h-screen md:p-6 p-3">
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

                    <p className="text-sm md:block hidden text-gray-600">
                        Current position: Home &gt; Product & Service
                    </p>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="p-3 group cursor-pointer"
                        >
                            <div className="overflow-hidden bg-white py-2 shadow-[0_0_6px_rgba(0,0,0,0.3)]  transition-all duration-300 group-hover:shadow-[0_0_14px_rgba(0,0,0,0.45)]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full max-h-[100px] object-contain transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-center text-[16px] text-[#444] mt-4 leading-6 min-h-[55px] transition-all duration-300 group-hover:text-orange-400 group-hover:underline">
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