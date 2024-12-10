import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import Product from './Product'
import { Helmet } from 'react-helmet-async'

const Products = () => {
    const products = useLoaderData()
    const sliceProduct = products.slice(0,8)
    const {category} = useParams()
    const [filterProduct,setFilterProduct] = useState([])

    useEffect(()=>{
       if(category){
        const filterData = [...products].filter(product => product.category === category )
       setFilterProduct(filterData)
       }else{
        setFilterProduct(sliceProduct)
       }
    },[category])

  return (
    <div className='grid col-span-3 grid-cols-3 justify-between gap-6'>
      <Helmet>
        <title>{`Home | ${category ? category: "allProducts"}`}</title>
      </Helmet>
    {
        location.pathname === '/allProducts'
        ?
        products.map(product=> 
                <Product key={product.product_id}
                product={product}
                />)
        :
            filterProduct.map(product=> 
                <Product key={product.product_id}
                product={product}
                />)
    }
    {
      filterProduct.length == 0 &&
      <div className='grid col-span-3 justify-center items-center w-full h-full'>
        <h2 className='text-3xl text-gray-300 font-bold'>Not Found !</h2>
      </div>
      
    }
    {/* {
      filterProduct.map(product=> 
        <Product key={product.product_id}
        product={product}
        />)
    } */}
    </div>
  )
}

export default Products
