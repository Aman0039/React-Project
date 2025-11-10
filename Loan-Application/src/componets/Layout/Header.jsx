import React from 'react'
import { BadgeIndianRupee, House, Link } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

// Resuable Header component.

const Header = () => {
    return (

        <>
            <div className="fixed mt-0 w-full z-10   min-h-20 bg-linear-to-tr from-emerald-100 via-white to-emerald-100 h-30">
                <div className='flex flex-col items-center justify-center px-3 py-4'>
                    <BadgeIndianRupee
                        className="w-8 h-8 text-emerald-600 mb-1"
                    />
                    <div className="text-center">
                        <motion.h1
                            id="webName"
                            className="text-2xl font-bold text-emerald-800 mb-2"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            CrediSure
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-8"
                    >
                    </motion.div>
                </div>
            </div>
            {/* <Navbar /> */}
        </>
    )
}

export default Header;