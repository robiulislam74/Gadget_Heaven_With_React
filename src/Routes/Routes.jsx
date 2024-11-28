import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Products from "../components/Products";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../components/ProductDetails";


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
                path: '/dashboard',
                element:<Dashboard/>
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