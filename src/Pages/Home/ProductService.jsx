import React, { useState } from 'react'
import img1 from '../../../public/img/products/product-1.png'
import img2 from '../../../public/img/products/product-2.png'
import img3 from '../../../public/img/products/product-3.png'
import img4 from '../../../public/img/products/product-4.png'
import img5 from '../../../public/img/products/product-5.png'
import img6 from '../../../public/img/products/product-6.png'
import img7 from '../../../public/img/products/product-7.png'
import img8 from '../../../public/img/products/product-8.png'

import ProductDetail from './ProductDetail'
import ProductsGrid from './ProductsGrid'



const ProductService = () => {

    const products = [
        {
            id: 1,
            title: 'Pharmaceuticals Machinery ',
            image: img1,
        },
        {
            id: 2,
            title: 'Plastics Machinery & Mould ',
            image: img2,
        },
        {
            id: 3,
            title: 'Medical Equipment Machinery',
            image: img3,
        },
        {
            id: 4,
            title: 'Drinking Water Production Line ',
            image: img4,
        },
        {
            id: 5,
            title: 'Packaging, Labelling & Printing ',
            image: img5,
        },
        {
            id: 6,
            title: 'Cleanroom and HVAC System ',
            image: img6,
        },
        {
            id: 7,
            title: 'Warehouse Equipment ',
            image: img7,
        },
        {
            id: 8,
            title: 'Others Machinery & Equipment',
            image: img8,
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
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="flex items-center justify-center mb-10">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#EAF4FF] to-[#D6E9FF] px-6 py-3 lg:w-[300px] w-[250px] rounded-bl-2xl "
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="md:text-[30px] text-xl text-[#2d2d2d]">
                            Product & Service
                        </h2>
                    </div>


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

                <div>
                    <div className='max-w-4xl roman'>
                        <p className='md:text-xl text-lg'>We are offering & supplying almost all kinds of machinery required in Pharmaceuticals, Plastics, Food and Beverage Industries at competitive price from China mostly and Taiwan. </p>
                        <p className='font-semibold md:text-2xl text-xl mt-2'>Our range of machinery that covers the following: </p>
                    </div>
                    <ProductsGrid />
                </div>


            </div>
        </div>
    )
}

export default ProductService