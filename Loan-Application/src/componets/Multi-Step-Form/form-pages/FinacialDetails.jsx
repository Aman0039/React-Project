import React from 'react'

const FinacialDetails = () => {
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                    Financial Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Employment</label>
                        <input type="text" placeholder="Employment type or company name"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block mb-1">Monthly Income (₹)</label>
                        <input type="number" placeholder="Enter monthly income"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block mb-1">Other Income (₹)</label>
                        <input type="number" placeholder="Enter other income"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FinacialDetails