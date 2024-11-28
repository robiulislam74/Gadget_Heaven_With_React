import React, { useEffect, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../LocalStorage/LocalStorage';

const Carts = () => {
    // const [product,setProduct]=useState([])
    // const productsAll = useLoaderData()
    // console.log("allData",productsAll)
    const [productAll,setProductAll]=useState([])
    const localId = getStoredCart()

    useEffect(()=>{
        fetch("../Products_All_Data.json")
        .then(res=>res.json())
        .then(data=>setProductAll(data))
    },[])

    const productArr = []
    for(const id of localId){
        console.log(id)
        const cartData = productAll.find(card=>card.product_id == id)
        productArr.push(cartData)
    }
    
    return (
        <div>
        {
            productArr.map(card=>
                <div className="flex items-center justify-between p-8 mb-6 bg-white rounded-lg shadow-md">
            {/* Product Image */}
            <div className='w-52 h-32 rounded-md  overflow-hidden'>
                <img className='w-52 h-32 rounded-md' src={card?.product_image} alt="" />
            </div>
            {/* <div className={`w-52 h-32 rounded-md bg-center bg-cover bg-no-repeat`} 
            style={{ backgroundImage: `url(${card?.product_image})` }}
            ></div> */}

            {/* Product Details */}
            <div className="flex-1 mx-4 space-y-3">
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
            </div>

            {/* Remove Button */}

        </div>
            )
        }
        </div>
    )
}

export default Carts