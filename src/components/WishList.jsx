import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'

const WishList = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>

            {/* Product Details */}
            <div className="flex-1 mx-4 space-y-3">
                <div className='flex justify-between items-center'>
                    <h2 className="text-lg font-semibold text-gray-800">name of tile</h2>
                    <button className="text-red-400 text-4xl hover:bg-red-200 rounded-full">
                        <TiDeleteOutline />
                    </button>
                </div>
                <p className="text-sm text-gray-500">
                    Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
                </p>
                <p className="mt-2 text-lg font-medium text-gray-900">Price: $999.99</p>
            </div>

        </div>
    )
}

export default WishList