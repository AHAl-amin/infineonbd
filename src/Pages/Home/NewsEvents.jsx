const NewsEvents = () => {
    const newsItems = [
        '5 Stainless Steel IBC Bins',
        'Rethinking the Future-New Business Models for Pharma',
        'Who Stands To Gain With FDA Approval Of OTC Lipitor?',
        'Pharma\'s Wild Ride In China',
        'Top 10 Medical Breakthroughs in 2013 from Times',
        'China Strong Economic Growth & Healthcare Investments Generate Success for CPhI',
        'China to launch fresh pharmaceutical bribery probe',
        'The China Pharmaceutical Market',
        'Top Emerging Pharmaceutical Markets',
        'Which Popular Drugs Are Going Off-Patent in 2013-2016?',
        'Pharmaceutical Companies Flock to Brazil',
        'The Over-The-Counter Drug Industry',
        'Mexico: growing South America\'s pharmaceutical industry',
        'Emerging Fourth Generation Pharmaceutical Containment Technologies',
        'Bosch launches new vial filling, closing machine',
        'China Pharmaceutical Equipment Industry Report, 2012-2015',
        'New WHO report reveals unequal improvements in health in Europe',
        'GMP Compliance Becomes Prominent Enforcement Issue',
        'New Global Pharmaceutical Outsourcing Trends',
        'Top Biopharma M&A Deals - 2012',
        'FDA Approves Belviq To Treat Some Overweight Or Obese Adults',
        'FDA, TGA, EMA And EDQM Express Common Objectives For Inspections Collaboration',
        'Clinical Trial Outsourcing: Why China?',
        'Continuous Manufacturing, Less Regulation In Pharma Manufacturing\'s Future',
        'FDA, Generics Industry Compromise For User-Fee Agreement',
        'Environmental Pollutants Lurk Long After They "Disappear"',
        'Pfizer Announces Global Research Network',
        'FDA Prompts Removal Of Unapproved Drugs From Market',
    ]

    return (
        <div className="bg-[#f7f7f7] min-h-screen py-10 w-full">
            <div className=" mx-auto px-4">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">

                    <div
                        className="bg-gradient-to-r from-[#d7e58d] to-[#eef3d2] px-6 py-3 w-[260px]"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px] font-semibold text-[#2d2d2d]">
                            News & Events
                        </h2>
                    </div>

                    <p className="text-sm text-gray-700">
                        Current position: Home &gt; News & Events
                    </p>
                </div>

                {/* News List */}
                <div className="bg-white">

                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300"
                        >
                            <a
                                href="#"
                                className={`flex items-center gap-3 py-3 px-2 text-[15px] transition-all duration-300 hover:text-lime-600 ${index === 10
                                    ? 'text-orange-500 underline'
                                    : 'text-[#444]'
                                    }`}
                            >
                                <span className="text-lime-500 text-sm">
                                    ❯
                                </span>

                                <span>
                                    {item}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-10">

                    <button className="w-6 h-6 border border-gray-300 text-gray-500 text-sm flex items-center justify-center hover:bg-gray-100">
                        &lt;
                    </button>

                    <button className="w-6 h-6 bg-lime-600 text-white text-sm flex items-center justify-center">
                        1
                    </button>

                    <button className="w-6 h-6 border border-gray-300 text-gray-600 text-sm flex items-center justify-center hover:bg-gray-100">
                        2
                    </button>

                    <button className="w-6 h-6 border border-gray-300 text-gray-500 text-sm flex items-center justify-center hover:bg-gray-100">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsEvents