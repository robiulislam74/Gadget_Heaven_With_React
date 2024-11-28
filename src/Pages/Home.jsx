import { Outlet, useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import Products from "../components/Products"
import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react"
import Product from "../components/Product"

const Home = () => {
  const categories = useLoaderData()

  return (
    <>
      <Banner/>
     <div>
     <h2 className="font-bold text-4xl mt-80 text-center mb-12">Explore Cutting-Edge Gadgets</h2>
     </div>
     <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Sidebar categories={categories}/>
      <Outlet/>
     </div>
    </>
  )
}

export default Home
