
import logo from '../../../public/img/logo.png';

const About = () => {
    return (
        <div className=" min-h-screen p-6">
            <div className="max-w-7xl mx-auto px-4">

                {/* Top Header */}
                <div className="flex items-center justify-between mb-10">
                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px]  text-[#2d2d2d]">
                            About us
                        </h2>
                    </div>

                    <p className="lg:text-md text-sm text-gray-700">
                        Current position: Home &gt; About us
                    </p>
                </div>

                {/* Content Section */}
                <div>
                    <p className="mb-8">
                        INFINEON dedicated to pharmaceutical industry, is one of the
                        leading suppliers for pharmaceutical engineering and
                        pharmaceutical equipment.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Content */}
                    <div className="lg:w-[75%] w-full text-[15px] leading-8 text-[#2f2f2f]">



                        <p className="mb-8">
                            Our years of experience in international market, longtime
                            cooperation with our reliable suppliers allow us to be today,
                            as in the past, at your side as your ideal partner, to work
                            out ever more demanding requirements of the pharmaceutical
                            industry, not just for integrated equipment but also for large
                            turnkey plants.
                        </p>

                        <p className="mb-8">
                            Following the standard of cGMP, WHO, USP, EP, ChP, we provide
                            most competent and optimum GMP solutions for customers around
                            the world, our supply covers a range of complete production
                            lines, advanced pharma engineering, high quality pharma
                            equipment, utility, cGMP consultancy, cGMP Design, cGMP
                            Validation service etc.
                        </p>


                    </div>

                    {/* Right Image */}
                    <div className="lg:w-[25%] w-full flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                            alt="Building"
                            className="w-full max-w-[260px] h-[260px] object-cover"
                        />
                    </div>
                </div>
                <div className="mb-10">
                    <p>INFINEON, is a Certified Supplier by China Council for the Promotion of International Trade (CCPIT)</p>
                    <p>INFINEON, is a Certified Supplier by China Chamber of International Commerce (CCOIC)</p>
                    <p>
                        INFINEON, is a verified supplier by D&amp;B® Credit Report for
                        INFINEON is available upon request, please consult to D&amp;B.
                    </p>
                </div>

                {/* OEM Qualification */}
                <div className="mb-10">
                    <h3 className="font-bold text-gray-600 mb-3 text-[18px]">
                        OEM Factory Qualification:
                    </h3>

                    <div className="space-y-1">
                        <p>
                            1)Chinese A1, A2 High Pressure Equipment Design Qualification and Manufacturing Qualification. (Vessel Pressures≥99.99 MPa);
                        </p>

                        <p>
                            2)ASME U and ASME S qualification, National Board NB qualification.
                        </p>

                        <p>
                            3)ISO 9001 Qualification, ISO 14001 Qualifications, GB/T28001 Qualification
                        </p>
                    </div>
                </div>

                {/* Quality Mission */}
                <div>
                    <h3 className="font-bold text-gray-600 mb-3 text-[18px]">
                        Quality Mission
                    </h3>

                    <div className="space-y-1">
                        <p>
                            Committed to bring customers most reliable product in performance.
                        </p>

                        <p>
                            Strict Quality Control and Technical Support at all stages ensure total customer satisfaction.
                        </p>

                        <p>
                            High standard GMP supplier audition system to ensure each supplier highly qualified.
                        </p>

                        <p>
                            Internal project management system to ensure timely lead time and order compliance.
                        </p>

                        <p>
                            Prompt after-sales technical assistances to minimum production loss of customer.
                        </p>

                        <p>
                            Constant state of art pharmaceutical technology training to update our knowledge.
                        </p>
                    </div>
                </div>

                {/* Footer Logo */}
                <div className="mt-16">
                    <img src={logo} alt="Logo" className="h-12 w-auto mb-4" />

                    <p className="text-lime-700 font-semibold text-lg">
                        INFINEON, Provides Professional GMP Solutions.
                    </p>

                    <p className="text-lime-700 font-semibold text-lg">
                        INFINEON, Maximizes Your GMP Compliance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;