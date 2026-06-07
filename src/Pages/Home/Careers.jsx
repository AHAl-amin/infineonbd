const Careers = () => {
    return (
        <div className=" min-h-screen md:p-6 p-3">
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
                            Careers
                        </h2>
                    </div>

                    <p className="text-sm md:block hidden text-gray-600">
                        Current position: Home &gt; Careers
                    </p>
                </div>

                {/* CONTENT */}
                <div className="text-[15px] leading-8 text-[#333]">

                    <p className="mb-8 text-[]16px] text-gray-600">
                        INFINEON is a fully integrated pharmaceutical technology service company,
                        leading the market and help customer GMP development. Throughout our
                        history, we have continued to grow and expand into new and existing
                        markets. Our growth has been the result of our customers success through
                        the dedicated and professional approach of our employees who always act
                        positively. Working at INFINEON is not only about a job – it’s an extension
                        to your family and friends, a desire to provide the finest and succeed,
                        to work as one and as part of a universal team, striving to be the best
                        that you can be.
                    </p>

                    <p className="mb-8 text-[]16px] text-gray-600">
                        To maintain our success, we are always looking for talented, open-minded
                        and flexible individuals with fluency in English, Russian, Portuguese,
                        Arabic, Spanish etc., if you are an experienced sales person, a qualified
                        service technician or highly motivated administrator who is both customer
                        and service oriented, then joining our team could be the best move of your life.
                    </p>

                    <p className="mb-10 text-[]16px] text-gray-600">
                        INFINEON is an equal opportunity employer and places a high value on its
                        people and their ideas. To begin your new lease on life in an international
                        atmosphere, working at home or abroad. The opportunity awaits you.
                    </p>

                    {/* IMAGE */}
                    <div className="mb-10">
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
                            alt="Team Work"
                            className="w-full max-w-[460px] h-auto object-cover rounded-lg"
                        />
                    </div>

                    {/* FOOTER TEXT */}
                    <p className=" text-[]16px] text-gray-600">
                        Please send your resume to
                        {' '}
                        <span className="text-lime-700 font-medium">
                            hr@infineonbd.com
                        </span>
                        {' '}
                        (please change # to @), our HR and management team will evaluate your
                        resume and contact with you in soonest.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Careers