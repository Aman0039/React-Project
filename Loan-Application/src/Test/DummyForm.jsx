import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This Components contains Multi step form.
// By taking the refrence of this components I have to right own form validation code.

const steps = ["Personal Info", "Financial Details", "Document Upload"];

export default function Dummy() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        income: "",
        loanAmount: "",
        document: null,
    });
    const [errors, setErrors] = useState({});

    // --- Validation Logic ---
    const validate = () => {
        const newErrors = {};
        if (step === 0) {
            if (!formData.name.trim()) newErrors.name = "Name is required";
            if (!/^\S+@\S+\.\S+$/.test(formData.email))
                newErrors.email = "Invalid email format";
        } else if (step === 1) {
            if (!formData.income || isNaN(formData.income))
                newErrors.income = "Valid income required";
            if (!formData.loanAmount || isNaN(formData.loanAmount))
                newErrors.loanAmount = "Enter a valid loan amount";
            if (
                formData.income &&
                formData.loanAmount &&
                Number(formData.loanAmount) > 10 * Number(formData.income)
            )
                newErrors.loanAmount = "Loan amount should be ≤ 10× monthly income";
        } else if (step === 2) {
            if (!formData.document) newErrors.document = "Please upload a document";
            else if (formData.document.size > 5 * 1024 * 1024)
                newErrors.document = "File too large (max 5MB)";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) setStep((prev) => prev + 1);
    };

    const handleBack = () => setStep((prev) => prev - 1);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            const file = files[0];
            if (file && file.size > 5 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, document: "File too large (max 5MB)" }));
                setFormData((prev) => ({ ...prev, document: null }));
            } else {
                setErrors((prev) => {
                    const copy = { ...prev };
                    delete copy.document;
                    return copy;
                });
                setFormData((prev) => ({ ...prev, [name]: file }));
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
            setErrors((prev) => {
                const copy = { ...prev };
                delete copy[name];
                return copy;
            });
        }
    };

    // --- Animations ---
    const formVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-900 text-gray-100 shadow-xl rounded-2xl">
            {/* Progress Bar */}
            <div className="flex items-center mb-8">
                {steps.map((label, index) => (
                    <React.Fragment key={label}>
                        <div className="flex flex-col items-center w-24">
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                                    index <= step
                                        ? "bg-blue-500 border-blue-500 text-white shadow"
                                        : "bg-transparent border-gray-700 text-gray-400"
                                }`}
                                aria-current={index === step ? "step" : undefined}
                            >
                                {index + 1}
                            </div>
                            <span
                                className={`mt-2 text-xs text-center ${
                                    index <= step ? "text-blue-400 font-medium" : "text-gray-500"
                                }`}
                            >
                                {label}
                            </span>
                        </div>

                        {index < steps.length - 1 && (
                            <div
                                className={`flex-1 h-0.5 mx-3 rounded ${
                                    index < step ? "bg-blue-500" : "bg-gray-700"
                                }`}
                                aria-hidden
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Form Steps */}
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="step1"
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.35 }}
                    >
                        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1" role="alert">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="mb-4 relative group">
                            <label className="flex mb-2 text-sm font-medium items-center">
                                Email
                                <span className="ml-2 text-gray-400 text-xs">(help)</span>
                                <div className="absolute hidden group-hover:block top-8 left-0 bg-gray-800 border border-gray-700 text-gray-200 text-xs rounded p-2 shadow">
                                    Enter a valid email address (e.g., name@example.com)
                                </div>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1" role="alert">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="step2"
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.35 }}
                    >
                        <h2 className="text-lg font-semibold mb-4">Financial Details</h2>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Monthly Income</label>
                            <input
                                type="number"
                                name="income"
                                value={formData.income}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your income"
                                aria-invalid={!!errors.income}
                            />
                            {errors.income && (
                                <p className="text-red-400 text-sm mt-1" role="alert">
                                    {errors.income}
                                </p>
                            )}
                        </div>
                        <div className="mb-4 relative group">
                            <label className="mb-2 text-sm font-medium flex items-center">
                                Desired Loan Amount
                                <span className="ml-2 text-gray-400 text-xs">(tip)</span>
                                <div className="absolute hidden group-hover:block top-8 left-0 bg-gray-800 border border-gray-700 text-gray-200 text-xs rounded p-2 shadow">
                                    Ensure loan amount ≤ 10 monthly income
                                </div>
                            </label>
                            <input
                                type="number"
                                name="loanAmount"
                                value={formData.loanAmount}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter loan amount"
                                aria-invalid={!!errors.loanAmount}
                            />
                            {errors.loanAmount && (
                                <p className="text-red-400 text-sm mt-1" role="alert">
                                    {errors.loanAmount}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step3"
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.35 }}
                    >
                        <h2 className="text-lg font-semibold mb-4">Upload Documents</h2>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Upload Income Proof</label>
                            <input
                                type="file"
                                name="document"
                                accept=".pdf,.jpg,.png"
                                onChange={handleChange}
                                className="w-full text-sm text-gray-200 file:bg-gray-800 file:border file:border-gray-700 file:text-gray-200 file:rounded file:px-3 file:py-2 bg-gray-900"
                                aria-invalid={!!errors.document}
                            />
                            {formData.document && (
                                <p className="text-gray-400 text-sm mt-2">
                                    Selected: {formData.document.name} • {(formData.document.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            )}
                            {errors.document && (
                                <p className="text-red-400 text-sm mt-1" role="alert">
                                    {errors.document}
                                </p>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm">
                            Accepted: PDF, JPG, PNG — max 5MB
                        </p>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step4"
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.35 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-green-400">
                            🎉 Application Submitted!
                        </h2>
                        <p className="text-gray-300">
                            Thank you — we’ll review your details and get back to you soon.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-8">
                <div>
                    {step > 0 && step < 3 && (
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg hover:bg-gray-700 transition"
                        >
                            Back
                        </button>
                    )}
                </div>

                <div className="ml-auto flex items-center gap-3">
                    {step < 2 && (
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                        >
                            Next
                        </button>
                    )}
                    {step === 2 && (
                        <button
                            onClick={() => {
                                if (validate()) setStep(3);
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}