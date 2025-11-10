import React from 'react'

const PersonalDetails = () => {
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                    Personal Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Full Name</label>
                        <input type="text" placeholder="Enter your full name"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input type="email" placeholder="Enter your email"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block mb-1">Phone</label>
                        <input type="tel" placeholder="Enter your phone number"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block mb-1">Date of Birth</label>
                        <input type="date"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block mb-1">Address</label>
                        <input type="text" placeholder="Address line 1"
                            className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 focus:ring-2 focus:ring-emerald-500" />
                        <input type="text" placeholder="Address line 2"
                            className="w-full bg-gray-700 text-white p-2 rounded-md mb-2 focus:ring-2 focus:ring-emerald-500" />
                        <div className="grid md:grid-cols-3 gap-2">
                            <input type="text" placeholder="City"
                                className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                            <input type="text" placeholder="State"
                                className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                            <input type="text" placeholder="ZIP Code"
                                className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1">ID Type</label>
                        <select className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500">
                            <option value="">Select ID Type</option>
                            <option value="Aadhar">Aadhar Card</option>
                            <option value="Pan">PAN Card</option>
                            <option value="DL">Driving License</option>
                            <option value="Voter">Voter ID</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1">ID Number</label>
                        <input type="text" placeholder="Enter ID number"
                            className="w-full bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-emerald-500" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonalDetails