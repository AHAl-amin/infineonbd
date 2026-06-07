import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import oliullah from "../../../public/img/partner/oliullah.png";
import sajid from "../../../public/img/partner/oliullah.png";


const partners = [
    {
        name: "Eng. Oliullah Monir",
        title: "AI Strategy Partner",
        image: oliullah,
        linkedin: "#",
        instagram: "#",
        facebook: "#",
        x: "#",
    },
    {
        name: "Sajid Khan",
        title: "AI Product Partner",
        image: sajid,
        linkedin: "#",
        instagram: "#",
        facebook: "#",
        x: "#",
    },
];

const CompanyProfile = () => {
    return (
        <div className="w-full mt-6 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">


                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
                        Company Profile
                    </h1>

                    <p className="max-w-3xl mx-auto mt-4 text-slate-600">
                        Meet the core AI partners driving innovation at Infineon BD.
                        Each partner brings a unique combination of strategy,
                        technology, and leadership to deliver world-class solutions.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex justify-center">
                    <div className=" md:flex gap-10 space-y-4 md:space-y-0 ">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: false,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.25,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl w-[300px] sm:w-[350px] lg:w-[350px] cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden flex justify-center">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className=" flex border-b-2 md:h-[350px] h-[300px] border-b-[#D6E9FF] justify-center  transition-transform duration-700 group-hover:scale-101 p-7 rounded-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className=" " />

                                    {/* Social Icons */}
                                    <div
                                        className="
                                          absolute
                                              top-1/2
                                              -translate-y-1/2
                                                 right-[-80px]
                                                   flex
                                                      flex-col
                                                           gap-3
                                                          transition-all
                                                              duration-500
                                                                group-hover:right-5
                                                               "
                                    >
                                        <a
                                            href={partner.linkedin}
                                            className="bg-[#0A66C2] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                                        >
                                            <FaLinkedin size={18} />
                                        </a>

                                        <a
                                            href={partner.instagram}
                                            className="bg-[#E4405F] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                                        >
                                            <FaInstagram size={18} />
                                        </a>

                                        <a
                                            href={partner.facebook}
                                            className="bg-[#1877F2] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                                        >
                                            <FaFacebookF size={18} />
                                        </a>

                                        <a
                                            href={partner.x}
                                            className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                                        >
                                            <FaX size={18} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className=" left-0 w-full p-6">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.3,
                                        }}
                                        className="bg-[#D6E9FF] backdrop-blur-sm rounded-r-full rounded-l-lg py-2 pl-5 pr-12 inline-block"
                                    >
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {partner.name}
                                        </h3>

                                        <p className="text-sm text-slate-600">
                                            {partner.title}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Decorative Border */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompanyProfile;