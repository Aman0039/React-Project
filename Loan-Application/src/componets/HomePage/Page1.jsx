import { BadgeIndianRupee } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// This Page Contains Mostly Home Page Items or Entry Points.

const Page1 = () => {

    const navigate = useNavigate() 

    const handleClick = ()=> {
        navigate("/applicant-form")
    }

    const clickToDashboard = ()=> {
        navigate("dashboard")
    }

    return (
        <>
            <div className="min-h-screen bg-linear-to-r from-emerald-100 via-white to-emerald-50 h-screen flex flex-col items-center justify-center px-4 py-16">
                
                <BadgeIndianRupee
                    className="w-16 h-16 text-emerald-600 mb-4"
                />
                <div className="text-center">
                    <motion.h1
                        id="webName"
                        className="text-6xl font-bold text-emerald-800 mb-3"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        CrediSure
                    </motion.h1>
                    <motion.p
                        className="text-2xl text-gray-700 mb-4 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Your Trusted Partner in Financial Growth
                    </motion.p>
                    <motion.p
                        className="text-xl text-gray-600 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Quick Approvals • Competitive Rates • Hassle-free Process
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8"
                >
                    <button
                        onClick={() => handleClick()}
                        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <span className="text-lg font-medium">Apply For Loan</span>
                        <BadgeIndianRupee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </button>
                    <button
                        onClick={() => clickToDashboard()}
                        className="group flex items-center gap-2 hover:bg-emerald-100 text-gray-700 mt-20 px-6 py-3 rounded-lg transition-all duration-800 transform hover:scale-105 shadow-lg">
                        <span className="text-lg font-medium">Go to Dashboard ➡️</span>
                    </button>
                </motion.div>
            </div>
        </>
    );
};

export default Page1;