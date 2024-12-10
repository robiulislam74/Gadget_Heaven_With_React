import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Products from "../components/Products";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../components/ProductDetails";
import Carts from "../components/Carts";
import WishList from "../components/WishList";
import Blogs from "../Pages/Blogs";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element:<Home/>,
                loader: ()=> fetch("../Categories.json"),
                children:[
                    {
                        path: '/',
                        element: <Products/>,
                        loader: ()=> fetch("../Products_All_Data.json")
                    },
                    {
                        path: '/allProducts',
                        element: <Products/>,
                        loader: ()=> fetch("../Products_All_Data.json")
                    },
                    {
                        path: '/products/:category',
                        element: <Products/>,
                        loader: ()=> fetch("../Products_All_Data.json")
                    },
                    
                ]
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/dashboard',
                element:<Dashboard/>,
                children:[
                    {
                        path: '/dashboard',
                        element: <Carts/>,
                        // loader: ()=> fetch("../Products_All_Data.json")
                    },
                    {
                        path: '/dashboard/carts',
                        element: <Carts/>,
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <WishList/>
                    }
                ]
            },
            {
                path: '/product/:productId',
                element:<ProductDetails/>,
                loader: ()=> fetch("../Products_All_Data.json")
            },
        ]
    }
])

export default routes