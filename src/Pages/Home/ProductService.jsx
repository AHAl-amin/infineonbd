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

import ProductDetail from './ProductDetail'
import ProductsGrid from './ProductsGrid'



const ProductService = () => {

    const products = [
        {
            id: 1,
            title: 'Pharmaceuticals Machineries ',
            image: img1,
        },
        {
            id: 2,
            title: '⁠Purified Water Generation & Distribution System',
            image: img2,
        },
        {
            id: 3,
            title: 'Plastics Machineries',
            image: img3,
        },
        {
            id: 4,
            title: 'Plastics Moulds ',
            image: img4,
        },
        {
            id: 5,
            title: 'Medical Equipments Machineries ',
            image: img5,
        },
        {
            id: 6,
            title: 'Drinking Water Production Machineries ',
            image: img6,
        },
        {
            id: 7,
            title: 'Packaging, Printing & Labelling Machineries ',
            image: img7,
        },
        {
            id: 8,
            title: 'Cleanroom and HVAC System',
            image: img8,
        },
        {
            id: 9,
            title: 'Warehouse Equipments',
            image: img9,
        },
        {
            id: 10,
            title: 'Others Machineries & Equipments',
            image: img10,
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
        <div className=" min-h-screen md:py-6">
            <div className="max-w-6xl mx-auto lg:px-0 px-3">

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
                                    className="w-full h-[100px]  object-contain transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-center text-[16px] text-[#444] mt-4 leading-6 min-h-[55px] transition-all duration-300 group-hover:text-orange-400 group-hover:underline">
                                {product.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-blue-800 font-semibold">What we supply</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Machinery, Spares & Parts with fast delivery</h3>
                            </div>

                            <p className="md:text-xl text-lg text-slate-700 leading-relaxed">
                                We offer and supply all essential machinery for Pharmaceuticals, Plastics, Food and Beverage industries at competitive prices. Our machines are sourced from trusted partners in China and Taiwan, with flexible local payment options and fast delivery for your existing plant requirements.
                            </p>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                                    <h4 className="text-lg font-semibold text-slate-900">Complete Spares Supply</h4>
                                    <p className="text-sm text-slate-600 mt-2">
                                        Consumable spares and electronic parts from any brand or origin, matched to your installed equipment.
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                                    <h4 className="text-lg font-semibold text-slate-900">Short lead time</h4>
                                    <p className="text-sm text-slate-600 mt-2">
                                        Rapid sourcing from China with support for your local payment policy, helping minimize downtime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="font-semibold md:text-2xl text-xl text-slate-900">
                        Our range of machinery that covers the following:
                    </p>

                    <ProductsGrid />

                    <div className="rounded-3xl border border-slate-200 bg-white p-8  mb-3 shadow-sm">
                        <div className="max-w-4xl space-y-4 ">
                            <p className="md:text-xl text-lg text-slate-700 leading-relaxed">


                                Also, we supply any essential, consumable Spares & electronic parts/components (any brand  from any origin) of your existing machines from China end within very shortest possible time under your company local payment policy.
                            </p>
                            <p className="font-semibold md:text-xl text-xl text-slate-900">
                                We will be highly pleased if you check the attached at a glance in order to check our credibility & forward us your valuable any inquiry for Machinery & Spares that may require in your existing plant.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductService