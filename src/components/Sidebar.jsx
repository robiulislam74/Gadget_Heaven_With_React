import { Helmet } from 'react-helmet-async'
import SidebarButton from './SidebarButton'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = ({ categories }) => {
  const navigate = useNavigate()
  return (
    <div className='bg-white p-6 space-y-6 rounded-2xl'>
      <NavLink to={'/allProducts'}
        onClick={() => navigate('/allProducts')}
        className={({ isActive }) => `btn w-full rounded-full text-lg font-medium text-gray-500 ${isActive ? "bg-bannerBg text-lg font-extrabold text-white" : ""}`}
      >
        {/* <SidebarButton name={'All Product'}/> */}
        <button>All Product</button>
      </NavLink>
      {
        categories.map(category =>
          <NavLink
            key={category.category}
            to={`/products/${category.category}`}
            className={({ isActive }) => `btn w-full rounded-full text-lg font-medium text-gray-500 ${isActive ? "bg-bannerBg text-lg font-extrabold text-white" : ""}`}
          >
            {/* <SidebarButton name={category.category}/> */}
            <button>{category.category}</button>
          </NavLink>
        )
      }
    </div>
  )
}

export default Sidebar
