import React from 'react'

const Unknown = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-10 max-w-sm sm:max-w-md lg:max-w-lg text-center mx-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Error 404
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Page Not Found</p>
        <p className="text-sm sm:text-base text-gray-500">
          Please check the URL
        </p>
      </div>
    </div>
    )
}

export default Unknown