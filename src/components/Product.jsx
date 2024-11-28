import { Link} from "react-router-dom";

const Product = ({product}) => {
    const {product_id,product_image,product_title,price} = product;
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="h-[180px]">
        <img className="h-full w-full rounded-xl" src={product_image} alt="" />
      </div>
      <h3 className="mb-2 font-semibold text-xl mt-6">{product_title}</h3>
      <p className="text-lg font-medium text-gray-500 mb-2">Price: {price} k</p>
      <Link to={`/product/${product_id}`}>
      <button className="btn btn-outline btn-primary rounded-full">View Details</button>
      </Link>
    </div>
  )
}

export default Product
