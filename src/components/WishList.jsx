import React, { useEffect, useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { getStoredWishList, saveToLocalStrCart } from '../LocalStorage/LocalStorage'

const WishList = () => {

    const [productAll, setProductAll] = useState([])
    const localId = getStoredWishList()

    useEffect(() => {
        fetch("../Products_All_Data.json")
            .then(res => res.json())
            .then(data => setProductAll(data))
    }, [])

    const productArr = []
    for (const id of localId) {
        const wishlistData = productAll.find(wishList => wishList.product_id == id)
        productArr.push(wishlistData)
    }

    const handleAddToCart = (product_id) => {
        saveToLocalStrCart(product_id)
    }


    return (
        <div>
            <div className='flex justify-between items-center my-8'>
                <h3 className='text-2xl font-bold'>WishList</h3>
            </div>
            {
                productArr.map((card, idx) =>
                    <div key={idx} className="flex items-center justify-between p-8 mb-6 bg-white rounded-lg shadow-md">
                        {/* Product Image */}
                        {/* <div className='w-52 h-32 rounded-md  overflow-hidden'>
                <img className='w-52 h-32 rounded-md' src={card?.product_image} alt="" />
            </div> */}
                        <div className={`w-52 h-32 rounded-md bg-center bg-cover bg-no-repeat`}
                            style={{ backgroundImage: `url(${card?.product_image})` }}
                        ></div>

                        {/* Product Details */}
                        <div className="flex-1 mx-4 space-y-[6px]">
                            <div className='flex justify-between items-center'>
                                <h2 className="text-lg font-semibold text-gray-800">{card?.product_title}</h2>
                                <button className="text-red-400 text-4xl hover:bg-red-200 rounded-full">
                                    <TiDeleteOutline />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">
                                {card?.description}
                            </p>
                            <p className="mt-2 text-lg font-medium text-gray-900">Price: ${card?.price}</p>
                            <button onClick={() => handleAddToCart(card.product_id)} className="px-4 py-2 bg-bannerBg border-none font-medium rounded-full text-white">Add To Card</button>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default WishList