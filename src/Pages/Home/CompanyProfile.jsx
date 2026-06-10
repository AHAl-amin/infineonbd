import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaMobileAlt,
    FaEnvelope,
    FaGoogle,
    FaWeixin,
} from "react-icons/fa";

import oliullah from "../../../public/img/partner/oliullah.png";
import shibly from "../../../public/img/partner/shibly.png";

const partners = [
    {
        name: "A.K.M. Hasan Shibly Chowdhury",
        title: "Managing Partner",
        image: shibly,
        contacts: [
            {
                label: "Telephone",
                value: "+88 02 580 533 51",
                href: "tel:+8800258053351",
                icon: FaPhoneAlt,
                color: "bg-blue-700",
            },
            {
                label: "Cell Phone",
                value: "+8801714 092663",
                href: "tel:+8801714092663",
                icon: FaMobileAlt,
                color: "bg-slate-900",
            },
            {
                label: "Email",
                value: "infineon@infineonbd.com",
                href: "mailto:infineon@infineonbd.com",
                icon: FaEnvelope,
                color: "bg-orange-500",
            },

            {
                label: "WeChat",
                value: "HASANSHIBLY",
                href: "https://web.wechat.com/",
                icon: FaWeixin,
                color: "bg-emerald-500",
            },
        ],
    },
    {
        name: "Engr. Md. Oliullah B.Sc Engineer (EEE)",
        title: "Managing Partner",
        image: oliullah,
        contacts: [
            {
                label: "Telephone",
                value: "+88 02 580 533 51",
                href: "tel:+8800258053351",
                icon: FaPhoneAlt,
                color: "bg-blue-700",
            },
            {
                label: "Cell Phone",
                value: "+8801886 675811",
                href: "tel:+8801886675811",
                icon: FaMobileAlt,
                color: "bg-slate-900",
            },
            {
                label: "Email",
                value: "infineon@infineonbd.com",
                href: "mailto:infineon@infineonbd.com",
                icon: FaEnvelope,
                color: "bg-orange-500",
            },

            {
                label: "WeChat",
                value: "OLIULLAH_MONIR",
                href: "https://web.wechat.com/",
                icon: FaWeixin,
                color: "bg-emerald-500",
            },
        ],
    },
];

const ContactIcon = ({ item }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = item.icon;

    return (
        <div className="relative">
            <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`${item.color} text-white p-3 rounded-full shadow-lg hover:scale-110 transition inline-flex items-center justify-center`}
                aria-label={`${item.label}: ${item.value}`}
            >
                <Icon size={18} />
            </a>
            {hovered && (
                <span className="absolute right-10 top-7  -translate-y-full whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-[8px] text-white shadow-lg">
                    {item.label}: {item.value}
                </span>
            )}
        </div>
    );
};

const CompanyProfile = () => {
    return (
        <div className="w-full mt-6 bg-white">
            <div className="max-w-6xl mx-auto px-4">
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
                                        className=" flex border-b-2 md:h-[350px] h-[300px]  border-b-[#D6E9FF] justify-center  transition-transform duration-700 group-hover:scale-100 p-5 rounded-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className=" " />

                                    {/* Contact Icons */}
                                    <div
                                        className="
                                          absolute
                                              top-1/2
                                              -translate-y-1/2
                                                 right-[-96px]
                                                   flex
                                                      flex-col
                                                           gap-3
                                                          transition-all
                                                              duration-500
                                                                group-hover:right-5
                                                               "
                                    >
                                        {partner.contacts.map((item) => (
                                            <ContactIcon key={item.label} item={item} />
                                        ))}
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
                                        className="bg-gradient-to-r from-[#fefdfd] via-[#EAF4FF] to-[#D6E9FF]  backdrop-blur-sm rounded-r-full w-full rounded-l-lg py-2 pl-5 pr-12 inline-block"
                                    >
                                        <h3 className="text-lg leading-tight font-bold text-slate-900">
                                            {index === 0 ? <p>A.K.M. Hasan Shibly Chowdhury</p> : <p>Engr. Md. Oliullah <br />  B.Sc Engineer (EEE)</p>}
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