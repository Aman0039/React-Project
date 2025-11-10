import React from 'react'

const LoanDetails = () => {
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                    Loan Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Loan Type</label>
                        <select className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500">
                            <option value="">Select loan type</option>
                            <option value="Personal">Personal Loan</option>
                            <option value="Home">Home Loan</option>
                            <option value="Car">Car Loan</option>
                            <option value="Education">Education Loan</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1">Loan Amount (₹)</label>
                        <input type="number" placeholder="Enter loan amount"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block mb-1">Tenure (Months)</label>
                        <input type="number" placeholder="Enter tenure"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoanDetails