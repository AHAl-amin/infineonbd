'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { FaAngleRight } from 'react-icons/fa'

/* ── Data ── */
const categories = [
    {
        id: 1,
        label: 'Pharma Engineering',
        items: [
            'Clean Room',
            'HVAC System',
            'Water for Pharmaceutical Use',
            'Sanitary Distribution Piping',
            'Solution Formulation System',
            'CIP/SIP System',
            'Control System',
            'Cold Room',
        ],
    },
    {
        id: 2,
        label: 'Pharma Machinery',
        items: [
            'Tablet Production',
            'Capsule Production',
            'Powder Vial Production',
            'Liquid Vial Production',
            'Oral Liquid Production',
            'Eye Drop Production',
            'IV Solution Production',
            'Cream/Ointment Production',
            'Soft Gelatin Production',
            'Pilot Production',
            'Ampoule Production',
        ],
    },
    {
        id: 3,
        label: 'Packaging Machinery',
        items: [
            'Blister Packing Machine',
            'Labeling machine',
            'Cartoning Machine',
            'Sachet Packaging',
            'Tube Filling Machine',
        ],
    },
    {
        id: 4,
        label: 'Utility Service',
        items: [
            'Boiler',
            'Chiller',
            'Air Compressor',
            'Electric Heating/Cooling Machine',
        ],
    },
    {
        id: 5,
        label: 'Spare Parts Service',
        items: [],
    },
]

/* ── Small green square bullet icon ── */
const GreenSquare = () => (
    <span className="inline-flex items-center justify-center w-3.5 h-3.5 bg-lime-500 rounded-sm flex-shrink-0 mr-2">
        <span className="w-1.5 h-1.5 bg-white rounded-sm" />
    </span>
)

/* ── Single Category Block ── */
const CategoryBlock = ({ category, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <div>
            {/* Header row */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center gap-2 px-3 py-2 bg-[#7a7a7a] text-white text-[16px] font-semibold transition-colors duration-150"
            >
                {open ? (
                    <ChevronDown size={13} strokeWidth={2.5} className="flex-shrink-0" />
                ) : (
                    <ChevronRight size={13} strokeWidth={2.5} className="flex-shrink-0" />
                )}
                <span>{category.label}</span>
            </button>

            {/* Items */}
            {open && category.items.length > 0 && (
                <ul className="bg-white">
                    {category.items.map((item, i) => (
                        <li key={i}>
                            <a
                                href="#"
                                className="flex items-center px-3 py-[5px] text-[16px] text-gray-700 hover:underline hover:text-orange-400 transition-colors duration-100 border-b border-gray-100 last:border-b-0"
                            >
                                <div className="flex items-center gap-1 mr-2 text-gray-200 bg-gradient-to-b from-[#76C219] to-[#3B7E00] rounded-sm">
                                    <   FaAngleRight />
                                </div>


                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

/* ── Main Sidebar ── */
const Sidebar = () => {
    return (
        <div className="lg:w-76 w-full h-full shadow-[0_0_10px_rgba(0,0,0,0.3)] border-r-1.5 border-gray-300">
            {/* Title */}
            <div className="bg-gradient-to-b from-[#76C219] to-[#3B7E00] px-5 py-4  ">
                <h2 className="text-white text-xl tracking-wide">Product Category</h2>
            </div>

            {/* Categories */}
            <div className="divide-y divide-gray-200">
                {categories.map((cat, i) => (
                    <CategoryBlock key={cat.id} category={cat} defaultOpen={i < 4} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar