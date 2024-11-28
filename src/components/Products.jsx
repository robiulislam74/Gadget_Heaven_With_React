import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import Product from './Product'

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
