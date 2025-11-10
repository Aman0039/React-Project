// This is for create card and render it on the home page add slider.
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TermsCondition from "../../ui/TermsCondition";

const Card = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [disabled, setDisabled] = useState(false);


    const loans = [
        {
            type: "Home Loan",
            img: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
            description:
                "Your dream home is closer than you think! Apply for a Home Loan with minimal paperwork, fast approval, and flexible EMIs designed to fit your budget perfectly.",
        },
        {
            type: "Car Loan",
            img: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
            description:
                "Simplify your car purchase with our quick and transparent Car Loan process. Competitive rates, flexible tenures, and instant online approval — all in one place.",
        },
        {
            type: "Business Loan",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            description:
                "Empower your business growth with our fast and flexible Business Loan. Get quick approvals, minimal documentation, and funding options tailored to your goals.",
        },
        {
            type: "Education Loan",
            img: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
            description:
                "Invest in your future with our affordable Education Loan. Enjoy quick approvals, low interest rates, and flexible repayment options to support your academic goals.",
        },
    ];

    const nextSlide = () => {
        setDisabled(true);
        setDirection(1);
        setIndex((prev) => (prev + 1) % loans.length);
        setTimeout(() => {
            setDisabled(false)
        }, 1000);
    };

    const prevSlide = () => {
        setDisabled(true)
        setDirection(-1);
        setIndex((prev) => (prev - 1 + loans.length) % loans.length);
        setTimeout(() => {
            setDisabled(false)
        }, 1000);
    };

    // Framer Motion Variants for slide animation
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 200 : -200,
            opacity: 0,
            scale: 0.9,
        }),
    };


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);



    return (
        <div className="min-h-screen bg-linear-to-tr from-indigo-100 via-gray-200 to-rose-100 flex flex-col items-center justify-center p-6">

            <h1 className="text-3xl font-semibold text-neutral-900 mb-50">
                Explore Our Loan Options
            </h1>
            <div className="relative w-full max-w-md flex items-center justify-center">
                <AnimatePresence custom={direction}>
                    <motion.div
                        key={loans[index].type}
                        variants={variants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.9 }}
                        className="absolute rounded-2xl shadow-lg p-6 w-full text-center border-2 border-transparent"
                    >
                        <img
                            src={loans[index].img}
                            alt={loans[index].type}
                            className="w-30 h-30 mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {loans[index].type}
                        </h2>
                        <p className="text-gray-700 text-l leading-relaxed mb-4">
                            {loans[index].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Buttons */}
            <div className="relative flex gap-4 mt-50">
                <button
                    disabled={disabled}
                    onClick={prevSlide}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
                >
                    Previous
                </button>
                <button

                    disabled={disabled}
                    onClick={() => {
                        nextSlide();
                    }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
                >
                    Next
                </button>
            </div>

            <p className="mt-6 text-gray-700 text-sm">
                {index + 1} / {loans.length}
            </p>
            <TermsCondition />
        </div>
    );
};

export default Card;