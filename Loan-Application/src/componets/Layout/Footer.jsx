import React from "react";
import { motion, useInView } from "framer-motion"; // Add useInView import
import { useRef } from "react"; // Add useRef import

// This is Fixed That's Why Add it directly to the App.jsx

const Footer = () => {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, amount: 0.3 });

    return (
        <motion.footer
            ref={footerRef}
            className="w-full bg-linear-to-r from-emerald-100 via-white to-emerald-200 border-t border-emerald-100 py-6 shadow-inner"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
                <motion.div
                    className="w-36 h-1 rounded-full bg-linear-to-r from-emerald-400 to-green-600 mb-2 md:mb-0"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                />

                <div className="flex-1 text-center md:text-left">
                    <motion.p
                        className="text-emerald-900 font-semibold text-sm sm:text-base"
                        initial={{ opacity: 0, y: 6 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                        transition={{ delay: 0.12, duration: 0.5 }}
                    >
                        © 2025 CrediSure All rights reserved.
                    </motion.p>

                    <motion.p
                        className="text-emerald-700 text-xs sm:text-sm mt-1"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.22, duration: 0.5 }}
                    >
                        Providing reliable loan solutions for your needs.
                    </motion.p>
                </div>

                <motion.div
                    className="ml-0 md:ml-6 flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.28, duration: 0.45 }}
                >
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-md animate-pulse" aria-hidden />
                    <span className="text-emerald-600 text-xs hidden sm:inline">Trusted & secure</span>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
