import { useLoaderData, useParams } from "react-router-dom"
import Heading from "./Heading"
import { useEffect, useState } from "react"
import { BiSolidStarHalf } from "react-icons/bi";
import { SlStar } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { saveToLocalStr } from "../LocalStorage/LocalStorage";

const ProductDetails = () => {
  const products = useLoaderData()
  const { productId } = useParams()
  const [findOneProduct, setFindOneProduct] = useState([])
  const [cart,setCart] = useState([])
  const { product_id, product_title, product_image, category, price, description, specification, rating } = findOneProduct;

  useEffect(() => {
    const findByProduct = [...products].find(product => product.product_id === productId)
    setFindOneProduct(findByProduct)
  }, [products, product_id])

  const handleAddToCart =(product_id)=>{
    const newCart = [...cart,product_id]
    setCart(newCart)
    saveToLocalStr(product_id)

  }

  return (
    <>
    <div className="relative">
      <div className="bg-bannerBg pb-48 mb-[calc(100vh-100px)]">
        <Heading
          title={'Product Details'}
          subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
        />
      </div>
        <div className="hero max-w-screen-2xl mx-auto rounded-2xl absolute top-36 flex justify-center">
          <div className="hero-content flex-col lg:flex-row rounded-2xl p-6 bg-white space-x-4 shadow-sm">
            <img
              src={product_image}
              className="max-w-sm rounded-lg shadow-2xl h-[480px]" />
            <div>
              <h2 className="text-3xl font-semibold">{product_title}</h2>
              <p className="font-semibold text-xl text-gray-700 my-3">Price: {price}</p>
              <button className="btn btn-sm border-1 rounded-full text-lime-600 border-lime-600 bg-lime-100">In Stock</button>
              <p className="py-6 text-gray-500">{description}</p>
              <p className="text-lg font-bold">Specification:</p>
              <ul className="list-decimal ml-6 text-gray-500 text-lg my-3">
                {
                  specification?.map(details =>
                    <li>{details}</li>
                  )
                }
              </ul>
              <div className="flex gap-2 items-center">
                <p className="text-lg font-bold">Rating: </p>
                <span className="text-2xl text-yellow-500"><BiSolidStarHalf /></span>
              </div>
              <div className="rating flex items-center gap-2 my-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                {/* <input type="radio" name="rating-9" className="mask mask-star-2" /> */}
                <span className="text-[22px] text-gray-500"><SlStar /></span>
                <button className="px-4 py-1 font-medium bg-gray-200 rounded-full border-none">{rating}</button>
              </div>
              <div className="flex items-center gap-4">
              <button onClick={()=>handleAddToCart(product_id)} className="btn bg-bannerBg border-none text-lg font-bold text-white">Add To Card <span className="text-2xl"><BsCart3 /></span></button>
              <div className='p-3 border border-gray-500 inline-block bg-white rounded-full text-2xl'>
                <GiSelfLove />
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>       
    </>
  )
}

export default ProductDetails
