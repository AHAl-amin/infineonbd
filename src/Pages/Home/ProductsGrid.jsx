import React, { useState } from 'react'
import productsData from '../../data/products.json'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductsGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
        <div className="py-10">
            <div className="max-w-6xl mx-auto lg:px-0 px-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                    {productsData.categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.08 }}
                            className="group relative rounded-2xl border border-slate-200 hover:bg-[#D6E9FF] overflow-hidden shadow-md "

                        >
                            <div className="p-6">
                                <h3
                                    onMouseEnter={() => setSelectedCategory(cat)}
                                    className="text-xl font-semibold text-slate-900 w-fit cursor-pointer border border-slate-300 hover:border-blue-400 rounded-2xl p-2"
                                >
                                    {cat.title}
                                </h3>
                                <p

                                    className="mt-2 text-sm text-slate-500">{cat.items.length} items</p>
                                {/* <button
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    View items
                                </button> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl"
                    >
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">{selectedCategory.title}</h2>
                                <p className="text-sm text-slate-500">{selectedCategory.items.length} items</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedCategory(null)}
                                className="text-slate-500 transition hover:text-slate-900"
                            >
                                Close
                            </button>
                        </div>
                        <div className="max-h-[70vh] overflow-y-auto p-6">
                            <div className="space-y-4">
                                {selectedCategory.items.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/product/${item.id}`}
                                        onClick={() => setSelectedCategory(null)}
                                        className="block rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-blue-400 hover:bg-blue-50"
                                    >
                                        <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>

                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default ProductsGrid
