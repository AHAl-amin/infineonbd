
import React from 'react'
import { motion } from 'framer-motion'
const Careers = () => {
    return (
        <div className=" min-h-screen py-10">
            <div className="max-w-6xl mx-auto ">

                {/* HEADER */}
                <div className="flex items-center justify-center mb-10">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#EAF4FF] to-[#D6E9FF] px-6 py-3 w-[250px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="md:text-[30px] text-2xl text-[#2d2d2d]">
                            Careers
                        </h2>
                    </div>


                </div>

                {/* CONTENT */}
                <div className="text-[15px] leading-8 text-[#333]">
<div className="flex lg:flex-row flex-col gap-10 items-center justify-between ">
    
                 <div className="lg:w-1/2 w-full">
                       <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.95, delay: 0.55 }}
                        className="mb-8 text-[]16px] text-gray-600">
                        INFINEON is a fully integrated pharmaceutical technology service company,
                        leading the market and help customer GMP development. Throughout our
                        history, we have continued to grow and expand into new and existing
                        markets. Our growth has been the result of our customers success through
                        the dedicated and professional approach of our employees who always act
                        positively. Working at INFINEON is not only about a job – it’s an extension
                        to your family and friends, a desire to provide the finest and succeed,
                        to work as one and as part of a universal team, striving to be the best
                        that you can be.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.95, delay: 0.55 }}
                        className="mb-8 text-[]16px] text-gray-600">
                        To maintain our success, we are always looking for talented, open-minded
                        and flexible individuals with fluency in English, Russian, Portuguese,
                        Arabic, Spanish etc., if you are an experienced sales person, a qualified
                        service technician or highly motivated administrator who is both customer
                        and service oriented, then joining our team could be the best move of your life.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.95, delay: 0.55 }}
                        className="mb-10 text-[16px] text-gray-600">
                        INFINEON is an equal opportunity employer and places a high value on its
                        people and their ideas. To begin your new lease on life in an international
                        atmosphere, working at home or abroad. The opportunity awaits you.
                    </motion.p>
                 </div>

                  <div className="lg:w-1/2 w-full">
                      {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.95, delay: 0.55 }}
                        className="mb-10">
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
                            alt="Team Work"
                            className="w-full  h-auto object-cover rounded-lg"
                        />
                    </motion.div>
                  </div>
</div>

                    {/* FOOTER TEXT */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.95, delay: 0.55 }}
                        className=" text-[]16px] text-gray-600">
                        Please send your resume to
                        {' '}
                        <span className="text-lime-700 font-medium">
                            hr@infineonbd.com
                        </span>
                        {' '}
                        (please change # to @), our HR and management team will evaluate your
                        resume and contact with you in soonest.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default Careers