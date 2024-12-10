import React, { useEffect, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCart } from '../LocalStorage/LocalStorage';
import { FaSortAmountDown } from 'react-icons/fa';
import modalIcon from '../assets/images/Group.png'

const Carts = () => {
    const [productAll, setProductAll] = useState([])
    const [productSortArr, setProductSortArr] = useState(null)
    const [tapPrice, setTapPrice] = useState('')
    // const [productArr,setProductArr] = useState([])
    const [show, setShow] = useState(false)
    const [condition,setCondition] = useState(false)
    const localId = getStoredCart()
    const navigate = useNavigate()

    useEffect(() => {
        fetch("../Products_All_Data.json")
            .then(res => res.json())
            .then(data => setProductAll(data))
    }, [])

    const productArr = []
    for (const id of localId) {
        const cartData = productAll.find(card => card.product_id == id)
        productArr.push(cartData)
    }

    const handleSortByPriceBtn = () => {
        setShow(true)
        const sortProduct = productArr.sort(function (a, b) {
            return b.price - a.price
        })
        setProductSortArr(sortProduct)
    }

    const priceArr = []
    const productPrice = productArr?.map(newProduct => {
        priceArr.push(newProduct?.price)
    })

    let newPrice = 0
    for (const price of priceArr) {
        newPrice = newPrice + price
    }

    const handlePurchaseBtn = () => {
        setCondition(true)
        setTapPrice(newPrice)
        setProductSortArr([])
        document.getElementById('my_modal_5').showModal()
        localStorage.removeItem('cart')
    }


    return (
        <div>
            <div className='flex justify-between items-center my-8'>
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className='flex gap-x-4 items-center'>
                    <p className='text-2xl font-bold'>Total Cost : $ {newPrice.toFixed(2)}</p>
                    <button onClick={handleSortByPriceBtn} className="btn btn-outline btn-primary rounded-full">Sort by Price <FaSortAmountDown /> </button>
                    {
                        newPrice == 0
                        ?
                        <button disabled onClick={handlePurchaseBtn} className="btn btn-outline btn-primary rounded-full">Purchase</button>
                        :
                        <button onClick={handlePurchaseBtn} className="btn btn-outline btn-primary rounded-full">Purchase</button>
                    }
                </div>
                {/* Modal */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-center p-10">
                        <img src={modalIcon} className='mx-auto' alt="" />
                        <h3 className="font-bold text-2xl pt-3">Payment Successfully</h3>
                        <div className="divider"></div>
                        <div className='pt-4'>
                        <p>Thanks for purchasing</p>
                        <p>Total Price : ${condition?tapPrice.toFixed(2):newPrice.toFixed(2)}</p>
                        </div>
                        <div className="modal-action justify-center">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={()=>navigate('/')} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
            {/* (condition?[]:(show ? productSortArr : productArr)) */}
            {
                (show ? productSortArr : productArr).map((card, idx) =>
                    <div key={idx} className="flex items-center justify-between p-8 mb-6 bg-white rounded-lg shadow-md">
                        {/* Product Image */}
                        {/* <div className='w-52 h-32 rounded-md  overflow-hidden'>
                <img className='w-52 h-32 rounded-md' src={card?.product_image} alt="" />
            </div> */}
                        <div className={`w-52 h-32 rounded-md bg-center bg-cover bg-no-repeat object-cover`}
                            style={{ backgroundImage: `url(${card?.product_image})` }}
                        ></div>

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

                    </div>
                )
            }
        </div>
    )
}

export default Carts