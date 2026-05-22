
import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-2">
                    Current position: <span className="text-gray-800">Home</span> &gt; <span className="text-gray-800">Contact us</span>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact us</h1>

                {/* Shanghai Office */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">GMPMAX Solutions Corp.</h2>
                    <div className="space-y-1 text-gray-600 text-base">
                        <p>Office Address: 714, New Caoyang Science Building, NO.399 North Nujiang Rd, Shanghai</p>
                        <p>Tel: 0086-21-52996290</p>
                        <p>
                            E-mail: bd@gmpmax.com
                            <span className="text-gray-400 text-sm ml-1">(Please change # to @ when you send mail)</span>
                        </p>
                        <p>Web: www.gmpmax.com</p>
                    </div>
                </div>

                {/* Hong Kong Office */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">GMPMAX INDUSTRY LIMITED</h2>
                    <div className="space-y-1 text-gray-600 text-base">
                        <p>RM 508, 5/F., Wayson Commercial Building, 28 Connaught Road West, Sheung Wan, Hong Kong</p>
                        <p>Tel: 0086-21-52996290</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;