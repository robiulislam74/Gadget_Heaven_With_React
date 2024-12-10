import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import { Helmet, HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={routes}/>
    </HelmetProvider>
  </StrictMode>,
)
