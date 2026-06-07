import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import productsData from '../../data/products.json'

const ProductDetail = () => {
    const { id } = useParams()

    const selectedItem = useMemo(() => {
        for (const category of productsData.categories) {
            const item = category.items.find((product) => product.id === id)
            if (item) {
                return { ...item, category: category.title }
            }
        }
        return null
    }, [id])

    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4">


                <div className="grid gap-8 xl:grid-cols-[1.9fr_1fr]">


                    <aside className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-3xl border border-slate-200 bg-slate-950/5 p-6 shadow-lg shadow-slate-200/30"
                        >
                            {selectedItem ? (
                                <>
                                    <div className="mb-4 flex justify-between">
                                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                                            Selected Product
                                        </span>
                                        <span>
                                            <Link to="/product-services" className="text-blue-500 hover:text-blue-700">
                                                Back 
                                            </Link>
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">{selectedItem.name}</h2>
                                    <p className="mt-2 text-sm text-slate-500">Category: {selectedItem.category}</p>
                                    <p className="mt-6 text-sm leading-7 text-slate-700">{selectedItem.description}</p>
                                    <div className="mt-8 rounded-3xl bg-slate-100 p-4">
                                        <h3 className="text-sm uppercase tracking-[0.24em] text-slate-500">How to use</h3>
                                        <p className="mt-3 text-sm text-slate-600">
                                            Click any product card on the left to instantly load the correct detail panel and keep navigating by ID.
                                        </p>
                                        <p>***Just demo information, please ignore.
                                            comming soon real product details and specifications***
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <h2 className="text-2xl font-semibold text-slate-900">Choose an item</h2>
                                    <p className="mt-3 text-sm text-slate-600">
                                        Select any sub-title from the category cards to open a dedicated product detail page.
                                    </p>
                                    <Link
                                        to="/products"
                                        className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                                    >
                                        Browse all products
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
