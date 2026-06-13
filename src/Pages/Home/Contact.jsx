
import React from 'react';
import { motion } from 'framer-motion'
import logo from '../../../public/img/logo.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
    return (
        <div className=" max-w-6xl mx-auto  lg:p-0 p-3">
            <div className="w-full">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center mb-10">



                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#EAF4FF] to-[#D6E9FF] px-6 py-3 w-[250px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="md:text-[30px] text-2xl text-[#2d2d2d]">
                            Contact Us
                        </h2>
                    </div>


                </div>
                {/* <div>
                    <img src={logo} alt="Company Logo" className='w-80' />
                </div> */}




                {/* Shanghai Office */}
                <div className="flex lg:flex-row flex-col-reverse gap-4 items-center justify-center ">
                    <div className="my-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 0.95, delay: 0.55 }}

                            className="text-xl font-semibold text-blue-950 ">INFINEON ENGINEERING SOLUTIONS</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 0.95, delay: 0.55 }}
                            className="text-sm text-blue-950 mb-2">(We provide a complete Engineering & Business solution on pharmaceuticals & plastics industries)</motion.p>
                        <div className="space-y-1 text-gray-600 text-base">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.95, delay: 0.55 }}
                            >
                                <span className='text-blue-950 font-bold'>Business Address:</span> House #56 (6th Floor), Road #19
                                (Main Road), Rupnagar, Mirpur, Dhaka-1216, Bangladesh
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.95, delay: 0.55 }}
                            >
                                <span className='text-blue-950 font-bold'>Telephone: </span> +88 02 580 533 51
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.95, delay: 0.55 }}
                            >
                                <span className='text-blue-950 font-bold'>Cell Phone: </span> +88 01714 092663
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.95, delay: 0.55 }}
                            >
                                <span className='text-blue-950 font-bold'>Email:</span> infineon@infineonbd.com
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.95, delay: 0.55 }}
                            >
                                <span className='text-blue-950 font-bold'>Gmail:</span> ies.infineon@gmail.com
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.95, delay: 0.55 }}
                            >
                                <span className='text-blue-950 font-bold'>Website:</span> www.infineonbd.com
                            </motion.p>
                        </div>
                    </div>
                    <div clssName="w-[200px]">
                        <DotLottieReact
                            src="https://lottie.host/6aea4260-27bb-48d0-b71d-0b12ee5bd15e/E2jtFpikEc.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;