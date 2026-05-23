const Download = () => {

    const downloadItems = [
        'Spare parts available from GMPMAX',
        'GMPMAX Catalogue',
        'FDA guidelines: Non-Penicillin Beta-Lactam Drugs',
        'PIC/S GMP GUIDE for Medicinal Product-Annexes',
        'PIC/S GMP GUIDE for Medicinal Product-Part II',
        'PIC/S GMP GUIDE for Medicinal Product-Part I',
        'PIC/S GMP GUIDE (INTRODUCTION)',
        'FDA Guidance for SUPAC: Mfg Equipment Addendum',
        'Clean Validation for API Manufacturing Plants',
        'WHO Guide to GMP: HVAC for Non Sterile Product',
        'FDA Guidance:API Production',
        'FDA cGMP for combination products',
        'FDA Guidance: Part 11, Electronic Records/Signature',
        'FDA Guidance: PAT',
        'FDA guidance: Process Validation',
        'Quality Systems Approach to cGMP Regulations',
        'FDA Guidance for Industry: Sterile Drug Products',
        'WHO guide to GMP: Water for Pharmaceutical Use',
        'WHO guide to GMP: Part 3 Training',
        'WHO guide to GMP: Part2 Validation',
        'WHO guide to GMP: Part1 SOP and master formulae',
        'FDA101: Product Recalls',
        'WHO Specifications for Pharma Preparations',
        'WHO Guide to GMP: Sterile Product',
        'WHO Guide to GMP: Biological Products',
        'WHO Guide to GMP: Blood Establishment',
        'WHO GMP for PharmaProducts: Main Principles',
    ]

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
                            Download
                        </h2>
                    </div>

                    <p className="text-sm text-gray-600">
                        Current position: Home &gt; Download
                    </p>
                </div>

                {/* DOWNLOAD LIST */}
                <div className="bg-white">

                    {downloadItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300"
                        >
                            <div className="flex items-center justify-between py-3 px-2">

                                {/* LEFT TITLE */}
                                <p
                                    href="#"
                                    className="flex items-center gap-3 text-[18px] text-[#444]  transition-all duration-300"
                                >
                                    <span className="text-lime-500 text-sm">
                                        ❯
                                    </span>

                                    <span>
                                        {item}
                                    </span>
                                </p>

                                {/* DOWNLOAD BUTTON */}
                                <a
                                    href="#"
                                    className="text-lime-600 text-[15px] hover:underline"
                                >
                                    [Download]
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex justify-center items-center gap-2 mt-10">

                    <button className="w-6 h-6 border border-gray-300 text-gray-400 text-sm flex items-center justify-center cursor-not-allowed">
                        &lt;
                    </button>

                    <button className="w-6 h-6 bg-lime-600 text-white text-sm flex items-center justify-center">
                        1
                    </button>

                    <button className="w-6 h-6 border border-gray-300 text-gray-500 text-sm flex items-center justify-center hover:bg-gray-100">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Download