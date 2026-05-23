
import React from 'react';
import logo from '../../../public/img/logo.png';

const Contact = () => {
    return (
        <div className=" min-h-screen md:p-6 p-3">
            <div className="w-full">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between mb-10">

                    <div
                        className="bg-gradient-to-b from-[#FFFFFF] via-[#DDEFD2] to-[#C8E3BA] px-6 py-3 w-[300px] rounded-bl-2xl"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                        }}
                    >
                        <h2 className="text-[30px]  text-[#2d2d2d]">
                            Contact us
                        </h2>
                    </div>

                    <p className="text-sm text-gray-600 md:block hidden">
                        Current position: Home &gt; Contact us
                    </p>
                </div>
                <div>
                    <img src={logo} alt="Company Logo" className='w-80' />
                </div>




                {/* Shanghai Office */}
                <div className="my-8">
                    <h2 className="text-xl font-semibold text-lime-500 mb-3">INFINEON Solutions Corp.</h2>
                    <div className="space-y-1 text-gray-600 text-base">
                        <p><span className='text-lime-500 font-bold'>Office Address:</span> 714, New Caoyang Science Building, NO.399 North Nujiang Rd, Shanghai</p>
                        <p><span className='text-lime-500 font-bold'>Phone:</span> 0086-21-52996290</p>
                        <p>
                            <span className='text-lime-500 font-bold'>Email:</span> bd@infineonbd.com
                            <span className="text-gray-400 text-sm ml-1">(Please change # to @ when you send mail)</span>
                        </p>
                        <p><span className='text-lime-500 font-bold'>Web:</span> www.infineonbd.com</p>
                    </div>
                </div>

                {/* Hong Kong Office */}
                <div>
                    <h2 className="text-xl font-semibold text-lime-500 mb-3">INFINEON INDUSTRY LIMITED</h2>
                    <div className="space-y-1 text-gray-600 text-base">
                        <p><span className='text-lime-500 font-bold'>Office Address:</span> RM 508, 5/F., Wayson Commercial Building, 28 Connaught Road West, Sheung Wan, Hong Kong</p>
                        <p><span className='text-lime-500 font-bold'>Tel:</span> 0086-21-52996290</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;