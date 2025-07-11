import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

function Productpage({ products }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product)
    return <div className="p-10 text-red-500 text-6xl">Product not found!</div>;
  return (
    <div>
      <div className="ml-8 mt-6">
        <button
          onClick={() => navigate("/")}
          className="bg-white rounded-md h-10 w-10 p-2 pl-3 shadow-md"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row p-10 min-h-screen bg-white gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded mb-6"
          />
          <p className="text-xl text-gray-700">Price: ${product.price}</p>
          <p className="text-xl text-gray-700">
            Available Quantity: {product.quantity}
          </p>
        </div>
        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-xs text-gray-500 mt-4">Product</p>
          <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
            🚚 Delivery fee
            <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">
              ₦1,500
            </span>
          </div>

          <h3 className="text-xl">{product.name}</h3>

          <div className="flex flex-wrap items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
            <span className="p-1 ml-2 border rounded-md font-bold">2.4</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium">
              Price:
              <span className="text-lg border border-gray-300 p-1 ml-1 rounded">
                ${product.price}
              </span>
            </div>
            <span className="font-bold text-lg text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <span>{product.quantity}</span>
              </div>
            </div>
          </div>
          
          <div>
            <span>Description:</span>
            <div>
              <span>{product.description}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="py-2 w-full sm:w-7/12 border border-black rounded-md text-black font-medium">
              Buy Now
            </button>
            <button className="py-3 bg-black text-white rounded-md font-medium w-full sm:w-7/12">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
