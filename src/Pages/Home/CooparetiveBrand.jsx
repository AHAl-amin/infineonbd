import { motion } from "framer-motion";

import brand1 from '../../../public/img/Cooperative/brand1.png';
import brand2 from '../../../public/img/Cooperative/brand2.png';
import brand3 from '../../../public/img/Cooperative/brand3.png';
import brand4 from '../../../public/img/Cooperative/brand4.png';
import brand5 from '../../../public/img/Cooperative/brand5.png';
import brand6 from '../../../public/img/Cooperative/brand6.png';
import brand7 from '../../../public/img/Cooperative/brand7.png';
import brand8 from '../../../public/img/Cooperative/brand8.png';
import brand9 from '../../../public/img/Cooperative/brand9.png';
import brand10 from '../../../public/img/Cooperative/brand10.png';
import brand11 from '../../../public/img/Cooperative/brand11.png';
import brand12 from '../../../public/img/Cooperative/brand12.png';
import brand13 from '../../../public/img/Cooperative/brand13.png';
import brand14 from '../../../public/img/Cooperative/brand14.png';
import brand15 from '../../../public/img/Cooperative/brand15.png';
import brand16 from '../../../public/img/Cooperative/brand16.png';
import brand17 from '../../../public/img/Cooperative/brand17.png';
import brand18 from '../../../public/img/Cooperative/brand18.png';
import brand19 from '../../../public/img/Cooperative/brand19.png';
import brand20 from '../../../public/img/Cooperative/brand20.png';
import brand21 from '../../../public/img/Cooperative/brand21.png';
import brand22 from '../../../public/img/Cooperative/brand22.png';
import brand23 from '../../../public/img/Cooperative/brand23.png';
import brand24 from '../../../public/img/Cooperative/brand24.png';
import brand25 from '../../../public/img/Cooperative/brand25.png';

const CooparetiveBrand = () => {
    const brands = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7,
        brand8,
        brand9,
        brand10,
        brand11,
        brand12,
        brand13,
        brand14,
        brand15,
        brand16,
        brand17,
        brand18,
        brand19,
        brand20,
        brand21,
        brand22,
        brand23,
        brand24,
        brand25,
    ];

    return (
        <section className="w-full overflow-hidden  py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                    Our Cooperative Partners
                </h2>

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-10 w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 100,
                            ease: "linear",
                            repeat: Infinity,
                            hover: { stopOnHover: true },
                        }}
                    >
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[180px] h-[100px] bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-4"
                            >
                                <img
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default CooparetiveBrand;